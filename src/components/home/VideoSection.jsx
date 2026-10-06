import { IMG } from '../../data/content'
import Reveal from '../ui/Reveal'

export default function VideoSection() {
  return (
    <section className="container-x py-16">
      <Reveal>
        <div
          className="relative flex min-h-[420px] items-end overflow-hidden rounded-[2rem] bg-cover bg-center p-8 md:p-12"
          style={{ backgroundImage: `url(${IMG.video})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/30 to-transparent" />
          <h2 className="absolute left-8 top-8 text-4xl font-extrabold text-white/90 md:text-6xl">Experience Yogananda</h2>
          <div className="relative flex items-center gap-4 text-white">
            <button aria-label="Play video" className="relative grid h-16 w-16 place-items-center rounded-full bg-accent">
              <span className="absolute inset-0 animate-pulse-ring rounded-full bg-accent" />
              <span className="relative">▶</span>
            </button>
            <span className="font-medium">Watch our story</span>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
