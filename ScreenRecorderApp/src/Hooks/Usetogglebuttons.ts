// hooks/useToggleButtons.ts
import { toggleButtonConfigs, type ToggleButtonConfig } from '@/Components/Pages components/Recorder/RecorData/Toggleconfig';
import { useRecordingStore } from '@/lib/store/useRecordingStore';


interface ToggleButtonData extends ToggleButtonConfig {
    isEnabled: boolean;
    onToggle: () => void;
}

export const useToggleButtons = () => {
    const { 
        state,
        micEnabled, 
        webcamEnabled, 
        systemAudioEnabled,
        setMicEnabled,
        setWebcamEnabled,
        setSystemAudioEnabled
    } = useRecordingStore();

    // Map store keys to their setter functions
    const setterMap = {
        micEnabled: setMicEnabled,
        webcamEnabled: setWebcamEnabled,
        systemAudioEnabled: setSystemAudioEnabled,
    };

    // Map store keys to their current values
    const valueMap = {
        micEnabled,
        webcamEnabled,
        systemAudioEnabled,
    };

    // Transform configs into ready-to-use data with current state
    const toggleButtons: ToggleButtonData[] = toggleButtonConfigs.map((config) => ({
        ...config,
        isEnabled: valueMap[config.storeKey],
        onToggle: () => {
            const currentValue = valueMap[config.storeKey];
            setterMap[config.storeKey](!currentValue);
        },
    }));

    return {
        toggleButtons,
        isDisabled: state !== 'idle',
    };
};