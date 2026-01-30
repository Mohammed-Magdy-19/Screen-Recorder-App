import { ArrowRight, Play } from 'lucide-react'
import { Link } from 'react-router-dom'

{/* CTA Buttons */ }
const CTAButtons = () => {
    return (
        < div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16" >
            <Link
                to="/recorder"
                className="group relative inline-flex items-center gap-3 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-10 py-5 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
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
        </div >
    )
}

export default CTAButtons
