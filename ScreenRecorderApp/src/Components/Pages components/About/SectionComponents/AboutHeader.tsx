import { Heart } from "lucide-react"

const AboutHeader = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 bg-linear-to-r from-rose-500/10 to-amber-500/10 backdrop-blur-sm border border-rose-200 rounded-full px-5 py-2 mb-6">
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
                    <span className="bg-linear-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent italic">
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
        </section>
    )
}

export default AboutHeader
