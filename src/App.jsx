import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Products from './components/Products'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <Products />
      <About />
      <Footer />
    </div>
  )
}

export default App
