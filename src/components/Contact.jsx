import { useState, useRef, useEffect } from "react";
import Buttons from "./Buttons";
import "../css/contact.css";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import img3 from "../assets/img3.jpg";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const [formValidation, setFormValidation] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isNameFilled, setIsNameFilled] = useState(false);
  const [isEmailFilled, setIsEmailFilled] = useState(false);
  const [isMessageFilled, setIsMessageFilled] = useState(false);

  let dataFilled = "";
  const areDataFilled = () => {
    if (!isNameFilled) {
      return (dataFilled = false);
    }
    if (!isEmailFilled) {
      return (dataFilled = false);
    }
    if (!isMessageFilled) {
      return (dataFilled = false);
    }

    dataFilled = true;
  };
  areDataFilled();

  const handleFormValidation = () => {
    let valid = true;

    if (!formValidation.name.trim()) {
      toast.error("Please Input Name");
      valid = false;
    }
    if (!formValidation.email.trim()) {
      toast.error("Please Input Email");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValidation.email)) {
      toast.error("Invalid Email Address");
      valid = false;
    }

    return valid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValidation({ ...formValidation, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (handleFormValidation()) {
      emailjs
        .sendForm(
          "service_z5b89mk",
          "template_zopgq7m",
          form.current,
          "3RdSXJ7JPJ_9S9ozx"
        )
        .then(
          () => {
            toast.success("Information Sent Successfully!").then((result) => {
              if (result.isConfirmed) {
                setFormValidation({
                  name: "",
                  email: "",
                  message: "",
                });
              }
            });
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      toast.error("Please Input the required fields correctly");
    }

    setFormValidation({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-col">
          <h2>Interested In Me?</h2>
          <p>Lets talk! Send me an email or contact me through:</p>
          <div className="contact-buttons">
            <a href="mailto:peter.john.reyes0326@gmail.com">
              <Buttons
                buttonType="outlineIcon"
                buttonText="Gmail"
                buttonIcon={<SiGmail />}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/peter-john-reyes/"
              target="_blank"
            >
              <Buttons
                buttonType="outlineIcon"
                buttonText="LinkedIn"
                buttonIcon={<FaLinkedin />}
              />
            </a>
          </div>
          <div className="contact-row">
            <img src={img3} alt="Peter John Reyes" />
          </div>
        </div>

        <div className="contact-form">
          <h2>Let's Collaborate</h2>
          <p>
            Want to collaborate? Want to know me more?
            <br />
            Just send a message and we will talk about it.
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <div className="input-row">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={formValidation.name}
                onChange={handleInputChange}
                onInput={() => setIsNameFilled(true)}
              />
            </div>
            <div className="input-row">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formValidation.email}
                onChange={handleInputChange}
                onInput={() => setIsEmailFilled(true)}
              />
            </div>
            <div className="input-row">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                value={formValidation.message}
                onChange={handleInputChange}
                onInput={() => setIsMessageFilled(true)}
              ></textarea>
            </div>
            {dataFilled ? (
              <Buttons
                buttonType="filledButton"
                buttonText="Submit"
                type="submit"
              />
            ) : (
              <Buttons
                buttonType="outlineButton"
                buttonText="Submit"
                type="submit"
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
