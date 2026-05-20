export default function Hero() {

  return (

    <section
     id="home"
     className="
    relative
    min-h-screen
    flex
    items-center
    ">

      <img
        src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1800&auto=format&fit=crop"
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        "
      />

      <div className="
      absolute
      inset-0
      bg-gradient-to-r
      from-black/80
      via-black/50
      to-black/20
      "></div>

      <div className="
      relative
      z-10
      max-w-7xl
      mx-auto
      px-6
      grid
      lg:grid-cols-2
      gap-10
      items-center
      pt-20
      ">

        <div>

          <p className="
          text-[#d6b37a]
          tracking-[5px]
          text-sm
          ">
            PP HOME FURNITURE
          </p>

          <h1 className="
          text-6xl
          md:text-8xl
          leading-tight
          font-light
          text-[#d6b37a]
          mt-6
          ">

            Built for Living,
            <br />

            Designed for You

          </h1>

          <h2 className="
          text-2xl
          md:text-3xl
          mt-8
          ">

            รับทำเฟอร์นิเจอร์บิวท์อินครบวงจร

          </h2>

          <p className="
          mt-6
          text-gray-300
          leading-8
          max-w-xl
          ">

            ออกแบบ ผลิต และติดตั้ง
            ด้วยทีมงานมืออาชีพ
            วัสดุคุณภาพสูง งานละเอียดทุกขั้นตอน

          </p>

          <div className="
          flex
          gap-5
          mt-10
          flex-wrap
          ">

            <button className="
            bg-gradient-to-r
            from-[#d6b37a]
            to-[#f1d4a4]
            text-black
            px-8
            py-4
            rounded-full
            ">

              ปรึกษาฟรี

            </button>

            <button className="
            border
            border-white/20
            px-8
            py-4
            rounded-full
            ">

              ดูผลงาน

            </button>

          </div>

        </div>

      </div>

    </section>

  )

}
