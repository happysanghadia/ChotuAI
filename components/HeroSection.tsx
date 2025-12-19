"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Smartphone } from "lucide-react"

interface HeroSectionProps {
    headline: string
    subheadline: string
    ctaText: string
    ctaLink: string
    image?: string
    imageAlt?: string
}

export default function HeroSection({
    headline,
    subheadline,
    ctaText,
    ctaLink,
    image,
    imageAlt = "Hero image",
}: HeroSectionProps) {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50/30 to-blue-50/30 py-12 sm:py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                            {headline}
                        </h1>
                        <p className="text-lg text-gray-600 sm:text-xl">
                            {subheadline}
                        </p>
                        <div>
                            <a href={ctaLink}>
                                <Button
                                    size="lg"
                                    className="rounded-full bg-primary px-8 py-6 text-base hover:bg-primary/90"
                                >
                                    <Smartphone className="mr-2 h-5 w-5" />
                                    {ctaText}
                                </Button>
                            </a>
                        </div>
                    </motion.div>

                    {/* Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative h-[400px] w-full lg:h-[500px]"
                    >
                        {image ? (
                            <Image
                                src={image}
                                alt={imageAlt}
                                fill
                                className="rounded-lg object-contain"
                                priority
                            />
                        ) : (
                            <div className="flex h-full items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                                <div className="text-center">
                                    <Smartphone className="mx-auto h-32 w-32 text-primary/30" />
                                    <p className="mt-4 text-sm text-gray-500">Visual Placeholder</p>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

