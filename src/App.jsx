export default function App() {
  return (
    <div className="bg-white">
      {/* GALLERY SECTION */}
      <section className="py-24 px-6 md:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">สินค้าของเรา</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
              className="rounded-3xl shadow-xl h-80 object-cover w-full"
            />

            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop"
              className="rounded-3xl shadow-xl h-80 object-cover w-full"
            />

            <img
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop"
              className="rounded-3xl shadow-xl h-80 object-cover w-full"
            />

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 md:px-20 bg-[#1d1d1d] text-white">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-[#d4af37] mb-6">
            ติดต่อเรา
          </h2>

          <p className="text-lg text-gray-300 leading-8 mb-12">
            สนใจออกแบบตกแต่งภายใน หรืองานเฟอร์นิเจอร์
            ติดต่อทีมงาน PP Furniture & Design
          </p>

          <div className="bg-[#2a2a2a] rounded-3xl p-10 shadow-2xl">

            <p className="text-xl mb-4">📞 โทร: 08X-XXX-XXXX</p>
            <p className="text-xl mb-4">📱 LINE: @ppfurniture</p>
            <p className="text-xl mb-8">📍 Thailand</p>

            <button className="bg-[#d4af37] hover:bg-[#c29b2d] text-black px-10 py-4 rounded-full font-bold transition">
              ติดต่อผ่าน LINE
            </button>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 py-10 text-center">
        <h3 className="text-2xl text-white font-bold mb-4">
          PP Furniture & Design
        </h3>

        <p>Luxury Interior Design & Built-in Furniture</p>

        <p className="mt-6 text-sm">
          © 2026 PP Furniture & Design
        </p>
      </footer>

    </div>
  )
}
