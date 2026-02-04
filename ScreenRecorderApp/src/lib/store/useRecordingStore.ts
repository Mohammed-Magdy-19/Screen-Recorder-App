// store/useRecordingStore.ts
import { create } from 'zustand';

type RecordingState = 'idle' | 'recording' | 'paused' | 'stopped';

interface RecordingSettings {
    micEnabled: boolean;
    webcamEnabled: boolean;
    systemAudioEnabled: boolean;
}

interface RecordingStore extends RecordingSettings {
    state: RecordingState;
    elapsedTime: number;
    chunks: Blob[];

    // Actions
    setMicEnabled: (enabled: boolean) => void;
    setWebcamEnabled: (enabled: boolean) => void;
    setSystemAudioEnabled: (enabled: boolean) => void;
    incrementTime: () => void;
    addChunk: (chunk: Blob) => void;
    setState: (state: RecordingState) => void;
    setChunks: (chunks: Blob[]) => void;
    reset: () => void;
}

export const useRecordingStore = create<RecordingStore>((set) => ({
    // Initial state
    state: 'idle',
    elapsedTime: 0,
    chunks: [],
    micEnabled: false,
    webcamEnabled: false,
    systemAudioEnabled: true,

    // Actions
    setMicEnabled: (enabled) => set({ micEnabled: enabled }),
    setWebcamEnabled: (enabled) => set({ webcamEnabled: enabled }),
    setSystemAudioEnabled: (enabled) => set({ systemAudioEnabled: enabled }),
    incrementTime: () => set((state) => ({ elapsedTime: state.elapsedTime + 1 })),
    addChunk: (chunk) => set((state) => ({ chunks: [...state.chunks, chunk] })),
    setState: (state) => set({ state }),
    setChunks: (chunks) => set({ chunks }),
    reset: () => set({
        state: 'idle',
        elapsedTime: 0,
        chunks: []
    }),
}));