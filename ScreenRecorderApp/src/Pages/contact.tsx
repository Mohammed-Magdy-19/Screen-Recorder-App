import ErrorBoundary from '@/Components/Error Boundary/ErrorBoundary';
import ContactForm from '@/Components/Pages components/contact/SectionsComponent/Contactform';
import ContactInformationCards from '@/Components/Pages components/contact/SectionsComponent/ContactInformationCards';
import FAQSection from '@/Components/Pages components/contact/SectionsComponent/FAQSection';
import HeaderContact from '@/Components/Pages components/contact/SectionsComponent/HeaderContact';
import OfficeLocation from '@/Components/Pages components/contact/SectionsComponent/OfficeLocation';

export default function Contact() {

    return (
        <div className="min-h-screen" style={{ fontFamily: 'var(--font-body)' }}>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Header */}
                <ErrorBoundary>
                    <HeaderContact />
                </ErrorBoundary>

                {/* Contact Information Cards */}
                <ErrorBoundary>
                    <ContactInformationCards />
                </ErrorBoundary>

                {/* Contact Form - Enhanced Design */}
                <ErrorBoundary>
                    <ContactForm />
                </ErrorBoundary>

                {/* FAQ Section */}
                <ErrorBoundary>
                    <FAQSection />
                </ErrorBoundary>

                {/* Office Location */}
                <ErrorBoundary>
                    <OfficeLocation />
                </ErrorBoundary>
            </div>

        </div>
    );
}