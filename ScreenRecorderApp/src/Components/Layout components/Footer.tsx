import { Link } from 'react-router-dom';
import { Video, Heart, Mail, Github, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative mt-auto border-t border-purple-200 overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50"></div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden opacity-30">
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-linear-to-br from-indigo-400 to-purple-600 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-linear-to-br from-pink-400 to-rose-600 rounded-full blur-3xl opacity-20"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link to="/" className="inline-flex items-center gap-2 group">
                            <div className="w-12 h-12 bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Video className="w-6 h-6 text-white" />
                            </div>
                            <span
                                className="text-2xl font-bold bg-linear-to-br from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                ScreenRec
                            </span>
                        </Link>
                        <p
                            className="text-gray-600 leading-relaxed"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Professional screen recording made simple. Record, create, and share your content effortlessly.
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center gap-3 pt-2">
                            <SocialLink icon={<Twitter className="w-5 h-5" />} href="#" label="Twitter" />
                            <SocialLink icon={<Youtube className="w-5 h-5" />} href="#" label="YouTube" />
                            <SocialLink icon={<Github className="w-5 h-5" />} href="#" label="GitHub" />
                            <SocialLink icon={<Linkedin className="w-5 h-5" />} href="#" label="LinkedIn" />
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3
                            className="text-gray-900 font-bold mb-4 text-lg"
                            style={{ fontFamily: 'var(--font-accent)' }}
                        >
                            Product
                        </h3>
                        <ul className="space-y-3">
                            <FooterLink to="/features" label="Features" />
                            <FooterLink to="/recorder" label="Screen Recorder" />
                            <FooterLink to="#" label="Pricing" />
                            <FooterLink to="#" label="Updates" />
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3
                            className="text-gray-900 font-bold mb-4 text-lg"
                            style={{ fontFamily: 'var(--font-accent)' }}
                        >
                            Company
                        </h3>
                        <ul className="space-y-3">
                            <FooterLink to="/about" label="About Us" />
                            <FooterLink to="/contact" label="Contact" />
                            <FooterLink to="#" label="Blog" />
                            <FooterLink to="#" label="Careers" />
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h3
                            className="text-gray-900 font-bold mb-4 text-lg"
                            style={{ fontFamily: 'var(--font-accent)' }}
                        >
                            Support
                        </h3>
                        <ul className="space-y-3">
                            <FooterLink to="#" label="Help Center" />
                            <FooterLink to="#" label="Documentation" />
                            <FooterLink to="#" label="Privacy Policy" />
                            <FooterLink to="#" label="Terms of Service" />
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-purple-200 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <p
                            className="text-gray-600 text-sm"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            © 2026 ScreenRec. All rights reserved. Made with{' '}
                            <Heart className="inline w-4 h-4 text-rose-500 fill-current" />{' '}
                            for creators worldwide.
                        </p>

                        {/* Additional Links */}
                        <div className="flex items-center gap-6">
                            <a
                                href="#"
                                className="text-sm text-gray-600 hover:text-indigo-600 transition-colors"
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                Privacy
                            </a>
                            <a
                                href="#"
                                className="text-sm text-gray-600 hover:text-indigo-600 transition-colors"
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                Terms
                            </a>
                            <a
                                href="#"
                                className="text-sm text-gray-600 hover:text-indigo-600 transition-colors"
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                Cookies
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact CTA */}
            <div className="relative border-t border-purple-200 bg-linear-to-br from-indigo-600/5 via-purple-600/5 to-pink-600/5 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-linear-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <Mail className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p
                                    className="font-semibold text-gray-900"
                                    style={{ fontFamily: 'var(--font-accent)' }}
                                >
                                    Questions or feedback?
                                </p>
                                <p
                                    className="text-sm text-gray-600"
                                    style={{ fontFamily: 'var(--font-body)' }}
                                >
                                    We'd love to hear from you
                                </p>
                            </div>
                        </div>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-linear-to-br from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300"
                            style={{ fontFamily: 'var(--font-accent)' }}
                        >
                            <Mail className="w-4 h-4" />
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

interface SocialLinkProps {
    icon: React.ReactNode;
    href: string;
    label: string;
}

function SocialLink({ icon, href, label }: SocialLinkProps) {
    return (
        <a
            href={href}
            aria-label={label}
            className="w-10 h-10 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-indigo-600 hover:border-indigo-600 hover:shadow-md transform hover:scale-110 transition-all duration-300"
        >
            {icon}
        </a>
    );
}

interface FooterLinkProps {
    to: string;
    label: string;
}

function FooterLink({ to, label }: FooterLinkProps) {
    return (
        <li>
            <Link
                to={to}
                className="text-gray-600 hover:text-indigo-600 transition-colors inline-flex items-center gap-2 group"
                style={{ fontFamily: 'var(--font-body)' }}
            >
                <span className="w-0 h-0.5 bg-indigo-600 group-hover:w-4 transition-all duration-300"></span>
                {label}
            </Link>
        </li>
    );
}
