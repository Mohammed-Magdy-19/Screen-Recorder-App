import { Video, Target, Users, Zap, Heart, Sparkles, Award, TrendingUp, Globe2, Shield } from 'lucide-react';


export default function About() {
    return (
        <div className="min-h-screen" style={{ fontFamily: 'var(--font-body)' }}>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Header - Elegant & Sophisticated */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500/10 to-amber-500/10 backdrop-blur-sm border border-rose-200 rounded-full px-5 py-2 mb-6">
                        <Heart className="w-4 h-4 text-rose-600" fill="currentColor" />
                        <span className="text-sm font-semibold text-rose-700" style={{ fontFamily: 'var(--font-accent)' }}>
                            OUR STORY
                        </span>
                    </div>
                    <h1
                        className="text-6xl sm:text-7xl font-bold mb-6 leading-tight"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        <span className="text-gray-900">About</span>
                        <br />
                        <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent italic">
                            ScreenRec
                        </span>
                    </h1>
                    <p
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        Empowering creators worldwide with tools that inspire and simplify
                    </p>
                </div>

                {/* Story Section - Magazine style */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 text-rose-600 mb-4">
                            <Sparkles className="w-5 h-5" />
                            <span className="text-sm font-bold tracking-wider uppercase" style={{ fontFamily: 'var(--font-accent)' }}>
                                The Beginning
                            </span>
                        </div>
                        <h2
                            className="text-4xl font-bold text-gray-900 leading-tight"
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            Born from a Simple Idea
                        </h2>
                        <div className="space-y-4 text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                            <p>
                                ScreenRec was born from a simple idea: <span className="font-semibold text-rose-600">screen recording shouldn't require complex software installations or expensive subscriptions</span>. We believe that creating high-quality screen recordings should be as easy as clicking a button.
                            </p>
                            <p>
                                Built with modern web technologies, our platform leverages the power of your browser to deliver a seamless recording experience. No downloads, no installations—just pure, instant functionality.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-purple-600 rounded-3xl opacity-10"></div>
                        <div className="relative bg-white rounded-3xl p-10 shadow-xl border border-rose-100">
                            <div className="space-y-8">
                                <ValueHighlight
                                    icon={<Award className="w-8 h-8 text-rose-600" />}
                                    title="Excellence"
                                    description="We're committed to delivering the best recording experience"
                                />
                                <ValueHighlight
                                    icon={<TrendingUp className="w-8 h-8 text-purple-600" />}
                                    title="Innovation"
                                    description="Constantly evolving with the latest web technologies"
                                />
                                <ValueHighlight
                                    icon={<Globe2 className="w-8 h-8 text-blue-600" />}
                                    title="Accessibility"
                                    description="Making professional tools available to everyone"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission & Vision - Split Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <MissionCard
                        icon={<Target className="w-12 h-12" />}
                        title="Our Mission"
                        description="To democratize screen recording by making it accessible, simple, and free for everyone, everywhere."
                        gradient="from-rose-500 via-pink-500 to-purple-600"
                    />
                    <MissionCard
                        icon={<Users className="w-12 h-12" />}
                        title="Our Community"
                        description="We're building a community of creators, educators, and innovators who value simplicity and quality."
                        gradient="from-purple-500 via-indigo-500 to-blue-600"
                    />
                </div>

                {/* Why Choose Us - Elegant Grid */}
                <div className="mb-20">
                    <h2
                        className="text-5xl font-bold text-center mb-4"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        <span className="text-gray-900">Why Choose</span>{' '}
                        <span className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent italic">
                            ScreenRec
                        </span>
                        <span className="text-gray-900">?</span>
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg" style={{ fontFamily: 'var(--font-body)' }}>
                        Experience the difference that thoughtful design and powerful technology can make
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <FeatureHighlight
                            icon={<Zap className="w-8 h-8" />}
                            title="Lightning Fast"
                            description="Start recording instantly without any setup or configuration"
                            accentColor="text-amber-600"
                            bgColor="bg-amber-50"
                        />
                        <FeatureHighlight
                            icon={<Video className="w-8 h-8" />}
                            title="High Quality"
                            description="Record in crystal clear quality with professional-grade output"
                            accentColor="text-blue-600"
                            bgColor="bg-blue-50"
                        />
                        <FeatureHighlight
                            icon={<Shield className="w-8 h-8" />}
                            title="Privacy First"
                            description="Your recordings stay on your device. We never store your data"
                            accentColor="text-green-600"
                            bgColor="bg-green-50"
                        />
                        <FeatureHighlight
                            icon={<Users className="w-8 h-8" />}
                            title="User Friendly"
                            description="Intuitive interface designed for users of all skill levels"
                            accentColor="text-pink-600"
                            bgColor="bg-pink-50"
                        />
                        <FeatureHighlight
                            icon={<Sparkles className="w-8 h-8" />}
                            title="No Limits"
                            description="Record as much as you want, no restrictions or watermarks"
                            accentColor="text-purple-600"
                            bgColor="bg-purple-50"
                        />
                        <FeatureHighlight
                            icon={<Globe2 className="w-8 h-8" />}
                            title="Multi-Source"
                            description="Capture screen, webcam, and audio all at once"
                            accentColor="text-indigo-600"
                            bgColor="bg-indigo-50"
                        />
                    </div>
                </div>

                {/* Team Section - Hero Style */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-600 via-pink-600 to-purple-600 p-12 sm:p-16 text-center">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)',
                            backgroundSize: '48px 48px'
                        }}></div>
                    </div>

                    <div className="relative max-w-3xl mx-auto">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                            <Heart className="w-10 h-10 text-white" fill="currentColor" />
                        </div>
                        <h2
                            className="text-5xl font-bold text-white mb-6 leading-tight"
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            Built with Love by Creators
                        </h2>
                        <p
                            className="text-xl text-white/90 leading-relaxed"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            We're a team of passionate developers and designers who understand the challenges of content creation. Our goal is to build tools that we ourselves love to use—tools that make your creative process smoother, faster, and more enjoyable.
                        </p>

                        <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
                            <StatCard number="10K+" label="Active Users" />
                            <StatCard number="500K+" label="Recordings Made" />
                            <StatCard number="99%" label="Satisfaction" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

interface ValueHighlightProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

function ValueHighlight({ icon, title, description }: ValueHighlightProps) {
    return (
        <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
                {icon}
            </div>
            <div>
                <h4
                    className="text-xl font-bold text-gray-900 mb-1"
                    style={{ fontFamily: 'var(--font-accent)' }}
                >
                    {title}
                </h4>
                <p
                    className="text-gray-600"
                    style={{ fontFamily: 'var(--font-body)' }}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}

interface MissionCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    gradient: string;
}

function MissionCard({ icon, title, description, gradient }: MissionCardProps) {
    return (
        <div className={`relative overflow-hidden bg-gradient-to-br ${gradient} rounded-3xl p-10 shadow-2xl`}>
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '32px 32px'
                }}></div>
            </div>

            <div className="relative">
                <div className="inline-flex w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl items-center justify-center mb-6 text-white">
                    {icon}
                </div>
                <h3
                    className="text-3xl font-bold text-white mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    {title}
                </h3>
                <p
                    className="text-white/90 text-lg leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}

interface FeatureHighlightProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    accentColor: string;
    bgColor: string;
}

function FeatureHighlight({ icon, title, description, accentColor, bgColor }: FeatureHighlightProps) {
    return (
        <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
            <div className={`${bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-5 ${accentColor} group-hover:scale-110 transition-transform duration-300`}>
                {icon}
            </div>
            <h4
                className="text-xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: 'var(--font-accent)' }}
            >
                {title}
            </h4>
            <p
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
            >
                {description}
            </p>
        </div>
    );
}

interface StatCardProps {
    number: string;
    label: string;
}

function StatCard({ number, label }: StatCardProps) {
    return (
        <div className="text-center">
            <div
                className="text-4xl font-black text-white mb-2"
                style={{ fontFamily: 'var(--font-display)' }}
            >
                {number}
            </div>
            <div
                className="text-sm text-white/80 font-medium"
                style={{ fontFamily: 'var(--font-accent)' }}
            >
                {label}
            </div>
        </div>
    );
}