"use client"

import HeroSection from "@/components/HeroSection"
import FeatureCard from "@/components/FeatureCard"
import StepProcess from "@/components/StepProcess"
import Badge from "@/components/Badge"
import { Upload, Users, Target, Shield, Network, FileCheck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function DistributorsPage() {
    const steps = [
        {
            number: 1,
            title: "Upload Catalog",
            description: "Add your product catalog with pricing and availability.",
            icon: Upload,
        },
        {
            number: 2,
            title: "Upload Retailers",
            description: "Add your authorized retailer network.",
            icon: Users,
        },
        {
            number: 3,
            title: "And that's it!",
            description: "Start pushing schemes and reaching customers instantly.",
            icon: FileCheck,
        },
    ]

    const features = [
        {
            icon: Target,
            title: "Scheme Management",
            description: "Create offers and approve retailer offers instantly.",
        },
        {
            icon: Network,
            title: "Targeting",
            description: "Push targeted schemes directly to household AI agents.",
        },
        {
            icon: Shield,
            title: "Risk Free",
            description: "Zero credit risk. Secure payments.",
        },
        {
            icon: Users,
            title: "Network",
            description: "Reach the end consumer through your existing authorized retailer network.",
        },
    ]

    return (
        <>
            {/* Hero Section */}
            <HeroSection
                headline="Reach Customers Through Authorized Retailers"
                subheadline="No Risk. Push Targeted Schemes. Empower MSMEs."
                ctaText="Become a Master Seller"
                ctaLink="/distributors/register"
            />

            {/* Trust Badges */}
            <section className="py-8 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Badge name="MSME Empowerment" />
                        <Badge name="ONDC Compatible" />
                        <Badge name="Startup India" />
                    </div>
                </div>
            </section>

            {/* How to Become a Master Seller */}
            <section className="py-12 sm:py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                        How to Become a Master Seller
                    </h2>
                    <StepProcess steps={steps} />
                </div>
            </section>

            {/* Features & Capabilities */}
            <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                        Features & Capabilities
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={feature.title}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
