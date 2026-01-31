import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-brand">Recipe App</p>

        <p className="footer-text">
          © {new Date().getFullYear()} All rights reserved.
        </p>

        <div className="footer-links">
          <a href="#">Recipes</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
