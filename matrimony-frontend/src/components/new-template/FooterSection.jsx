import React from 'react';
import logoBImg from '../../assets/new-template/images/logo-b.png';
import social1 from '../../assets/new-template/images/social/1.png';
import social2 from '../../assets/new-template/images/social/2.png';
import social3 from '../../assets/new-template/images/social/3.png';
import social5 from '../../assets/new-template/images/social/5.png';
import gal1 from '../../assets/new-template/images/gallery/1.jpg';
import gal2 from '../../assets/new-template/images/gallery/2.jpg';
import gal3 from '../../assets/new-template/images/gallery/3.jpg';
import gal4 from '../../assets/new-template/images/gallery/4.jpg';
import gal5 from '../../assets/new-template/images/gallery/5.jpg';
import gal6 from '../../assets/new-template/images/gallery/6.jpg';

export default function FooterSection() {
  return (
    <>
      <footer className="agape-vows-footer" style={{
        backgroundColor: '#9333ea',
        color: '#fff',
        paddingTop: '80px',
        paddingBottom: '20px',
        marginTop: '0px',
        fontFamily: "'Poppins', sans-serif"
      }}>
        <style>{`
          .agape-vows-footer a { color: #fff !important; text-decoration: none; transition: 0.3s; display: block; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.1); }
          .agape-vows-footer a:hover { padding-left: 10px; color: #e3e6eeff !important; }
          .agape-vows-footer ul { padding: 0; list-style: none; }
          .agape-vows-footer .soc-icon-wrap { 
            width: 40px; 
            height: 40px; 
            background: #fff; 
            border-radius: 50%; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            transition: 0.3s;
          }
          .agape-vows-footer .soc-icon-wrap:hover { transform: translateY(-5px); background: #d4af37; }
          .agape-vows-footer .soc-icon-wrap img { width: 20px; filter: grayscale(1) contrast(200%); }
          .footer-section-title { 
            font-size: 22px; 
            font-weight: 700; 
            color: #d4af37; 
            margin-bottom: 30px; 
            text-transform: capitalize;
          }
          .footer-input {
            width: 100%;
            padding: 12px 15px;
            margin-bottom: 15px;
            border-radius: 8px;
            border: 1px solid rgba(255,255,255,0.2);
            background: rgba(255,255,255,0.1);
            color: #fff !important;
          }
          .footer-input::placeholder { color: rgba(255,255,255,0.6); }
          .footer-submit {
            background: #d4af37;
            color: #000;
            border: none;
            padding: 12px 35px;
            border-radius: 50px;
            font-weight: 700;
            cursor: pointer;
            transition: 0.3s;
            width: 100%;
          }
          .footer-submit:hover { background: #fff; transform: scale(1.02); }
          .gal-grid-item {
             width: 100%;
             aspect-ratio: 1;
             object-fit: cover;
             border-radius: 10px;
             border: 2px solid rgba(233, 233, 233, 0.2);
          }
          @media (max-width: 991px) {
            .agape-vows-footer { text-align: center; }
            .agape-vows-footer .soc-list { justify-content: center; }
          }
          @media (max-width: 768px) {
            .agape-vows-footer-inner { flex-direction: column !important; align-items: center !important; }
            .agape-vows-footer-inner > div { width: 100% !important; max-width: 100% !important; }
          }
          .footer-copyright p { color: #ffffff !important; margin: 0; }
        `}</style>

        <div style={{
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          paddingLeft: '30px',
          paddingRight: '30px',
          boxSizing: 'border-box'
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'space-between'
          }}>

            {/* 1st Section: Branding */}
            <div style={{
              flex: '1 1 220px',
              minWidth: '200px',
              maxWidth: '260px',
              background: "#fff",
              padding: "25px",
              borderRadius: "12px",
              color: "#000"
            }}>
              <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '5px', color: '#000' }}>
                AgapeVows
              </h2>

              <p style={{ color: '#555', fontWeight: 500, fontSize: '15px', marginBottom: '20px' }}>
                India's No.1 Christian Matrimony
              </p>

              <img
                src={logoBImg}
                alt="Logo"
                style={{ maxWidth: '180px', marginBottom: '25px', filter: 'none' }}
              />

              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#444' }}>
                Helping you find your perfect life partner within the Christian community through trust,
                faith, and verified connections.
              </p>

              <p style={{ marginTop: '20px', color: '#000' }}>
                <i className="fa fa-envelope" style={{ color: '#000', marginRight: '10px' }}></i>
                info@agapevows.com
              </p>

              <div className="d-flex gap-3 mt-4 soc-list">
                <a href="#" className="soc-icon-wrap"><img src={social1} alt="FB" /></a>
                <a href="#" className="soc-icon-wrap"><img src={social2} alt="TW" /></a>
                <a href="#" className="soc-icon-wrap"><img src={social3} alt="IG" /></a>
                <a href="#" className="soc-icon-wrap"><img src={social5} alt="YT" /></a>
              </div>
            </div>

            {/* 2nd Section: Quick Links */}
            <div style={{ flex: '1 1 180px', minWidth: '160px' }}>
              <h4 className="footer-section-title">Quick Links</h4>
              <ul>
                <li><a href="about-us.html">About Us</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Churches</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Refund Policy</a></li>
              </ul>
            </div>

            {/* 3rd Section: Gallery */}
            <div style={{ flex: '1 1 200px', minWidth: '180px' }}>
              <h4 className="footer-section-title">Gallery</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                {[gal1, gal2, gal3, gal4, gal5, gal6].map((img, i) => (
                  <img key={i} src={img} className="gal-grid-item" alt="gallery" />
                ))}
              </div>
            </div>

            {/* 4th Section: Feedback */}
            <div style={{ flex: '1 1 220px', minWidth: '200px' }}>
              <h4 className="footer-section-title">Feedback / Suggestions</h4>
              <form onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="Name" className="footer-input" required />
                <input type="email" placeholder="Email ID" className="footer-input" required />
                <textarea placeholder="Feedback | Suggestions" rows="4" className="footer-input" style={{ resize: 'none' }} required></textarea>
                <button type="submit" className="footer-submit">Submit Feedback</button>
              </form>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="footer-copyright" style={{
            borderTop: '1px solid rgba(250, 255, 254, 0.1)',
            marginTop: '60px',
            paddingTop: '30px',
            textAlign: 'center',
            fontSize: '14px',
            color: '#fff'
          }}>
            <p>© 2024 AgapeVows Christian Matrimony. All rights reserved.</p>
          </div>

        </div>
      </footer>
    </>
  );
}
