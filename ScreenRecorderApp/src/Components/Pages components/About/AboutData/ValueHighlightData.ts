import React from "react";
import { Award, TrendingUp, Globe2 } from "lucide-react";

export interface ValueHighlightProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export const ValueHighlightData: ValueHighlightProps[] = [
    {
        icon: React.createElement(Award, { className: "w-8 h-8 text-rose-600" }),
        title: "Excellence",
        description: "We're committed to delivering the best recording experience",
    },
    {
        icon: React.createElement(TrendingUp, { className: "w-8 h-8 text-purple-600" }),
        title: "Innovation",
        description: "Constantly evolving with the latest web technologies",
    },
    {
        icon: React.createElement(Globe2, { className: "w-8 h-8 text-blue-600" }),
        title: "Accessibility",
        description: "Making professional tools available to everyone",
    },
];