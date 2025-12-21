"use client"

import PanningHero from "@/components/PanningHero"
import FeatureCard from "@/components/FeatureCard"
import StepProcess from "@/components/StepProcess"
import TrustBadge from "@/components/TrustBadge"
import { MessageSquare, Languages, ShoppingCart, Heart, Clock, Shield, Users, TrendingUp, CheckCircle, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Home() {
    const steps = [
        {
            number: 1,
            title: "Speak or Chat",
            description: "Tell Chotu what you need in English or Hindi. Use voice or text.",
            icon: MessageSquare,
        },
        {
            number: 2,
            title: "Chotu Finds It",
            description: "Chotu searches your neighbourhood network and finds availability.",
            icon: ShoppingCart,
        },
        {
            number: 3,
            title: "Scheduled Delivery",
            description: "Pick your convenient time slot. No waiting, no stress.",
            icon: Clock,
        },
    ]

    const benefits = [
        {
            icon: Shield,
            title: "Trusted & Safe",
            description: "Shop from your neighbourhood kirana store you know and trust.",
        },
        {
            icon: Users,
            title: "Support Local",
            description: "Every purchase supports your local community businesses.",
        },
        {
            icon: TrendingUp,
            title: "Digital Convenience",
            description: "Modern shopping experience with traditional trust.",
        },
    ]

    const stats = [
        { number: "10,000+", label: "Happy Families" },
        { number: "500+", label: "Local Kiranas" },
        { number: "50+", label: "Distributors" },
        { number: "24/7", label: "AI Support" },
    ]

    return (
        <>
            {/* Hero Section with Panning Animation */}
            <PanningHero
                mainTagline="Chotu AI - Your Friendly Neighbourhood shopping assistant"
                subText="AI shopping assistant brought straight to your phone by your neighbourhood Retailer"
                badgeText="Local Kiranas are going digital"
                ctaText="Download App"
                ctaLink="/download"
            />

            {/* Trust Badge */}
            <TrustBadge />

            {/* Core Mission Section */}
            <section className="py-12 sm:py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Empowering local Kiranas. Serving Local Communities
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                            We connect your trusted neighbourhood store with modern technology, 
                            making shopping convenient while keeping the personal touch that makes 
                            local shopping special. Every order supports your community&apos;s local 
                            businesses.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Section - The Experience */}
            <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                        The Experience
                    </h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                        <FeatureCard
                            icon={Languages}
                            title="Chat or Talk in your language."
                            description="Use English or Hindi. Just speak to the AI agent or chat text-to-text."
                            delay={0}
                        />
                        <FeatureCard
                            icon={ShoppingCart}
                            title="Your trusted goods, digitized."
                            description="Order from home, delivered by the shop you know."
                            delay={0.1}
                        />
                    </div>
                </div>
            </section>

            {/* Digital Wallet Section */}
            <section className="py-12 sm:py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
                            <CardContent className="p-8 sm:p-12">
                                <div className="flex items-start space-x-4 mb-6">
                                    <div className="flex-shrink-0">
                                        <div className="rounded-full bg-primary/10 p-4">
                                            <Shield className="h-8 w-8 text-primary" />
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                                            Digital Wallet with Credit Up to ₹5,000
                                        </h2>
                                        <p className="text-lg text-gray-700 leading-relaxed">
                                            Get instant credit approval from your neighbourhood retailer. Shop now and pay later 
                                            with a digital wallet that offers up to ₹5,000 in credit. Settle your balance 
                                            bi-weekly or monthly, just like your traditional khata, but with the convenience 
                                            of digital payments. No credit checks, no complicated processes—just trust between 
                                            you and your local store, digitized for the modern age.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-12 sm:py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <StepProcess steps={steps} title="How It Works" />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                        Why Choose Chotu?
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <FeatureCard
                                key={benefit.title}
                                icon={benefit.icon}
                                title={benefit.title}
                                description={benefit.description}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 sm:py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                        {stats.map((stat, index) => (
                            <Card key={index} className="text-center border-2">
                                <CardContent className="pt-6">
                                    <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm sm:text-base text-gray-600 font-medium">
                                        {stat.label}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-primary to-secondary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Ready to Experience Digital Shopping?
                        </h2>
                        <p className="text-lg sm:text-xl mb-8 opacity-90">
                            Join thousands of families who are shopping smarter with Chotu.
                        </p>
                        <div className="flex justify-center">
                            <a href="/download">
                                <Button
                                    size="lg"
                                    className="rounded-full bg-white text-primary px-8 py-6 text-base hover:bg-gray-100"
                                >
                                    Download App
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
