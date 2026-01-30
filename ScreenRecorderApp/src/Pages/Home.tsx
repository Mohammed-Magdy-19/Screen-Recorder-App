import HeroSection from '../Components/Pages components/Home/sectionsComponent/HeroSection';
import ErrorBoundary from '../Components/Error Boundary/ErrorBoundary';
import CTASection from '../Components/Pages components/Home/sectionsComponent/CTASection';


export default function Home() {
    return (
        <main className="min-h-screen" style={{ fontFamily: 'var(--font-body)' }}>

            <ErrorBoundary>
                <HeroSection />
            </ErrorBoundary>

            <ErrorBoundary>
                <CTASection />
            </ErrorBoundary>

        </main>
    );
}