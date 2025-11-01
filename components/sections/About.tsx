'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-32 bg-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-center">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {/* Update this with your actual bio from Notion */}
              I'm a passionate Travel Creator and Operator with expertise in crafting
              compelling travel content and managing seamless travel operations. With
              years of experience in the industry, I've helped numerous clients create
              memorable travel experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My work spans content creation, travel operations management, and building
              engaging digital experiences that inspire wanderlust and facilitate
              extraordinary journeys.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

