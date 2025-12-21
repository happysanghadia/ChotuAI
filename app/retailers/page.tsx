"use client"

import HeroSection from "@/components/HeroSection"
import FeatureCard from "@/components/FeatureCard"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Shield, TrendingUp, Package, Wallet, Calendar, CheckCircle, Store, Clock, Users, BarChart3, Smartphone, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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

    const detailedFeatures = [
        {
            icon: Store,
            title: "Digital Storefront",
            description: "Your shop gets a beautiful online presence automatically. No website building, no technical skills needed.",
            details: "Customers can browse your inventory, see real-time availability, and place orders through the Chotu app. Everything is managed through a simple interface."
        },
        {
            icon: BarChart3,
            title: "Smart Inventory Management",
            description: "AI-powered demand prediction tells you exactly what to stock and when.",
            details: "Reduce waste, increase turnover, and never run out of popular items. The system learns from your sales patterns and neighborhood preferences."
        },
        {
            icon: Clock,
            title: "Scheduled Deliveries",
            description: "No rush, no stress. Pack orders during your free time and deliver on scheduled slots.",
            details: "Customers choose convenient time slots, giving you flexibility to manage deliveries around your regular shop operations."
        },
        {
            icon: Users,
            title: "Wider Customer Reach",
            description: "Reach customers who haven't walked into your shop yet, but live in your neighborhood.",
            details: "Expand your customer base without expensive marketing. Your digital storefront is discoverable by everyone nearby."
        },
    ]

    const operationalBenefits = [
        {
            title: "No Credit Risk",
            description: "All payments are digital and guaranteed. No more chasing customers for payments or managing udhaar books."
        },
        {
            title: "Automated Catalog Sync",
            description: "Your inventory updates automatically from your distributor's master catalog. No manual entry needed."
        },
        {
            title: "Data-Driven Decisions",
            description: "See what sells, when it sells, and to whom. Make smarter inventory decisions based on real data."
        },
    ]

    const faqs = [
        {
            question: "Do I need a delivery fleet?",
            answer: "No, you don't need a separate delivery fleet. Use your existing staff or delivery partners. Deliveries are scheduled, not instant, so you can plan them around your regular shop hours."
        },
        {
            question: "How do I get paid?",
            answer: "All payments are digital and secure. Settlements happen monthly directly to your merchant wallet. No cash handling, no payment delays, and zero credit risk."
        },
        {
            question: "How do I manage inventory?",
            answer: "You don't need to manually manage inventory. The system syncs with your distributor's master catalog. You just toggle items as 'In Stock' or 'Out of Stock' when needed."
        },
        {
            question: "What if I don't have a smartphone?",
            answer: "Our platform works on basic smartphones. We provide training and support to help you get started. The interface is simple and designed for ease of use."
        },
        {
            question: "Will this affect my regular walk-in customers?",
            answer: "Not at all! This is an additional channel for your business. Your regular customers can still shop in-store, and you'll also get new online orders from the neighborhood."
        },
        {
            question: "How quickly can I start receiving orders?",
            answer: "Once your distributor sets you up on the platform, you can start receiving orders immediately. The setup process is quick and simple."
        },
        {
            question: "What happens if a customer wants to return something?",
            answer: "Returns are handled through the platform, just like regular returns. The system tracks everything, making it easy to manage returns and refunds."
        },
        {
            question: "Is there any cost to join?",
            answer: "There are no upfront costs. You only pay when you make sales, and the platform fee is transparent and competitive. Talk to your distributor for specific details."
        },
    ]

    return (
        <>
            {/* Hero Section */}
            <HeroSection
                headline="Your Digital Store"
                subheadline="Transform your kirana store into a digital business with zero upfront costs. Get automatic inventory sync, scheduled deliveries, guaranteed monthly payments, and reach more customers in your neighborhood—all brought to you by your trusted distributor."
                ctaText="Contact your Distributor"
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

            {/* Detailed Features Section */}
            <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                        Everything You Need to Succeed
                    </h2>
                    <p className="mb-12 text-center text-lg text-gray-600 max-w-2xl mx-auto">
                        Powerful tools designed specifically for local kirana stores to go digital effortlessly.
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

            {/* Financial Benefits Section */}
            <section className="py-12 sm:py-16 lg:py-24">
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

            {/* Operational Benefits */}
            <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                        Operational Advantages
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto">
                        {operationalBenefits.map((benefit, index) => (
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

            {/* How It Works Section */}
            <section className="py-12 sm:py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                        How Your Digital Store Works
                    </h2>
                    <p className="mb-12 text-center text-lg text-gray-600 max-w-2xl mx-auto">
                        A simple three-step process to start receiving online orders.
                    </p>
                    <div className="max-w-4xl mx-auto space-y-8">
                        <Card className="border-2">
                            <CardHeader>
                                <div className="flex items-center space-x-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-xl">
                                        1
                                    </div>
                                    <CardTitle className="text-xl">Get Set Up by Your Distributor</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base">
                                    Your distributor adds you to the platform and syncs your inventory from their master catalog. 
                                    You get access to a simple app where you can manage your store. No technical knowledge required.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="border-2">
                            <CardHeader>
                                <div className="flex items-center space-x-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-xl">
                                        2
                                    </div>
                                    <CardTitle className="text-xl">Receive Orders & Schedule Deliveries</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base">
                                    Customers in your neighborhood place orders through the Chotu app. You receive notifications 
                                    and can pack orders during your free time. Deliveries are scheduled for convenient time slots, 
                                    giving you flexibility.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="border-2">
                            <CardHeader>
                                <div className="flex items-center space-x-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-xl">
                                        3
                                    </div>
                                    <CardTitle className="text-xl">Get Paid Monthly</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base">
                                    All payments are digital and secure. You receive monthly settlements directly to your merchant 
                                    wallet. No cash handling, no payment delays, and zero credit risk. It&apos;s that simple.
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <div className="mx-auto max-w-3xl">
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-left font-semibold">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 text-base">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-primary to-secondary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Ready to Go Digital?
                        </h2>
                        <p className="text-lg sm:text-xl mb-8 opacity-90">
                            Join hundreds of kirana stores that are growing their business with Chotu.
                        </p>
                        <a href="/retailers/request">
                            <Button
                                size="lg"
                                className="rounded-full bg-white text-primary px-8 py-6 text-base hover:bg-gray-100"
                            >
                                Contact your Distributor
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
