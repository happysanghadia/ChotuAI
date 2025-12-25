"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import FeatureCard from "@/components/FeatureCard"
import StepProcess from "@/components/StepProcess"
import TrustBadge from "@/components/TrustBadge"
import { MessageSquare, Search, ShoppingCart, Heart, Clock, Shield, Users, TrendingUp, CheckCircle, Star, Truck } from "lucide-react"
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
            description: "Chotu searches your neighborhood network and finds availability.",
            icon: Search,
        },
        {
            number: 3,
            title: "Scheduled Delivery",
            description: "Pick your convenient time slot. No waiting, no stress.",
            icon: Truck,
        },
    ]

    const benefits = [
        {
            title: "Trusted & Safe",
            description: "Shop from your neighborhood kirana store you know and trust.",
            image: "/images/consumers/Avatars/Chotu 3d trust.png",
        },
        {
            title: "Support Local",
            description: "Every purchase supports your local community's businesses.",
            image: "/images/consumers/Avatars/Chotu 3d delivery.png",
        },
        {
            title: "Digital Convenience",
            description: "Modern shopping experience with traditional trust.",
            image: "/images/consumers/Avatars/Chotu 3d digital.png",
        },
    ]

    const stats = [
        { number: "10,000+", label: "Happy Families", image: "/images/consumers/Avatars/Family 3d stats.png" },
        { number: "500+", label: "Local Kiranas", image: "/images/consumers/Avatars/Store 3d.png" },
        { number: "50+", label: "Distributors", image: "/images/consumers/Avatars/Distributor 3d stats.png" },
        { number: "24/7", label: "AI Support", image: "/images/consumers/Avatars/Chotu 3d help center.png" },
    ]

    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-orange-400 via-orange-300 to-white py-12 sm:py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6 text-center lg:text-left"
                        >
                            {/* Badge */}
                            <div className="inline-flex items-center rounded-full border border-green-300 bg-white px-4 py-2 text-sm font-medium text-green-700">
                                Local Kiranas are going digital
                            </div>

                            {/* Headline */}
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                                Chotu AI - Your Friendly Neighbourhood Shopping Assistant
                            </h1>

                            {/* Description */}
                            <p className="text-lg text-gray-700 sm:text-xl">
                                AI shopping assistant brought straight to your phone by your neighbourhood retailer
                            </p>

                            {/* CTA Button */}
                            <div>
                                <Button
                                    size="lg"
                                    className="rounded-full bg-orange-600 text-white px-8 py-6 text-base hover:bg-orange-700 font-semibold"
                                >
                                    Download Chotu App
                                </Button>
                            </div>
                        </motion.div>

                        {/* Chotu Character */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative h-[400px] w-full lg:h-[500px] flex items-center justify-center"
                        >
                            <Image
                                src="/images/consumers/Avatars/Chotu 3d delivery.png"
                                alt="Chotu AI Character"
                                width={500}
                                height={500}
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Trust Badge */}
            <TrustBadge />

            {/* Core Mission Section */}
            <section className="py-12 sm:py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
                            {/* Family Character */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative h-[400px] w-full"
                            >
                                <Image
                                    src="/images/consumers/Avatars/Family 3d figure.png"
                                    alt="Family"
                                    fill
                                    className="object-contain"
                                />
                            </motion.div>

                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="space-y-4"
                            >
                                <div className="inline-flex items-center rounded-full border border-green-300 bg-green-50 px-4 py-2 text-sm font-medium text-green-700 mb-4">
                                    Trusted by 10,000+ families
                                </div>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                                    Empowering local Kiranas. Serving Local Communities
                                </h2>
                                <ul className="space-y-3 text-lg text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>We connect your trusted neighbourhood store with modern technology.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>Making shopping convenient while keeping the personal touch that makes local shopping special.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>Every order supports your community&apos;s local businesses.</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section - The Experience */}
            <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                        The Experience
                    </h2>
                    <p className="mb-12 text-center text-lg text-gray-600 max-w-2xl mx-auto">
                        Everyday shopping made simple, local, and stress-free.
                    </p>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="border-2 hover:shadow-lg transition-shadow relative overflow-hidden bg-white">
                                <div className="absolute inset-0 opacity-5">
                                    <Image
                                        src="/images/consumers/Cards Background/Section 2 Card.png"
                                        alt=""
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <CardContent className="p-8 relative z-10">
                                    <div className="mb-4 inline-flex rounded-lg bg-orange-100 p-3">
                                        <Image
                                            src="/images/consumers/Icons/Chat.png"
                                            alt="Chat"
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        Chat or Talk in your Language
                                    </h3>
                                    <p className="text-gray-600 text-base">
                                        Use English or Hindi. Just speak to the AI agent or chat text-to-text.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <Card className="border-2 hover:shadow-lg transition-shadow relative overflow-hidden bg-white">
                                <div className="absolute inset-0 opacity-5">
                                    <Image
                                        src="/images/consumers/Cards Background/Section 2 Card.png"
                                        alt=""
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <CardContent className="p-8 relative z-10">
                                    <div className="mb-4 inline-flex rounded-lg bg-orange-100 p-3">
                                        <Image
                                            src="/images/consumers/Icons/Store.png"
                                            alt="Store"
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        Your trusted goods, digitized.
                                    </h3>
                                    <p className="text-gray-600 text-base">
                                        Order from home, delivered by the shop you know.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Digital Wallet Section */}
            <section className="py-12 sm:py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-start">
                            {/* Chotu Wallet Character - Above the card */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative h-[300px] w-full flex items-center justify-center lg:order-1"
                            >
                                <Image
                                    src="/images/consumers/Avatars/Chotu 3d wallet.png"
                                    alt="Chotu with Wallet"
                                    fill
                                    className="object-contain"
                                />
                            </motion.div>

                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="lg:order-2"
                            >
                                <Card className="border-2 border-gray-200 bg-white relative overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 opacity-5">
                                        <Image
                                            src="/images/consumers/Cards Background/Section 3 Card.png"
                                            alt=""
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <CardContent className="p-8 relative z-10">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                                            Digital Wallet with Credit Up to ₹5,000
                                        </h2>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                <span>Get instant credit approval from your neighborhood retailer.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                <span>Shop now and pay later with a digital wallet that offers up to ₹5,000 in credit.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                <span>Settle your balance bi-weekly or monthly, just like your traditional khata, but with the convenience of digital payments.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                <span>No credit checks, no complicated processes. Just trust between you and your local store.</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-12 sm:py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                        How It Works
                    </h2>
                    <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                        {/* Connector Line (hidden on mobile, shown on desktop) */}
                        <div className="absolute left-1/2 top-12 hidden h-0.5 w-2/3 -translate-x-1/2 bg-orange-200 md:block" />

                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative z-10 text-center"
                            >
                                {/* Step Number Circle */}
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-xl font-bold text-white shadow-lg">
                                    <step.icon className="h-8 w-8" />
                                </div>

                                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section - Why Choose Chotu */}
            <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                        Why Choose Chotu?
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="border-2 hover:shadow-lg transition-shadow relative overflow-hidden h-full bg-white">
                                    <div className="absolute inset-0 opacity-5">
                                        <Image
                                            src="/images/consumers/Cards Background/Section 5 Card.png"
                                            alt=""
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <CardContent className="p-8 relative z-10 text-center">
                                        <div className="relative h-32 w-32 mx-auto mb-4">
                                            <Image
                                                src={benefit.image}
                                                alt={benefit.title}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {benefit.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 sm:py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="text-center border-2 hover:shadow-lg transition-shadow relative overflow-hidden bg-white">
                                    <div className="absolute inset-0 opacity-10">
                                        <Image
                                            src="/images/consumers/Cards Background/Stats card.png"
                                            alt=""
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <CardContent className="pt-6 relative z-10">
                                        <div className="relative h-24 w-24 mx-auto mb-4">
                                            <Image
                                                src={stat.image}
                                                alt={stat.label}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <div className="text-4xl sm:text-5xl font-bold text-orange-600 mb-2">
                                            {stat.number}
                                        </div>
                                        <div className="text-sm sm:text-base text-gray-600 font-medium">
                                            {stat.label}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-orange-500 to-orange-600">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Ready to Experience Digital Shopping?
                        </h2>
                        <p className="text-lg sm:text-xl mb-8 opacity-90">
                            Join thousands of families who are shopping smarter with Chotu.
                        </p>
                        <div className="flex justify-center">
                            <Button
                                size="lg"
                                className="rounded-full bg-white text-orange-600 px-8 py-6 text-base hover:bg-gray-100 font-semibold"
                            >
                                Download Chotu App
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
