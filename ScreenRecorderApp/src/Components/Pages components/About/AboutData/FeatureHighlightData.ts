import React from "react";
import { Zap, Video, Shield, Users, Sparkles, Globe2 } from "lucide-react";

export interface FeatureHighlightProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    accentColor: string;
    bgColor: string;
}

export const FeatureHighlightData: FeatureHighlightProps[] = [
    {
        icon: React.createElement(Zap, { className: "w-8 h-8" }),
        title: "Lightning Fast",
        description: "Start recording instantly without any setup or configuration",
        accentColor: "text-amber-600",
        bgColor: "bg-amber-50",
    },
    {
        icon: React.createElement(Video, { className: "w-8 h-8" }),
        title: "High Quality",
        description: "Record in crystal clear quality with professional-grade output",
        accentColor: "text-blue-600",
        bgColor: "bg-blue-50",
    },
    {
        icon: React.createElement(Shield, { className: "w-8 h-8" }),
        title: "Privacy First",
        description: "Your recordings stay on your device. We never store your data",
        accentColor: "text-green-600",
        bgColor: "bg-green-50",
    },
    {
        icon: React.createElement(Users, { className: "w-8 h-8" }),
        title: "User Friendly",
        description: "Intuitive interface designed for users of all skill levels",
        accentColor: "text-pink-600",
        bgColor: "bg-pink-50",
    },
    {
        icon: React.createElement(Sparkles, { className: "w-8 h-8" }),
        title: "No Limits",
        description: "Record as much as you want, no restrictions or watermarks",
        accentColor: "text-purple-600",
        bgColor: "bg-purple-50",
    },
    {
        icon: React.createElement(Globe2, { className: "w-8 h-8" }),
        title: "Multi-Source",
        description: "Capture screen, webcam, and audio all at once",
        accentColor: "text-indigo-600",
        bgColor: "bg-indigo-50",
    },
];