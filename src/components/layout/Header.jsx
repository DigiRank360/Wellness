import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { contactInfo, nav } from '../../data/content'
import Logo from './Logo'

const linkCls = ({ isActive }) =>
  `group relative py-2 text-[13px] font-medium transition hover:text-brand ${isActive ? 'text-brand' : 'text-ink'}`

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const servicesActive = pathname.startsWith('/services')

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={`hidden bg-brand-dark text-[12px] text-white/80 transition-all duration-300 md:block ${scrolled ? 'h-0 overflow-hidden opacity-0' : 'h-9 opacity-100'}`}>
        <div className="container-x flex h-9 items-center justify-between">
          <span>{contactInfo.phone} &nbsp;|&nbsp; {contactInfo.email}</span>
          <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
        </div>
      </div>

      <div className={`transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-md backdrop-blur-md' : 'bg-white'}`}>
        <div className="container-x flex items-center justify-between py-2">
          <Link to="/"><Logo className={scrolled ? 'h-12' : 'h-14'} /></Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {nav.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setDesktopServicesOpen(true)}
                  onMouseLeave={() => setDesktopServicesOpen(false)}
                  onFocusCapture={() => setDesktopServicesOpen(true)}
                  onBlurCapture={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) setDesktopServicesOpen(false)
                  }}
                >
                  <button
                    aria-expanded={desktopServicesOpen}
                    onClick={() => setDesktopServicesOpen(!desktopServicesOpen)}
                    className={`flex items-center gap-1 py-2 text-[13px] font-medium transition hover:text-brand ${servicesActive ? 'text-brand' : 'text-ink'}`}
                  >
                    {item.label}
                    <ChevronDown size={14} className={`transition ${desktopServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`absolute left-1/2 top-full w-56 -translate-x-1/2 pt-3 transition duration-200 ${desktopServicesOpen ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-2 opacity-0'}`}>
                    <div className="overflow-hidden rounded-2xl border border-mint bg-white p-2 shadow-xl">
                      {item.children.map((c) => (
                        <NavLink
                          key={c.to}
                          to={c.to}
                          onClick={() => setDesktopServicesOpen(false)}
                          className={({ isActive }) => `block rounded-xl px-4 py-2.5 text-sm font-medium transition hover:bg-mint hover:text-brand ${isActive ? 'bg-mint text-brand' : 'text-ink'}`}
                        >
                          {c.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink key={item.label} to={item.to} end={item.to === '/'} className={linkCls}>
                  {({ isActive }) => (
                    <>
                      {item.label}
                      <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-accent transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                    </>
                  )}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="btn-accent hidden !py-2.5 sm:inline-flex">Book Appointment</Link>
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="grid h-10 w-10 place-items-center rounded-full bg-mint text-brand lg:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <div className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${open ? 'max-h-[32rem] border-t border-mint' : 'max-h-0'}`}>
          <nav className="container-x flex flex-col py-3" onClick={(e) => e.target.closest('a') && setOpen(false)}>
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-mint">
                  <button onClick={() => setMobileServices(!mobileServices)} className="flex w-full items-center justify-between py-3 text-sm font-medium">
                    {item.label}
                    <ChevronDown size={16} className={`transition ${mobileServices ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden pl-4 transition-all ${mobileServices ? 'max-h-48 pb-2' : 'max-h-0'}`}>
                    {item.children.map((c) => (
                      <NavLink key={c.to} to={c.to} className={({ isActive }) => `block py-2 text-sm ${isActive ? 'font-semibold text-brand' : 'text-ink/80'}`}>{c.label}</NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink key={item.label} to={item.to} end={item.to === '/'} className={({ isActive }) => `border-b border-mint py-3 text-sm font-medium ${isActive ? 'text-brand' : ''}`}>
                  {item.label}
                </NavLink>
              ),
            )}
            <Link to="/contact" className="btn-accent mt-4 sm:hidden">Book Appointment</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
