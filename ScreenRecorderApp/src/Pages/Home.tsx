import { Link } from 'react-router-dom';
import { Play, Mic, Video, MonitorPlay, Timer, PauseCircle, Sparkles, ArrowRight } from 'lucide-react';
import HeroSection from '../Components/Pages components/Home/sectionsComponent/HeroSection';
import ErrorBoundary from '../Components/Error Boundary/ErrorBoundary';


export default function Home() {
    return (
        <main className="min-h-screen" style={{ fontFamily: 'var(--font-body)' }}>

            <ErrorBoundary>
                <HeroSection />
            </ErrorBoundary>

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

        </main>
    );
}
