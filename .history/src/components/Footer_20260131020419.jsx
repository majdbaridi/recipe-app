import { useState } from "react";
import "./Footer.css";

function Footer() {
  const [showContact, setShowContact] = useState(false);
  return (
    <footer className="footer">
      <p>All rights reserved</p>

      <button onClick={() => setShowContact(true)}>show</button>

      {showContact && <p>contact us on: 0176 820 610 38 </p>}
    </footer>
  );
}

export default Footer;
