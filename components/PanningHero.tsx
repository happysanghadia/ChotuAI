"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Smartphone, ShoppingBag } from "lucide-react"

interface PanningHeroProps {
  mainTagline: string
  subText: string
  badgeText: string
  ctaText: string
  ctaLink: string
}

export default function PanningHero({
  mainTagline,
  subText,
  badgeText,
  ctaText,
  ctaLink,
}: PanningHeroProps) {
  return (
    <section className="relative h-[600px] sm:h-[700px] lg:h-[800px] w-full overflow-hidden bg-gradient-to-br from-primary/20 via-orange-50/40 to-secondary/20">
      {/* Panning Background Animation */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          x: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,107,53,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(37,99,235,0.3) 0%, transparent 50%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center lg:text-left"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-sm font-semibold text-primary mb-4">
              {badgeText}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {mainTagline}
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 font-medium">
              {subText}
            </p>
            <div className="pt-4">
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

          {/* Chotu Avatar/Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Chotu Avatar - Using ShoppingBag as placeholder, replace with actual mascot image */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary shadow-2xl flex items-center justify-center">
                  <ShoppingBag className="h-32 w-32 sm:h-40 sm:w-40 lg:h-48 lg:w-48 text-white" />
                </div>
                {/* Wave animation */}
                <motion.div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="text-4xl">👋</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

