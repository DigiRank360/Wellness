import { posts } from '../../data/content'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Blog() {
  return (
    <section id="blog" className="container-x py-16">
      <div className="mb-10"><SectionHeading center tag="Latest news" title="Wellness insights & articles" /></div>
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map(([t, src], i) => (
          <Reveal key={t} delay={(i % 2) * 120}>
            <article className="group flex items-center gap-5 rounded-3xl p-3 transition hover:bg-mint">
              <div className="h-28 w-36 shrink-0 overflow-hidden rounded-2xl">
                <img src={src} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              </div>
              <div>
                <p className="mb-1 text-[10px] uppercase tracking-wider text-ink/50">By Admin</p>
                <h3 className="font-bold text-brand-dark">{t}</h3>
                <a href="#" className="mt-2 inline-block text-xs font-semibold text-accent">Read More ↗</a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
