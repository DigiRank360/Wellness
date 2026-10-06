import { Link } from 'react-router-dom'
import { IMG, pillars } from '../../data/content'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const points = ['Certified Ayurvedic doctors', 'Herbal, chemical-free medicines', 'Personalised treatment plans', 'Hygienic, serene environment']

export default function About() {
  return (
    <section className="container-x py-20">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          <img src={IMG.about} alt="Ayurvedic treatment" className="h-[460px] w-full rounded-[2rem] object-cover" />
          <img src={IMG.about2} alt="" className="absolute -bottom-8 -right-4 hidden h-48 w-48 animate-float rounded-3xl border-8 border-white object-cover shadow-xl md:block" />
          <div className="absolute -left-4 top-8 rounded-2xl bg-accent px-5 py-4 text-center text-white shadow-xl">
            <div className="text-3xl font-extrabold">13+</div>
            <div className="text-[11px] uppercase tracking-wider">Years Experience</div>
          </div>
        </Reveal>

        <div>
          <SectionHeading tag="About us" title={<>Where ancient wisdom meets <span className="text-gradient">modern care</span></>} />
          <Reveal delay={150}>
            <p className="mt-6 text-ink/70 leading-relaxed">
              Yogananda Ayurveda blends classical Ayurvedic therapies with aqua wellness and yoga to treat the root cause, not just the symptom. Every programme is designed around your body type and goals.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm font-medium">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-light/20 text-xs text-brand">✓</span>{p}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary mt-8">Get Consultation</Link>
          </Reveal>
        </div>
      </div>

      <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {pillars.map(([t, d, icon], i) => (
          <Reveal key={t} delay={i * 100}>
            <div className="card-lift group h-full rounded-3xl border border-mint bg-white p-6 text-center">
              <div className="relative mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-mint text-3xl transition group-hover:bg-brand group-hover:scale-110">
                <span className="absolute inset-0 rounded-full border border-brand-light/50 group-hover:animate-pulse-ring" />
                {icon}
              </div>
              <h3 className="text-lg font-bold text-brand-dark">{t}</h3>
              <p className="mt-2 text-xs leading-relaxed text-ink/60">{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
