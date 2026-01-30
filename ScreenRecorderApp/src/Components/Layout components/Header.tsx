import { Link, useLocation } from 'react-router-dom';
import { Video, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (path: string) => location.pathname === path;

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/recorder', label: 'Recorder' },
        { path: '/features', label: 'Features' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <nav className="bg-white/90 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-50 shadow-sm" style={{ fontFamily: 'var(--font-accent)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                            <div className="relative w-12 h-12 bg-linear-to-br from-indigo-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <Video className="w-7 h-7 text-white" />
                            </div>
                        </div>
                        <div>
                            <span
                                className="text-2xl font-black bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                ScreenRec
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${isActive(link.path)
                                        ? 'bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-3 rounded-xl hover:bg-gray-100 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X className="w-6 h-6 text-gray-700" />
                        ) : (
                            <Menu className="w-6 h-6 text-gray-700" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4 space-y-2 border-t border-gray-200">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`block py-3 px-4 rounded-xl font-semibold transition-all ${isActive(link.path)
                                        ? 'bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                                        : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}