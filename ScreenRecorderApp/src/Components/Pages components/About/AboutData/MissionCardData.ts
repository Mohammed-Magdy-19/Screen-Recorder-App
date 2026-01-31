import React from "react";
import { Target, Users } from "lucide-react";

export interface MissionCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    gradient: string;
}

export const MissionCardData: MissionCardProps[] = [
    {
        icon: React.createElement(Target, { className: "w-12 h-12" }),
        title: "Our Mission",
        description: "To democratize screen recording by making it accessible, simple, and free for everyone, everywhere.",
        gradient: "from-rose-500 via-pink-500 to-purple-600",
    },
    {
        icon: React.createElement(Users, { className: "w-12 h-12" }),
        title: "Our Community",
        description: "We're building a community of creators, educators, and innovators who value simplicity and quality.",
        gradient: "from-purple-500 via-indigo-500 to-blue-600",
    },
];