"use client"

import PanningHero from "@/components/PanningHero"
import FeatureCard from "@/components/FeatureCard"
import { MessageSquare, Languages, ShoppingCart, Heart } from "lucide-react"

export default function Home() {
    return (
        <>
            {/* Hero Section with Panning Animation */}
            <PanningHero
                mainTagline="Your Friendly Neighbourhood shopping assistant"
                subText="Brought to you by your neighbourhood Retailer"
                badgeText="Local Kiranas are going digital"
                ctaText="Download App"
                ctaLink="/download"
            />

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
        </>
    )
}
