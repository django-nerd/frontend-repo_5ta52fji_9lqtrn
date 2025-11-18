import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function NavLink({ children, href = '#' }) {
  return (
    <a href={href} className="text-sm md:text-base text-white/70 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-xl bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-white to-white/30" />
            <span className="text-white font-semibold tracking-wide">Your Brand</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#products">Products</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="hidden md:block">
            <a href="#shop" className="inline-flex items-center px-4 py-2 rounded-full bg-lime-400 text-black font-medium hover:bg-lime-300 transition-colors">
              Shop Now
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-4">
            <NavLink href="#products">Products</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a href="#shop" className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-full bg-lime-400 text-black font-medium hover:bg-lime-300 transition-colors">
              Shop Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
