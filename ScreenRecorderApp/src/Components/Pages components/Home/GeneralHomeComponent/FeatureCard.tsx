import { FeatureCardData, type FeatureCardProps } from "../HomeData/FeatureCardData";

{/* Feature Cards - Bento Grid Style */}
const Feature = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
            {FeatureCardData.map((Card: FeatureCardProps, index: number) =>(
                <FeatureCard
                    key = {index}
                    icon={Card.icon}
                    title={Card.title}
                    description={Card.description}
                    gradient={Card.gradient}
                    delay={Card.delay}
                />
            ))}
        </div>
    )
}

export default Feature;

function FeatureCard({ icon, title, description, gradient }: FeatureCardProps) {
    return (
        <div
            className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-transparent overflow-hidden"
        >
            {/* Gradient on hover */}
            <div className={`absolute inset-0 bg-linear-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

            <div className="relative">
                <div className={`inline-flex w-20 h-20 bg-linear-to-br ${gradient} rounded-2xl items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
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