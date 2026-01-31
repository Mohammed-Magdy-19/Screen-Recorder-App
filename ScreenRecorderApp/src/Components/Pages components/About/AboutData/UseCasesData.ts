export interface UseCaseCardProps {
    title: string;
    items: string[];
    gradient: string;
}

export const UseCaseCardData: UseCaseCardProps[] = [
    {
        title: "Content Creators",
        items: [
            'YouTube tutorials and walkthroughs',
            'Gaming highlights and gameplay',
            'Software reviews and demos',
            'How-to videos and guides',
        ],
        gradient: "from-red-500 to-pink-600",
    },
    {
        title: "Educators",
        items: [
            'Online course creation',
            'Lecture recordings',
            'Student presentations',
            'Educational tutorials',
        ],
        gradient: "from-blue-500 to-cyan-600",
    },
    {
        title: "Professionals",
        items: [
            'Sales presentations and demos',
            'Training materials',
            'Bug reports with video proof',
            'Client presentations',
        ],
        gradient: "from-purple-500 to-indigo-600",
    },
    {
        title: "Developers",
        items: [
            'Code walkthroughs',
            'Feature demonstrations',
            'Bug reproduction videos',
            'Tutorial content',
        ],
        gradient: "from-emerald-500 to-teal-600",
    },
];