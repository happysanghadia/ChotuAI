"use client"

import HeroSection from "@/components/HeroSection"
import FeatureCard from "@/components/FeatureCard"
import StepProcess from "@/components/StepProcess"
import TrustBadge from "@/components/TrustBadge"
import { Mic, Wallet, Store, MessageSquare, Search, Calendar } from "lucide-react"

export default function Home() {
    const valueProps = [
        {
            icon: Mic,
            title: "Conversational Convenience",
            description:
                "Speak in Hindi, Hinglish, or English. Chotu understands 'Get me the usual' so you don't have to type lists.",
        },
        {
            icon: Wallet,
            title: "Digital Khata",
            description:
                "₹5,000 credit limit. Buy now, settle bi-weekly or monthly.",
        },
        {
            icon: Store,
            title: "Trusted Local Delivery",
            description:
                "No dark stores. Fulfilled by the neighbourhood kirana stores you trust.",
        },
    ]

    const steps = [
        {
            number: 1,
            title: "Say Hello",
            description:
                "Open the app and speak to Chotu to build your weekly basket.",
            icon: MessageSquare,
        },
        {
            number: 2,
            title: "Smart Discovery",
            description:
                "Chotu finds availability across the neighbourhood network.",
            icon: Search,
        },
        {
            number: 3,
            title: "Scheduled Delivery",
            description:
                "Pick a convenient time slot. No anxious waiting.",
            icon: Calendar,
        },
    ]

    return (
        <>
            {/* Hero Section */}
            <HeroSection
                headline="Your Personal Shopping Assistant for Your Neighbourhood."
                subheadline="Just tell Chotu what you need. Groceries from your trusted local store, delivered on your schedule with a ₹5,000 credit line."
                ctaText="Download Chotu App"
                ctaLink="/download"
            />

            {/* Trust Badge */}
            <TrustBadge />

            {/* Value Props Section */}
            <section className="py-12 sm:py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                        Why Families Love Chotu
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {valueProps.map((prop, index) => (
                            <FeatureCard
                                key={prop.title}
                                icon={prop.icon}
                                title={prop.title}
                                description={prop.description}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <StepProcess steps={steps} title="How It Works" />
        </>
    )
}

