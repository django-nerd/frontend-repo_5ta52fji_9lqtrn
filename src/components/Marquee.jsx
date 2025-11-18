import { useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Marquee() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -60])

  const words = useMemo(() => ['MONO', 'VOID', 'SPECTRUM', 'STATIC', 'NOISE', 'BLACK', 'WHITE'], [])

  return (
    <section className="relative bg-black overflow-hidden" aria-label="brand marquee">
      <motion.div style={{ y }} className="py-16 border-y border-white/10">
        <div className="whitespace-nowrap text-5xl sm:text-7xl font-extrabold tracking-tighter">
          <div className="flex gap-12 text-white/10 will-change-transform animate-[marquee_20s_linear_infinite]">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="flex gap-12">
                {words.map((w, idx) => (
                  <span key={idx}>{w}</span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <style>
        {`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        `}
      </style>
    </section>
  )
}
