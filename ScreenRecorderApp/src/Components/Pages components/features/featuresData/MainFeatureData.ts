import React from "react";
import { 
    Video, 
    Mic, 
    MonitorPlay, 
    Timer, 
    PauseCircle 
} from "lucide-react";

export interface MainFeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
    borderColor: string;
}

export const MainFeatureCardData: MainFeatureCardProps[] = [
    {
        icon: React.createElement(Video, { className: "w-12 h-12" }),
        title: "Screen Recording",
        description: "Capture your entire screen, specific windows, or browser tabs with crystal clear quality. Perfect for tutorials, presentations, and demonstrations.",
        color: "bg-gradient-to-br from-blue-500 to-cyan-600",
        borderColor: "border-blue-200",
    },
    {
        icon: React.createElement(Mic, { className: "w-12 h-12" }),
        title: "Microphone Audio",
        description: "Record your voice commentary with high-quality audio capture. Great for narrations, voiceovers, and explanations.",
        color: "bg-gradient-to-br from-purple-500 to-pink-600",
        borderColor: "border-purple-200",
    },
    {
        icon: React.createElement(MonitorPlay, { className: "w-12 h-12" }),
        title: "System Audio",
        description: "Capture system sounds, application audio, and everything happening on your computer for complete recordings.",
        color: "bg-gradient-to-br from-rose-500 to-orange-600",
        borderColor: "border-rose-200",
    },
    {
        icon: React.createElement(Video, { className: "w-12 h-12" }),
        title: "Webcam Recording",
        description: "Add a personal touch by including your webcam feed. Perfect for creating engaging video content and tutorials.",
        color: "bg-gradient-to-br from-emerald-500 to-teal-600",
        borderColor: "border-emerald-200",
    },
    {
        icon: React.createElement(Timer, { className: "w-12 h-12" }),
        title: "Recording Timer",
        description: "Keep track of your recording duration with a live timer display. Know exactly how long you've been recording.",
        color: "bg-gradient-to-br from-amber-500 to-yellow-600",
        borderColor: "border-amber-200",
    },
    {
        icon: React.createElement(PauseCircle, { className: "w-12 h-12" }),
        title: "Pause & Resume",
        description: "Take breaks during recording without stopping completely. Resume exactly where you left off when you're ready.",
        color: "bg-gradient-to-br from-indigo-500 to-purple-600",
        borderColor: "border-indigo-200",
    },
];