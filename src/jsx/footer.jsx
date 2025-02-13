import "../css/footer.css";
import socialMediaLinks from "../data/socialMedia";

export default function Footer() {
  return (
    <div className="contact-div">
      <p className="contact">CONTACT ME</p>
      <ul className="contact-social-media-ul">
        {socialMediaLinks.map((link, index) => (
          <li className="contact-social-media-li" key={index}>
            <a
              href={link.href}
              className={link.className}
              target="_blank"
              rel="noreferrer"
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
      <p className="contact-rights">
        © 2023 Kaweewat.netlify.app All rights reserved.
      </p>
    </div>
  );
}
