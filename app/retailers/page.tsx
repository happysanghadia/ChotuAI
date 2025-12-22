"use client"

import { motion } from "framer-motion"
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

export default function RetailersPage() {
    return (
        <>
            {/* Section A: Hero */}
            <section className="relative overflow-hidden bg-gradient-to-r from-orange-50 to-white py-12 sm:py-16 lg:py-24">
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
                            <div className="inline-flex items-center rounded-full border border-orange-300 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700">
                                Brought to you by YOUR Distributor
                            </div>

                            {/* Headline */}
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                                Your Digital Storefront. Zero Setup. Zero Inventory Work.
                            </h1>

                            {/* Description */}
                            <p className="text-lg text-gray-600 sm:text-xl max-w-xl mx-auto lg:mx-0">
                                Join the digital revolution backed by your trusted distributor. Get more customers, guaranteed monthly payments, and effortless inventory sync.
                            </p>

                            {/* CTA Button */}
                            <div>
                                <Button
                                    size="lg"
                                    className="rounded-full bg-orange-600 px-8 py-6 text-base hover:bg-orange-700 text-white"
                                >
                                    Request Your Distributor
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </motion.div>

                        {/* Visual Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative h-[400px] w-full lg:h-[500px]"
                        >
                            <div className="flex h-full items-center justify-center rounded-lg bg-gradient-to-br from-orange-100 to-blue-100">
                                <div className="text-center">
                                    <Smartphone className="mx-auto h-32 w-32 text-orange-600" />
                                    <p className="mt-4 text-sm text-gray-600">Happy retailer with Chotu mascot</p>
                                </div>
                            </div>
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
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="h-full border-2 hover:shadow-lg transition-shadow hover:-translate-y-1">
                                <CardHeader>
                                    <div className="mb-4 inline-flex rounded-lg bg-orange-100 p-3">
                                        <Store className="h-6 w-6 text-orange-600" />
                                    </div>
                                    <CardTitle className="text-xl">Your Digital Storefront</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        Get a professional online identity without hiring tech support. Your shop is now open to the entire digital neighbourhood.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <Card className="h-full border-2 hover:shadow-lg transition-shadow hover:-translate-y-1">
                                <CardHeader>
                                    <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-3">
                                        <Users className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <CardTitle className="text-xl">Wider Customer Reach</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        Don&apos;t just wait for walk-ins. Capture orders from neighbors who are looking for convenience but trust your quality.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Card className="h-full border-2 hover:shadow-lg transition-shadow hover:-translate-y-1">
                                <CardHeader>
                                    <div className="mb-4 inline-flex rounded-lg bg-orange-100 p-3">
                                        <TrendingUp className="h-6 w-6 text-orange-600" />
                                    </div>
                                    <CardTitle className="text-xl">Increase Sales Volume</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        Get scheduled delivery orders daily. Fill the gaps in your day with productive sales, boosting your monthly revenue.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
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
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Auto-Sync Inventory</p>
                                        <p className="text-gray-600">When your distributor stocks a product, it appears on your app instantly. No manual typing.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Simple Toggle Control</p>
                                        <p className="text-gray-600">Don&apos;t carry a product? Just toggle it &apos;OFF&apos;. Have it? Toggle &apos;ON&apos;. That&apos;s it.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Data-Driven Ordering</p>
                                        <p className="text-gray-600">Make data-driven decisions. The app tells you what to restock based on actual neighborhood demand.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-gray-900">One-Tap Restocking</p>
                                        <p className="text-gray-600">Place orders with the distributor for out-of-stock items directly through the app.</p>
                                    </div>
                                </div>
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
                            <div className="flex h-full items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-orange-50">
                                <div className="flex flex-col items-center gap-8">
                                    <div className="flex items-center gap-4">
                                        <div className="rounded-lg bg-blue-100 p-6">
                                            <Server className="h-16 w-16 text-blue-600" />
                                        </div>
                                        <ArrowRight className="h-8 w-8 text-gray-400" />
                                        <div className="rounded-lg bg-orange-100 p-6">
                                            <Smartphone className="h-16 w-16 text-orange-600" />
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 text-center">Auto-sync from distributor database</p>
                                </div>
                            </div>
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
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="h-full border-2 bg-white">
                                <CardHeader>
                                    <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-3">
                                        <CalendarCheck className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <CardTitle className="text-2xl">Guaranteed Monthly Payments</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        All digital orders are tracked securely. You receive a guaranteed settlement every month directly to your bank account.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <Card className="h-full border-2 bg-white">
                                <CardHeader>
                                    <div className="mb-4 inline-flex rounded-lg bg-green-100 p-3">
                                        <ShieldCheck className="h-6 w-6 text-green-600" />
                                    </div>
                                    <CardTitle className="text-2xl">No Upfront Capital Risk</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        Under the Consignee model, you don&apos;t pay upfront. The distributor gets paid only when you sell on the app. We handle the customer credit.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
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
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="h-full border-2 text-center">
                                <CardHeader>
                                    <div className="mb-4 inline-flex rounded-lg bg-orange-100 p-3 mx-auto">
                                        <Package className="h-6 w-6 text-orange-600" />
                                    </div>
                                    <CardTitle className="text-xl">Zero Inventory Management</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        Since inventory syncs from the master catalog, you never have to count stock for the app.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <Card className="h-full border-2 text-center">
                                <CardHeader>
                                    <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-3 mx-auto">
                                        <Clock className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <CardTitle className="text-xl">Scheduled Deliveries</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        Stop running instantly for every small order. Customers select time slots (e.g., 2 PM - 4 PM), so you deliver in batches.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Card className="h-full border-2 text-center">
                                <CardHeader>
                                    <div className="mb-4 inline-flex rounded-lg bg-green-100 p-3 mx-auto">
                                        <Users className="h-6 w-6 text-green-600" />
                                    </div>
                                    <CardTitle className="text-xl">Lean Operations</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        No new delivery boys needed. Work with your existing staff, just more efficiently.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
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
                                    description: "Ask your distributor to link your shop to their Chotu Master Network.",
                                },
                                {
                                    step: 2,
                                    title: "Auto-Setup",
                                    description: "Your digital store is created instantly with products from the Distributor&apos;s catalog.",
                                },
                                {
                                    step: 3,
                                    title: "Toggle Stock",
                                    description: "Simply mark which items you have in stock using the &apos;In-Stock&apos; toggle.",
                                },
                                {
                                    step: 4,
                                    title: "Start Selling",
                                    description: "Receive orders, pack them, and deliver during the scheduled slot.",
                                },
                                {
                                    step: 5,
                                    title: "Smart Restock",
                                    description: "Place orders to distributor for out of stock items from the app itself.",
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
                                        <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-orange-200 z-0" style={{ width: 'calc(100% - 2rem)' }} />
                                    )}
                                    <div className="relative z-10 text-center">
                                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-xl font-bold text-white shadow-lg">
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
                            ))}
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
            <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-orange-600 to-orange-700">
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
                            className="rounded-full bg-white text-orange-600 px-8 py-6 text-base hover:bg-gray-100"
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
