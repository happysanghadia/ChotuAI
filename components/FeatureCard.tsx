"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface FeatureCardProps {
    icon: LucideIcon
    title: string
    description: string
    delay?: number
}

export default function FeatureCard({
    icon: Icon,
    title,
    description,
    delay = 0,
}: FeatureCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
        >
            <Card className="h-full border-2 transition-shadow hover:shadow-lg">
                <CardHeader>
                    <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                        <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className="text-base text-gray-600">
                        {description}
                    </CardDescription>
                </CardContent>
            </Card>
        </motion.div>
    )
}

