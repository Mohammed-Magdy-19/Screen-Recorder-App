// config/ToggleButtonConfigs.ts
import { Mic, MicOff, Volume2, VolumeX, Video, VideoOff } from 'lucide-react';

export interface ToggleButtonConfig {
    id: string;
    label: string;
    iconEnabled: typeof Mic;
    iconDisabled: typeof MicOff;
    color: string;
    storeKey: 'micEnabled' | 'webcamEnabled' | 'systemAudioEnabled';
}

export const toggleButtonConfigs: ToggleButtonConfig[] = [
    {
        id: 'microphone',
        label: 'Microphone',
        iconEnabled: Mic,
        iconDisabled: MicOff,
        color: 'from-blue-500 to-blue-600',
        storeKey: 'micEnabled',
    },
    {
        id: 'system-audio',
        label: 'System Audio',
        iconEnabled: Volume2,
        iconDisabled: VolumeX,
        color: 'from-purple-500 to-purple-600',
        storeKey: 'systemAudioEnabled',
    },
    {
        id: 'webcam',
        label: 'Webcam',
        iconEnabled: Video,
        iconDisabled: VideoOff,
        color: 'from-pink-500 to-pink-600',
        storeKey: 'webcamEnabled',
    },
];