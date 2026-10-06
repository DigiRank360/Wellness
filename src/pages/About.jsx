import { Eye, HeartHandshake, Leaf, Target } from 'lucide-react'
import CountUp from '../components/ui/CountUp'
import CTABanner from '../components/ui/CTABanner'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { IMG, pillars, stats } from '../data/content'

const values = [
  [Leaf, 'Authenticity', 'Classical Ayurvedic methods with genuine herbal formulations.'],
  [HeartHandshake, 'Compassion', 'Every guest is treated with care, respect and attention.'],
  [Target, 'Results', 'Personalised plans with measurable progress.'],
  [Eye, 'Transparency', 'Clear pricing, honest advice and no unnecessary treatments.'],
]

const team = [
  ['Dr. Anil Sharma', 'Chief Ayurvedic Physician'],
  ['Dr. Kavita Joshi', 'Panchakarma Specialist'],
  ['Rahul Mehta', 'Head Fitness Trainer'],
  ['Sneha Rao', 'Aquatics Coach'],
]

export default function About() {
  return (
    <>
      <PageHero title="About Us" subtitle="Swim. Heal. Detox. Rejuvenate. Strengthen." image={IMG.herbs} crumbs={['About']} />

      <section className="container-x py-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal><img src={IMG.team} alt="Our team" className="h-[440px] w-full rounded-[2rem] object-cover" /></Reveal>
          <div>
            <SectionHeading tag="Our story" title="A wellness centre built on Ayurveda" />
            <Reveal delay={150}>
              <p className="mt-6 leading-relaxed text-ink/70">
                Yogananda Ayurveda brings together Ayurvedic healing, a modern gym and a swimming pool under one roof. Our approach is simple: treat the whole person, not just the symptom.
              </p>
              <p className="mt-4 leading-relaxed text-ink/70">
                Our qualified vaidyas, trainers and coaches work as one team so you can heal, detox, rejuvenate and grow stronger with a single, personalised plan.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-x">
        <div className="grid grid-cols-2 gap-6 rounded-[2rem] bg-brand-dark p-10 text-center text-white md:grid-cols-4">
          {stats.map(([n, l]) => (
            <div key={l}>
              <div className="text-4xl font-extrabold md:text-5xl"><CountUp value={n} /></div>
              <div className="mt-2 text-[11px] uppercase tracking-widest text-white/70">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-20">
        <div className="mb-10"><SectionHeading center tag="Our values" title="What guides us" /></div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(([Icon, t, d], i) => (
            <Reveal key={t} delay={i * 100}>
              <div className="card-lift h-full rounded-3xl border border-mint bg-white p-7 text-center">
                <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-mint text-brand"><Icon size={26} /></div>
                <h3 className="font-bold text-brand-dark">{t}</h3>
                <p className="mt-2 text-sm text-ink/70">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x">
        <div className="rounded-[2rem] bg-mint p-8 md:p-14">
          <SectionHeading tag="The 5 pillars" title="Swim, Heal, Detox, Rejuvenate, Strengthen" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {pillars.map(([t, d, icon], i) => (
              <Reveal key={t} delay={i * 100}>
                <div className="h-full rounded-3xl bg-white p-6 text-center">
                  <div className="mb-3 text-3xl">{icon}</div>
                  <h3 className="font-bold text-brand-dark">{t}</h3>
                  <p className="mt-2 text-xs text-ink/70">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="mb-10"><SectionHeading center tag="Our team" title="Meet the experts" /></div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map(([n, r], i) => (
            <Reveal key={n} delay={i * 100}>
              <div className="card-lift overflow-hidden rounded-3xl bg-mint text-center">
                <img src={IMG.avatar} alt={n} className="h-56 w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-bold text-brand-dark">{n}</h3>
                  <p className="text-xs text-accent">{r}</p>
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
