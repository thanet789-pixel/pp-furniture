import React, { useEffect, useState } from "react"

export default function Navbar() {

  const [active, setActive] = useState(typeof window !== 'undefined' && window.location.hash ? window.location.hash : '#home')

  useEffect(() => {
    const onHash = () => setActive(window.location.hash || '#home')
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (

    <nav className="
    fixed
    top-0
    left-0
    w-full
    z-50
    backdrop-blur-xl
    bg-black/20
    border-b
    border-white/10
    shadow-2xl
    ">

      <div className="
      max-w-7xl
      mx-auto
      px-6
      h-20
      flex
      items-center
      justify-between
      ">

        {/* LOGO */}
        <a
          href="#home"
          className="group"
        >

          <h1 className="
          text-3xl
          tracking-[6px]
          text-[#d6b37a]
          font-light
          duration-300
          group-hover:scale-105
          ">

            PP HOME

          </h1>

          <p className="
          text-[10px]
          tracking-[4px]
          text-gray-400
          mt-1
          ">

            FURNITURE & DESIGN

          </p>

        </a>

        {/* MENU DESKTOP */}
        <ul className="
        hidden
        md:flex
        items-center
        gap-10
        text-sm
        text-gray-200
        tracking-[2px]
        ">

          {[
            { href: '#home', label: 'HOME' },
            { href: '#about', label: 'ABOUT' },
            { href: '#services', label: 'SERVICES' },
            { href: '#portfolio', label: 'PORTFOLIO' },
            { href: '#blog', label: 'BLOG' },
            { href: '#contact', label: 'CONTACT' },
          ].map((link) => (
            <li key={link.href} className="group">
              <a
                href={link.href}
                onClick={(e) => setActive(e.currentTarget.getAttribute('href'))}
                className={"hover:text-[#d6b37a] duration-300"}
              >
                <div className="flex flex-col items-center">
                  <span className={active === link.href ? 'text-[#d6b37a]' : ''}>{link.label}</span>
                  <span className={`block h-[2px] bg-[#d6b37a] mt-1 transition-all duration-300 ease-out rounded-full ${active === link.href ? 'w-full' : 'w-0 group-hover:w-1/2'}`}></span>
                </div>
              </a>
            </li>
          ))}

          
        </ul>

        {/* RIGHT SIDE */}
        <div className="
        flex
        items-center
        gap-4
        ">

          {/* BUTTON */}
          <button className="
          hidden
          md:block
          bg-gradient-to-r
          from-[#d6b37a]
          to-[#f1d4a4]
          text-black
          px-7
          py-3
          rounded-full
          text-sm
          font-medium
          hover:scale-105
          hover:shadow-[0_0_30px_rgba(214,179,122,0.4)]
          duration-300
          ">

            GET QUOTE

          </button>

          {/* MOBILE MENU */}
          <button className="
          md:hidden
          w-12
          h-12
          rounded-full
          border
          border-white/20
          flex
          items-center
          justify-center
          hover:border-[#d6b37a]
          duration-300
          ">

            <div className="
            flex
            flex-col
            gap-1
            ">

              <span className="
              w-5
              h-[2px]
              bg-white
              "></span>

              <span className="
              w-5
              h-[2px]
              bg-white
              "></span>

              <span className="
              w-5
              h-[2px]
              bg-white
              "></span>

            </div>

          </button>

        </div>

      </div>

    </nav>

  )

}
