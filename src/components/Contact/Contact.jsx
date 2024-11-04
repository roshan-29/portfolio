import  { useRef,useState } from "react";
import emailjs from "@emailjs/browser";
import GlobeDemo from "../../Globaldemo";
import "./Contact.scss";

export default function Contact() {
 const [ispopupvisible,setIPopopvisible]=useState(false);
  

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
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  //this is contact-me page
  return (
    <div>
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
          <label htmlFor="name">Email</label>
        </div>
        <div className="inputGroup">
          <textarea name="message" id="message"></textarea>
          <label htmlFor="name"> Message </label>
        </div>
        {/*popup */}
        {ispopupvisible && (
          <div className="popup">
            <div className="popup-content">
              <h1 >message sent!👨‍💻</h1>
       
            </div>
          </div>
        )}
        <button
          type="submit"
          value="Send"
          className="contact-submit"
       
        >
          submit
        </button>

        
      </form>

      
      <div className="contactss">
        <GlobeDemo />
      </div>
    </div>
  );
}
