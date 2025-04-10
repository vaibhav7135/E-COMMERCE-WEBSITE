import React from "react";
import "./ContactUs.css";

function ContactUs() {
    return (
        <>
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Feel free to reach out to us through any of the channels below.</p>
            <div className="contact-info">
                <p><strong>Email:</strong> support@tech-shop.com</p>
                <p><strong>Phone:</strong> +123-456-7890</p>
                <p><strong>Address:</strong> 500 Terry Francine Street San Francisco, CA 94158</p>
            </div>
            <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" placeholder="Enter your name" />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Enter your email" />

                <label htmlFor="message">Message:</label>
                <textarea id="message" placeholder="Enter your message"></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    );
}

export default ContactUs;
