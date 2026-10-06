import { Leaf } from 'lucide-react'

export default function Logo({ className = 'h-12' }) {
  return (
    <span aria-label="Yognanda Wellness" role="img" className={`inline-flex w-fit items-center gap-2.5 ${className}`}>
      <span className="relative grid aspect-square h-[78%] shrink-0 place-items-center rounded-full border-2 border-brand/20 bg-mint text-brand">
        <Leaf size={21} strokeWidth={2.2} />
        <span className="absolute -right-0.5 top-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-accent" />
      </span>
      <span className="flex flex-col justify-center leading-none">
        <span className="text-[1.2rem] font-extrabold text-brand-dark">Yognanda</span>
        <span className="mt-1 text-[0.7rem] font-semibold text-accent">Wellness</span>
      </span>
    </span>
  )
}
