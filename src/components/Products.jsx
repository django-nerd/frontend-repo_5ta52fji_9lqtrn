import { motion } from 'framer-motion'

const products = [
  {
    id: 1,
    name: 'Monochrome Hoodie',
    price: 78,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop',
    tag: 'New'
  },
  {
    id: 2,
    name: 'Void Tee',
    price: 38,
    image: 'https://images.unsplash.com/photo-1533613220915-609f661a6fd8?q=80&w=1200&auto=format&fit=crop',
    tag: 'Bestseller'
  },
  {
    id: 3,
    name: 'Static Jacket',
    price: 142,
    image: 'https://images.unsplash.com/photo-1603997296711-bbc929c35dcc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdGF0aWMlMjBKYWNrZXR8ZW58MHwwfHx8MTc2MzUwNjc0M3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tag: 'Limited'
  },
  {
    id: 4,
    name: 'Spectrum Pants',
    price: 96,
    image: 'https://images.unsplash.com/photo-1495877577647-80c41a1cc5df?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTcGVjdHJ1bSUyMFBhbnRzfGVufDB8MHx8fDE3NjM1MDY3NDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tag: 'Drop 02'
  }
]

function ProductCard({ p, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: i * 0.05, duration: 0.6 }}
      className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>
      <div className="absolute top-3 left-3 rounded-full bg-black/70 border border-white/10 px-3 py-1 text-xs text-white">
        {p.tag}
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="text-white font-semibold tracking-wide">{p.name}</h3>
            <p className="text-white/60">${p.price}</p>
          </div>
          <button className="rounded-full bg-lime-400 text-black font-medium px-4 py-2 hover:bg-lime-300 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Products() {
  return (
    <section id="products" className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_50%)]" aria-hidden />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Featured Products</h2>
          <a href="#shop" className="hidden sm:inline-flex items-center px-5 py-2 rounded-full bg-lime-400 text-black font-semibold hover:bg-lime-300 transition-colors">View All</a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <ProductCard key={p.id} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
