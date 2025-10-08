import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Themecontext } from "./Themecontext";
import './Header.css';

const Header = () => {
  const { theme, toggleTheme } = useContext(Themecontext);
  const [menuOpen, setMenuOpen] = useState(false);

const handleToggle = () => {
  setMenuOpen(!menuOpen);
};
const handleNavLinkClick = () => {
  setMenuOpen(false);
  const collapseEl = document.getElementById('navbarScroll');
  if (collapseEl && window.bootstrap) {
    const bsCollapse = window.bootstrap.Collapse.getInstance(collapseEl);
    if (bsCollapse) {
      bsCollapse.hide();
    }
  }
};

  return (
    <header
      id="site-header"
      className="fixed-top"
      style={{
        backdropFilter: "blur(16px)",
        backgroundColor:
          theme === "dark" ? "rgba(30,30,30,0.8)" : "rgba(255,255,255,0.85)",
        borderBottom:
          theme === "dark"
            ? "1px solid rgba(255,255,255,0.1)"
            : "1px solid rgba(0,0,0,0.07)",
        transition: "all 0.4s ease",
        boxShadow:
          theme === "dark"
            ? "0 4px 20px rgba(0,0,0,0.5)"
            : "0 4px 20px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      <div className="container-fluid px-3 px-md-4">
        <nav className="navbar navbar-expand-lg align-items-center justify-content-between">
          {/* Logo & Brand */}
          <NavLink
            className="navbar-brand d-flex align-items-center"
            to="/"
            style={{
              gap: "12px",
              textDecoration: "none",
            }}
          >
            <img
              src="/images/mainlogo.png"
              alt="Company Logo"
              style={{
                height: "58px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
           <div className="d-flex flex-column" style={{ lineHeight: 1.2 }}>
  <span
    style={{
      fontSize: "clamp(1rem, 4vw, 1.5rem)",
      fontWeight: 800,
      letterSpacing: "1px",
      color: theme === "dark" ? "#fff" : "#121212",
      fontFamily: "'Cinzel', serif",
      textShadow:
        theme === "dark"
          ? "0 1px 3px rgba(255,255,255,0.1)"
          : "0 1px 2px rgba(0,0,0,0.08)",
    }}
  >
    BAX Consulting
  </span>
  <span
    style={{
      fontSize: "clamp(0.6rem, 2vw, 0.8rem)",
      fontWeight: 500,
      letterSpacing: "1.5px",
      textTransform: "uppercase",
      color: theme === "dark" ? "#cccccc" : "#444444",
      fontFamily: "'Poppins', sans-serif",
      opacity: 0.85,
    }}
  >
    Group
  </span>
</div>

          </NavLink>

          {/* Mobile Toggle */}
   <button
  className="navbar-toggler border-0"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarScroll"
  aria-controls="navbarScroll"
  aria-expanded={menuOpen}
  aria-label="Toggle navigation"
  onClick={handleToggle}
>
  {!menuOpen ? (
    <span className="navbar-toggler-icon"></span>
  ) : (
    <span className="custom-close-icon">×</span>
  )}
</button>


          {/* Navigation Links */}
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center" style={{ gap: "10px" }}>
              {["/", "/about", "/services", "/contact"].map((path, i) => {
                const names = ["Home", "About", "Services", "Contact"];
                return (
                  <li className="nav-item" key={i}>
                    <NavLink
                      to={path}
                      end={path === "/"}
                      onClick={handleNavLinkClick} 
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                      style={{
                        fontWeight: 500,
                        fontSize: "1rem",
                        color: theme === "dark" ? "#eee" : "#333",
                        padding: "6px 12px",
                        borderRadius: "6px",
                        transition: "all 0.3s",
                      }}
                    >
                      {names[i]}
                    </NavLink>
                  </li>
                );
              })}

              {/* Theme Switch */}
              <li className="nav-item">
                <label className="theme-switch" htmlFor="checkbox" style={{ cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    id="checkbox"
                    onChange={toggleTheme}
                    checked={theme === "dark"}
                    style={{ display: "none" }}
                  />
                  <div
                    className="mode-container"
                    style={{
                      width: "46px",
                      height: "26px",
                      background: theme === "dark" ? "#444" : "#ddd",
                      borderRadius: "15px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: theme === "dark" ? "flex-end" : "flex-start",
                      padding: "3px",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <div
                      style={{
                        height: "18px",
                        width: "18px",
                        borderRadius: "50%",
                        background: theme === "dark" ? "#fdd835" : "#333",
                        boxShadow:
                          theme === "dark"
                            ? "0 0 4px #fdd835"
                            : "0 0 3px rgba(0,0,0,0.3)",
                        transition: "all 0.3s ease",
                      }}
                    ></div>
                  </div>
                </label>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
