import FeatureHeader from '../Components/Pages components/features/SectionsComponent/FeatureHeader';
import MainFeatureCards from '../Components/Pages components/features/SectionsComponent/MainFeatureCards';
import HowtoUse from '../Components/Pages components/features/SectionsComponent/HowtoUse';
import WhyChooseUs from '../Components/Pages components/features/SectionsComponent/WhyChooseUs';
import UseCases from '../Components/Pages components/features/SectionsComponent/UseCases';
import ErrorBoundary from '../Components/Error Boundary/ErrorBoundary';


export default function Features() {
    return (
        <main className="min-h-screen" style={{ fontFamily: 'var(--font-body)' }}>

            <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Header - Tech-inspired design */}
                <ErrorBoundary>
                    <FeatureHeader />
                </ErrorBoundary>

                {/* Main Features - Card Grid with Icons */}
                <ErrorBoundary>
                    <MainFeatureCards />
                </ErrorBoundary>
                
                {/* How to Use Section - Step-by-step visual */}
                <ErrorBoundary>
                    <HowtoUse />
                </ErrorBoundary>

                {/* Why Choose Us - Icon Grid */}
                <ErrorBoundary>
                    <WhyChooseUs />
                </ErrorBoundary>

                {/* Use Cases - Modern List Design */}
                <ErrorBoundary>
                    <UseCases />
                </ErrorBoundary>
            </article>

        </main>
    );
}