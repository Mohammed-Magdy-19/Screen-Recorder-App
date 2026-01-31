import { Heart } from "lucide-react"
import { StatCardData, type StatCardProps } from "../AboutData/StatCardData";

const Team = () => {
    return (
        <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-rose-600 via-pink-600 to-purple-600 p-12 sm:p-16 text-center">
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
                    {StatCardData.map((stat: StatCardProps, index: number) => (
                        <StatCard
                            key={index}
                            number={stat.number}
                            label={stat.label} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Team

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