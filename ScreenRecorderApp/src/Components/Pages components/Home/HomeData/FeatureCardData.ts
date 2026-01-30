import React from "react";
import { 
    Video, 
    Mic, 
    MonitorPlay, 
    Timer, 
    PauseCircle, 
    Play 
} from "lucide-react";

export interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    gradient: string;
    delay: string;
}

export const FeatureCardData: FeatureCardProps[] = [
    {
        icon: React.createElement(Video, { className: "w-10 h-10" }),
        title: "Screen Recording",
        description: "Capture your entire screen or specific windows with crystal clear quality",
        gradient: "from-indigo-500 via-indigo-600 to-purple-600",
        delay: "0",
    },
    {
        icon: React.createElement(Mic, { className: "w-10 h-10" }),
        title: "Microphone Audio",
        description: "Record your voice commentary with high-quality audio capture",
        gradient: "from-purple-500 via-purple-600 to-pink-600",
        delay: "100",
    },
    {
        icon: React.createElement(MonitorPlay, { className: "w-10 h-10" }),
        title: "Webcam Recording",
        description: "Include your webcam feed to add a personal touch to your recordings",
        gradient: "from-pink-500 via-pink-600 to-rose-600",
        delay: "200",
    },
    {
        icon: React.createElement(Timer, { className: "w-10 h-10" }),
        title: "Recording Timer",
        description: "Keep track of your recording duration with a live timer display",
        gradient: "from-amber-500 via-orange-500 to-red-500",
        delay: "300",
    },
    {
        icon: React.createElement(PauseCircle, { className: "w-10 h-10" }),
        title: "Pause & Resume",
        description: "Take breaks during recording and resume exactly where you left off",
        gradient: "from-emerald-500 via-teal-500 to-cyan-500",
        delay: "400",
    },
    {
        icon: React.createElement(Play, { className: "w-10 h-10" }),
        title: "Easy Export",
        description: "Download your recordings instantly in high-quality video format",
        gradient: "from-blue-500 via-indigo-500 to-purple-500",
        delay: "500",
    },
];