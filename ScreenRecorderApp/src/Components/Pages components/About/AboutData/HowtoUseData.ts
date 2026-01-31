export interface StepCardProps {
    number: string;
    title: string;
    description: string;
    tips: string[];
    color: string;
}

export const StepCardData: StepCardProps[] = [
    {
        number: "01",
        title: "Configure Settings",
        description: "Choose your audio and video sources. Enable or disable microphone, system audio, and webcam based on your needs.",
        tips: [
            'Test your microphone before recording',
            'Ensure system audio is enabled for game/app recordings',
            'Position your webcam for the best angle',
        ],
        color: "from-blue-500 to-cyan-500",
    },
    {
        number: "02",
        title: "Start Recording",
        description: "Click the 'Start Recording' button and select which window, tab, or entire screen you want to capture.",
        tips: [
            'Choose specific windows for focused content',
            'Select entire screen for multi-window demonstrations',
            'Check preview before starting',
        ],
        color: "from-purple-500 to-pink-500",
    },
    {
        number: "03",
        title: "Record Your Content",
        description: "Create your content while the timer keeps track. Use pause/resume to take breaks without stopping the recording.",
        tips: [
            'Speak clearly when using microphone',
            'Use pause for transitions or breaks',
            'Monitor the timer to track duration',
        ],
        color: "from-emerald-500 to-teal-500",
    },
    {
        number: "04",
        title: "Download & Share",
        description: "When finished, click stop and download your recording in high-quality WebM format. Share it anywhere you need!",
        tips: [
            'Recordings are saved in WebM format',
            'Files stay on your device',
            'Upload to YouTube, Vimeo, or any platform',
        ],
        color: "from-amber-500 to-orange-500",
    },
];