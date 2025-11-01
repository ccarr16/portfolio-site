'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { clients } from '@/lib/data'
import Pagination from '@/components/ui/Pagination'

const ITEMS_PER_PAGE = 6

export default function Clients() {
  const [currentPage, setCurrentPage] = useState(1)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const totalPages = Math.ceil(clients.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentClients = clients.slice(startIndex, endIndex)

  if (clients.length === 0) {
    return null
  }

  return (
    <section
      id="clients"
      ref={ref}
      className="py-20 md:py-32 bg-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
            Clients
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentClients.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex items-center justify-center min-h-[120px]"
              >
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-16 object-contain"
                  />
                ) : (
                  <p className="text-foreground font-medium">{client.name}</p>
                )}
              </motion.div>
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

