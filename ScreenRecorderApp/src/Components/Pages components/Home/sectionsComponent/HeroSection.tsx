import AnimatedBackground from '../GeneralHomeComponent/AnimatedBackground';
import ErrorBoundary from '../../../Error Boundary/ErrorBoundary';
import Headline from '../GeneralHomeComponent/Headline';
import CTAButtons from '../GeneralHomeComponent/CTAButtons';
import Stats from '../GeneralHomeComponent/Stats';
import Feature from '../GeneralHomeComponent/FeatureCard';
import Badge from '../GeneralHomeComponent/Badge';

const HeroSection = () => {
    return (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Animated Background Elements */}
            <ErrorBoundary>
                <AnimatedBackground />
            </ErrorBoundary>

            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <ErrorBoundary>
                        <Badge />
                    </ErrorBoundary>

                    <ErrorBoundary>
                        <Headline />
                    </ErrorBoundary>

                    <ErrorBoundary>
                        <CTAButtons />
                    </ErrorBoundary>


                    
                    <ErrorBoundary>
                        <Stats />
                    </ErrorBoundary>
                </div>

                <ErrorBoundary>
                    <Feature />
                </ErrorBoundary>
            </div>
        </section>
    )
}

export default HeroSection