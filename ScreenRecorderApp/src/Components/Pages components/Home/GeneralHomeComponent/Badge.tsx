import { Sparkles } from 'lucide-react'

{/* Badge */ }
const Badge = () => {
    return (

        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 backdrop-blur-sm border border-indigo-200 rounded-full px-6 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-700" style={{ fontFamily: 'var(--font-accent)' }}>
                Professional Screen Recording for Everyone
            </span>
        </div>

    )
}

export default Badge
