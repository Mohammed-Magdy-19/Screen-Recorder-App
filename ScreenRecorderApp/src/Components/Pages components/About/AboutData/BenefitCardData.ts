import React from "react";
import {
    Zap,
    Shield,
    Globe,
    Download,
    Settings,
    Video
} from "lucide-react";

export interface BenefitCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    iconBg: string;
}

export const BenefitCardData: BenefitCardProps[] = [
    {
        icon: React.createElement(Zap, { className: "w-10 h-10 text-amber-600" }),
        title: "No Installation",
        description: "Works directly in your browser—no downloads or installations required",
        iconBg: "bg-amber-100",
    },
    {
        icon: React.createElement(Shield, { className: "w-10 h-10 text-green-600" }),
        title: "100% Private",
        description: "All recordings happen locally. We never store your data",
        iconBg: "bg-green-100",
    },
    {
        icon: React.createElement(Globe, { className: "w-10 h-10 text-blue-600" }),
        title: "Cross-Platform",
        description: "Works on Windows, Mac, Linux, and Chromebooks",
        iconBg: "bg-blue-100",
    },
    {
        icon: React.createElement(Download, { className: "w-10 h-10 text-purple-600" }),
        title: "Easy Export",
        description: "Download your recordings instantly with one click",
        iconBg: "bg-purple-100",
    },
    {
        icon: React.createElement(Settings, { className: "w-10 h-10 text-indigo-600" }),
        title: "Flexible Settings",
        description: "Customize audio and video sources to fit your needs",
        iconBg: "bg-indigo-100",
    },
    {
        icon: React.createElement(Video, { className: "w-10 h-10 text-pink-600" }),
        title: "High Quality",
        description: "Record in professional quality with excellent compression",
        iconBg: "bg-pink-100",
    },
];