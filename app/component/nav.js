// app/components/Nav.js
import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <>
      <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-6 col-md-3 mb-2 mb-md-0">
              {/* Replace the text with your logo image */}
              <a href="/" className={`d-inline-flex ${styles.logoLink}`}>
                <img src="/img/555.png" alt="Logo" className={styles.logo} />
                <span className={styles.logoText}></span>
              </a>
            </div>
            <div className="col-6 col-md-9">
              <nav className="navbar navbar-expand-md">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a href="/" className="nav-link px-2 link-secondary">Home</a>
                    </li>
                    <li className="nav-item">
                      <Link href="/about" className="nav-link px-2">About</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/Service" className="nav-link px-2">Service</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/Contact" className="nav-link px-2">Contact</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
