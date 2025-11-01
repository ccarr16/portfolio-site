import { Testimonial } from '@/lib/data'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-muted/50 p-6 md:p-8 rounded-lg shadow-lg h-full flex flex-col">
      <div className="flex items-center gap-4 mb-4">
        {testimonial.avatar ? (
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
            {testimonial.name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
      <p className="text-muted-foreground flex-grow italic">
        &ldquo;{testimonial.content}&rdquo;
      </p>
    </div>
  )
}

