import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Designed for movement</h3>
            <p className="mt-6 text-white/70 leading-relaxed">
              We craft minimal black and white silhouettes for everyday performance. Breathable fabrics, clean lines, and a focus on comfort define our pieces. Built to last and meant to move.
            </p>
            <div className="mt-10 flex gap-4">
              <a href="#products" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-lime-400 text-black font-semibold hover:bg-lime-300 transition-colors">
                Explore Products
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-white/20 text-white hover:border-white/40 transition-colors">
                Contact Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <img src="https://images.unsplash.com/photo-1468927201227-35e86293a0c8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGYWJyaWMlMjBkZXRhaWxzfGVufDB8MHx8fDE3NjM1MDY3NDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Fabric details" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
