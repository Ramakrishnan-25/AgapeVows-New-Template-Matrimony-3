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
        background: 'linear-gradient(135deg, #7b2ff7, #9333ea, #6a11cb)',
        color: '#fff',
        paddingTop: '400px',
        paddingBottom: '20px',
        fontFamily: "'Poppins', sans-serif"
      }}>

        <style>{`
          .agape-vows-footer a {
            color: #fff !important;
            text-decoration: none;
            transition: 0.3s;
            display: block;
            padding: 10px 0;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }

          .agape-vows-footer a:hover {
            padding-left: 10px;
            color: #d4af37 !important;
          }

          .agape-vows-footer ul { list-style: none; padding: 0; }

          .footer-section-title {
            font-size: 22px;
            font-weight: 700;
            color: #d4af37;
            margin-bottom: 25px;
            text-shadow: 0 0 10px rgba(255,213,79,0.6);
          }

          .footer-input {
            width: 100%;
            padding: 12px 15px;
            margin-bottom: 15px;
            border-radius: 10px;
            border: 1px solid rgba(255,255,255,0.3);
            background: rgba(255,255,255,0.1);
            color: #fff;
          }

          .footer-input:focus {
            border: 1px solid #d4af37;
            box-shadow: 0 0 10px rgba(255,213,79,0.5);
            outline: none;
          }

          .footer-submit {
            background: linear-gradient(45deg, #d4af37, #d4af37);
            color: #000;
            border: none;
            padding: 12px;
            border-radius: 50px;
            font-weight: 700;
            cursor: pointer;
            width: 100%;
          }

          .footer-submit:hover {
            transform: scale(1.05);
          }

          .soc-icon-wrap {
            width: 45px;
            height: 45px;
            background: rgba(255,255,255,0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .soc-icon-wrap img {
            width: 20px;
          }

          .gal-grid-item {
            width: 100%;
            aspect-ratio: 1;
            object-fit: cover;
            border-radius: 12px;
            transition: 0.3s;
          }

          .gal-grid-item:hover {
            transform: scale(1.1);
          }
        `}</style>

        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          paddingLeft: '15px',
          paddingRight: '15px'
        }}>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '50px',
            justifyContent: 'space-between'
          }}>

            {/* Branding */}
            <div style={{
              flex: '1 1 220px',
              minWidth: '200px',
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(15px)",
              padding: "25px",
              borderRadius: "20px",
              textAlign: "center",
              border: "1px solid rgba(255,255,255,0.2)"
            }}>
              <h2 style={{ fontSize: '32px', fontWeight: 800 }}>AgapeVows</h2>

              <p>India's No.1 Christian Matrimony</p>

              <img
                src={logoBImg}
                alt="Logo"
                style={{
                  maxWidth: '200px',
                  margin: '20px 0',
                  filter: 'brightness(0) invert(1) contrast(200%)'
                }}
              />

              <p style={{ fontSize: '14px' }}>
                Helping you find your perfect life partner with trust & faith.
              </p>

              <p style={{ marginTop: '15px' }}>info@agapevows.com</p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '15px' }}>
                <a href="#" className="soc-icon-wrap"><img src={social1} /></a>
                <a href="#" className="soc-icon-wrap"><img src={social2} /></a>
                <a href="#" className="soc-icon-wrap"><img src={social3} /></a>
                <a href="#" className="soc-icon-wrap"><img src={social5} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div style={{ flex: '1 1 220px', minWidth: '200px' }}>
              <h4 className="footer-section-title">Quick Links</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Churches</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Refund</a></li>
              </ul>
            </div>

            {/* Gallery */}
            <div style={{ flex: '1 1 220px', minWidth: '200px' }}>
              <h4 className="footer-section-title">Gallery</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px' }}>
                {[gal1, gal2, gal3, gal4, gal5, gal6].map((img, i) => (
                  <img key={i} src={img} className="gal-grid-item" alt="" />
                ))}
              </div>
            </div>

            {/* Feedback */}
            <div style={{ flex: '1 1 220px', minWidth: '200px' }}>
              <h4 className="footer-section-title">Feedback</h4>
              <form>
                <input type="text" placeholder="Name" className="footer-input" />
                <input type="email" placeholder="Email" className="footer-input" />
                <textarea rows="4" placeholder="Message" className="footer-input"></textarea>
                <button className="footer-submit">Submit</button>
              </form>
            </div>

          </div>

          {/* COPYRIGHT */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.3)',
            marginTop: '60px',
            paddingTop: '20px',
            textAlign: 'center',
            fontSize: '14px'
          }}>
            © 2024 AgapeVows Christian Matrimony. All rights reserved.
          </div>

        </div>
      </footer>
    </>
  );
}