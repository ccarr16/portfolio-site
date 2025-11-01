# Chris Carr - Portfolio Website

Modern portfolio website built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design matching reference site aesthetic
- ⚡ Fast performance with Next.js 14 App Router
- 📱 Fully responsive mobile-first design
- 🎭 Smooth animations with Framer Motion
- 📧 Contact form with API route
- 🎯 SEO optimized with metadata
- 🌙 Dark mode support (system preference)

## Sections

1. **Hero** - Introduction with CTA buttons
2. **About** - Personal background and skills
3. **Testimonials** - Client testimonials carousel with prev/next controls
4. **Clients** - Client showcase with pagination
5. **YouTube Channels** - YouTube channel grid with pagination
6. **Projects** - Project cards linking to external media
7. **Tech Stack** - Technology icons and tools
8. **Contact** - Contact information, form, and platform CTA buttons

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Configuration

1. **Update Portfolio Data**: Edit `lib/data.ts` with your actual portfolio information from your Notion page.

2. **Contact Form**: Set up an email service (Resend recommended) and update `app/api/contact/route.ts`:
   - Add your API key to `.env.local`:
     ```
     RESEND_API_KEY=your_api_key_here
     CONTACT_EMAIL=your_email@example.com
     ```

3. **Contact Information**: Update the Contact component in `app/page.tsx` with your details:
   ```tsx
   <Contact
     email="your.email@example.com"
     phone="+1234567890"
     location="City, Country"
     upworkUrl="https://www.upwork.com/freelancers/..."
     fiverrUrl="https://www.fiverr.com/..."
     whatsappNumber="+1234567890"
   />
   ```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

The site will automatically deploy on every push to the main branch.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Project Structure

```
portfolio/
├── app/
│   ├── api/contact/route.ts    # Contact form API endpoint
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Main page
│   └── globals.css              # Global styles
├── components/
│   ├── layout/                 # Header, Footer
│   ├── sections/               # All section components
│   ├── ui/                     # Reusable UI components
│   └── CTAs/                   # CTA button components
├── lib/
│   ├── data.ts                 # Portfolio data
│   └── utils.ts                # Utility functions
└── public/                     # Static assets
```

## Next Steps

1. Add your portfolio content from Notion to `lib/data.ts`
2. Set up email service for contact form
3. Add social media links to Footer
4. Customize colors in `app/globals.css` if needed
5. Add your logo/favicon to `public/`
6. Deploy to Vercel

## License

MIT

