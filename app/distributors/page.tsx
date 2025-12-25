"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import HeroSection from "@/components/HeroSection"
import FeatureCard from "@/components/FeatureCard"
import StepProcess from "@/components/StepProcess"
import Badge from "@/components/Badge"
import { Upload, Users, Target, Shield, Network, FileCheck, BarChart3, CreditCard, Zap, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getAssetPath } from "@/lib/utils"

export default function DistributorsPage() {
    const steps = [
        {
            number: 1,
            title: "Upload Catalog",
            description: "Add your product catalog with pricing and stock levels.",
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
            image: getAssetPath("/assets/distributors/Icons/Scheme.png"),
        },
        {
            icon: Network,
            title: "Targeting",
            description: "Push targeted schemes directly to household AI agents.",
            image: getAssetPath("/assets/distributors/Icons/Target.png"),
        },
        {
            icon: Shield,
            title: "Risk Free",
            description: "Zero credit risk. Secure payments.",
            image: getAssetPath("/assets/distributors/Icons/Protection.png"),
        },
        {
            icon: Users,
            title: "Network",
            description: "Reach the end consumer through your existing authorized retailer network.",
            image: getAssetPath("/assets/distributors/Icons/People 80px.png"),
        },
    ]

    const detailedFeatures = [
        {
            icon: BarChart3,
            title: "Real-Time Analytics",
            description: "Track actual consumption patterns, not just purchase orders. See what households really buy and when they buy it.",
            details: "Get insights into consumer behavior, seasonal trends, and product performance across your entire network.",
            image: getAssetPath("/assets/distributors/Icons/Analytics.png"),
        },
        {
            icon: Zap,
            title: "Instant Scheme Deployment",
            description: "Launch promotional offers in minutes. Push them directly to relevant households through AI agents.",
            details: "No more waiting for retailers to communicate offers. Your schemes reach customers instantly and automatically.",
            image: getAssetPath("/assets/distributors/Icons/Fast.png"),
        },
        {
            icon: CreditCard,
            title: "Secure Payment Gateway",
            description: "All transactions are secure and digital. Get paid on time, every time, with zero credit risk.",
            details: "Our wallet system ensures you receive payments directly, eliminating the traditional credit cycle and payment delays.",
            image: getAssetPath("/assets/distributors/Icons/Protection 40px.png"),
        },
        {
            icon: TrendingUp,
            title: "Growth Through Data",
            description: "Leverage consumption data to optimize inventory, pricing, and marketing strategies.",
            details: "Make data-driven decisions about which products to promote, when to launch schemes, and how to expand your reach.",
            image: getAssetPath("/assets/distributors/Icons/Growth.png"),
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
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-blue-400 to-white py-12 sm:py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6 text-center lg:text-left"
                        >
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                                From Distributor to Master Seller
                            </h1>
                            <p className="text-lg text-white/90 sm:text-xl">
                                Reach customers directly through your authorized retailer network. Launch targeted schemes, track real-time consumption, and grow your business with zero credit risk while empowering local MSMEs.
                            </p>
                            <div>
                                <Button
                                    size="lg"
                                    className="rounded-full bg-white text-blue-600 px-8 py-6 text-base hover:bg-gray-100 font-semibold"
                                >
                                    Become a Master Seller
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </motion.div>

                        {/* Distributor Character */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative h-[400px] w-full lg:h-[500px] flex items-center justify-center"
                        >
                            <Image
                                src={getAssetPath("/assets/distributors/Avatars/Distributor 3d.png")}
                                alt="Distributor Character"
                                width={500}
                                height={500}
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

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
            <section className="py-12 sm:py-16 lg:py-24 bg-white">
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
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="border-2 hover:shadow-lg transition-shadow relative overflow-hidden h-full">
                                    <div className="absolute inset-0 opacity-5">
                                        <Image
                                            src={getAssetPath("/assets/distributors/Card background/D-Card section 2.png")}
                                            alt=""
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <CardHeader className="relative z-10">
                                        <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-3">
                                            <Image
                                                src={feature.image}
                                                alt={feature.title}
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="relative z-10">
                                        <CardDescription className="text-base">
                                            {feature.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Features Section */}
            <section className="py-12 sm:py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                        Powerful Tools for Modern Distribution
                    </h2>
                    <p className="mb-12 text-center text-lg text-gray-600 max-w-2xl mx-auto">
                        Transform your distribution business with AI-powered tools designed for the digital age.
                    </p>
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-center">
                            {/* Left Column */}
                            <div className="space-y-8">
                                {detailedFeatures.slice(0, 2).map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <Card className="border-2 hover:shadow-lg transition-shadow relative overflow-hidden">
                                            <div className="absolute inset-0 opacity-5">
                                                <Image
                                                    src={getAssetPath("/assets/distributors/Card background/D-Card section 3.png")}
                                                    alt=""
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <CardHeader className="relative z-10">
                                                <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-3">
                                                    <Image
                                                        src={feature.image}
                                                        alt={feature.title}
                                                        width={40}
                                                        height={40}
                                                    />
                                                </div>
                                                <CardTitle className="text-2xl">{feature.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent className="relative z-10 space-y-4">
                                                <CardDescription className="text-base">
                                                    {feature.description}
                                                </CardDescription>
                                                <p className="text-sm text-gray-600">
                                                    {feature.details}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Central Visual */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative h-[400px] w-full hidden lg:block"
                            >
                                <Image
                                    src={getAssetPath("/assets/distributors/Avatars/Distributor digital 3d.png")}
                                    alt="Distributor with Smartphone"
                                    fill
                                    className="object-contain"
                                />
                            </motion.div>

                            {/* Right Column */}
                            <div className="space-y-8">
                                {detailedFeatures.slice(2, 4).map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <Card className="border-2 hover:shadow-lg transition-shadow relative overflow-hidden">
                                            <div className="absolute inset-0 opacity-5">
                                                <Image
                                                    src={getAssetPath("/assets/distributors/Card background/D-Card section 4.png")}
                                                    alt=""
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <CardHeader className="relative z-10">
                                                <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-3">
                                                    <Image
                                                        src={feature.image}
                                                        alt={feature.title}
                                                        width={40}
                                                        height={40}
                                                    />
                                                </div>
                                                <CardTitle className="text-2xl">{feature.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent className="relative z-10 space-y-4">
                                                <CardDescription className="text-base">
                                                    {feature.description}
                                                </CardDescription>
                                                <p className="text-sm text-gray-600">
                                                    {feature.details}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
                            {/* Visual */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative h-[400px] w-full"
                            >
                                <Image
                                    src={getAssetPath("/assets/distributors/Avatars/Distributor + chotu 3d.png")}
                                    alt="Distributor and Chotu"
                                    fill
                                    className="object-contain"
                                />
                            </motion.div>

                            {/* Benefits List */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="space-y-6"
                            >
                                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                                    Why Master Sellers Choose Chotu
                                </h2>
                                {benefits.map((benefit, index) => (
                                    <Card key={index} className="border-2 relative overflow-hidden">
                                        <div className="absolute inset-0 opacity-5">
                                            <Image
                                                src={getAssetPath("/assets/distributors/Card background/D-Card section 5.png")}
                                                alt=""
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <CardHeader className="relative z-10">
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                                                    <CardDescription className="text-base mt-2">
                                                        {benefit.description}
                                                    </CardDescription>
                                                </div>
                                            </div>
                                        </CardHeader>
                                    </Card>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works - Detailed */}
            <section className="py-12 sm:py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                        How Master Seller Platform Works
                    </h2>
                    <p className="mb-12 text-center text-lg text-gray-600 max-w-2xl mx-auto">
                        A seamless process from onboarding to reaching customers.
                    </p>
                    <div className="max-w-4xl mx-auto space-y-8">
                        {[
                            {
                                step: 1,
                                title: "Upload Your Catalog",
                                description: "Start by uploading your product catalog with images, descriptions, pricing, and stock levels. Our system automatically syncs this with your retailer network, ensuring everyone has access to the latest product information and availability.",
                            },
                            {
                                step: 2,
                                title: "Connect Your Retailer Network",
                                description: "Add your authorized retailers to the platform. Once connected, they can access your catalog and start receiving orders from their local customers. You maintain full control over which retailers can sell your products.",
                            },
                            {
                                step: 3,
                                title: "Launch Schemes & Reach Customers",
                                description: "Create promotional schemes and offers. Our AI agent automatically pushes these to relevant households based on their purchase history and preferences. Customers see your offers through their local retailer's digital storefront, maintaining the trust of shopping locally.",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="border-2 relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-5">
                                        <Image
                                            src={getAssetPath("/assets/distributors/Card background/D-card section 6.png")}
                                            alt=""
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <CardHeader className="relative z-10">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xl">
                                                {item.step}
                                            </div>
                                            <CardTitle className="text-xl">{item.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="relative z-10">
                                        <CardDescription className="text-base">
                                            {item.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-blue-500 to-blue-600">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Ready to Transform Your Distribution Business?
                        </h2>
                        <p className="text-lg sm:text-xl mb-8 opacity-90">
                            Join leading distributors who are reaching customers smarter with Chotu.
                        </p>
                        <Button
                            size="lg"
                            className="rounded-full bg-white text-blue-600 px-8 py-6 text-base hover:bg-gray-100 font-semibold"
                        >
                            Become a Master Seller
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}
