import "../css/footer.css"
import {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {BsDiscord} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"


export default function Footer() {
    return (
        <div className="contact-div">
            <p className="contact">CONTACT ME</p>
                <ul className="contact-social-media-ul">
                    <li className="contact-social-media-li">
                        <a href="https://www.facebook.com/Kaweewat%20Noisuwan" 
                            className="contact-facebook" target="_blank"><BsFacebook></BsFacebook></a>
                    </li>
                    <li className="contact-social-media-li">
                        <a href="https://www.instagram.com/_klarrrr/?hl=en" 
                            className="contact-instagram" target="_blank"><BsInstagram></BsInstagram></a>
                    </li>
                    <li className="contact-social-media-li">
                        <a href="https://discord.com/users/tkaweewat" 
                            className="contact-discord" target="_blank"><BsDiscord></BsDiscord></a>
                    </li>
                    <li className="contact-social-media-li">
                        <a href="https://github.com/KaweewatN" className="contact-github" 
                            target="_blank"><BsGithub></BsGithub></a>
                    </li>
                    <li className="contact-social-media-li">
                        <a href="https://www.linkedin.com/in/kaweewat-noisuwan-6a3a9b259/" 
                            className="contact-linkdin" target="_blank"><BsLinkedin></BsLinkedin></a>
                    </li>
                </ul>
            <p className="contact-rights">© 2023 Kaweewat.netlify All rights reserved.</p>
        </div>
    )
}