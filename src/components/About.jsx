export default function About() {

  return (

    <section
      id="about"
      className="
      py-32
      px-6
      relative
      overflow-hidden
      "
    >

      {/* BG LIGHT */}
      <div className="
      absolute
      top-0
      left-0
      w-[500px]
      h-[500px]
      bg-[#d6b37a]/10
      blur-[120px]
      rounded-full
      "></div>

      <div className="
      max-w-7xl
      mx-auto
      grid
      lg:grid-cols-2
      gap-16
      items-center
      relative
      z-10
      ">

        {/* IMAGE */}
        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop"
            className="
            rounded-[40px]
            h-[650px]
            w-full
            object-cover
            shadow-2xl
            "
          />

          {/* GLASS CARD */}
          <div className="
          absolute
          bottom-10
          left-10
          bg-white/10
          backdrop-blur-2xl
          border
          border-white/10
          rounded-[30px]
          p-8
          w-[280px]
          shadow-2xl
          ">

            <h3 className="
            text-[#d6b37a]
            text-5xl
            font-light
            ">
              10+
            </h3>

            <p className="
            text-white
            mt-3
            text-lg
            ">
              Years Experience
            </p>

            <p className="
            text-gray-300
            mt-2
            leading-7
            ">
              ประสบการณ์ด้านออกแบบ
              และผลิตเฟอร์นิเจอร์บิวท์อิน
              ระดับพรีเมียม
            </p>

          </div>

        </div>

        {/* CONTENT */}
        <div>

          <p className="
          text-[#d6b37a]
          tracking-[5px]
          text-sm
          ">
            ABOUT US
          </p>

          <h2 className="
          text-5xl
          md:text-7xl
          leading-tight
          mt-6
          font-light
          text-[#d6b37a]
          ">

            Crafted for Life,
            <br />

            Designed for You

          </h2>

          <p className="
          text-gray-300
          leading-9
          mt-8
          text-lg
          ">

            PP HOME FURNITURE
            เชี่ยวชาญด้านการออกแบบ
            และผลิตเฟอร์นิเจอร์บิวท์อิน
            แบบครบวงจร

            เราใส่ใจในทุกรายละเอียด
            ตั้งแต่งานออกแบบ
            การเลือกวัสดุ
            ไปจนถึงการติดตั้ง
            เพื่อให้ทุกพื้นที่สะท้อน
            ตัวตนและไลฟ์สไตล์ของคุณ

          </p>

          {/* FEATURES */}
          <div className="
          grid
          md:grid-cols-2
          gap-6
          mt-12
          ">

            <div className="
            bg-white/5
            border
            border-white/10
            rounded-[25px]
            p-6
            backdrop-blur-xl
            hover:-translate-y-2
            duration-300
            ">

              <h3 className="
              text-[#d6b37a]
              text-2xl
              ">
                Premium Quality
              </h3>

              <p className="
              text-gray-400
              mt-3
              leading-7
              ">
                วัสดุคุณภาพสูง
                แข็งแรง ทนทาน
                ใช้งานได้ยาวนาน
              </p>

            </div>

            <div className="
            bg-white/5
            border
            border-white/10
            rounded-[25px]
            p-6
            backdrop-blur-xl
            hover:-translate-y-2
            duration-300
            ">

              <h3 className="
              text-[#d6b37a]
              text-2xl
              ">
                Custom Design
              </h3>

              <p className="
              text-gray-400
              mt-3
              leading-7
              ">
                ออกแบบเฉพาะคุณ
                ให้เข้ากับบ้าน
                และสไตล์ที่ต้องการ
              </p>

            </div>

            <div className="
            bg-white/5
            border
            border-white/10
            rounded-[25px]
            p-6
            backdrop-blur-xl
            hover:-translate-y-2
            duration-300
            ">

              <h3 className="
              text-[#d6b37a]
              text-2xl
              ">
                Professional Team
              </h3>

              <p className="
              text-gray-400
              mt-3
              leading-7
              ">
                ทีมช่างมืออาชีพ
                ประสบการณ์สูง
                ใส่ใจทุกขั้นตอน
              </p>

            </div>

            <div className="
            bg-white/5
            border
            border-white/10
            rounded-[25px]
            p-6
            backdrop-blur-xl
            hover:-translate-y-2
            duration-300
            ">

              <h3 className="
              text-[#d6b37a]
              text-2xl
              ">
                Warranty
              </h3>

              <p className="
              text-gray-400
              mt-3
              leading-7
              ">
                รับประกันผลงาน
                พร้อมบริการ
                หลังการขาย
              </p>

            </div>

          </div>

          {/* BUTTON */}
          <button className="
          mt-12
          bg-gradient-to-r
          from-[#d6b37a]
          to-[#f1d4a4]
          text-black
          px-10
          py-4
          rounded-full
          hover:scale-105
          duration-300
          shadow-[0_0_40px_rgba(214,179,122,0.35)]
          ">

            LEARN MORE

          </button>

        </div>

      </div>

    </section>

  )

}
