import { Link } from 'react-router-dom';
import { Play, Mic, Video, MonitorPlay, Timer, PauseCircle, Sparkles, ArrowRight } from 'lucide-react';


export default function Home() {
    return (
        <div className="min-h-screen" style={{ fontFamily: 'var(--font-body)' }}>

            {/* Hero Section - Bold & Dynamic */}
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-linear-to-br from-indigo-400 to-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-pink-400 to-rose-600 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-400 to-indigo-600 rounded-full opacity-10 blur-3xl"></div>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 backdrop-blur-sm border border-indigo-200 rounded-full px-6 py-2 mb-8">
                            <Sparkles className="w-4 h-4 text-indigo-600" />
                            <span className="text-sm font-medium text-indigo-700" style={{ fontFamily: 'var(--font-accent)' }}>
                                Professional Screen Recording for Everyone
                            </span>
                        </div>

                        {/* Headline */}
                        <h1
                            className="text-6xl sm:text-7xl lg:text-8xl mb-6 leading-tight tracking-tight"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
                                Capture.
                            </span>
                            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent font-bold">
                                Create.
                            </span>
                            <span className="block text-gray-900 font-bold">
                                Share.
                            </span>
                        </h1>

                        <p
                            className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            The most <span className="text-indigo-600 font-semibold">powerful</span> and{' '}
                            <span className="text-purple-600 font-semibold">intuitive</span> screen recorder.
                            <br />
                            Record your screen with professional quality in seconds.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <Link
                                to="/recorder"
                                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-10 py-5 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
                                style={{ fontFamily: 'var(--font-accent)' }}
                            >
                                <Play className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" />
                                Start Recording Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/features"
                                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-gray-700 px-10 py-5 rounded-2xl font-semibold hover:bg-white hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200"
                                style={{ fontFamily: 'var(--font-accent)' }}
                            >
                                Explore Features
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-20">
                            <StatItem number="100%" label="Free Forever" />
                            <StatItem number="∞" label="Unlimited Recording" />
                            <StatItem number="0" label="Watermarks" />
                        </div>
                    </div>

                    {/* Feature Cards - Bento Grid Style */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
                        <FeatureCard
                            icon={<Video className="w-10 h-10" />}
                            title="Screen Recording"
                            description="Capture your entire screen or specific windows with crystal clear quality"
                            gradient="from-indigo-500 via-indigo-600 to-purple-600"
                            delay="0"
                        />
                        <FeatureCard
                            icon={<Mic className="w-10 h-10" />}
                            title="Microphone Audio"
                            description="Record your voice commentary with high-quality audio capture"
                            gradient="from-purple-500 via-purple-600 to-pink-600"
                            delay="100"
                        />
                        <FeatureCard
                            icon={<MonitorPlay className="w-10 h-10" />}
                            title="Webcam Recording"
                            description="Include your webcam feed to add a personal touch to your recordings"
                            gradient="from-pink-500 via-pink-600 to-rose-600"
                            delay="200"
                        />
                        <FeatureCard
                            icon={<Timer className="w-10 h-10" />}
                            title="Recording Timer"
                            description="Keep track of your recording duration with a live timer display"
                            gradient="from-amber-500 via-orange-500 to-red-500"
                            delay="300"
                        />
                        <FeatureCard
                            icon={<PauseCircle className="w-10 h-10" />}
                            title="Pause & Resume"
                            description="Take breaks during recording and resume exactly where you left off"
                            gradient="from-emerald-500 via-teal-500 to-cyan-500"
                            delay="400"
                        />
                        <FeatureCard
                            icon={<Play className="w-10 h-10" />}
                            title="Easy Export"
                            description="Download your recordings instantly in high-quality video format"
                            gradient="from-blue-500 via-indigo-500 to-purple-500"
                            delay="500"
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section - Gradient Banner */}
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600"></div>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '48px 48px'
                    }}></div>
                </div>

                <div className="relative max-w-4xl mx-auto text-center">
                    <h2
                        className="text-5xl font-bold text-white mb-6 leading-tight"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Ready to Create Something Amazing?
                    </h2>
                    <p
                        className="text-xl text-indigo-100 mb-10 leading-relaxed"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        No installation required. No credit card needed. Start recording in your browser right now.
                    </p>
                    <Link
                        to="/recorder"
                        className="group inline-flex items-center gap-3 bg-white text-indigo-600 px-10 py-5 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all duration-300"
                        style={{ fontFamily: 'var(--font-accent)' }}
                    >
                        <Play className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" />
                        Launch Recorder
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>

        </div>
    );
}

interface StatItemProps {
    number: string;
    label: string;
}

function StatItem({ number, label }: StatItemProps) {
    return (
        <div className="text-center">
            <div
                className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2"
                style={{ fontFamily: 'var(--font-display)' }}
            >
                {number}
            </div>
            <div
                className="text-sm text-gray-600 font-medium"
                style={{ fontFamily: 'var(--font-accent)' }}
            >
                {label}
            </div>
        </div>
    );
}

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    gradient: string;
    delay: string;
}

function FeatureCard({ icon, title, description, gradient }: FeatureCardProps) {
    return (
        <div
            className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-transparent overflow-hidden"
        >
            {/* Gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

            <div className="relative">
                <div className={`inline-flex w-20 h-20 bg-gradient-to-br ${gradient} rounded-2xl items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    {icon}
                </div>
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
    );
}
