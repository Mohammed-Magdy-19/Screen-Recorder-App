import { CheckCircle2 } from "lucide-react";
import { StepCardData, type StepCardProps } from "../AboutData/HowtoUseData";

const HowtoUse = () => {
    return (
        <section className="mb-24">
            <h2
                className="text-4xl font-black text-center mb-16"
                style={{ fontFamily: 'var(--font-accent)' }}
            >
                <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    How It Works
                </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {StepCardData.map((step: StepCardProps, index: number) => (
                <StepCard
                    key={index}
                    number={step.number}
                    title={step.title}
                    description={step.description}
                    tips={step.tips}
                    color={step.color}
                />
            ))}
            </div>
        </section>
    )
}

export default HowtoUse

function StepCard({ number, title, description, tips, color }: StepCardProps) {
    return (
        <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-start gap-6 mb-6">
                <div
                    className={`flex-shrink-0 w-16 h-16 bg-linear-to-br ${color} text-white rounded-xl flex items-center justify-center shadow-lg`}
                    style={{ fontFamily: 'var(--font-display)' }}
                >
                    <span className="text-2xl font-black">{number}</span>
                </div>
                <div>
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
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2" style={{ fontFamily: 'var(--font-accent)' }}>
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Pro Tips:
                </p>
                <ul className="space-y-2">
                    {tips.map((tip : string, index : number) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
                            <span className={`mt-1 w-1.5 h-1.5 rounded-full bg-linear-to-r ${color}`}></span>
                            <span>{tip}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}