import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import GlobeDemo from "../../Globaldemo";
import "./Contact.scss";

export default function Contact() {
  const [ispopupvisible, setIPopopvisible] = useState(false); // Popup visibility state
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ndpco1k", "template_tiynq0a", form.current, {
        publicKey: "vIbjs14kjVFPPb7AD",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIPopopvisible(true); // Show popup on success

          // Hide the popup after 3 seconds
          setTimeout(() => {
            setIPopopvisible(false);
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="connect">
        <p>Connect</p>
        <h1>Let's Build Something Amazing Together!</h1>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <div className="inputGroup">
          <input required type="text" name="user_name" />
          <label htmlFor="name">Name</label>
        </div>
        <div className="inputGroup">
          <input required type="email" name="user_email" />
          <label htmlFor="email">Email</label>
        </div>
        <div className="inputGroup">
          <textarea name="message" id="message" required></textarea>
          <label htmlFor="message">Message</label>
        </div>

        <button type="submit" className="contact-submit">
          Submit
        </button>
      </form>

      <div className="contactss">
        <GlobeDemo className="globe" />
      </div>

      {/* Popup Message */}
      {ispopupvisible && (
        <div className="popup">
          <p className="popup-content"> message sent!</p>
        </div>
      )}
    </div>
  );
}
