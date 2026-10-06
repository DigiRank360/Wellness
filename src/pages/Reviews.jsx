import { Quote, Star } from 'lucide-react'
import CTABanner from '../components/ui/CTABanner'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import { IMG, reviews } from '../data/content'

export default function Reviews() {
  return (
    <>
      <PageHero title="Patient Reviews" subtitle="Real stories from people who healed with us." image={IMG.pool} crumbs={['Reviews']} />
      <section className="container-x py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...reviews, ...reviews].map(([n, t], i) => (
            <Reveal key={i} delay={(i % 3) * 120}>
              <div className="card-lift relative h-full rounded-3xl bg-mint p-7">
                <Quote size={36} className="absolute right-6 top-5 text-accent/30" />
                <div className="mb-4 flex items-center gap-3">
                  <img src={IMG.avatar} alt="" className="h-12 w-12 rounded-full border-2 border-brand-light object-cover" />
                  <div>
                    <h3 className="text-sm font-bold text-brand-dark">{n}</h3>
                    <span className="text-[10px] uppercase tracking-wider text-ink/50">Verified Patient</span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-ink/70">{t}</p>
                <div className="mt-4 flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, s) => <Star key={s} size={16} fill="currentColor" />)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  )
}
