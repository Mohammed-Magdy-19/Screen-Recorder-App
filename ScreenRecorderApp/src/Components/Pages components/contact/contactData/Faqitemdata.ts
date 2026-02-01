export interface FAQItemProps {
    question: string;
    answer: string;
}

export const FAQItemData: FAQItemProps[] = [
    {
        question: "How do I start recording?",
        answer: "Simply navigate to the Recorder page, configure your audio/video settings, and click the 'Start Recording' button. Then select the window or screen you want to record.",
    },
    {
        question: "Is there a recording time limit?",
        answer: "No! You can record for as long as you need. The only limit is your device's available storage space.",
    },
    {
        question: "What video format is supported?",
        answer: "Your recordings are saved in WebM format, which provides excellent quality and is widely supported by modern video players and editing software.",
    },
    {
        question: "Can I edit my recordings?",
        answer: "While ScreenRec focuses on recording, you can download your videos and use your favorite video editing software to edit them.",
    },
    {
        question: "Is my data safe?",
        answer: "Absolutely! All recording happens locally in your browser. We never upload or store your recordings on our servers.",
    },
    {
        question: "Which browsers are supported?",
        answer: "ScreenRec works best on modern browsers like Chrome, Edge, Firefox, and Safari that support the MediaRecorder API.",
    },
];