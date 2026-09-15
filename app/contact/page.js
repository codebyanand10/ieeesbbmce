export const metadata = {
    title: "Contact Us | IEEE SB BMCE",
    description: "Get in touch with IEEE Student Branch at Baselios Mathews II College of Engineering, Sasthamcotta, Kollam.",
};

export default function ContactPage() {
    return (
        <div className="main">
            <h1 className="contact-head">Contact Us</h1>

            <div className="contact-grid">
                <iframe
                    className="contact-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.2360355484693!2d76.64193477496325!3d9.042221088781966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b060f577c89be5d%3A0x35569068c93e9f50!2sBaselios%20Mathews%20II%20College%20of%20Engineering%2C%20Kerala!5e0!3m2!1sen!2sin!4v1754808610405!5m2!1sen!2sin"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BMCE Location Map"
                    loading="lazy"
                />

                <div className="contact-details">
                    <p>
                        <b>Address</b><br /><br />
                        IEEE Student Branch<br />
                        Baselios Mathews II College of Engineering<br />
                        Lake View, Muthupilakadu<br />
                        Sasthamcotta, Kollam<br />
                        Kerala, India - 690 520<br /><br />
                        <b>Email:</b> <a href="mailto:ieeesbbmce@gmail.com">ieeesbbmce@gmail.com</a><br /><br />
                        <b>Instagram:</b> <a href="https://www.instagram.com/ieeesbbmce" target="_blank" rel="noopener noreferrer">@ieeesbbmce</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
