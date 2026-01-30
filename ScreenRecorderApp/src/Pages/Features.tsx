import { Video, Mic, MonitorPlay, Timer, PauseCircle, Download, Settings, Zap, Shield, Globe, CheckCircle2, Star } from 'lucide-react';


export default function Features() {
    return (
        <div className="min-h-screen" style={{ fontFamily: 'var(--font-body)' }}>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Header - Tech-inspired design */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-200 rounded-full px-5 py-2 mb-6">
                        <Star className="w-4 h-4 text-blue-600" fill="currentColor" />
                        <span className="text-sm font-semibold text-blue-700" style={{ fontFamily: 'var(--font-accent)' }}>
                            POWERFUL FEATURES
                        </span>
                    </div>
                    <h1
                        className="text-6xl sm:text-7xl font-black mb-6 leading-tight"
                        style={{ fontFamily: 'var(--font-accent)' }}
                    >
                        <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                            Everything You Need
                        </span>
                        <br />
                        <span className="text-gray-900">In One Place</span>
                    </h1>
                    <p
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        Professional-grade screen recording made simple. Every feature designed to help you create better content faster.
                    </p>
                </div>

                {/* Main Features - Card Grid with Icons */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                    <MainFeatureCard
                        icon={<Video className="w-12 h-12" />}
                        title="Screen Recording"
                        description="Capture your entire screen, specific windows, or browser tabs with crystal clear quality. Perfect for tutorials, presentations, and demonstrations."
                        color="bg-gradient-to-br from-blue-500 to-cyan-600"
                        borderColor="border-blue-200"
                    />
                    <MainFeatureCard
                        icon={<Mic className="w-12 h-12" />}
                        title="Microphone Audio"
                        description="Record your voice commentary with high-quality audio capture. Great for narrations, voiceovers, and explanations."
                        color="bg-gradient-to-br from-purple-500 to-pink-600"
                        borderColor="border-purple-200"
                    />
                    <MainFeatureCard
                        icon={<MonitorPlay className="w-12 h-12" />}
                        title="System Audio"
                        description="Capture system sounds, application audio, and everything happening on your computer for complete recordings."
                        color="bg-gradient-to-br from-rose-500 to-orange-600"
                        borderColor="border-rose-200"
                    />
                    <MainFeatureCard
                        icon={<Video className="w-12 h-12" />}
                        title="Webcam Recording"
                        description="Add a personal touch by including your webcam feed. Perfect for creating engaging video content and tutorials."
                        color="bg-gradient-to-br from-emerald-500 to-teal-600"
                        borderColor="border-emerald-200"
                    />
                    <MainFeatureCard
                        icon={<Timer className="w-12 h-12" />}
                        title="Recording Timer"
                        description="Keep track of your recording duration with a live timer display. Know exactly how long you've been recording."
                        color="bg-gradient-to-br from-amber-500 to-yellow-600"
                        borderColor="border-amber-200"
                    />
                    <MainFeatureCard
                        icon={<PauseCircle className="w-12 h-12" />}
                        title="Pause & Resume"
                        description="Take breaks during recording without stopping completely. Resume exactly where you left off when you're ready."
                        color="bg-gradient-to-br from-indigo-500 to-purple-600"
                        borderColor="border-indigo-200"
                    />
                </div>

                {/* How to Use Section - Step-by-step visual */}
                <div className="mb-24">
                    <h2
                        className="text-4xl font-black text-center mb-16"
                        style={{ fontFamily: 'var(--font-accent)' }}
                    >
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                            How It Works
                        </span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <StepCard
                            number="01"
                            title="Configure Settings"
                            description="Choose your audio and video sources. Enable or disable microphone, system audio, and webcam based on your needs."
                            tips={[
                                'Test your microphone before recording',
                                'Ensure system audio is enabled for game/app recordings',
                                'Position your webcam for the best angle',
                            ]}
                            color="from-blue-500 to-cyan-500"
                        />
                        <StepCard
                            number="02"
                            title="Start Recording"
                            description="Click the 'Start Recording' button and select which window, tab, or entire screen you want to capture."
                            tips={[
                                'Choose specific windows for focused content',
                                'Select entire screen for multi-window demonstrations',
                                'Check preview before starting',
                            ]}
                            color="from-purple-500 to-pink-500"
                        />
                        <StepCard
                            number="03"
                            title="Record Your Content"
                            description="Create your content while the timer keeps track. Use pause/resume to take breaks without stopping the recording."
                            tips={[
                                'Speak clearly when using microphone',
                                'Use pause for transitions or breaks',
                                'Monitor the timer to track duration',
                            ]}
                            color="from-emerald-500 to-teal-500"
                        />
                        <StepCard
                            number="04"
                            title="Download & Share"
                            description="When finished, click stop and download your recording in high-quality WebM format. Share it anywhere you need!"
                            tips={[
                                'Recordings are saved in WebM format',
                                'Files stay on your device',
                                'Upload to YouTube, Vimeo, or any platform',
                            ]}
                            color="from-amber-500 to-orange-500"
                        />
                    </div>
                </div>

                {/* Why Choose Us - Icon Grid */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 mb-24 border border-gray-200">
                    <h2
                        className="text-4xl font-black text-center mb-4"
                        style={{ fontFamily: 'var(--font-accent)' }}
                    >
                        Why Choose ScreenRec?
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
                        Built for creators, by creators. Experience the difference.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <BenefitCard
                            icon={<Zap className="w-10 h-10 text-amber-600" />}
                            title="No Installation"
                            description="Works directly in your browser—no downloads or installations required"
                            iconBg="bg-amber-100"
                        />
                        <BenefitCard
                            icon={<Shield className="w-10 h-10 text-green-600" />}
                            title="100% Private"
                            description="All recordings happen locally. We never store your data"
                            iconBg="bg-green-100"
                        />
                        <BenefitCard
                            icon={<Globe className="w-10 h-10 text-blue-600" />}
                            title="Cross-Platform"
                            description="Works on Windows, Mac, Linux, and Chromebooks"
                            iconBg="bg-blue-100"
                        />
                        <BenefitCard
                            icon={<Download className="w-10 h-10 text-purple-600" />}
                            title="Easy Export"
                            description="Download your recordings instantly with one click"
                            iconBg="bg-purple-100"
                        />
                        <BenefitCard
                            icon={<Settings className="w-10 h-10 text-indigo-600" />}
                            title="Flexible Settings"
                            description="Customize audio and video sources to fit your needs"
                            iconBg="bg-indigo-100"
                        />
                        <BenefitCard
                            icon={<Video className="w-10 h-10 text-pink-600" />}
                            title="High Quality"
                            description="Record in professional quality with excellent compression"
                            iconBg="bg-pink-100"
                        />
                    </div>
                </div>

                {/* Use Cases - Modern List Design */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <UseCaseCard
                        title="Content Creators"
                        items={[
                            'YouTube tutorials and walkthroughs',
                            'Gaming highlights and gameplay',
                            'Software reviews and demos',
                            'How-to videos and guides',
                        ]}
                        gradient="from-red-500 to-pink-600"
                    />
                    <UseCaseCard
                        title="Educators"
                        items={[
                            'Online course creation',
                            'Lecture recordings',
                            'Student presentations',
                            'Educational tutorials',
                        ]}
                        gradient="from-blue-500 to-cyan-600"
                    />
                    <UseCaseCard
                        title="Professionals"
                        items={[
                            'Sales presentations and demos',
                            'Training materials',
                            'Bug reports with video proof',
                            'Client presentations',
                        ]}
                        gradient="from-purple-500 to-indigo-600"
                    />
                    <UseCaseCard
                        title="Developers"
                        items={[
                            'Code walkthroughs',
                            'Feature demonstrations',
                            'Bug reproduction videos',
                            'Tutorial content',
                        ]}
                        gradient="from-emerald-500 to-teal-600"
                    />
                </div>
            </div>

        </div>
    );
}

interface MainFeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
    borderColor: string;
}

function MainFeatureCard({ icon, title, description, color, borderColor }: MainFeatureCardProps) {
    return (
        <div className={`group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border-2 ${borderColor} hover:border-transparent overflow-hidden`}>
            <div className={`absolute inset-0 ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

            <div className="relative">
                <div className={`inline-flex w-20 h-20 ${color} rounded-xl items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {icon}
                </div>
                <h3
                    className="text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: 'var(--font-accent)' }}
                >
                    {title}
                </h3>
                <p
                    className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}

interface StepCardProps {
    number: string;
    title: string;
    description: string;
    tips: string[];
    color: string;
}

function StepCard({ number, title, description, tips, color }: StepCardProps) {
    return (
        <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-start gap-6 mb-6">
                <div
                    className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${color} text-white rounded-xl flex items-center justify-center shadow-lg`}
                    style={{ fontFamily: 'var(--font-display)' }}
                >
                    <span className="text-2xl font-black">{number}</span>
                </div>
                <div>
                    <h3
                        className="text-2xl font-bold text-gray-900 mb-3"
                        style={{ fontFamily: 'var(--font-accent)' }}
                    >
                        {title}
                    </h3>
                    <p
                        className="text-gray-600 leading-relaxed"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        {description}
                    </p>
                </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2" style={{ fontFamily: 'var(--font-accent)' }}>
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Pro Tips:
                </p>
                <ul className="space-y-2">
                    {tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
                            <span className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${color}`}></span>
                            <span>{tip}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

interface BenefitCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    iconBg: string;
}

function BenefitCard({ icon, title, description, iconBg }: BenefitCardProps) {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200">
            <div className={`${iconBg} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                {icon}
            </div>
            <h4
                className="text-lg font-bold text-gray-900 mb-2"
                style={{ fontFamily: 'var(--font-accent)' }}
            >
                {title}
            </h4>
            <p
                className="text-gray-600 text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
            >
                {description}
            </p>
        </div>
    );
}

interface UseCaseCardProps {
    title: string;
    items: string[];
    gradient: string;
}

function UseCaseCard({ title, items, gradient }: UseCaseCardProps) {
    return (
        <div className={`relative bg-gradient-to-br ${gradient} rounded-2xl p-8 shadow-xl overflow-hidden`}>
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '32px 32px'
                }}></div>
            </div>

            <div className="relative">
                <h3
                    className="text-3xl font-black text-white mb-6"
                    style={{ fontFamily: 'var(--font-accent)' }}
                >
                    {title}
                </h3>
                <ul className="space-y-3">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="flex-shrink-0 w-6 h-6 text-white/90 mt-0.5" />
                            <span className="text-white/90 font-medium leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}