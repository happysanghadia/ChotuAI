"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Store,
    Users,
    TrendingUp,
    CheckCircle,
    CalendarCheck,
    ShieldCheck,
    Smartphone,
    Package,
    Clock,
    ArrowRight,
    Server,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getAssetPath } from "@/lib/utils"

export default function RetailersPage() {
    return (
        <>
            {/* Section A: Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-green-500 via-green-400 to-white py-12 sm:py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12">
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
                                Brought to you by YOUR Distributor
                            </div>

                            {/* Headline */}
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Your Digital Storefront. Zero Setup. Zero Inventory Work.
                            </h1>

                            {/* Description */}
                            <p className="text-lg text-white/90 sm:text-xl max-w-xl mx-auto lg:mx-0">
                                Join the digital revolution backed by your trusted distributor. Get more customers, guaranteed monthly payments, and effortless inventory sync.
                            </p>

                            {/* CTA Button */}
                            <div>
                                <Button
                                    size="lg"
                                    className="rounded-full bg-white text-green-600 px-8 py-6 text-base hover:bg-gray-100 font-semibold"
                                >
                                    Request Your Distributor
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </motion.div>

                        {/* Retailer Character */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative h-[400px] w-full lg:h-[500px] flex items-center justify-center"
                        >
                            <Image
                                src={getAssetPath("/assets/retailers/Avatars/Retailer + shop 3d.png")}
                                alt="Happy retailer with shop"
                                width={500}
                                height={500}
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section B: Top-line Benefits */}
            <section className="py-12 sm:py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                    <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                        Grow Your Business, Not Your Workload
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {[
                            {
                                title: "Your Digital Storefront",
                                description: "Get a professional online identity without hiring tech support. Your shop is now open to the entire digital neighbourhood.",
                                icon: getAssetPath("/assets/retailers/Icons/R-Store.png"),
                            },
                            {
                                title: "Wider Customer Reach",
                                description: "Don't just wait for walk-ins. Capture orders from neighbors who are looking for convenience but trust your quality.",
                                icon: getAssetPath("/assets/retailers/Icons/R-people.png"),
                            },
                            {
                                title: "Increase Sales Volume",
                                description: "Get scheduled delivery orders daily. Fill the gaps in your day with productive sales, boosting your monthly revenue.",
                                icon: getAssetPath("/assets/retailers/Icons/R-Growth.png"),
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full border-2 hover:shadow-lg transition-shadow hover:-translate-y-1 relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-5">
                                        <Image
                                            src={getAssetPath("/assets/retailers/Card Background/R-card section 2.png")}
                                            alt=""
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <CardHeader className="relative z-10">
                                        <div className="mb-4 inline-flex rounded-lg bg-green-100 p-3">
                                            <Image
                                                src={item.icon}
                                                alt={item.title}
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <CardTitle className="text-xl">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="relative z-10">
                                        <CardDescription className="text-base">
                                            {item.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    </div>
                </div>
            </section>

            {/* Section C: Distributor Integration */}
            <section className="py-12 sm:py-16 lg:py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                                Powered by Your Distributor&apos;s Database
                            </h2>
                            <p className="text-xl font-semibold text-gray-700">
                                Forget manual data entry. We sync everything for you.
                            </p>
                            <div className="space-y-4">
                                {[
                                    {
                                        title: "Auto-Sync Inventory",
                                        description: "When your distributor stocks a product, it appears on your app instantly. No manual typing.",
                                    },
                                    {
                                        title: "Simple Toggle Control",
                                        description: "Don't carry a product? Just toggle it 'OFF'. Have it? Toggle 'ON'. That's it.",
                                    },
                                    {
                                        title: "Data-Driven Ordering",
                                        description: "Make data-driven decisions. The app tells you what to restock based on actual neighborhood demand.",
                                    },
                                    {
                                        title: "One-Tap Restocking",
                                        description: "Place orders with the distributor for out-of-stock items directly through the app.",
                                    },
                                ].map((point, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-gray-900">{point.title}</p>
                                            <p className="text-gray-600">{point.description}</p>
                                        </div>
                                    </div>
                                )
                            </div>
                        </motion.div>

                        {/* Visual */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative h-[400px] w-full"
                        >
                            <Image
                                src={getAssetPath("/assets/retailers/Avatars/Database 3d.png")}
                                alt="Database sync visualization"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section D: Financial Freedom */}
            <section className="py-12 sm:py-16 lg:py-24 bg-blue-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                    <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                        Risk-Free Business Model
                    </h2>
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-start">
                            {/* Retailer Leaning Character */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative h-[400px] w-full lg:col-span-1"
                            >
                                <Image
                                    src={getAssetPath("/assets/retailers/Avatars/Retailer leaning 3d.png")}
                                    alt="Retailer leaning"
                                    fill
                                    className="object-contain"
                                />
                            </motion.div>

                            {/* Cards - Horizontal Layout */}
                            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: "Guaranteed Monthly Payments",
                                        description: "All digital orders are tracked accurately. You receive a guaranteed payment every month directly to your bank account.",
                                        icon: getAssetPath("/assets/retailers/Icons/R-Calender.png"),
                                    },
                                    {
                                        title: "No Upfront Capital Risk",
                                        description: "Under the Zero-risk model, you don't pay upfront. Your stock are on your credit. We handle the customer credit.",
                                        icon: getAssetPath("/assets/retailers/Icons/R-protection.png"),
                                    },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <Card className="h-full border-2 bg-white relative overflow-hidden">
                                            <div className="absolute inset-0 opacity-5">
                                                <Image
                                                    src={getAssetPath("/assets/retailers/Card Background/R-card section 4.png")}
                                                    alt=""
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <CardHeader className="relative z-10">
                                                <div className="mb-4 inline-flex rounded-lg bg-green-100 p-3">
                                                    <Image
                                                        src={item.icon}
                                                        alt={item.title}
                                                        width={40}
                                                        height={40}
                                                    />
                                                </div>
                                                <CardTitle className="text-2xl">{item.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent className="relative z-10">
                                                <CardDescription className="text-base">
                                                    {item.description}
                                                </CardDescription>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                )
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section E: Operational Excellence */}
            <section className="py-12 sm:py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                    <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                        Designed for the Busy Kirana
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto">
                        {[
                            {
                                title: "Zero Inventory Management",
                                description: "Since inventory syncs from the master catalog, you never have to count, track, or manage stock manually.",
                                icon: getAssetPath("/assets/retailers/Icons/Order.png"),
                            },
                            {
                                title: "Scheduled Deliveries",
                                description: "Focus on running your store. We handle the delivery for every single order. Customers select their slots, you just pack.",
                                icon: getAssetPath("/assets/retailers/Icons/R-delivery.png"),
                            },
                            {
                                title: "Lean Operations",
                                description: "No new delivery boys needed. Work with your existing staff, just pack orders and hand them over to our delivery partners.",
                                icon: getAssetPath("/assets/retailers/Icons/Time.png"),
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full border-2 text-center relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-5">
                                        <Image
                                            src={getAssetPath("/assets/retailers/Card Background/R-card section 5.png")}
                                            alt=""
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <CardHeader className="relative z-10">
                                        <div className="mb-4 inline-flex rounded-lg bg-green-100 p-3 mx-auto">
                                            <Image
                                                src={item.icon}
                                                alt={item.title}
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <CardTitle className="text-xl">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="relative z-10">
                                        <CardDescription className="text-base">
                                            {item.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    </div>
                </div>
            </section>

            {/* Section F: How It Works */}
            <section className="py-12 sm:py-16 lg:py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                    <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                        How It Works
                    </h2>
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
                            {[
                                {
                                    step: 1,
                                    title: "Request Access",
                                    description: "Ask your distributor to link your store to the Chotu Retailer Network.",
                                },
                                {
                                    step: 2,
                                    title: "Auto-Setup",
                                    description: "Your digital store is created instantly with products from your Chotu distributor's catalog.",
                                },
                                {
                                    step: 3,
                                    title: "Toggle Stock",
                                    description: "Simply mark which items you have in stock using the 'Available/Out of Stock' toggle.",
                                },
                                {
                                    step: 4,
                                    title: "Start Selling",
                                    description: "Receive orders, pack them, and wait for pickup during the scheduled slot.",
                                },
                                {
                                    step: 5,
                                    title: "Smart Restock",
                                    description: "Place orders to your distributor for out of stock items from the app itself.",
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.step}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative"
                                >
                                    {/* Connector Line (hidden on mobile) */}
                                    {index < 4 && (
                                        <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-green-200 z-0" style={{ width: 'calc(100% - 2rem)' }} />
                                    )}
                                    <div className="relative z-10 text-center">
                                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white shadow-lg">
                                            {item.step}
                                        </div>
                                        <h3 className="mb-2 text-lg font-semibold text-gray-900">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        </div>
                    </div>
                </div>
            </section>

            {/* Section G: FAQ */}
            <section className="py-12 sm:py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                    <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                        Common Questions from Retailers
                    </h2>
                    <div className="mx-auto max-w-3xl">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-left font-semibold text-gray-900">
                                    Do I need to hire new people to manage the app?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base">
                                    No. The app is designed for zero-maintenance. Inventory updates automatically. You only need to accept orders and pack them.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-left font-semibold text-gray-900">
                                    What if I don&apos;t have a product the customer ordered?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base">
                                    You can mark it &apos;out of stock&apos; instantly in the order view. The AI will find it from another nearby store or ask the distributor to send it to you.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-left font-semibold text-gray-900">
                                    Who pays for the delivery cost?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base">
                                    Chotu focuses on neighbourhood deliveries (walking distance/short bike ride). You use your existing staff. The efficiency of batch delivery covers the effort.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-left font-semibold text-gray-900">
                                    Is my payment secure?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base">
                                    100%. We use a digital ledger system. You get a clear statement of all sales and a guaranteed monthly settlement directly to your bank.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5">
                                <AccordionTrigger className="text-left font-semibold text-gray-900">
                                    Do I need to pay the distributor upfront for all products?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base">
                                    If you are on the &apos;Consignee Model&apos;, no. You pay only when the item is sold to the customer. This reduces your risk.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-6">
                                <AccordionTrigger className="text-left font-semibold text-gray-900">
                                    What if I am not tech-savvy?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base">
                                    If you can use WhatsApp, you can use Chotu. It is built in Hindi and English with big buttons and voice features.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-7">
                                <AccordionTrigger className="text-left font-semibold text-gray-900">
                                    Will this compete with my walk-in customers?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base">
                                    No, it adds to them. It captures customers who are too busy to visit or who are currently ordering from big apps.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-8">
                                <AccordionTrigger className="text-left font-semibold text-gray-900">
                                    How does the inventory sync work?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base">
                                    Your distributor uploads the &apos;Master Catalog&apos;. Your app sees this list. You just switch the button &apos;ON&apos; for items you carry.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-9">
                                <AccordionTrigger className="text-left font-semibold text-gray-900">
                                    Can I create my own offers?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base">
                                    Yes! While the distributor pushes brand schemes, you can also run local offers for your loyal customers.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-10">
                                <AccordionTrigger className="text-left font-semibold text-gray-900">
                                    How do I sign up?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base">
                                    You cannot sign up alone. You must be authorized by a Master Seller (Distributor). Click &apos;Request Your Distributor&apos; to start.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-green-500 to-green-600">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Ready to Transform Your Store?
                        </h2>
                        <p className="text-lg sm:text-xl mb-8 opacity-90">
                            Join the digital revolution powered by your trusted distributor.
                        </p>
                        <Button
                            size="lg"
                            className="rounded-full bg-white text-green-600 px-8 py-6 text-base hover:bg-gray-100 font-semibold"
                        >
                            Request Your Distributor
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}
