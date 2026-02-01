import { MessageSquare } from "lucide-react"

const HeaderContact = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-linear-to-r from-green-500/10 to-teal-500/10 backdrop-blur-sm border border-green-200 rounded-full px-5 py-2 mb-6">
                    <MessageSquare className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-700" style={{ fontFamily: 'var(--font-accent)' }}>
                        WE'RE HERE TO HELP
                    </span>
                </div>
                <h1
                    className="text-6xl sm:text-7xl font-bold mb-6 leading-tight"
                    style={{ fontFamily: 'var(--font-display)' }}
                >
                    <span className="text-gray-900">Get in</span>{' '}
                    <span className="bg-linear-to-r from-green-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                        Touch
                    </span>
                </h1>
                <p
                    className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                >
                    Have questions, suggestions, or just want to say hello? We'd love to hear from you!
                </p>
            </div>
        </section>
    )
}

export default HeaderContact
