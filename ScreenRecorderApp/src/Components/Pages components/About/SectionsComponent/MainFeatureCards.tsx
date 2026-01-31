import { MainFeatureCardData, type MainFeatureCardProps } from "../AboutData/MainFeatureData"

const MainFeatureCards = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {MainFeatureCardData.map((feature: MainFeatureCardProps, index: number) => (
                <MainFeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    color={feature.color}
                    borderColor={feature.borderColor}
                />
            ))}
        </section>
    )
}

function MainFeatureCard({ icon, title, description, color, borderColor }: MainFeatureCardProps) {
    return (
        <div className={`group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border-2 ${borderColor} hover:border-transparent overflow-hidden`}>
            <div className={`absolute inset-0 ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

            <div className="relative">
                <div className={`inline-flex w-20 h-20 ${color} rounded-xl items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {icon}
                </div>
                <h3
                    className="text-2xl font-bold text-gray-900 mb-4"
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

export default MainFeatureCards
