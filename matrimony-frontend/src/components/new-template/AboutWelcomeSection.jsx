import about1 from '../../assets/new-template/images/about/1.jpg';
import couple20 from '../../assets/new-template/images/couples/20.jpg';
export default function AboutWelcomeSection() {
  return (
    <section>
      <div className="ab-wel">
        <div className="container" style={{ maxWidth: '1350px', width: '100%' }}>
          <div className="row">
            <div className="col-lg-6">
              <div className="ab-wel-lhs">
                <span className="ab-wel-3" />
                <img src={about1} alt="" loading="lazy" className="ab-wel-1" />
                <img src={couple20} alt="" loading="lazy" className="ab-wel-2" />
                <span className="ab-wel-4" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="ab-wel-rhs">

                <div className="ab-wel-tit">
                  <h2>
                    <span>Welcome to</span>{" "}
                    <em>Wedding matrimony</em>
                  </h2>

                  {/* 🖤 Content */}
                  <p>
                    Best wedding matrimony It is a long established fact that a reader
                    will be distracted by the readable content of a page when looking at
                    its layout.
                  </p>

                  <p>
                    <a href="plans.html">
                      Click here to
                    </a>{" "}
                    Start you matrimony service now.
                  </p>
                </div>

                <div className="ab-wel-tit-1">
                  <p>
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don't look even slightly
                    believable.
                  </p>
                </div>

                <div className="ab-wel-tit-2">
                  <ul>
                    <li>
                      <div>
                        <i className="fa fa-phone" aria-hidden="true" />
                        <h4>
                          Enquiry <em>+01 2242 3366</em>
                        </h4>
                      </div>
                    </li>

                    <li>
                      <div>
                        <i className="fa fa-envelope-o" aria-hidden="true" />
                        <h4>
                          Get Support <em>info@example.com</em>
                        </h4>
                      </div>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
