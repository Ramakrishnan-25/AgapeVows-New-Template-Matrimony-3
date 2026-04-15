import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import profile6 from '../../assets/new-template/images/profiles/6.jpg';
import profile7 from '../../assets/new-template/images/profiles/7.jpg';
import profile8 from '../../assets/new-template/images/profiles/8.jpg';
import profile9 from '../../assets/new-template/images/profiles/9.jpg';

const team = [
  { img: profile6, name: 'Ashley Jen', role: 'Marketing Manager' },
  { img: profile7, name: 'David Stone', role: 'Relationship Coach' },
  { img: profile8, name: 'Emily Arrov', role: 'Creative Manager' },
  { img: profile9, name: 'Julia Sear', role: 'Client Coordinator' },
];

export default function TeamSection() {
  return (
    <section>
      <div
        className="ab-team"
        style={{
          paddingTop: '20px',
          marginTop: '-50px',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="home-tit">
              <p style={{ color: '#000000' }}>OUR PROFESSIONALS</p>
              <h2>
                <span style={{ color: '#7c3aed' }}>Meet Our Team</span>
              </h2>
              <span className="leaf1" />
            </div>

            <div className="swiper-team-wrapper" style={{ position: 'relative', padding: '10px 0 50px 0' }}>
              <style>{`
                .swiper-team-wrapper .swiper-button-next,
                .swiper-team-wrapper .swiper-button-prev {
                  color: #d4af37 !important;
                  background: #fff;
                  width: 44px; height: 44px;
                  border-radius: 50%;
                  box-shadow: 0 4px 12px rgba(212,175,55,0.2);
                  transition: all 0.3s ease;
                }
                .swiper-team-wrapper .swiper-button-next:hover,
                .swiper-team-wrapper .swiper-button-prev:hover {
                  background: #d4af37; color: #fff !important;
                }
                .swiper-team-wrapper .swiper-button-next:after,
                .swiper-team-wrapper .swiper-button-prev:after { font-size: 18px; font-weight: bold; }
                .swiper-team-wrapper .swiper-pagination-bullet { background: #ccc; opacity: 0.5; }
                .swiper-team-wrapper .swiper-pagination-bullet-active { background: #d4af37; opacity: 1; width: 22px; border-radius: 5px; }
                .team-card {
                  background: #fff;
                  border-radius: 20px;
                  overflow: hidden;
                  box-shadow: 0 8px 30px rgba(0,0,0,0.06);
                  border: 1px solid rgba(212,175,55,0.08);
                  transition: transform 0.3s ease, box-shadow 0.3s ease;
                  text-align: center;
                  margin: 10px;
                }
                .team-card:hover { transform: translateY(-6px); box-shadow: 0 15px 40px rgba(124,58,237,0.12); }
                .team-card img {
                  width: 100%;
                  height: 220px;
                  object-fit: cover;
                  display: block;
                }
                .team-card-body { padding: 20px 16px; }
                .team-card h4 { font-family: 'Playfair Display', serif; font-size: 20px; color: #222; margin: 0 0 6px 0; }
                .team-card p { color: #777; font-size: 14px; margin: 0 0 14px 0; }
                .team-social { display: flex; justify-content: center; gap: 10px; }
                .team-social a { width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: #f3f0ff; color: #7c3aed; font-size: 13px; transition: all 0.3s; }
                .team-social a:hover { background: #7c3aed; color: #fff; }
                @media (max-width: 768px) {
                  .swiper-team-wrapper .swiper-button-next,
                  .swiper-team-wrapper .swiper-button-prev { display: none; }
                }
              `}</style>

              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true, dynamicBullets: true }}
                autoplay={{ delay: 4200, disableOnInteraction: false }}
                loop={false}
                breakpoints={{
                  576: { slidesPerView: 2, spaceBetween: 20 },
                  1024: { slidesPerView: 4, spaceBetween: 24 },
                }}
                style={{ padding: '10px 10px 50px 10px' }}
              >
                {team.map((member, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="team-card">
                      <img src={member.img} alt={member.name} loading="lazy" />
                      <div className="team-card-body">
                        <h4>{member.name}</h4>
                        <p>{member.role}</p>
                        <div className="team-social">
                          {['fa-facebook', 'fa-twitter', 'fa-whatsapp', 'fa-linkedin', 'fa-instagram'].map((icon, i) => (
                            <a key={i} href="#!"><i className={`fa ${icon}`} aria-hidden="true" /></a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
