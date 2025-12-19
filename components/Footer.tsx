import Link from "next/link"
import { Youtube, Facebook, MessageCircle } from "lucide-react"

export default function Footer() {
    return (
        <footer className="border-t bg-gray-50">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-gray-900">Chotu</h3>
                        <p className="text-sm text-gray-600">
                            Your Personal Shopping Assistant for Your Neighbourhood.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-gray-900">Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-sm text-gray-600 hover:text-primary"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="text-sm text-gray-600 hover:text-primary"
                                >
                                    Terms
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/retailer-agreement"
                                    className="text-sm text-gray-600 hover:text-primary"
                                >
                                    Retailer Agreement
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/master-seller-agreement"
                                    className="text-sm text-gray-600 hover:text-primary"
                                >
                                    Master Seller Agreement
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-gray-900">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/retailers"
                                    className="text-sm text-gray-600 hover:text-primary"
                                >
                                    For Retailers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/distributors"
                                    className="text-sm text-gray-600 hover:text-primary"
                                >
                                    For Distributors
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-sm text-gray-600 hover:text-primary"
                                >
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Section */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-gray-900">Connect</h4>
                        <div className="flex space-x-4">
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-primary"
                                aria-label="YouTube"
                            >
                                <Youtube className="h-5 w-5" />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-primary"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="https://wa.me"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-primary"
                                aria-label="WhatsApp Helpline"
                            >
                                <MessageCircle className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t pt-8 text-center text-sm text-gray-600">
                    <p>© 2024 Chotu Commerce. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

