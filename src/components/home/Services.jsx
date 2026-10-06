import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { segments } from '../../data/content'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Services() {
  return (
    <section className="container-x">
      <div className="rounded-[2rem] bg-mint p-8 md:p-14">
        <SectionHeading tag="Our services" title="Explore our services" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map(([t, d, src, to], i) => (
            <Reveal key={t} delay={i * 120}>
              <Link to={to} className="card-lift group block h-full overflow-hidden rounded-3xl bg-white">
                <div className="relative h-60 overflow-hidden">
                  <img src={src} alt={t} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-brand-dark">{t}</h3>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-white transition group-hover:rotate-45"><ArrowUpRight size={16} /></span>
                  </div>
                  <p className="mt-2 text-sm text-ink/70">{d}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
