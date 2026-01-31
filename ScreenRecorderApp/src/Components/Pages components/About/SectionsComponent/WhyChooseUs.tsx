import { BenefitCardData, type BenefitCardProps } from "../AboutData/BenefitCardData";


const WhyChooseUs = () => {
    return (
        <section className="bg-linear-to-br from-gray-50 to-gray-100 rounded-3xl p-12 mb-24 border border-gray-200">
            <h2
                className="text-4xl font-black text-center mb-4"
                style={{ fontFamily: 'var(--font-accent)' }}
            >
                Why Choose ScreenRec?
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
                Built for creators, by creators. Experience the difference.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {BenefitCardData.map((benefit: BenefitCardProps, index: number) => (
                    <BenefitCard
                        key={index}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        iconBg={benefit.iconBg}
                    />
                ))}
            </div>
        </section>
    )
}

export default WhyChooseUs

function BenefitCard({ icon, title, description, iconBg }: BenefitCardProps) {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200">
            <div className={`${iconBg} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                {icon}
            </div>
            <h4
                className="text-lg font-bold text-gray-900 mb-2"
                style={{ fontFamily: 'var(--font-accent)' }}
            >
                {title}
            </h4>
            <p
                className="text-gray-600 text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
            >
                {description}
            </p>
        </div>
    );
}