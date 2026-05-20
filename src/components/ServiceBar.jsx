export default function ServiceBar() {

  return (

    <section
      id="services"
      className="
    max-w-7xl
    mx-auto
    px-6
    -mt-20
    relative
    z-20
    ">

      <div className="
      grid
      md:grid-cols-4
      gap-6
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      rounded-[35px]
      p-8
      ">

        <div>
          <h3 className="text-[#d6b37a] text-xl">
            ออกแบบ 3D
          </h3>

          <p className="text-gray-400 mt-3">
            เห็นภาพก่อนเริ่มงานจริง
          </p>
        </div>

        <div>
          <h3 className="text-[#d6b37a] text-xl">
            วัสดุพรีเมียม
          </h3>

          <p className="text-gray-400 mt-3">
            แข็งแรง ทนทาน
          </p>
        </div>

        <div>
          <h3 className="text-[#d6b37a] text-xl">
            ทีมงานมืออาชีพ
          </h3>

          <p className="text-gray-400 mt-3">
            ประสบการณ์กว่า 10 ปี
          </p>
        </div>

        <div>
          <h3 className="text-[#d6b37a] text-xl">
            รับประกันงาน
          </h3>

          <p className="text-gray-400 mt-3">
            บริการหลังการขาย
          </p>
        </div>

      </div>

    </section>

  )

}