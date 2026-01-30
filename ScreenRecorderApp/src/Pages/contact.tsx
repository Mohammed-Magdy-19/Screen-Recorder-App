import { Mail, MessageSquare, Send, MapPin, Phone, HelpCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would send the form data to a server
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen" style={{ fontFamily: 'var(--font-body)' }}>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-teal-500/10 backdrop-blur-sm border border-green-200 rounded-full px-5 py-2 mb-6">
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
                        <span className="bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
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

                {/* Contact Information Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <ContactCard
                        icon={<Mail className="w-10 h-10" />}
                        title="Email Us"
                        content="support@screenrec.com"
                        gradient="from-blue-500 to-cyan-600"
                        bgColor="bg-blue-50"
                    />
                    <ContactCard
                        icon={<MessageSquare className="w-10 h-10" />}
                        title="Live Chat"
                        content="Available Mon-Fri, 9AM-6PM EST"
                        gradient="from-purple-500 to-pink-600"
                        bgColor="bg-purple-50"
                    />
                    <ContactCard
                        icon={<Phone className="w-10 h-10" />}
                        title="Call Us"
                        content="+1 (555) 123-4567"
                        gradient="from-emerald-500 to-teal-600"
                        bgColor="bg-emerald-50"
                    />
                </div>

                {/* Contact Form - Enhanced Design */}
                <div className="relative mb-16">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 rounded-3xl opacity-5"></div>
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 border-2 border-green-200">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                                <Send className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h2
                                    className="text-4xl font-bold text-gray-900"
                                    style={{ fontFamily: 'var(--font-display)' }}
                                >
                                    Send Us a Message
                                </h2>
                                <p className="text-gray-600 mt-1" style={{ fontFamily: 'var(--font-body)' }}>
                                    We'll get back to you within 24 hours
                                </p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-gray-900 font-semibold mb-2"
                                        style={{ fontFamily: 'var(--font-accent)' }}
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all bg-white hover:border-gray-300"
                                        placeholder="John Doe"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-gray-900 font-semibold mb-2"
                                        style={{ fontFamily: 'var(--font-accent)' }}
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all bg-white hover:border-gray-300"
                                        placeholder="john@example.com"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-gray-900 font-semibold mb-2"
                                    style={{ fontFamily: 'var(--font-accent)' }}
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all bg-white hover:border-gray-300"
                                    placeholder="How can we help you?"
                                    style={{ fontFamily: 'var(--font-body)' }}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-gray-900 font-semibold mb-2"
                                    style={{ fontFamily: 'var(--font-accent)' }}
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all resize-none bg-white hover:border-gray-300"
                                    placeholder="Tell us more about your inquiry..."
                                    style={{ fontFamily: 'var(--font-body)' }}
                                />
                            </div>

                            <button
                                type="submit"
                                className="group w-full bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 text-white py-5 rounded-xl font-bold hover:shadow-2xl hover:shadow-green-500/30 transform hover:scale-[1.02] transition-all shadow-lg flex items-center justify-center gap-3"
                                style={{ fontFamily: 'var(--font-accent)' }}
                            >
                                <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm border border-amber-200 rounded-full px-5 py-2 mb-4">
                            <HelpCircle className="w-4 h-4 text-amber-600" />
                            <span className="text-sm font-semibold text-amber-700" style={{ fontFamily: 'var(--font-accent)' }}>
                                COMMON QUESTIONS
                            </span>
                        </div>
                        <h2
                            className="text-4xl font-bold text-gray-900"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FAQItem
                            question="How do I start recording?"
                            answer="Simply navigate to the Recorder page, configure your audio/video settings, and click the 'Start Recording' button. Then select the window or screen you want to record."
                        />
                        <FAQItem
                            question="Is there a recording time limit?"
                            answer="No! You can record for as long as you need. The only limit is your device's available storage space."
                        />
                        <FAQItem
                            question="What video format is supported?"
                            answer="Your recordings are saved in WebM format, which provides excellent quality and is widely supported by modern video players and editing software."
                        />
                        <FAQItem
                            question="Can I edit my recordings?"
                            answer="While ScreenRec focuses on recording, you can download your videos and use your favorite video editing software to edit them."
                        />
                        <FAQItem
                            question="Is my data safe?"
                            answer="Absolutely! All recording happens locally in your browser. We never upload or store your recordings on our servers."
                        />
                        <FAQItem
                            question="Which browsers are supported?"
                            answer="ScreenRec works best on modern browsers like Chrome, Edge, Firefox, and Safari that support the MediaRecorder API."
                        />
                    </div>
                </div>

                {/* Office Location */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-12 shadow-2xl">
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
                </div>
            </div>

        </div>
    );
}

interface ContactCardProps {
    icon: React.ReactNode;
    title: string;
    content: string;
    gradient: string;
    bgColor: string;
}

function ContactCard({ icon, title, content, gradient, bgColor }: ContactCardProps) {
    return (
        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-transparent">
            <div className={`${bgColor} w-20 h-20 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-br ${gradient} text-white group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                {icon}
            </div>
            <h3
                className="text-xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: 'var(--font-accent)' }}
            >
                {title}
            </h3>
            <p
                className="text-gray-600"
                style={{ fontFamily: 'var(--font-body)' }}
            >
                {content}
            </p>
        </div>
    );
}

interface FAQItemProps {
    question: string;
    answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
    return (
        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200">
            <h3
                className="text-xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: 'var(--font-accent)' }}
            >
                {question}
            </h3>
            <p
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
            >
                {answer}
            </p>
        </div>
    );
}