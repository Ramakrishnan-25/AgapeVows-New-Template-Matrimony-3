import { useEffect, useState } from 'react';
import './HeroSearchSection.css';
import bannerBg from '../assets/images/ban-bg.jpg';
import bannerImg from '../assets/images/banner.jpg';
import coupleImg1 from '../assets/images/couples/1.jpg';
import coupleImg2 from '../assets/images/couples/2.jpg';

export default function HeroSearchSection() {
  const [minAge, setMinAge] = useState(25);
  const [maxAge, setMaxAge] = useState(35);
  const ageOptions = Array.from({ length: 53 }, (_, i) => 18 + i);

  useEffect(() => {
    if (window.$ && window.$.fn.slick) {
      const $carousel = $('.ban-sli');
      if ($carousel.length && !$carousel.hasClass('slick-initialized')) {
        $carousel.slick({
          dots: false,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          arrows: false,
          fade: true,
          cssEase: 'linear'
        });
      }
    }
  }, []);

  return (
    <>
      {/* BANNER SLIDER (BACKGROUND) */}
      <section className="hom-ban-sli">
        <div>
          <ul className="ban-sli">
            <li>
              <div>
                <img src={bannerBg} alt="Wedding Banner 1" loading="lazy" />
              </div>
            </li>
            <li>
              <div>
                <img src={bannerImg} alt="Wedding Banner 2" loading="lazy" />
              </div>
            </li>
            <li>
              <div>
                <img src={coupleImg1} alt="Recent Couple 1" loading="lazy" />
              </div>
            </li>
            <li>
              <div>
                <img src={coupleImg2} alt="Recent Couple 2" loading="lazy" />
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* HERO CONTENT & SEARCH */}
      <section className="hero-search-container">
        <div className="container">
          <div className="hero-content-wrapper">

            {/* Left Side: Professional Content */}
            <div className="hero-text-block">
              <div className="hero-badge">
                <i className="fa fa-star"></i> #1 Trusted Matrimony Brand
              </div>
              <h1>
                Begin Your Journey to
                <b>Eternal Love</b>
              </h1>
              <p>
                Discover meaningful connections and find your perfect life partner
                among thousands of verified profiles. Join the world's most trusted
                matrimony platform today.
              </p>
              <div className="hero-features">
                <div className="hero-feature-item">
                  <i className="fa fa-check"></i> 100% Verified Profiles
                </div>
                <div className="hero-feature-item">
                  <i className="fa fa-lock"></i> Secure & Private
                </div>
                <div className="hero-feature-item">
                  <i className="fa fa-heart"></i> Successful Stories
                </div>
              </div>
            </div>

            {/* Right Side: Modern Search Form */}
            <div className="hero-form-block">
              <div className="modern-search-card">
                <div className="search-card-head">
                  <h3>Find Your Match</h3>
                  <p>Fast & Efficient Way to Search</p>
                </div>
                <form className="modern-form">
                  <div className="form-group">
                    <label>I'm looking for a</label>
                    <select className="form-control">
                      <option value="Women">Bride (Woman)</option>
                      <option value="Men">Groom (Man)</option>
                    </select>
                  </div>

                  <div className="form-group age-form-group">
                    <label>AGE</label>
                    <div className="age-slider-wrapper">
                      <div className="slider-track" style={{
                        background: `linear-gradient(to right, rgba(255,255,255,0.3) ${((minAge - 18) / (70 - 18)) * 100}%, #9b4dff ${((minAge - 18) / (70 - 18)) * 100}%, #9b4dff ${((maxAge - 18) / (70 - 18)) * 100}%, rgba(255,255,255,0.3) ${((maxAge - 18) / (70 - 18)) * 100}%)`
                      }}></div>
                      <input
                        type="range"
                        min="18"
                        max="70"
                        value={minAge}
                        onChange={(e) => {
                          const val = Math.min(parseInt(e.target.value), maxAge - 1);
                          setMinAge(val);
                        }}
                        className="age-range min-age"
                      />
                      <input
                        type="range"
                        min="18"
                        max="70"
                        value={maxAge}
                        onChange={(e) => {
                          const val = Math.max(parseInt(e.target.value), minAge + 1);
                          setMaxAge(val);
                        }}
                        className="age-range max-age"
                      />
                    </div>
                    <div className="age-dropdown-row">
                      <select
                        value={minAge}
                        onChange={(e) => setMinAge(parseInt(e.target.value))}
                        className="age-select"
                      >
                        {ageOptions.map(age => (
                          <option key={age} value={age}>{age}</option>
                        ))}
                      </select>
                      <span className="age-to-text">to</span>
                      <select
                        value={maxAge}
                        onChange={(e) => setMaxAge(parseInt(e.target.value))}
                        className="age-select"
                      >
                        {ageOptions.map(age => (
                          <option key={age} value={age}>{age}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Religion / Community</label>
                    <select className="form-control">
                      <option value="">Any Religion</option>
                      <option value="Christian">Christian</option>
                      <option value="Hindu">Hindu</option>
                      <option value="Muslim">Muslim</option>
                      <option value="Jain">Jain</option>
                      <option value="Sikh">Sikh</option>
                    </select>
                  </div>

                  {/* <div className="form-group">
                    <label>Location</label>
                    <select className="form-control">
                      <option value="">Select Location</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Delhi">Delhi</option>
                    </select>
                  </div> */}

                  <button type="submit" className="hero-search-btn">
                    <i className="fa fa-search"></i> Search Profiles
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
