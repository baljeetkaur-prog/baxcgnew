import React, { useContext } from 'react';
import { Themecontext } from './Themecontext';

const Footer = () => {
  const { theme, toggleTheme } = useContext(Themecontext);

  return (
    <>
      <footer className="w3l-footer py-3">
        <div className="container pt-3">
          <div className="row">
            <div className="col-lg-4 sub-one-left">
              <h6 className="footer-title">Contact</h6>
              <div className="column2">
                <div className="href1">
                  <span className="fas fa-envelope-open"></span>
                  <span className="ms-2">info@baxcg.com</span>
                </div>
                {/* <div className="href2 my-2">
                  <span className="fas fa-phone-alt"></span>
                  <span className="ms-2">+44 7727 119 556</span>
                </div> */}
                <div>
                  <p className="contact-para mb-2">
                    <span className="fas fa-map-marker-alt"></span>
                    <span className="ms-2">128 City Road, London EC1V 2NX</span>
                  </p>
                </div>
              </div>

              <ul className="social mt-3">
                <li>
                  <a
                    href="https://www.linkedin.com/in/gurbaxsingh/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span
                      className="fab fa-linkedin-in"
                      style={{ fontSize: '1.5rem', paddingBottom: '10px' }}
                    ></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-4 pt-2">
      <p className="footer-copy">
    &copy; {new Date().getFullYear()} BAX Consulting Group. All rights reserved |{" "}
    <a
      href="https://socialsimba.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="footer-design"
      style={{ fontWeight: "600", color:"#E63946" }}
    >
      Social Simba
    </a>
  </p>
          </div>
        </div>
      </footer>

      <style>{`
        .w3l-footer {
          font-size: 0.85rem;
        }

        .w3l-footer .footer-title {
          font-size: 1rem;
          font-weight: 600;
        }

        .w3l-footer .href1,
        .w3l-footer .href2,
        .w3l-footer .contact-para {
          font-size: 0.85rem;
        }

        .w3l-footer .footer-copy {
          font-size: 0.8rem;
          color: #bbb;
        }

        .w3l-footer .footer-design {
          font-size: 0.8rem;
          opacity: 1;
        }

        @media (max-width: 576px) {
          .w3l-footer {
            font-size: 0.78rem;
          }

          .w3l-footer .footer-title {
            font-size: 0.95rem;
          }

          .w3l-footer .href1,
          .w3l-footer .href2,
          .w3l-footer .contact-para {
            font-size: 0.78rem;
          }

          .w3l-footer .footer-copy,
          .w3l-footer .footer-design {
            font-size: 0.75rem;
          }

          .w3l-footer .fab.fa-linkedin-in {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
