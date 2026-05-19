import './App.css'
import { useState } from 'react'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <span className="logo-icon">✨</span> PP Furniture
          </div>
          
          <button 
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home">หน้าแรก</a></li>
            <li><a href="#services">บริการ</a></li>
            <li><a href="#portfolio">ผลงาน</a></li>
            <li><a href="#about">เกี่ยวกับเรา</a></li>
            <li><a href="#contact">ติดต่อ</a></li>
          </ul>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Luxury Interior Design</h1>
          <p className="hero-subtitle">ออกแบบตกแต่งภายในและเฟอร์นิเจอร์สำหรับบ้านหรูของคุณ</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">ดูผลงาน</button>
            <button className="btn btn-secondary">ติดต่อเรา</button>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="services">
        <div className="container">
          <h2>บริการของเรา</h2>
          <p className="section-subtitle">บริการออกแบบและจัดสรรพื้นที่ที่มีคุณภาพสูง</p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🛋️</div>
              <h3>เฟอร์นิเจอร์ในตัวอาคาร</h3>
              <p>เฟอร์นิเจอร์สำหรับจัดเก็บและตกแต่งคุณภาพพรีเมียม</p>
            </div>

            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>ออกแบบตกแต่งภายใน</h3>
              <p>ออกแบบพื้นที่สมัยใหม่ที่ลงตัวกับไลฟ์สไตล์คุณ</p>
            </div>

            <div className="service-card">
              <div className="service-icon">🐱</div>
              <h3>เฟอร์นิเจอร์สัตว์เลี้ยง</h3>
              <p>เฟอร์นิเจอร์แมวและสัตว์เลี้ยงออกแบบหรูหรา</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2>ผลงานของเรา</h2>
          <p className="section-subtitle">ดูตัวอย่างโครงการที่สมบูรณ์แล้ว</p>
          
          <div className="portfolio-grid">
            <div className="portfolio-card">
              <img 
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop" 
                alt="Luxury Bedroom"
              />
              <div className="portfolio-overlay">
                <h3>ห้องนอนหรู</h3>
                <p>Interior Design Premium</p>
              </div>
            </div>

            <div className="portfolio-card">
              <img 
                src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=800&auto=format&fit=crop" 
                alt="Modern Living Room"
              />
              <div className="portfolio-overlay">
                <h3>ห้องนั่งเล่นสมัยใหม่</h3>
                <p>Modern Design</p>
              </div>
            </div>

            <div className="portfolio-card">
              <img 
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop" 
                alt="Premium Kitchen"
              />
              <div className="portfolio-overlay">
                <h3>ห้องครัวพรีเมียม</h3>
                <p>Kitchen Design</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="about">
        <div className="container about-content">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600&auto=format&fit=crop" 
              alt="About PP Furniture"
            />
          </div>
          <div className="about-text">
            <h2>เกี่ยวกับ PP Furniture & Design</h2>
            <p>
              เรามีประสบการณ์กว่า 10 ปีในการออกแบบตกแต่งภายในและสร้างเฟอร์นิเจอร์คุณภาพสูง
              ทีมงานของเราประกอบด้วยสถาปนิกและนักออกแบบภายในที่มีประสบการณ์สูง
            </p>
            <p>
              เรามุ่งมั่นให้บริการที่ดีที่สุดและสร้างสรรค์พื้นที่ที่สวยงาม 
              สะดวกสบาย และสะท้อนบุคลิกของเจ้าของบ้าน
            </p>
            <button className="btn btn-primary">เรียนรู้เพิ่มเติม</button>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="testimonials">
        <div className="container">
          <h2>ความคิดเห็นจากลูกค้า</h2>
          <p className="section-subtitle">พูดคุยจากลูกค้าที่พอใจ</p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>
                "ทีมงาน PP Furniture ทำให้บ้านของเราสวยงามและมีหลากหลายคุณสมบัติ
                ราคาน้อยลง ประหยัดพื้นที่ มากขึ้น! ถูกใจมากครับ"
              </p>
              <h4>- นาย ประเสริฐ เจริญสุข</h4>
            </div>

            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>
                "บริการระดับพรีเมียม ความเป็นมืออาชีพ และการดูแลรายละเอียดทำให้เรา
                พอใจมากด้วย ห้องของเรากลายเป็นสวรรค์เล็กๆ"
              </p>
              <h4>- นางสาว จิรา สมบูรณ์สิริ</h4>
            </div>

            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>
                "ผลงานของ PP Furniture ดีมากจริงๆ ทั้งความสวยงาม 
                และการใช้งานจริง ทีมงานมีวิธีการทำงานขั้นสูง"
              </p>
              <h4>- นาย วิชิต อำนาจจร</h4>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>ติดต่อเรา</h2>
          <p className="section-subtitle">เรียนรู้เพิ่มเติมเกี่ยวกับบริการของเรา</p>
          
          <div className="contact-wrapper">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <h3>โทรศัพท์</h3>
                <p>08X-XXX-XXXX</p>
              </div>

              <div className="contact-item">
                <div className="contact-icon">💬</div>
                <h3>LINE</h3>
                <p>@ppfurniture</p>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <h3>ที่อยู่</h3>
                <p>ประเทศไทย</p>
              </div>
            </div>

            <div className="contact-form">
              <input type="text" placeholder="ชื่อของคุณ" />
              <input type="email" placeholder="อีเมล" />
              <textarea rows="5" placeholder="ข้อความ"></textarea>
              <button className="btn btn-primary">ส่งข้อความ</button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>PP Furniture & Design</h3>
              <p>Luxury Interior Design & Built-in Furniture</p>
            </div>

            <div className="footer-col">
              <h3>เมนู</h3>
              <ul>
                <li><a href="#home">หน้าแรก</a></li>
                <li><a href="#services">บริการ</a></li>
                <li><a href="#portfolio">ผลงาน</a></li>
                <li><a href="#contact">ติดต่อ</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>ติดต่อ</h3>
              <p>📞 08X-XXX-XXXX</p>
              <p>💬 @ppfurniture</p>
              <p>📧 info@ppfurniture.com</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 PP Furniture & Design. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
