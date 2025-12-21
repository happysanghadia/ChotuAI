"use client"

import HeroSection from "@/components/HeroSection"
import FeatureCard from "@/components/FeatureCard"
import StepProcess from "@/components/StepProcess"
import Badge from "@/components/Badge"
import { Upload, Users, Target, Shield, Network, FileCheck, BarChart3, CreditCard, Zap, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"
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

    const detailedFeatures = [
        {
            icon: BarChart3,
            title: "Real-Time Analytics",
            description: "Track actual consumption patterns, not just purchase orders. See what households really buy and when they buy it.",
            details: "Get insights into consumer behavior, seasonal trends, and product performance across your entire network."
        },
        {
            icon: Zap,
            title: "Instant Scheme Deployment",
            description: "Launch promotional offers in minutes. Push them directly to relevant households through AI agents.",
            details: "No more waiting for retailers to communicate offers. Your schemes reach customers instantly and automatically."
        },
        {
            icon: CreditCard,
            title: "Secure Payment Gateway",
            description: "All transactions are secure and digital. Get paid on time, every time, with zero credit risk.",
            details: "Our wallet system ensures you receive payments directly, eliminating the traditional credit cycle and payment delays."
        },
        {
            icon: TrendingUp,
            title: "Growth Through Data",
            description: "Leverage consumption data to optimize inventory, pricing, and marketing strategies.",
            details: "Make data-driven decisions about which products to promote, when to launch schemes, and how to expand your reach."
        },
    ]

    const benefits = [
        {
            title: "Direct Consumer Connection",
            description: "Connect with end consumers through your authorized retailer network without intermediaries."
        },
        {
            title: "MSME Empowerment",
            description: "Help your retailer partners grow their business while expanding your market reach."
        },
        {
            title: "Competitive Advantage",
            description: "Stay ahead with AI-powered targeting and real-time consumer insights."
        },
    ]

    return (
        <>
            {/* Hero Section */}
            <HeroSection
                headline="From Distributor to Master Seller"
                subheadline="Reach customers directly through your authorized retailer network. Launch targeted schemes, track real-time consumption, and grow your business with zero credit risk while empowering local MSMEs."
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

            {/* Detailed Features Section */}
            <section className="py-12 sm:py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                        Powerful Tools for Modern Distribution
                    </h2>
                    <p className="mb-12 text-center text-lg text-gray-600 max-w-2xl mx-auto">
                        Transform your distribution business with AI-powered tools designed for the digital age.
                    </p>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {detailedFeatures.map((feature, index) => (
                            <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                                        <feature.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <CardDescription className="text-base">
                                        {feature.description}
                                    </CardDescription>
                                    <p className="text-sm text-gray-600">
                                        {feature.details}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                        Why Master Sellers Choose Chotu
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <Card key={index} className="text-center border-2">
                                <CardHeader>
                                    <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                                    <CardTitle>{benefit.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        {benefit.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works - Detailed */}
            <section className="py-12 sm:py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                        How Master Seller Platform Works
                    </h2>
                    <p className="mb-12 text-center text-lg text-gray-600 max-w-2xl mx-auto">
                        A seamless process from onboarding to reaching customers.
                    </p>
                    <div className="max-w-4xl mx-auto space-y-8">
                        <Card className="border-2">
                            <CardHeader>
                                <div className="flex items-center space-x-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-xl">
                                        1
                                    </div>
                                    <CardTitle className="text-xl">Upload Your Catalog</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base">
                                    Start by uploading your product catalog with images, descriptions, pricing, and stock levels. 
                                    Our system automatically syncs this with your retailer network, ensuring everyone has access 
                                    to the latest product information and availability.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="border-2">
                            <CardHeader>
                                <div className="flex items-center space-x-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-xl">
                                        2
                                    </div>
                                    <CardTitle className="text-xl">Connect Your Retailer Network</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base">
                                    Add your authorized retailers to the platform. Once connected, they can access your catalog 
                                    and start receiving orders from their local customers. You maintain full control over which 
                                    retailers can sell your products.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="border-2">
                            <CardHeader>
                                <div className="flex items-center space-x-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-xl">
                                        3
                                    </div>
                                    <CardTitle className="text-xl">Launch Schemes & Reach Customers</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base">
                                    Create promotional schemes and offers. Our AI agent automatically pushes these to relevant 
                                    households based on their purchase history and preferences. Customers see your offers 
                                    through their local retailer's digital storefront, maintaining the trust of shopping locally.
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-primary to-secondary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Ready to Transform Your Distribution Business?
                        </h2>
                        <p className="text-lg sm:text-xl mb-8 opacity-90">
                            Join leading distributors who are reaching customers smarter with Chotu.
                        </p>
                        <a href="/distributors/register">
                            <Button
                                size="lg"
                                className="rounded-full bg-white text-primary px-8 py-6 text-base hover:bg-gray-100"
                            >
                                Become a Master Seller
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
