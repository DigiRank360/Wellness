import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PageHero({ title, subtitle, image, crumbs = [] }) {
  return (
    <section className="container-x">
      <div className="relative flex min-h-[300px] items-center overflow-hidden rounded-[2rem] bg-brand-dark md:min-h-[380px]">
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50 animate-fade-in" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/70 to-transparent" />
        <div className="absolute -right-16 -top-16 h-64 w-64 animate-float rounded-full bg-teal/30 blur-3xl" />
        <div className="relative z-10 p-8 text-white md:p-16">
          <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-1 text-xs text-white/80 animate-fade-up">
            <Link to="/" className="hover:text-white">Home</Link>
            {crumbs.map((c) => (
              <span key={c} className="flex items-center gap-1"><ChevronRight size={14} />{c}</span>
            ))}
          </nav>
          <h1 className="animate-fade-up text-4xl font-extrabold [animation-delay:100ms] md:text-6xl">{title}</h1>
          {subtitle && <p className="mt-4 max-w-xl animate-fade-up text-white/80 [animation-delay:200ms]">{subtitle}</p>}
        </div>
      </div>
    </section>
  )
}
