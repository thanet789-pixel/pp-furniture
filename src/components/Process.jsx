export default function Process() {

  return (

    <section
      className="
    max-w-7xl
    mx-auto
    px-6
    pb-28
    ">

      <div className="
      border
      border-white/10
      rounded-[40px]
      p-10
      bg-white/5
      ">

        <h2 className="
        text-5xl
        mb-10
        ">

          ขั้นตอนการทำงาน

        </h2>

        <div className="
        grid
        md:grid-cols-5
        gap-10
        ">

          {
            [
              "ปรึกษา",
              "ออกแบบ",
              "ผลิต",
              "ติดตั้ง",
              "ส่งมอบ"
            ].map((step, index) => (

              <div
                key={index}
                className="text-center"
              >

                <div className="
                w-20
                h-20
                rounded-full
                border
                border-[#d6b37a]
                flex
                items-center
                justify-center
                mx-auto
                text-[#d6b37a]
                ">

                  0{index + 1}

                </div>

                <h3 className="mt-5">
                  {step}
                </h3>

              </div>

            ))
          }

        </div>

      </div>

    </section>

  )

}
