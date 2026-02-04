// hooks/useRecordingManager.ts
import { useRef, useEffect, useCallback, useMemo } from 'react';
import { useRecordingStore } from '../../src/lib/store/useRecordingStore';

export const useRecordingManager = () => {
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const timerIntervalRef = useRef<number | null>(null);
    const webcamVideoRef = useRef<HTMLVideoElement>(null);
    const chunksRef = useRef<Blob[]>([]);

    const {
        state,
        elapsedTime,
        micEnabled,
        webcamEnabled,
        systemAudioEnabled,
        chunks,
        setState,
        incrementTime,
        setChunks,
        reset: resetStore,
    } = useRecordingStore();

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            stopTimer();
            stopAllTracks();
        };
    }, []);

    const stopTimer = useCallback(() => {
        if (timerIntervalRef.current) {
            clearInterval(timerIntervalRef.current);
            timerIntervalRef.current = null;
        }
    }, []);

    const startTimer = useCallback(() => {
        stopTimer();
        timerIntervalRef.current = setInterval(() => {
            incrementTime();
        }, 1000);
    }, [incrementTime, stopTimer]);

    const stopAllTracks = useCallback(() => {
        // Stop media recorder stream
        if (mediaRecorderRef.current?.stream) {
            mediaRecorderRef.current.stream.getTracks().forEach((track) => track.stop());
        }

        // Stop webcam
        if (webcamVideoRef.current?.srcObject) {
            const webcamStream = webcamVideoRef.current.srcObject as MediaStream;
            webcamStream.getTracks().forEach((track) => track.stop());
            webcamVideoRef.current.srcObject = null;
        }
    }, []);

    const startWebcam = useCallback(async () => {
        if (!webcamEnabled || !webcamVideoRef.current) return;

        try {
            const webcamStream = await navigator.mediaDevices.getUserMedia({ video: true });
            webcamVideoRef.current.srcObject = webcamStream;
            await webcamVideoRef.current.play();
        } catch (err) {
            console.error('Webcam access denied:', err);
        }
    }, [webcamEnabled]);

    const createCombinedStream = useCallback(async () => {
        // Request screen capture
        const screenStream = await navigator.mediaDevices.getDisplayMedia({
            video: { mediaSource: 'screen' } as any,
            audio: systemAudioEnabled,
        });

        const tracks: MediaStreamTrack[] = [...screenStream.getVideoTracks()];

        // Add system audio
        if (systemAudioEnabled) {
            tracks.push(...screenStream.getAudioTracks());
        }

        // Add microphone
        if (micEnabled) {
            try {
                const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
                tracks.push(...audioStream.getAudioTracks());
            } catch (err) {
                console.error('Microphone access denied:', err);
            }
        }

        return new MediaStream(tracks);
    }, [micEnabled, systemAudioEnabled]);

    const startRecording = useCallback(async () => {
        try {
            chunksRef.current = [];

            const combinedStream = await createCombinedStream();
            await startWebcam();

            const mediaRecorder = new MediaRecorder(combinedStream, {
                mimeType: 'video/webm;codecs=vp9',
            });

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    chunksRef.current.push(event.data);
                }
            };

            mediaRecorder.onstop = () => {
                setChunks(chunksRef.current);
                setState('stopped');
                stopTimer();
            };

            mediaRecorder.start();
            mediaRecorderRef.current = mediaRecorder;

            setState('recording');
            startTimer();
        } catch (err) {
            console.error('Error starting recording:', err);
            alert('Failed to start recording. Please ensure you grant the necessary permissions.');
        }
    }, [createCombinedStream, startWebcam, setState, setChunks, startTimer, stopTimer]);

    const pauseRecording = useCallback(() => {
        if (mediaRecorderRef.current && state === 'recording') {
            mediaRecorderRef.current.pause();
            setState('paused');
            stopTimer();
        }
    }, [state, setState, stopTimer]);

    const resumeRecording = useCallback(() => {
        if (mediaRecorderRef.current && state === 'paused') {
            mediaRecorderRef.current.resume();
            setState('recording');
            startTimer();
        }
    }, [state, setState, startTimer]);

    const stopRecording = useCallback(() => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            stopAllTracks();
        }
    }, [stopAllTracks]);

    const reset = useCallback(() => {
        stopTimer();
        stopAllTracks();
        mediaRecorderRef.current = null;
        chunksRef.current = [];
        resetStore();
    }, [stopTimer, stopAllTracks, resetStore]);

    // High-performance formatTime with useMemo to prevent unnecessary recalculations
    const formattedTime = useMemo(() => {
        const hours = Math.floor(elapsedTime / 3600);
        const minutes = Math.floor((elapsedTime % 3600) / 60);
        const secs = elapsedTime % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, [elapsedTime]);

    // High-performance formatTime function (memoized)
    const formatTime = useCallback((seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, []);

    // High-performance downloadRecording with useCallback to prevent recreation
    const downloadRecording = useCallback(() => {
        if (chunks.length === 0) {
            console.warn('No recording chunks available to download');
            return;
        }

        try {
            const blob = new Blob(chunks, { type: 'video/webm' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `screen-recording-${Date.now()}.webm`;
            
            // Trigger download
            document.body.appendChild(a);
            a.click();
            
            // Cleanup
            document.body.removeChild(a);
            
            // Revoke URL after a short delay to ensure download starts
            setTimeout(() => {
                URL.revokeObjectURL(url);
            }, 100);
        } catch (err) {
            console.error('Error downloading recording:', err);
            alert('Failed to download recording. Please try again.');
        }
    }, [chunks]);

    return {
        webcamVideoRef,
        startRecording,
        pauseRecording,
        resumeRecording,
        stopRecording,
        reset,
        formatTime,
        formattedTime,
        downloadRecording,
    };
};