import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLine } from "react-icons/fa"

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#07120f] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <p className="text-yellow-500 uppercase tracking-[4px] mb-4">
              Contact Us
            </p>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Let’s Create <br />
              Something Beautiful
            </h2>

            <p className="text-gray-400 leading-8 text-lg mb-10">
              เราพร้อมออกแบบและสร้างสรรค์เฟอร์นิเจอร์บิวท์อินระดับพรีเมียม
              ให้ตอบโจทย์ทุกพื้นที่ของคุณ ทั้งบ้าน คอนโด และสำนักงาน
            </p>

            {/* FEATURES */}

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-yellow-500 text-xl font-semibold mb-2">
                  ฟรี Consultation
                </h3>

                <p className="text-gray-400 text-sm leading-7">
                  ปรึกษาและประเมินหน้างานฟรี
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-yellow-500 text-xl font-semibold mb-2">
                  Premium Quality
                </h3>

                <p className="text-gray-400 text-sm leading-7">
                  วัสดุคุณภาพสูง งานระดับ Luxury
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-yellow-500 text-xl font-semibold mb-2">
                  Custom Design
                </h3>

                <p className="text-gray-400 text-sm leading-7">
                  ออกแบบเฉพาะคุณ 100%
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-yellow-500 text-xl font-semibold mb-2">
                  After Service
                </h3>

                <p className="text-gray-400 text-sm leading-7">
                  ดูแลหลังการขายครบวงจร
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT FORM */}

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

            <h3 className="text-3xl font-bold mb-8">
              ส่งข้อความหาเรา
            </h3>

            <form className="space-y-5">

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  placeholder="ชื่อของคุณ"
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-yellow-500"
                />

                <input
                  type="text"
                  placeholder="เบอร์โทร"
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-yellow-500"
                />

              </div>

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-yellow-500"
              />

              <select
                className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-yellow-500"
              >
                <option>เลือกบริการ</option>
                <option>Built-in Furniture</option>
                <option>Interior Design</option>
                <option>Kitchen</option>
                <option>Wardrobe</option>
                <option>Office</option>
              </select>

              <textarea
                rows="5"
                placeholder="รายละเอียดงานของคุณ"
                className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-yellow-500"
              ></textarea>

              <button
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-xl transition duration-300"
              >
                ส่งข้อความ
              </button>

            </form>

          </div>

        </div>

        {/* CONTACT INFO */}

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {/* INFO */}

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h3 className="text-2xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-yellow-500 mt-1" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-400">
                    099-999-9999
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-yellow-500 mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-400">
                    info@pphomefurniture.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-yellow-500 mt-1" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-400 leading-7">
                    กรุงเทพมหานคร ประเทศไทย
                  </p>
                </div>
              </div>

            </div>

            {/* SOCIAL */}

            <div className="flex gap-4 mt-10">

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
              >
                <FaLine />
              </a>

            </div>

          </div>

          {/* SHOWROOM */}

          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
              alt="showroom"
              className="h-64 w-full object-cover"
            />

            <div className="p-8">

              <h3 className="text-2xl font-bold mb-4">
                Visit Our Showroom
              </h3>

              <p className="text-gray-400 leading-8 mb-6">
                สัมผัสงานจริงและวัสดุพรีเมียมได้ที่โชว์รูมของเรา
              </p>

              <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold transition">
                ดูเส้นทาง
              </button>

            </div>

          </div>

          {/* MAP */}

          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl min-h-[500px]">

            <iframe
              src="https://maps.google.com/maps?q=bangkok&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                 allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
 ></iframe>

          </div>

        </div>

      </div>
    </section>
  )
}
