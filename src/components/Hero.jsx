import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black" id="home">
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/a6HhFsV3-DN9Z-yP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
          >
            Black & White Apparel
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-lg sm:text-xl text-white/70"
          >
            Minimal forms. Bold silhouettes. Designed for movement.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <a href="#products" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-lime-400 text-black font-semibold hover:bg-lime-300 transition-colors">
              Shop Collection
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-white/20 text-white hover:border-white/40 transition-colors">
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
