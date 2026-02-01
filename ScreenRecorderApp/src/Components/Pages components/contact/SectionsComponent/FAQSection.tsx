import { HelpCircle } from "lucide-react"
import { FAQItemData, type FAQItemProps } from "../contactData/Faqitemdata";

const FAQSection = () => {
    return (
        <section className="mb-16">
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-linear-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm border border-amber-200 rounded-full px-5 py-2 mb-4">
                    <HelpCircle className="w-4 h-4 text-amber-600" />
                    <span className="text-sm font-semibold text-amber-700" style={{ fontFamily: 'var(--font-accent)' }}>
                        COMMON QUESTIONS
                    </span>
                </div>
                <h2
                    className="text-4xl font-bold text-gray-900"
                    style={{ fontFamily: 'var(--font-display)' }}
                >
                    Frequently Asked Questions
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {FAQItemData.map((faq: FAQItemProps, index: number) => (
                <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                />
            ))}
            </div>
        </section>
    )
}

export default FAQSection

function FAQItem({ question, answer }: FAQItemProps) {
    return (
        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200">
            <h3
                className="text-xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: 'var(--font-accent)' }}
            >
                {question}
            </h3>
            <p
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
            >
                {answer}
            </p>
        </div>
    );
}