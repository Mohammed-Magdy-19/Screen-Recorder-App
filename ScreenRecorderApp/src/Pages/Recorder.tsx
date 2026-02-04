import ErrorBoundary from "@/Components/Error Boundary/ErrorBoundary"
import Instructions from "@/Components/Pages components/Recorder/SectionsComponent/Instructions"
import RecordSystem from "@/Components/Pages components/Recorder/SectionsComponent/RecordSystem"


const Recorder = () => {
    return (
        <main className="min-h-screen" style={{ fontFamily: 'var(--font-body)' }}>
            <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <ErrorBoundary>
                    <RecordSystem />
                </ErrorBoundary>

                <ErrorBoundary>
                    <Instructions />
                </ErrorBoundary>
            </article>
        </main>
    )
}

export default Recorder
