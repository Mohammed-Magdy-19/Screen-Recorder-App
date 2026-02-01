import { Sparkles } from "lucide-react"
import { ValueHighlightData, type ValueHighlightProps } from "../AboutData/ValueHighlightData";

const StorySection = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
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
                <div className="absolute inset-0 bg-linear-to-br from-rose-500 to-purple-600 rounded-3xl opacity-10"></div>
                <div className="relative bg-white rounded-3xl p-10 shadow-xl border border-rose-100">
                    <div className="space-y-8">
                        {ValueHighlightData.map((valueHighlight: ValueHighlightProps, index: number) => (
                            <ValueHighlight
                                key={index}
                                icon={valueHighlight.icon}
                                title={valueHighlight.title}
                                description={valueHighlight.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StorySection

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