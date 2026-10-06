import Reveal from './Reveal'

export default function SectionHeading({ tag, title, center = false }) {
  return (
    <Reveal className={center ? 'text-center' : ''}>
      <span className="section-tag">{tag}</span>
      <h2 className="section-title">{title}</h2>
    </Reveal>
  )
}
