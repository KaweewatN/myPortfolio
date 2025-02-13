import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const socialMediaLinks = [
  {
    href: "https://www.facebook.com/Kaweewat%20Noisuwan",
    className: "contact-facebook",
    icon: <BsFacebook />,
  },
  {
    href: "https://www.instagram.com/_klarrrr/?hl=en",
    className: "contact-instagram",
    icon: <BsInstagram />,
  },
  {
    href: "https://discord.com/users/tkaweewat",
    className: "contact-discord",
    icon: <BsDiscord />,
  },
  {
    href: "https://github.com/KaweewatN",
    className: "contact-github",
    icon: <BsGithub />,
  },
  {
    href: "https://www.linkedin.com/in/kaweewat-noisuwan-56155a2aa/",
    className: "contact-linkedin",
    icon: <BsLinkedin />,
  },
];

export default socialMediaLinks;
