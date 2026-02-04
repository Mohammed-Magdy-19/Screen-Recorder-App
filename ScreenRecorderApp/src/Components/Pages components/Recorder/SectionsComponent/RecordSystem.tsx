import { Circle, Square, Download, Pause, Play } from 'lucide-react';
import { useRecordingStore } from '@/lib/store/useRecordingStore';
import { useRecordingManager } from '@/Hooks/useRecordingManager';
import ErrorBoundary from '@/Components/Error Boundary/ErrorBoundary';
import { AudioAndVideoSettings } from './AudioAndVideoSettings';

const RecordSystem = () => {
    const {
        webcamVideoRef,
        startRecording,
        pauseRecording,
        resumeRecording,
        stopRecording,
        reset,
        formattedTime,
        downloadRecording,
    } = useRecordingManager();

    const { state, webcamEnabled } = useRecordingStore();

    return (
        <section>
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-linear-to-r from-red-500/10 to-pink-500/10 backdrop-blur-sm border border-red-200 rounded-full px-5 py-2 mb-6">
                    <Circle className="w-4 h-4 text-red-600" fill="currentColor" />
                    <span className="text-sm font-semibold text-red-700" style={{ fontFamily: 'var(--font-accent)' }}>
                        RECORD MODE
                    </span>
                </div>
                <h1
                    className="text-5xl sm:text-6xl font-black mb-4"
                    style={{ fontFamily: 'var(--font-display)' }}
                >
                    <span className="bg-linear-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                        Screen Recorder
                    </span>
                </h1>
                <p
                    className="text-xl text-gray-600"
                    style={{ fontFamily: 'var(--font-body)' }}
                >
                    Record your screen with professional quality
                </p>
            </div>

            {/* Main Recorder Card */}
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 border-2 border-red-200">
                <div className="absolute inset-0 bg-linear-to-br from-red-500 to-purple-600 rounded-3xl opacity-5"></div>

                <div className="relative">
                    {/* Timer Display */}
                    <div className="text-center mb-8">
                        <div
                            className="inline-flex items-center gap-4 bg-linear-to-r from-red-500 via-pink-500 to-purple-500 text-white px-12 py-6 rounded-2xl text-4xl font-black shadow-xl"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            {state === 'recording' && (
                                <Circle className="w-8 h-8 fill-white text-white animate-pulse" />
                            )}
                            {state === 'paused' && (
                                <Pause className="w-8 h-8 text-white" />
                            )}
                            {formattedTime}
                        </div>
                    </div>

                    {/* Webcam Preview */}
                    {webcamEnabled && (
                        <div className="mb-8 flex justify-center">
                            <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-purple-300">
                                <video
                                    ref={webcamVideoRef}
                                    className="w-64 h-48 object-cover bg-gray-900"
                                    muted
                                />
                                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                    LIVE
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Recording Controls */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {state === 'idle' && (
                            <button
                                onClick={startRecording}
                                className="flex items-center gap-2 bg-linear-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all shadow-lg"
                            >
                                <Circle className="w-6 h-6 fill-current" />
                                Start Recording
                            </button>
                        )}

                        {state === 'recording' && (
                            <>
                                <button
                                    onClick={pauseRecording}
                                    className="flex items-center gap-2 bg-linear-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all shadow-lg"
                                >
                                    <Pause className="w-6 h-6" />
                                    Pause
                                </button>
                                <button
                                    onClick={stopRecording}
                                    className="flex items-center gap-2 bg-linear-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:from-gray-800 hover:to-gray-900 transform hover:scale-105 transition-all shadow-lg"
                                >
                                    <Square className="w-6 h-6 fill-current" />
                                    Stop
                                </button>
                            </>
                        )}

                        {state === 'paused' && (
                            <>
                                <button
                                    onClick={resumeRecording}
                                    className="flex items-center gap-2 bg-linear-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all shadow-lg"
                                >
                                    <Play className="w-6 h-6" />
                                    Resume
                                </button>
                                <button
                                    onClick={stopRecording}
                                    className="flex items-center gap-2 bg-linear-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:from-gray-800 hover:to-gray-900 transform hover:scale-105 transition-all shadow-lg"
                                >
                                    <Square className="w-6 h-6 fill-current" />
                                    Stop
                                </button>
                            </>
                        )}

                        {state === 'stopped' && (
                            <>
                                <button
                                    onClick={downloadRecording}
                                    className="flex items-center gap-2 bg-linear-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition-all shadow-lg"
                                >
                                    <Download className="w-6 h-6" />
                                    Download Video
                                </button>
                                <button
                                    onClick={reset}
                                    className="flex items-center gap-2 bg-linear-to-r from-gray-500 to-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:from-gray-600 hover:to-gray-700 transform hover:scale-105 transition-all shadow-lg"
                                >
                                    New Recording
                                </button>
                            </>
                        )}
                    </div>

                    {/* Audio/Video Settings */}
                    <ErrorBoundary>
                        <AudioAndVideoSettings />
                    </ErrorBoundary>
                </div>
            </div>
        </section>
    );
};

export default RecordSystem