"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface Step {
    number: number
    title: string
    description: string
    icon?: LucideIcon
}

interface StepProcessProps {
    steps: Step[]
    title?: string
}

export default function StepProcess({ steps, title }: StepProcessProps) {
    return (
        <section className="py-12 sm:py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {title && (
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl"
                    >
                        {title}
                    </motion.h2>
                )}
                <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Connector Line (hidden on mobile, shown on desktop) */}
                    <div className="absolute left-1/2 top-12 hidden h-0.5 w-2/3 -translate-x-1/2 bg-primary/20 md:block" />

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
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-white shadow-lg">
                                {step.icon ? (
                                    <step.icon className="h-8 w-8" />
                                ) : (
                                    step.number
                                )}
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
    )
}

