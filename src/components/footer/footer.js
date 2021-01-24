import React from "react";
import Container from "../container/container";
import SocialIcons from "../social-icons/social-icons";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <SocialIcons facebook instagram twitter pinterest tiktok />

        <div className="footer-info-heading">Info</div>
        <ul className="fa-ul">
          <li>
            <i className="fa fa-li fa-map-marker"></i>
            <address>
              Unit 4 Ballywaltrim Business Park,
              <br />
              Boghall Road,
              <br />
              Bray, <br />
              Co. Wicklow
              <br />
              A98 RF25
            </address>
          </li>
          <li>
            <i className="fa fa-li fa-phone"></i>
            <a href="tel:01 204 2749">Call us at 01 204 2749</a>
          </li>
        </ul>

        <ul className="socialLinks socialLinks--alt">
          <li className="socialLinks-item">
            <a
              className="icon icon--facebook"
              href="https://www.facebook.com/BeautyFeatures"
              target="_blank"
              rel="noopener"
            ></a>
          </li>
          <li className="socialLinks-item">
            <a
              className="icon icon--instagram"
              href="https://www.instagram.com/beautyfeatures.ie/?hl=en"
              target="_blank"
              rel="noopener"
            ></a>
          </li>
          <li className="socialLinks-item">
            <a
              className="icon icon--twitter"
              href="https://twitter.com/beautyfeatures"
              target="_blank"
              rel="noopener"
            ></a>
          </li>
          <li className="socialLinks-item">
            <a
              className="icon icon--pinterest"
              href="https://www.pinterest.com/beautyfeatures/"
              target="_blank"
              rel="noopener"
            ></a>
          </li>
        </ul>

        <h5 className="footer-info-heading">Navigate</h5>
        <ul className="footer-info-list">
          <li>
            <a href="https://www.beautyfeatures.ie/about-beauty-features/">
              About Beauty Features
            </a>
          </li>
          <li>
            <a href="https://www.beautyfeatures.ie/contact-us/">
              Contact BeautyFeatures.ie
            </a>
          </li>
          <li>
            <a href="/delivery-returns/">Shipping &amp; Returns</a>
          </li>
          <li>
            <a href="https://www.beautyfeatures.ie/loyalty-programme/">
              Loyalty Programme
            </a>
          </li>
          <li>
            <a href="https://www.beautyfeatures.ie/guaranteed-irish/">
              Guaranteed Irish
            </a>
          </li>
          <li>
            <a href="https://www.beautyfeatures.ie/dermalogica/">Dermalogica</a>
          </li>
          <li>
            <a href="https://www.beautyfeatures.ie/fitflop-price-promise/">
              FitFlop Price Promise
            </a>
          </li>
          <li>
            <a href="https://www.beautyfeatures.ie/blog/">Blog</a>
          </li>
          <li>
            <a href="https://www.beautyfeatures.ie/influencers/">Influencers</a>
          </li>
          <li>
            <a href="https://www.beautyfeatures.ie/visit-the-salons/">
              Our Salon
            </a>
          </li>
          <li>
            <a href="https://www.beautyfeatures.ie/privacy-policy/">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="https://www.beautyfeatures.ie/terms-conditions/">
              Terms &amp; Conditions
            </a>
          </li>
          <li>
            <a href="https://www.beautyfeatures.ie/cookie-policy/">
              Cookie Policy
            </a>
          </li>
          <li>
            <a href="/sitemap.php">Sitemap</a>
          </li>
        </ul>

        <h5 className="footer-info-heading">Categories</h5>
        <ul className="footer-info-list">
          <li>
            <a href="https://www.beautyfeatures.ie/shop/">Shop</a>
          </li>
          <li>
            <a href="https://www.beautyfeatures.ie/top-brands/">Top Brands</a>
          </li>
          <li>
            <a href="https://www.beautyfeatures.ie/discount-outlet/">Sale</a>
          </li>
        </ul>

        <h5 className="footer-info-heading">Popular Brands</h5>
        <ul className="footer-info-list">
          <li>
            <a href="https://www.beautyfeatures.ie/brands/Dermalogica.html">
              Dermalogica
            </a>
          </li>
          <li>
            <a href="https://www.beautyfeatures.ie/brands/Decleor.html">
              Decleor
            </a>
          </li>
          <li>
            <a href="https://www.beautyfeatures.ie/brands/Joico-.html">
              Joico{" "}
            </a>
          </li>
          <li>
            <a href="https://www.beautyfeatures.ie/brands/Moroccanoil.html">
              Moroccanoil
            </a>
          </li>
          <li>
            <a href="https://www.beautyfeatures.ie/brands/Alfaparf.html">
              Alfaparf
            </a>
          </li>
          <li>
            <a href="https://www.beautyfeatures.ie/brands/Redken.html">
              Redken
            </a>
          </li>
          <li>
            <a href="https://www.beautyfeatures.ie/brands/Kerastase.html">
              Kerastase
            </a>
          </li>
          <li>
            <a href="https://www.beautyfeatures.ie/brands/FitFlop.html">
              FitFlop
            </a>
          </li>
          <li>
            <a href="https://www.beautyfeatures.ie/brands/The-Ordinary.html">
              The Ordinary
            </a>
          </li>
          <li>
            <a href="https://www.beautyfeatures.ie/brands/">View All</a>
          </li>
        </ul>

        <div className="footer-copyright">
          <div className="container">
            <p className="powered-by">
              &copy; <span id="copyright_year"></span> BeautyFeatures.ie.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
