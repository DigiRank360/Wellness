import { IMG, reviews, stats } from '../../data/content'
import CountUp from '../ui/CountUp'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Testimonials() {
  return (
    <section id="reviews" className="container-x py-10">
      <SectionHeading tag="Testimonials" title="What our patients say" />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {reviews.map(([n, t], i) => (
          <Reveal key={n} delay={i * 120}>
            <div className="card-lift relative h-full rounded-3xl bg-mint p-7">
              <span className="absolute right-6 top-4 font-serif text-6xl leading-none text-accent/30">“</span>
              <div className="mb-4 flex items-center gap-3">
                <img src={IMG.avatar} alt="" className="h-12 w-12 rounded-full border-2 border-brand-light object-cover" />
                <div>
                  <h3 className="text-sm font-bold text-brand-dark">{n}</h3>
                  <span className="text-[10px] uppercase tracking-wider text-ink/50">Verified Patient</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-ink/70">{t}</p>
              <div className="mt-4 tracking-widest text-accent">★★★★★</div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-2 gap-6 rounded-[2rem] bg-brand-dark p-10 text-center text-white md:grid-cols-4">
        {stats.map(([n, l]) => (
          <div key={l}>
            <div className="text-4xl font-extrabold text-white md:text-5xl"><CountUp value={n} /></div>
            <div className="mt-2 text-[11px] uppercase tracking-widest text-white/70">{l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
