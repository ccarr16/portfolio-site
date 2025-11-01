'use client'

import { ExternalLink } from 'lucide-react'

interface PlatformButtonsProps {
  upworkUrl?: string
  fiverrUrl?: string
  whatsappNumber?: string
}

export default function PlatformButtons({
  upworkUrl,
  fiverrUrl,
  whatsappNumber,
}: PlatformButtonsProps) {
  const buttons = [
    upworkUrl && {
      label: 'Upwork',
      url: upworkUrl,
      color: 'bg-green-600 hover:bg-green-700',
    },
    fiverrUrl && {
      label: 'Fiverr',
      url: fiverrUrl,
      color: 'bg-green-500 hover:bg-green-600',
    },
    whatsappNumber && {
      label: 'WhatsApp',
      url: `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`,
      color: 'bg-[#25D366] hover:bg-[#20BA5A]',
    },
  ].filter(Boolean)

  if (buttons.length === 0) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {buttons.map((button) => (
        <a
          key={button!.label}
          href={button!.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-6 py-3 ${button!.color} text-white rounded-lg font-semibold transition-colors`}
        >
          {button!.label}
          <ExternalLink size={18} />
        </a>
      ))}
    </div>
  )
}

