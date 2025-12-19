"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/retailers", label: "For Retailers" },
        { href: "/distributors", label: "For Distributors" },
        { href: "/about", label: "About Us" },
    ]

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <ShoppingBag className="h-8 w-8 text-primary" />
                        <span className="text-2xl font-bold text-gray-900">Chotu</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        <Link href="/partner-login">
                            <Button variant="ghost" size="sm">
                                Partner Login
                            </Button>
                        </Link>
                        <Link href="/download">
                            <Button
                                size="sm"
                                className="rounded-full bg-primary px-6 hover:bg-primary/90"
                            >
                                Download App
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="space-y-1 border-t px-2 pb-3 pt-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="mt-4 space-y-2">
                                <Link href="/partner-login" onClick={() => setMobileMenuOpen(false)}>
                                    <Button variant="ghost" className="w-full">
                                        Partner Login
                                    </Button>
                                </Link>
                                <Link href="/download" onClick={() => setMobileMenuOpen(false)}>
                                    <Button className="w-full rounded-full bg-primary">
                                        Download App
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

