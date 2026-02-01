import React from "react";
import { Mail, MessageSquare, Phone } from "lucide-react";

export interface ContactCardProps {
    icon: React.ReactNode;
    title: string;
    content: string;
    gradient: string;
    bgColor: string;
}

export const ContactCardData: ContactCardProps[] = [
    {
        icon: React.createElement(Mail, { className: "w-10 h-10" }),
        title: "Email Us",
        content: "support@screenrec.com",
        gradient: "from-blue-500 to-cyan-600",
        bgColor: "bg-blue-50",
    },
    {
        icon: React.createElement(MessageSquare, { className: "w-10 h-10" }),
        title: "Live Chat",
        content: "Available Mon-Fri, 9AM-6PM EST",
        gradient: "from-purple-500 to-pink-600",
        bgColor: "bg-purple-50",
    },
    {
        icon: React.createElement(Phone, { className: "w-10 h-10" }),
        title: "Call Us",
        content: "+1 (555) 123-4567",
        gradient: "from-emerald-500 to-teal-600",
        bgColor: "bg-emerald-50",
    },
];