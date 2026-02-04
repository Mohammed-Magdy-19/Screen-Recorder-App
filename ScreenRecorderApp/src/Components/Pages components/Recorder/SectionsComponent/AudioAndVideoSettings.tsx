// components/AudioAndVideoSettings.tsx
import { useToggleButtons } from "@/Hooks/Usetogglebuttons";

interface ToggleButtonProps {
    icon: React.ReactNode;
    label: string;
    enabled: boolean;
    onClick: () => void;
    disabled: boolean;
    color: string;
}

function ToggleButton({ icon, label, enabled, onClick, disabled, color }: ToggleButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all ${
                disabled
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : enabled
                    ? `bg-gradient-to-r ${color} text-white shadow-lg hover:shadow-xl transform hover:scale-105`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
            {icon}
            <span>{label}</span>
            {!disabled && (
                <span className={`text-xs ${enabled ? 'text-white/80' : 'text-gray-500'}`}>
                    {enabled ? 'ON' : 'OFF'}
                </span>
            )}
        </button>
    );
}

export const AudioAndVideoSettings = () => {
    const { toggleButtons, isDisabled } = useToggleButtons();

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {toggleButtons.map((button) => {
                const Icon = button.isEnabled ? button.iconEnabled : button.iconDisabled;

                return (
                    <ToggleButton
                        key={button.id}
                        icon={<Icon className="w-5 h-5" />}
                        label={button.label}
                        enabled={button.isEnabled}
                        onClick={button.onToggle}
                        disabled={isDisabled}
                        color={button.color}
                    />
                );
            })}
        </div>
    );
};