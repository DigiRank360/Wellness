import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Dumbbell, Droplets, Leaf, Sparkles, Waves } from 'lucide-react'
import { Link } from 'react-router-dom'
import { heroSlides, marquee } from '../../data/content'

const INTERVAL = 5000
const marqueeIcons = [Waves, Leaf, Droplets, Sparkles, Dumbbell]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef(null)
  const count = heroSlides.length

  useEffect(() => {
    if (paused) return
    const id = setTimeout(() => setIndex((i) => (i + 1) % count), INTERVAL)
    return () => clearTimeout(id)
  }, [index, paused, count])

  const go = (i) => setIndex((i + count) % count)

  const onTouchEnd = (e) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1))
    touchX.current = null
  }

  return (
    <section className="container-x pb-6 pt-6 md:pt-8" aria-roledescription="carousel" aria-label="Featured services">
      <div
        className="group relative overflow-hidden rounded-[2rem] bg-brand-dark"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {heroSlides.map((s, i) => {
            const active = i === index
            return (
              <div
                key={s.to}
                className="relative flex min-h-[520px] w-full shrink-0 items-center md:min-h-[640px]"
                aria-hidden={!active}
              >
                <img
                  src={s.image}
                  alt=""
                  className={`absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-[6000ms] ease-out ${active ? 'scale-110' : 'scale-100'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/70 to-transparent" />
                <div className="absolute -right-20 -top-20 h-80 w-80 animate-float rounded-full bg-teal/30 blur-3xl" />
                <div className="absolute right-[12%] top-[18%] hidden h-20 w-20 animate-float rounded-full bg-accent shadow-2xl shadow-accent/40 md:block" />

                <div className="relative z-10 max-w-2xl px-8 py-16 text-white md:px-16">
                  <span className={`mb-6 inline-block rounded-full border border-white/40 bg-white/10 px-4 py-1.5 text-[11px] uppercase tracking-widest backdrop-blur ${active ? 'animate-fade-up' : 'opacity-0'}`}>
                    {s.tag}
                  </span>
                  <h1 className={`text-4xl font-extrabold leading-tight [animation-delay:150ms] sm:text-5xl md:text-7xl ${active ? 'animate-fade-up' : 'opacity-0'}`}>
                    {s.title}<br />
                    <span className="animate-gradient-x bg-gradient-to-r from-white via-teal to-brand-light bg-[length:200%_auto] bg-clip-text text-transparent">{s.highlight}</span>
                  </h1>
                  <p className={`mt-6 max-w-lg text-base text-white/80 [animation-delay:300ms] ${active ? 'animate-fade-up' : 'opacity-0'}`}>{s.text}</p>
                  <div className={`mt-8 flex flex-wrap gap-4 [animation-delay:450ms] ${active ? 'animate-fade-up' : 'opacity-0'}`}>
                    <Link to="/contact" className="btn-accent" tabIndex={active ? 0 : -1}>Book Appointment</Link>
                    <Link to={s.to} className="btn border border-white/60 text-white hover:bg-white hover:text-brand" tabIndex={active ? 0 : -1}>{s.cta}</Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <button
          aria-label="Previous slide"
          onClick={() => go(index - 1)}
          className="absolute left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-accent md:grid md:opacity-0 md:group-hover:opacity-100"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          aria-label="Next slide"
          onClick={() => go(index + 1)}
          className="absolute right-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-accent md:grid md:opacity-0 md:group-hover:opacity-100"
        >
          <ChevronRight size={22} />
        </button>

        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2">
          {heroSlides.map((s, i) => (
            <button
              key={s.to}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => go(i)}
              className={`h-2 rounded-full transition-all duration-500 ${i === index ? 'w-10 bg-accent' : 'w-2 bg-white/50 hover:bg-white'}`}
            />
          ))}
        </div>
      </div>

      <div className="relative mt-6 overflow-hidden border-y border-brand/15 py-8 md:py-10">
        <div className="[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap hover:[animation-play-state:paused] md:gap-12">
            {Array.from({ length: 4 }).flatMap((_, r) =>
              marquee.map((w, i) => {
                const Icon = marqueeIcons[i % marqueeIcons.length]
                return (
                  <div key={`${r}-${i}`} className="flex items-center gap-8 md:gap-12">
                    <span
                      className={`text-4xl font-extrabold uppercase tracking-wider md:text-6xl ${i % 2 === 0 ? 'text-brand-dark' : 'text-transparent [-webkit-text-stroke:1.5px_#0B5D2E]'}`}
                    >
                      {w}
                    </span>
                    <Icon size={28} strokeWidth={1.5} className="shrink-0 text-accent" />
                  </div>
                )
              }),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
