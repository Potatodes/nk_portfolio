import React, { useRef } from 'react';
import "./contact.css";
import Bplo from "../../assets/BPLO_Logo.png";
import binan from "../../assets/BinanCityLogo.png";
import emailjs from "@emailjs/browser";

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_zexyxyr", "template_ierjc3u", form.current, {
                publicKey: "sI_OFOXfIDm33Fhle",
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                    e.target.reset();
                    alert('Email Sent');
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    alert('Failed to send email: ' + error.text);
                }
            );
    };
    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">
                    As a student, I have had the opportunity to experience work with these
                    clients.
                </p>
                <div className="clientImgs">
                    <img src={binan} alt="client" className="clientImg" />
                    <img src={Bplo} alt="client" className="clientImg" />
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">
                    Please fill out the form below if you wish to discuss any work
                    opportunities.
                </span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        className="name"
                        name="your_name"
                        placeholder="Your Name"
                    />
                    <input
                        type="email"
                        className="email"
                        name="your_email"
                        placeholder="Your Email"
                    />
                    <textarea
                        className="msg"
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                    ></textarea>
                    <button type="submit" value="Send" className="submitBtn">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
