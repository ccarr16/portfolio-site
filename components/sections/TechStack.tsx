'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { techStack } from '@/lib/data'

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  if (techStack.length === 0) {
    return null
  }

  const categorized = {
    frontend: techStack.filter((tech) => tech.category === 'frontend'),
    backend: techStack.filter((tech) => tech.category === 'backend'),
    tools: techStack.filter((tech) => tech.category === 'tools'),
    other: techStack.filter((tech) => tech.category === 'other'),
  }

  return (
    <section
      id="tech-stack"
      ref={ref}
      className="py-20 md:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
            Tech Stack
          </h2>

          <div className="max-w-4xl mx-auto">
            {Object.entries(categorized).map(
              ([category, items]) =>
                items.length > 0 && (
                  <div key={category} className="mb-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4 capitalize">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      {items.map((tech, index) => (
                        <motion.div
                          key={tech.id}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={
                            isInView
                              ? { opacity: 1, scale: 1 }
                              : { opacity: 0, scale: 0.8 }
                          }
                          transition={{
                            duration: 0.3,
                            delay: index * 0.05,
                          }}
                          className="bg-muted/50 px-4 py-2 rounded-lg hover:bg-muted transition-colors"
                        >
                          {tech.icon ? (
                            <div className="flex items-center gap-2">
                              <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-5 h-5"
                              />
                              <span className="text-foreground font-medium">
                                {tech.name}
                              </span>
                            </div>
                          ) : (
                            <span className="text-foreground font-medium">
                              {tech.name}
                            </span>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

