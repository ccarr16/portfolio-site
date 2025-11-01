'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink } from 'lucide-react'
import { youtubeChannels } from '@/lib/data'
import Pagination from '@/components/ui/Pagination'

const ITEMS_PER_PAGE = 6

export default function YouTubeChannels() {
  const [currentPage, setCurrentPage] = useState(1)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const totalPages = Math.ceil(youtubeChannels.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentChannels = youtubeChannels.slice(startIndex, endIndex)

  if (youtubeChannels.length === 0) {
    return null
  }

  return (
    <section
      id="youtube-channels"
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
            YouTube Channels
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentChannels.map((channel, index) => (
              <motion.a
                key={channel.id}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-muted/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 group"
              >
                {channel.thumbnail ? (
                  <img
                    src={channel.thumbnail}
                    alt={channel.name}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                ) : (
                  <div className="w-full h-40 bg-primary/20 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-4xl">📺</span>
                  </div>
                )}
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {channel.name}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {channel.description}
                </p>
                {channel.subscriberCount && (
                  <p className="text-sm text-muted-foreground mb-4">
                    {channel.subscriberCount} subscribers
                  </p>
                )}
                <div className="flex items-center gap-2 text-primary text-sm font-medium">
                  View Channel
                  <ExternalLink size={16} />
                </div>
              </motion.a>
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </motion.div>
      </div>
    </section>
  )
}

