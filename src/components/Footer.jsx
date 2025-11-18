export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white/60">
          <div>
            <h4 className="text-white font-semibold mb-3">Brand</h4>
            <p className="text-sm">Minimal, monochrome apparel crafted for movement.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <p className="text-sm">hello@yourbrand.com</p>
            <p className="text-sm">@yourbrand</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Newsletter</h4>
            <form className="flex gap-2">
              <input type="email" placeholder="Email address" className="flex-1 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/30" />
              <button className="rounded-full px-4 py-2 bg-lime-400 text-black font-medium hover:bg-lime-300 transition-colors">Join</button>
            </form>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-white/10 text-center text-xs text-white/40">© {new Date().getFullYear()} Your Brand. All rights reserved.</div>
      </div>
    </footer>
  )
}
