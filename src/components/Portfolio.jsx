import portfolio from "../data/portfolioData"

export default function Portfolio() {

  return (

    <section
      id="portfolio"
      className="
    max-w-7xl
    mx-auto
    px-6
    py-28
    ">

      <h2 className="
      text-5xl
      mb-14
      ">

        ผลงานของเรา

      </h2>

      <div className="
      grid
      md:grid-cols-2
      xl:grid-cols-4
      gap-6
      ">

        {
          portfolio.map((item, index) => (

            <div
              key={index}
              className="
              bg-[#0f1d19]
              rounded-[30px]
              overflow-hidden
              border
              border-white/10
              "
            >

              <img
                src={item.image}
                className="
                h-[320px]
                w-full
                object-cover
                "
              />

              <div className="p-6">

                <p className="text-sm text-gray-400">
                  {item.category}
                </p>

                <h3 className="text-2xl mt-2">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {item.style}
                </p>

              </div>

            </div>

          ))
        }

      </div>

    </section>

  )

}