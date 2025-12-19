"use client"

import HeroSection from "@/components/HeroSection"
import FeatureCard from "@/components/FeatureCard"
import { Target, Shield, BarChart3, FileText, Building2, CreditCard, Receipt } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function DistributorsPage() {
    const benefits = [
        {
            icon: Target,
            title: "Direct Scheme Deployment",
            description:
                "Your offers are proactively pushed by our AI Agent directly to relevant households.",
        },
        {
            icon: Shield,
            title: "Zero Credit Risk",
            description:
                "We manage the consumer credit. You get secure payments via our wallet system.",
        },
        {
            icon: BarChart3,
            title: "Real Consumption Data",
            description:
                "See what households *actually* consume, not just what retailers buy.",
        },
    ]

    const requiredDocs = [
        { icon: FileText, text: "PAN" },
        { icon: Receipt, text: "GST" },
        { icon: CreditCard, text: "Cancelled Cheque" },
        { icon: Building2, text: "Incorporation Cert" },
    ]

    return (
        <>
            {/* Hero Section */}
            <HeroSection
                headline="Transform from Box-Mover to Data-Driven Master Seller."
                subheadline="Connect directly with end consumers, push targeted schemes, and eliminate credit risk."
                ctaText="Become a Master Seller"
                ctaLink="/distributors/register"
            />

            {/* Business Benefits Section */}
            <section className="py-12 sm:py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                        Business Benefits
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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

            {/* Master Seller Model Section */}
            <section className="bg-gray-50 py-12 sm:py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                        The Master Seller Model
                    </h2>

                    {/* Flow Diagram */}
                    <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-4">
                        <Card className="text-center">
                            <CardHeader>
                                <CardTitle>Wholesaler</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">Master Seller</p>
                            </CardContent>
                        </Card>

                        <div className="hidden items-center justify-center md:flex">
                            <div className="h-0.5 w-full bg-primary" />
                        </div>

                        <Card className="text-center">
                            <CardHeader>
                                <CardTitle>Retailer</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">Kirana Partner</p>
                            </CardContent>
                        </Card>

                        <div className="col-span-1 md:col-span-3">
                            <div className="flex items-center justify-center">
                                <div className="h-0.5 w-full bg-primary md:hidden" />
                            </div>
                        </div>

                        <Card className="col-span-1 text-center md:col-span-3">
                            <CardHeader>
                                <CardTitle>Consumer</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">End Customer</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Agreement Management */}
                    <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Direct Sale Agreement</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Digital agreements for direct sales to retailers and consumers.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Consignee Sale Agreement</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Manage consignment sales with automated tracking and settlement.
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Onboarding Requirements */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Onboarding Documents Required</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                                {requiredDocs.map((doc) => (
                                    <div
                                        key={doc.text}
                                        className="flex flex-col items-center space-y-2 rounded-lg border p-4"
                                    >
                                        <doc.icon className="h-8 w-8 text-primary" />
                                        <span className="text-sm font-medium">{doc.text}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 text-center">
                                <Button className="rounded-full bg-primary">
                                    Start Onboarding
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </>
    )
}

