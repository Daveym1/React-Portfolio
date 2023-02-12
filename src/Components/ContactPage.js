import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  // TODO: return links to github, linkedin, etc.

  return (
    <div className="contactContainer">
      <p>
        If you have any questions please contact me using the form below.
        Alternatively, you can connect with me using the links below.
      </p>

      <ContactForm />

      <div className="contactLinks">
        <FaGithub size={70} />
        <FaLinkedin size={70} />
        <FaEnvelope size={70} />
        <FaPhone size={70} />
      </div>
    </div>
  );
}
