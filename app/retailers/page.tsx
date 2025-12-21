"use client"

import HeroSection from "@/components/HeroSection"
import FeatureCard from "@/components/FeatureCard"
import { Shield, TrendingUp, Package, Wallet, Calendar, CheckCircle } from "lucide-react"

export default function RetailersPage() {
    const whyGoDigital = [
        {
            icon: Package,
            title: "Zero Work",
            description: "No inventory management required. We sync with the Master Catalog.",
        },
        {
            icon: Shield,
            title: "No Risk",
            description: "Data-backed demand. You stock what sells.",
        },
        {
            icon: TrendingUp,
            title: "Increase Sales",
            description: "Get scheduled delivery orders from the neighborhood.",
        },
    ]

    const financialBenefits = [
        {
            icon: Wallet,
            title: "Settlement",
            description: "Monthly payment settlement. Guaranteed.",
        },
        {
            icon: CheckCircle,
            title: "Operations",
            description: "Get orders, schedule delivery, get paid. Simple.",
        },
    ]

    return (
        <>
            {/* Hero Section */}
            <HeroSection
                headline="Your Digital Store"
                subheadline="Brought to you by your distributors."
                ctaText="Request your Distributor"
                ctaLink="/retailers/request"
            />

            {/* Why Go Digital Section */}
            <section className="py-12 sm:py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                        Why Go Digital?
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {whyGoDigital.map((benefit, index) => (
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

            {/* Financial Benefits Section */}
            <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                        Financial Benefits
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-3xl mx-auto">
                        {financialBenefits.map((benefit, index) => (
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
        </>
    )
}
