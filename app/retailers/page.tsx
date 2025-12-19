"use client"

import HeroSection from "@/components/HeroSection"
import FeatureCard from "@/components/FeatureCard"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Shield, TrendingUp, Users, Store, Clock, Wallet } from "lucide-react"

export default function RetailersPage() {
    const benefits = [
        {
            icon: Shield,
            title: "No More 'Udhaar' Tension",
            description:
                "All payments are digital. We handle the credit risk.",
        },
        {
            icon: TrendingUp,
            title: "Sell More, Waste Less",
            description:
                "AI demand prediction helps you stock exactly what sells.",
        },
        {
            icon: Users,
            title: "Wider Reach",
            description:
                "Get orders from neighbours who haven't walked into your shop yet.",
        },
    ]

    const faqs = [
        {
            question: "Do I need a delivery fleet?",
            answer:
                "No, use your existing staff. Deliveries are scheduled, not instant, so you can pack orders during free time.",
        },
        {
            question: "How do I get paid?",
            answer:
                "Settles directly to your Merchant Wallet. All payments are digital and secure.",
        },
        {
            question: "How do I manage inventory?",
            answer:
                "We upload your inventory. You just toggle 'In Stock' when items are available.",
        },
        {
            question: "What if I don't have a smartphone?",
            answer:
                "Our platform works on basic smartphones. We provide training and support to get you started.",
        },
    ]

    return (
        <>
            {/* Hero Section */}
            <HeroSection
                headline="Turn Your Kirana into a Smart Digital Store."
                subheadline="Get online orders, cashless payments, and more customers without changing how you work."
                ctaText="Register My Shop"
                ctaLink="/retailers/register"
            />

            {/* Why Join Chotu Section */}
            <section className="py-12 sm:py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                        Why Join Chotu?
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

            {/* Operations Section */}
            <section className="bg-gray-50 py-12 sm:py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                        How It Works
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="rounded-lg border bg-white p-6">
                            <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                                <Store className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-gray-900">
                                Digital Storefront
                            </h3>
                            <p className="text-gray-600">
                                We upload your inventory. You just toggle &apos;In Stock&apos; when items
                                are available.
                            </p>
                        </div>

                        <div className="rounded-lg border bg-white p-6">
                            <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                                <Clock className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-gray-900">
                                Scheduled Orders
                            </h3>
                            <p className="text-gray-600">
                                Pack orders during free time. Deliveries are scheduled, not
                                instant.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-12 sm:py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <div className="mx-auto max-w-3xl">
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-left">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>
        </>
    )
}

