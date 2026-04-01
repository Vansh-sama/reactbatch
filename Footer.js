import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-section">
          <h2 className="footer-logo">Softech Infoways</h2>
          <p>
            Empowering students with industry-ready web development
            and IT skills for a successful tech career.
          </p>
        </div>

        {/* Courses */}
        <div className="footer-section">
          <h3>Courses</h3>
          <ul>
            <li>Full Stack Web Development</li>
            <li>Frontend (React, HTML, CSS)</li>
            <li>Backend (Node, PHP, Python)</li>
            <li>Database & SQL</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>Our Faculty</li>
            <li>Placements</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@softechinfoways.com</p>
          <p>Phone: +91 XXXXX XXXXX</p>
          <p>Location: India</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Softech Infoways. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
