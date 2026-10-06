import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import CTABanner from '../components/ui/CTABanner'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'

export default function ServicePage({ data }) {
  return (
    <>
      <PageHero title={data.title} subtitle={data.tagline} image={data.heroImage} crumbs={['Services', data.title]} />

      <section className="container-x py-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <img src={data.introImage} alt={data.title} className="h-[420px] w-full rounded-[2rem] object-cover" />
          </Reveal>
          <div>
            <SectionHeading tag={data.title} title={data.introTitle} />
            <Reveal delay={150}>
              <p className="mt-6 leading-relaxed text-ink/70">{data.intro}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {data.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm font-medium">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-light/20 text-brand"><Check size={14} /></span>{h}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary mt-8">Book Now</Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-x">
        <div className="rounded-[2rem] bg-mint p-8 md:p-14">
          <SectionHeading tag="What we offer" title={data.offeringsTitle} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.offerings.map(([t, d, src], i) => (
              <Reveal key={t} delay={(i % 3) * 120}>
                <div className="card-lift group h-full overflow-hidden rounded-3xl bg-white">
                  <div className="h-52 overflow-hidden">
                    <img src={src} alt={t} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-brand-dark">{t}</h3>
                    <p className="mt-2 text-sm text-ink/70">{d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="mb-10"><SectionHeading center tag="Pricing" title={data.plansTitle} /></div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.plans.map(([name, price, meta], i) => (
            <Reveal key={name} delay={i * 100}>
              <div className="card-lift h-full rounded-3xl border border-mint bg-white p-7 text-center">
                <h3 className="font-semibold text-brand-dark">{name}</h3>
                <div className="my-4 text-3xl font-extrabold text-accent">{price}</div>
                <span className="inline-block rounded-full bg-mint px-3 py-1 text-xs text-brand">{meta}</span>
                <Link to="/contact" className="btn-outline mt-6 w-full !py-2.5">Enquire</Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
