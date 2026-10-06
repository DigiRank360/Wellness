import { useEffect, useState } from 'react'
import { useInView } from '../../hooks/useInView'

export default function CountUp({ value, duration = 1800 }) {
  const [ref, inView] = useInView()
  const [n, setN] = useState(0)
  const target = parseInt(value, 10)
  const suffix = value.replace(/[0-9]/g, '')

  useEffect(() => {
    if (!inView) return
    let raf
    const start = performance.now()
    const tick = (t) => {
      const p = Math.min((t - start) / duration, 1)
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, duration])

  return <span ref={ref}>{n}{suffix}</span>
}
