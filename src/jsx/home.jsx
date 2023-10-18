import "../css/home.css";
import {useTypewriter, Cursor} from "react-simple-typewriter";
import {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {BsDiscord} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import {SiDjango} from "react-icons/si"
import {FaBars} from "react-icons/fa"
import {ImCross} from "react-icons/im"
import { useState, useEffect } from "react";
import axios from "axios"
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css'

export default function Home() {

    const [project, setProject] = useState()

    const fetchData = async () => {
        const url = "https://api.sheety.co/5051b16289978df7d01b327c7ffe79e3/portFolioApi/project"
        await axios.get(url)
        .then(res => {
            setProject(res.data.project.reverse())
        })
        .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchData();
    }, [])

    const [text] = useTypewriter({
        words: ['Fullstack Developer', 'Frontend Developer', 'Backend Developer'],
        loop: {},
        typeSpeed: 150,
        deleteSpeed: 100
    });

    const [isOpen, setIsOpen] = useState(false);

    const hangleToggle = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div className="background-container">
            <img src="home-intro-image.avif" className="home-intro-image" alt="home-intro-image"></img>
            <nav className="top-menu-nav">
                <div>
                    <h2 className="top-menu-h2">TK</h2>
                </div>
                <ul className="top-menu-ul">
                    <a href="#aboutme"><li className="top-menu-li">ABOUT ME</li></a>
                    <a href="#project"><li className="top-menu-li">PROJECT</li></a>
                    <a href="#contact"><li className="top-menu-li">CONTACT</li></a>
                </ul>
            </nav>

            <nav className="top-menu-nav-mobile">
                <div>
                    <h2 className="top-menu-h2">TK</h2>
                </div>
                <button onClick={hangleToggle} className="top-menu-button"> 
                    {isOpen ? <ImCross></ImCross> : <FaBars></FaBars>} 
                </button>
                {isOpen && (
                    <ul className="top-menu-ul-mobile">
                        <a href="#aboutme" onClick={hangleToggle}>
                            <li className="top-menu-li-mobile">ABOUT ME</li>
                        </a>
                        <a href="#project" onClick={hangleToggle}>
                            <li className="top-menu-li-mobile">PROJECT</li>
                        </a>
                        <a href="#contact" onClick={hangleToggle}>
                            <li className="top-menu-li-mobile">CONTACT</li>
                        </a>
                    </ul>
                )}
            </nav>


            <div className="introduce-words" id="home">
                <h1 className="introduce-words-name">
                    Kaweewat Noisuwan
                </h1>
                <h2 className="introduce-words-doing"> I'm a
                    <span className="introduce-words-doing-typed"> {text}</span>
                    <Cursor></Cursor>
                </h2>
    
            </div>

            <section className="home-aboutme" id="aboutme">
                <div className="home-aboutme-text-container">
                    <h1 className="home-aboutme-title">ABOUT ME</h1>
                    <p className="home-aboutme-text"> 
                        Hello, my name is Kaweewat, I'm currently studying in digital engineering major at
                        Sirindhorn international institute of technology, Thammasat University.
                        I have a charm on programming, especially on web development. I have an experience
                        in both frontend and backend. 
                    </p>

                    <ul className="home-aboutme-social-media-ul">
                        <li className="home-aboutme-social-media-li">
                            <a href="https://www.facebook.com/Kaweewat%20Noisuwan" 
                            className="home-facebook" target="_blank"><BsFacebook></BsFacebook></a>
                        </li>
                        <li className="home-aboutme-social-media-li">
                            <a href="https://www.instagram.com/_klarrrr/?hl=en" 
                            className="home-instagram" target="_blank"><BsInstagram></BsInstagram></a>
                        </li>
                        <li className="home-aboutme-social-media-li">
                            <a href="https://discord.com/users/tkaweewat" 
                            className="home-discord" target="_blank"><BsDiscord></BsDiscord></a>
                        </li>
                        <li className="home-aboutme-social-media-li">
                            <a href="https://github.com/KaweewatN" className="home-github" 
                            target="_blank"><BsGithub></BsGithub></a>
                        </li>
                        <li className="home-aboutme-social-media-li">
                            <a href="https://www.linkedin.com/in/kaweewat-noisuwan-6a3a9b259/" 
                            className="home-linkdin" target="_blank"><BsLinkedin></BsLinkedin></a>
                        </li>
                    </ul>
                </div>

                <div className="home-aboutme-skills">
                    <h1 className="home-aboutme-title">SKILLS</h1>

                    <div className="home-aboutme-skills-container">
                        <Tippy content="JavaScript">
                            <img src="./image/javascript.png" className="home-aboutme-skills-image-large" alt="javascript" />
                        </Tippy>
                        <Tippy content="HTML">
                            <img src="./image/html.png" className="home-aboutme-skills-image-large" alt="html" />
                        </Tippy>
                        <Tippy content="CSS">
                             <img src="./image/css.png" className="home-aboutme-skills-image-large" alt="css" />
                        </Tippy>
                        <Tippy content="Python">
                            <img src="./image/python.png" className="home-aboutme-skills-image-large" alt="python" />
                        </Tippy>
                        <Tippy content="Java">
                            <img src="./image/java.png" className="home-aboutme-skills-image" alt="java" />
                        </Tippy>
                        <Tippy content="R">
                            <img src="./image/r.png" className="home-aboutme-skills-image" alt="r" />
                        </Tippy>
                        <Tippy content="Reactjs">
                            <img src="./image/react.png" className="home-aboutme-skills-image" alt="react" />
                        </Tippy>
                        <Tippy content="Nodejs">
                            <img src="./image/nodejs.png" className="home-aboutme-skills-image" alt="nodejs" />
                        </Tippy>
                    </div>

                    <div className="home-aboutme-skills-container">
                        <Tippy content="Expressjs">
                            <img src="./image/expressjs.png" className="home-aboutme-skills-image" alt="expressjs" />
                        </Tippy>
                        <Tippy content="Django">
                            <p className="home-aboutme-skills-image"><SiDjango></SiDjango></p>
                        </Tippy>
                        <Tippy content="Git">
                            <img src="./image/git.png" className="home-aboutme-skills-image" alt="git" />
                        </Tippy>
                        <Tippy content="Github">
                            <p className="home-aboutme-skills-image"><BsGithub></BsGithub></p>
                        </Tippy>
                        <Tippy content="Gitlab">
                            <img src="./image/gitlab.png" className="home-aboutme-skills-image" alt="gitlab" />
                        </Tippy>
                        <Tippy content="MongoDB">
                            <img src="./image/mongo.png" className="home-aboutme-skills-image" alt="mongo" />
                        </Tippy>
                        <Tippy content="Docker">
                            <img src="./image/docker.png" className="home-aboutme-skills-image" alt="docker" />
                        </Tippy>
                    </div>

                </div>
            </section>

            <section className="home-project" id="project">
                <h1 className="home-project-title">PROJECT</h1>
                <div className="home-project-all-container">
                    {project?.slice(0,6).map(res => (
                        <a href={res.githubLink} className="home-project-github-link">
                            <div className="home-project-container">
                                <div className="home-project-image"
                                     style={{backgroundImage: `url(${res.image})`}}>
                                </div>
                                {/* <img src={res.image} className="home-project-image"></img> */}
                                <div className="home-project-text-container">
                                    <h3 className="home-project-title">{res.name}</h3>
                                    <p className="home-project-languages">{res.languages}</p>
                                    <p className="home-project-description">{res.description.substring(0,300)}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            <section className="home-contact" id="contact">
                <h1 className="home-contact-title">CONTACT</h1>
                <div className="home-contact-container">
                    <ul className="home-contact-ul">
                        <li className="home-contact-li">FB: Kaweewat Noisuwan</li>
                        <li className="home-contact-li">Email: kaweewatnoisuwan@gmail.com</li>
                        <li className="home-contact-li">LineID: tonkla_123</li>
                        <li className="home-contact-li">Linkdin:<a href="https://www.linkedin.com/in/kaweewat-noisuwan">https://linkedin.com/in/kaweewat-noisuwan</a></li>
                        <li className="home-contact-li">Discord:<a href="https://discord.com/users/tkaweewat">https://discord.com/users/tkaweewat</a></li>
                    </ul>
                </div>
            </section>

        </div>
    )
}