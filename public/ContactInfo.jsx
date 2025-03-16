import React from 'react';

const ContactInfo = () => {
  return (
    <section className="contact-information">
      <div className="contact-info">
        <div className="first-info">
          <img src="G-4-removebg-preview.png" width="160px" height="auto" alt="Logo" />
          <p>
            Plot Nos 8, 11, <br />
            TechZone 2, Greater Noida, <br />
            Uttar Pradesh 201310
          </p>
          <div className="social-icons">
            <a href="facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="linkedin">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="second-info">
          <h4>Support</h4>
          <p>Contact Us</p>
          <p>About Page</p>
          <p>Size Guide</p>
          <p>Shopping & Returns</p>
          <p>Privacy</p>
        </div>
        <div className="third-info">
          <h4>Shop</h4>
          <p>Earrings</p>
          <p>Necklaces</p>
          <p>Bracelets</p>
          <p>Pendants</p>
        </div>
        <div className="forth-info">
          <h4>Company</h4>
          <p>About</p>
          <p>Blog</p>
          <p>Affiliate</p>
          <p>Login</p>
        </div>
        <div className="fifth">
          <h4>Subscribe</h4>
          <p>Get the latest news and updates</p>
          <button className="Subscribe">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
