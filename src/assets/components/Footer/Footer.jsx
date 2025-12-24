import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {

    const navigate = useNavigate();

    const handleStartShopping = () => {
        navigate("/"); 
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

return (
    <footer className={styles.footer}>
      {/* Main links */}
        <div className={styles.linkSectionWrapper}>
            <div className={styles.linkColumn}>
                <h4>Get to Know Us</h4>
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Press Releases</a>
                <a href="#">Amazon Science</a>
            </div>

            <div className={styles.linkColumn}>
                <h4>Make Money with Us</h4>
                <a href="#">Sell on Amazon</a>
                <a href="#">Become an Affiliate</a>
                <a href="#">Advertise Your Products</a>
                <a href="#">Self-Publish</a>
            </div>

            <div className={styles.linkColumn}>
                <h4>Amazon Payment Products</h4>
                <a href="#">Amazon Business Card</a>
                <a href="#">Shop with Points</a>
                <a href="#">Reload Your Balance</a>
                <a href="#">Currency Converter</a>
            </div>

            <div className={styles.linkColumn}>
                <h4>Let Us Help You</h4>
                <a href="#">Your Account</a>
                <a href="#">Shipping Rates & Policies</a>
                <a href="#">Returns & Replacements</a>
                <a href="#">Help</a>
            </div>
        </div>

      {/* Logo + Region */}
        <div className={styles.logoRow}>
            <div className={styles.logo} onClick={handleStartShopping}>
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amzone-logo" ></img>
            </div>

            <div className={styles.regionRow}>
                <button className={styles.regionButton}>🌐 English</button>
                <button className={styles.regionButton}>🇪🇹 Ethiopia</button>
            </div>
        </div>

      {/* Countries row (simple version) */}
        <div className={styles.countryRow}>
            <span>Brazil</span>
            <span>Canada</span>
            <span>Australia</span>
            <span>China</span>
            <span>France</span>
            <span>Germany</span>
            <span>India</span>
            <span>Japan</span>
            <span>Mexico</span>
            <span>Netherlands</span>
            <span>United Arab Emirates</span>
            <span>United Kingdom</span>
            <span>United States</span>
        </div>

      {/* Bottom links */}
        <div className={styles.bottomLinks}>
            <div>
                <a href="#">Conditions of Use</a>
                <a href="#">Privacy Notice</a>
                <a href="#">Cookies</a>
            </div>
            <p>© {new Date().getFullYear()} Amazone Clone · Built by You</p>
        </div>
    </footer>
  );
}

export default Footer;
