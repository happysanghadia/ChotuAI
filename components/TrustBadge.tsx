"use client"

import { motion } from "framer-motion"
import { Users } from "lucide-react"

interface TrustBadgeProps {
    text?: string
}

export default function TrustBadge({
    text = "Trusted by 10,000+ Families",
}: TrustBadgeProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary/10 to-secondary/10 py-8"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
                    <Users className="h-8 w-8 text-primary" />
                    <p className="text-center text-lg font-semibold text-gray-900 sm:text-left">
                        {text}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

