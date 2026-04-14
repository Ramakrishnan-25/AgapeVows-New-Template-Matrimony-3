import blog1 from '../../assets/new-template/images/blog/1.jpg';
import blog2 from '../../assets/new-template/images/blog/2.jpg';
import blog3 from '../../assets/new-template/images/blog/3.jpg';

export default function BlogSection() {
  return (
    <section>
      <div
        className="hom-blog"
        style={{
          padding: '30px 0',
          marginTop: '-60px'
        }}
      >
        <div className="container">
          <div className="row">
            <div className="home-tit">

              {/* Blog posts → BLACK */}
              <p style={{ color: '#000000' }}>
                Blog posts
              </p>

              {/* Blog & Articles → VIOLET */}
              <h2>
                <span style={{ color: '#7c3aed' }}>
                  Blog &amp; Articles
                </span>
              </h2>

              <span className="leaf1" />
              <span className="tit-ani-" />
            </div>

            <div className="blog">
              <ul>
                <li>
                  <div className="blog-box">
                    <img src={blog1} alt="" loading="lazy" />

                    <span style={{ color: '#ed1818ff' }}>
                      Wedding - Johnny
                    </span>

                    {/* 🔥 Heading → VIOLET */}
                    <h2 style={{ color: '#7c3aed' }}>
                      Wedding arrangements
                    </h2>

                    {/* 🔥 Content → BLACK */}
                    <p style={{ color: '#000000' }}>
                      It is a long established fact that a reader will be
                      distracted by the readable content.
                    </p>

                    {/* 🔥 Button → VIOLET */}
                    <a
                      href="blog-details.html"
                      className="cta-dark"
                      style={{
                        backgroundColor: '#7c3aed',
                        color: '#ffffff',
                        border: 'none'
                      }}
                    >
                      <span>Read more</span>
                    </a>
                  </div>
                </li>

                <li>
                  <div className="blog-box">
                    <img src={blog2} alt="" loading="lazy" />

                    <span style={{ color: '#e92d2dff' }}>
                      Wedding - Johnny
                    </span>

                    <h2 style={{ color: '#7c3aed' }}>
                      Wedding arrangements
                    </h2>

                    <p style={{ color: '#000000' }}>
                      It is a long established fact that a reader will be
                      distracted by the readable content.
                    </p>

                    <a
                      href="blog-details.html"
                      className="cta-dark"
                      style={{
                        backgroundColor: '#7c3aed',
                        color: '#ffffff',
                        border: 'none'
                      }}
                    >
                      <span>Read more</span>
                    </a>
                  </div>
                </li>

                <li>
                  <div className="blog-box">
                    <img src={blog3} alt="" loading="lazy" />

                    <span style={{ color: '#f31f1fff' }}>
                      Wedding - Johnny
                    </span>

                    <h2 style={{ color: '#7c3aed' }}>
                      Invitation cards
                    </h2>

                    <p style={{ color: '#000000' }}>
                      It is a long established fact that a reader will be
                      distracted by the readable content.
                    </p>

                    <a
                      href="blog-details.html"
                      className="cta-dark"
                      style={{
                        backgroundColor: '#7c3aed',
                        color: '#ffffff',
                        border: 'none'
                      }}
                    >
                      <span>Read more</span>
                    </a>
                  </div>
                </li>

              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
