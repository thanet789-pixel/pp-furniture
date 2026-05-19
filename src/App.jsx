import './App.css'

function App() {

  return (

    <div>

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="logo">
          PP Furniture
        </div>

        <ul className="nav-links">
          <li>Home</li>
          <li>Portfolio</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>

      </nav>

      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <h1>
            Luxury Interior Design
          </h1>

          <p>
            Modern Built-in & Premium Furniture
          </p>

          <button>
            View Portfolio
          </button>

        </div>

      </section>

      {/* PORTFOLIO */}

      <section className="portfolio">

        <h2>Our Portfolio</h2>

        <div className="portfolio-grid">

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
              alt=""
            />
            <h3>Luxury Bedroom</h3>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156"
              alt=""
            />
            <h3>Modern Living Room</h3>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858"
              alt=""
            />
            <h3>Premium Kitchen</h3>
          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section className="contact">

        <h2>Contact Us</h2>

        <p>LINE : @ppfurniture</p>

        <p>Phone : 081-234-5678</p>

        <button>
          Contact Now
        </button>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        <p>
          © 2026 PP Furniture & Design
        </p>

      </footer>

    </div>

  )

}

export default App
