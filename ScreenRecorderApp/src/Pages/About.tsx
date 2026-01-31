import ErrorBoundary from '../Components/Error Boundary/ErrorBoundary';
import AboutHeader from '../Components/Pages components/About/SectionComponents/AboutHeader';
import StorySection from '../Components/Pages components/About/SectionComponents/StorySection';
import MissionAndVision from '../Components/Pages components/About/SectionComponents/MissionAndVision';
import WhyChooseUs from '../Components/Pages components/About/SectionComponents/WhyChooseUs';
import Team from '../Components/Pages components/About/SectionComponents/Team';

export default function About() {
    return (
        <div className="min-h-screen" style={{ fontFamily: 'var(--font-body)' }}>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Header - Elegant & Sophisticated */}
                <ErrorBoundary>
                    <AboutHeader />
                </ErrorBoundary>

                {/* Story Section - Magazine style */}
                <ErrorBoundary>
                    <StorySection />
                </ErrorBoundary>

                {/* Mission & Vision - Split Cards */}
                <ErrorBoundary>
                    <MissionAndVision />
                </ErrorBoundary>

                {/* Why Choose Us - Elegant Grid */}
                <ErrorBoundary>
                    <WhyChooseUs />
                </ErrorBoundary>

                {/* Team Section - Hero Style */}
                <ErrorBoundary>
                    <Team />
                </ErrorBoundary>
            </div>

        </div>
    );
}