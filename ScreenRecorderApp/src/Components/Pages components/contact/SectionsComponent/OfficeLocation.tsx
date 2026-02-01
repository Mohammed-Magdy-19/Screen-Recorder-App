import { MapPin } from "lucide-react"

const OfficeLocation = () => {
    return (
        <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600 p-12 shadow-2xl">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)',
                    backgroundSize: '48px 48px'
                }}></div>
            </div>

            <div className="relative flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <MapPin className="w-10 h-10 text-white" />
                    </div>
                </div>
                <div>
                    <h2
                        className="text-4xl font-bold text-white mb-4"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Visit Our Office
                    </h2>
                    <div className="text-white/90 space-y-2 text-lg" style={{ fontFamily: 'var(--font-body)' }}>
                        <p className="font-semibold">ScreenRec Headquarters</p>
                        <p>123 Innovation Drive, Suite 456</p>
                        <p>San Francisco, CA 94102</p>
                        <p>United States</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OfficeLocation
