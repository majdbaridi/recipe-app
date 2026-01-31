import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // success / error

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      return;
    }

    // Demo only (Git/GitHub test)
    console.log({ name, email, message });

    setStatus("success");
    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => setStatus(""), 2500);
  }

  return (
    <div className="contactPage">
      <div className="contactCard">
        <div className="contactHeader">
          <h1 data-text="Contact Us">Contact Us</h1>
          <p>Send us a message — this is a demo page for Git/GitHub teamwork.</p>
        </div>

        <form className="contactForm" onSubmit={handleSubmit}>
          <div className="row">
            <div className="field">
              <label>Your Name</label>
              <input
                type="text"
                placeholder="Walid Rafiq"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="field">
              <label>Email</label>
              <input
                type="email"
                placeholder="walid@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label>Message</label>
            <textarea
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
            />
          </div>

          {status === "error" && (
            <div className="alert error">
              Please fill in all fields.
            </div>
          )}

          {status === "success" && (
            <div className="alert success">
              Message sent (demo). Check console.log ✅
            </div>
          )}

          <div className="actions">
            <button
              type="button"
              className="btn ghost"
              onClick={() => {
                setName("");
                setEmail("");
                setMessage("");
                setStatus("");
              }}
            >
              Clear
            </button>

            <button type="submit" className="btn primary">
              Send Message
            </button>
          </div>

          <div className="note">
            <span className="dot" />
            This page is for UI + GitHub collaboration only (no backend).
          </div>
        </form>
      </div>
    </div>
  );
}
