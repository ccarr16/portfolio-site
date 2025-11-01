'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import ContactForm from '@/components/ui/ContactForm'
import PlatformButtons from '@/components/CTAs/PlatformButtons'

interface ContactProps {
  email?: string
  phone?: string
  location?: string
  upworkUrl?: string
  fiverrUrl?: string
  whatsappNumber?: string
}

export default function Contact({
  email,
  phone,
  location,
  upworkUrl,
  fiverrUrl,
  whatsappNumber,
}: ContactProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="contact"
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
            Get In Touch
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    {email && (
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/20 rounded-lg">
                          <Mail className="text-primary" size={20} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <a
                            href={`mailto:${email}`}
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            {email}
                          </a>
                        </div>
                      </div>
                    )}

                    {phone && (
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/20 rounded-lg">
                          <Phone className="text-primary" size={20} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Phone</p>
                          <a
                            href={`tel:${phone}`}
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            {phone}
                          </a>
                        </div>
                      </div>
                    )}

                    {location && (
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/20 rounded-lg">
                          <MapPin className="text-primary" size={20} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Location</p>
                          <p className="text-foreground">{location}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Platform Buttons */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Hire Me On
                  </h3>
                  <PlatformButtons
                    upworkUrl={upworkUrl}
                    fiverrUrl={fiverrUrl}
                    whatsappNumber={whatsappNumber}
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Send a Message
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

