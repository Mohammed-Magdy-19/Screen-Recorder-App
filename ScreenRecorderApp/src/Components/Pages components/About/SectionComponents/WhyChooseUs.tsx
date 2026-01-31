import { FeatureHighlightData, type FeatureHighlightProps } from "../AboutData/FeatureHighlightData";

const WhyChooseUs = () => {
    return (
        <section className="mb-20">
            <h2
                className="text-5xl font-bold text-center mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
            >
                <span className="text-gray-900">Why Choose</span>{' '}
                <span className="bg-linear-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent italic">
                    ScreenRec
                </span>
                <span className="text-gray-900">?</span>
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg" style={{ fontFamily: 'var(--font-body)' }}>
                Experience the difference that thoughtful design and powerful technology can make
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {FeatureHighlightData.map((feature : FeatureHighlightProps , index : number) => (
                    <FeatureHighlight
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                        accentColor={feature.accentColor}
                        bgColor={feature.bgColor}
                    />
                ))}
            </div>
        </section>
    )
}

export default WhyChooseUs

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