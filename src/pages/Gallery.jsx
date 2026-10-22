import CTABanner from '../components/ui/CTABanner'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { galleryItems } from '../data/gallery'

export default function Gallery() {
  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="A glimpse of wellness, movement and meaningful moments at Yogananda."
        image="/images/services/social-events.jpg"
        crumbs={['Gallery']}
      />

      <section className="container-x py-20">
        <div className="mb-10">
          <SectionHeading
            center
            tag="Our moments"
            title="Explore Yogananda"
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) * 100}>
              <figure className="group relative h-72 overflow-hidden rounded-3xl bg-mint shadow-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/45 to-transparent px-6 pb-5 pt-16 text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/75">
                    {item.category}
                  </span>
                  <h2 className="mt-1 text-lg font-bold">{item.title}</h2>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
