import ErrorBoundary from "@/Components/Error Boundary/ErrorBoundary"
import Instructions from "@/Components/Pages components/Recorder/SectionsComponent/Instructions"
import RecordSystem from "@/Components/Pages components/Recorder/SectionsComponent/RecordSystem"


const Recorder = () => {
    return (
        <main className="min-h-screen" style={{ fontFamily: 'var(--font-body)' }}>
            <ErrorBoundary>
                <RecordSystem />
            </ErrorBoundary>

            <ErrorBoundary>
                <Instructions />
            </ErrorBoundary>
        </main>
    )
}

export default Recorder
