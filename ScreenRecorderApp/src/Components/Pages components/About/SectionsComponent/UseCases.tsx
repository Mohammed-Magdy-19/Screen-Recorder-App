import { UseCaseCardData, type UseCaseCardProps } from '../AboutData/UseCasesData'
import { CheckCircle2 } from 'lucide-react'

const UseCases = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {UseCaseCardData.map((useCase, index) => (
                <UseCaseCard
                    key={index}
                    title={useCase.title}
                    items={useCase.items}
                    gradient={useCase.gradient}
                />
            ))}
        </section>
    )
}

export default UseCases

function UseCaseCard({ title, items, gradient }: UseCaseCardProps) {
    return (
        <div className={`relative bg-linear-to-br ${gradient} rounded-2xl p-8 shadow-xl overflow-hidden`}>
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '32px 32px'
                }}></div>
            </div>

            <div className="relative">
                <h3
                    className="text-3xl font-black text-white mb-6"
                    style={{ fontFamily: 'var(--font-accent)' }}
                >
                    {title}
                </h3>
                <ul className="space-y-3">
                    {items.map((item : string, index : number) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="flex-shrink-0 w-6 h-6 text-white/90 mt-0.5" />
                            <span className="text-white/90 font-medium leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}