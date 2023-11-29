import "../css/contact.css"
import NavBar from "./navBar"
import Footer from "./footer"


export default function Contact() {
    return (
        <div className="contact-all-container">
            <NavBar></NavBar>
            <div className="contact-h2-container">
                <h2 className="contact-h2">You can contact me by this form</h2>
            </div>
            <form className="contact-input-form">
                <input type="text"  className="contact-input" placeholder="Name-Surname"></input>
                <input type="email" className="contact-input" placeholder="Email"></input>
                <input type="text" className="contact-input" placeholder="Subject"></input>
                <textarea type="text" className="contact-text-area" placeholder="Message"></textarea>
                <input type="submit" className="contact-submit"/>
            </form>
            <Footer></Footer>
        </div>
    )
}