import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaFile,
} from "react-icons/fa";
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
        <a href="https://github.com/Daveym1">
          <FaGithub size={70} />
        </a>
        <a href="https://www.linkedin.com/in/david-marsh-web-developer/">
          <FaLinkedin size={70} />
        </a>
        <a href="mailto:davemarsh1@gmail.com">
          <FaEnvelope size={70} />
        </a>

        <a href="tel:01234567890">
          <FaPhone size={70} />
        </a>

        <a href="/CV.pdf" download>
          <FaFile size={70} />
          Download my CV
        </a>
      </div>
    </div>
  );
}
