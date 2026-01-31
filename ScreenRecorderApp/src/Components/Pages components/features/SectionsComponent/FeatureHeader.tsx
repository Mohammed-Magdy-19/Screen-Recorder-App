import { Star } from "lucide-react"

{/* Header - Tech-inspired design */}
const FeatureHeader = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-200 rounded-full px-5 py-2 mb-6">
                        <Star className="w-4 h-4 text-blue-600" fill="currentColor" />
                        <span className="text-sm font-semibold text-blue-700" style={{ fontFamily: 'var(--font-accent)' }}>
                            POWERFUL FEATURES
                        </span>
                    </div>
                    <h1
                        className="text-6xl sm:text-7xl font-black mb-6 leading-tight"
                        style={{ fontFamily: 'var(--font-accent)' }}
                    >
                        <span className="bg-linear-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
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
        </section>
    )
}

export default FeatureHeader