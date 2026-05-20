import {
  FaCalendarAlt,
  FaClock,
  FaSearch,
} from "react-icons/fa"

const blogs = [
  {
    title: "5 ไอเดียออกแบบห้องครัวบิวท์อินสวย ครบ จบในที่เดียว",
    category: "INTERIOR TIPS",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    date: "May 12, 2024",
    read: "5 min read",
  },

  {
    title: "วิธีเลือกวัสดุบิวท์อิน ให้ทน ใช้งานได้นาน",
    category: "BUILT-IN IDEAS",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    date: "Apr 28, 2024",
    read: "4 min read",
  },

  {
    title: "ไอเดียตู้เสื้อผ้าบิวท์อิน สวยหรู เพิ่มพื้นที่จัดเก็บ",
    category: "DESIGN INSPIRATION",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156",
    date: "Apr 15, 2024",
    read: "6 min read",
  },

  {
    title: "ออกแบบโฮมออฟฟิศบิวท์อิน เพิ่มความโปรดักทีฟ",
    category: "INTERIOR TIPS",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    date: "Mar 30, 2024",
    read: "5 min read",
  },

  {
    title: "วัสดุไม้สำหรับงานบิวท์อิน แบบไหนเหมาะกับคุณ",
    category: "MATERIALS",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    date: "Mar 18, 2024",
    read: "5 min read",
  },

  {
    title: "รวมฟังก์ชันลับในงานบิวท์อิน ที่ช่วยให้ชีวิตสะดวกขึ้น",
    category: "BUILT-IN IDEAS",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    date: "Mar 05, 2024",
    read: "5 min read",
  },

  {
    title: "แต่งผนังทีวีบิวท์อินยังไง ให้สวยและโมเดิร์น",
    category: "DESIGN INSPIRATION",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    date: "Feb 20, 2024",
    read: "4 min read",
  },

  {
    title: "การดูแลรักษาเฟอร์นิเจอร์บิวท์อิน ให้อยู่กับบ้านได้นาน",
    category: "MAINTENANCE",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    date: "Feb 10, 2024",
    read: "5 min read",
  },
]

export default function Blog() {
  return (
    <section
      id="blog"
      className="bg-[#06110d] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* HERO */}

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

          <div>

            <p className="text-yellow-500 uppercase tracking-[4px] mb-4">
              Our Blog
            </p>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-yellow-100">
              Design Ideas, <br />
              Built for Living
            </h2>

            <p className="text-gray-400 leading-8 text-lg">
              แรงบันดาลใจในการออกแบบตกแต่งภายใน
              และสาระน่ารู้เกี่ยวกับเฟอร์นิเจอร์บิวท์อิน
              เพื่อบ้านที่สวยงามและใช้งานได้จริง
            </p>

          </div>

          <div>

            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
              alt=""
              className="rounded-3xl h-[420px] w-full object-cover"
            />

          </div>

        </div>

        {/* TOP BAR */}

        <div className="flex flex-col lg:flex-row gap-6 justify-between items-center mb-12">

          <div className="flex flex-wrap gap-4">

            {[
              "ALL",
              "INTERIOR TIPS",
              "BUILT-IN IDEAS",
              "DESIGN",
              "MATERIALS",
              "MAINTENANCE",
            ].map((item, index) => (
              <button
                key={index}
                className="px-5 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-yellow-500 hover:text-black transition"
              >
                {item}
              </button>
            ))}

          </div>

          <div className="relative w-full lg:w-[320px]">

            <FaSearch className="absolute left-4 top-4 text-gray-400" />

            <input
              type="text"
              placeholder="Search articles..."
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-5 outline-none"
            />

          </div>

        </div>

        {/* BLOG GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {blogs.map((blog, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300"
            >

              <img
                src={blog.image}
                alt=""
                className="h-60 w-full object-cover"
              />

              <div className="p-6">

                <p className="text-yellow-500 text-sm mb-3">
                  {blog.category}
                </p>

                <h3 className="text-xl font-semibold leading-8 mb-5">
                  {blog.title}
                </h3>

                <div className="flex items-center gap-5 text-sm text-gray-400">

                  <div className="flex items-center gap-2">
                    <FaCalendarAlt />
                    {blog.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <FaClock />
                    {blog.read}
                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  )
}
