import React from 'react'


// font awsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Services from './Services';
import Works from './Works';
import Skills from './Skills';



import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { faPhone } from "@fortawesome/free-solid-svg-icons";

export const Homepage = () => {
    return (
        <>
            <div className="banner global-padding" id='banner' >
                <div className="container">
                    <div className="content">
                        <div className="text-icon-container">
                            <div className="text mb-[55px]">
                                <span className='mb-[15px] text-[#fff]'>Innovative, detail-oriented, WordPress-focused.</span>
                                <h1 className='mb-[15px]'>Front-End Developer</h1>
                                <p className=''>
                                    I am a creative front-end developer with a strong focus on WordPress. I specialize in crafting responsive and user-friendly websites that deliver exceptional user experiences. My expertise lies in blending design and functionality to build engaging digital solutions.
                                </p>
                            </div>
                            <div className="btn-btn inline-flex mb-[50px]">
                                <a href="">Projects</a>
                            </div>
                            <div className="social-media-icons">
                                <ul className='flex align-center gap-[30px]'>
                                    <li><a href=""><FontAwesomeIcon icon={faFacebook} /></a></li>
                                    <li><a href=""><FontAwesomeIcon icon={faGithub} /></a></li>
                                    <li><a href=""><FontAwesomeIcon icon={faTwitter} /></a></li>
                                    <li><a href=""><FontAwesomeIcon icon={faLinkedin} /></a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="image">

                        </div>

                    </div>
                </div>
            </div><div className="about-me">

            </div>
            <section id='services' className="services-works-skills global-padding bg-[#050505] flex flex-col gap-[30px]">
                <Services />
                <Works />
                <Skills />
            </section>

            <section className='contact global-padding' id='contact'>
                <div className="container">
                    <div className="content">
                        <div className="title-input mb-[50px]">
                            <h2 className='mb-[20px]'>GET IN TOUCH WITH ME</h2>
                            <p>Feel free to reach out to me for any inquiries.</p>

                            <div className="input-con">
                                <form id="contact-form">

                                    
                                    <label>Name</label>
                                    <input type="text" name="user_name"></input>
                                    <label>Email</label>
                                    <input type="email" name="user_email"></input>
                                    <label>Message</label>
                                    <textarea name="message"></textarea>
                                    <input type="submit" value="Send"></input>
                                </form>
                            </div>
                        </div>


                        <div className="contact-details">
                            <p><FontAwesomeIcon icon={faPhone} size="3x" /><a href="tel:+639150643989">+639150643989</a></p>
                            <p><FontAwesomeIcon icon={faEnvelope} size="3x" /><a href="mailto:alcariajoshua13@gmail.com">alcariajoshua13@gmail.com</a></p>
                            <p><FontAwesomeIcon icon={faLinkedin} size="3x" /><a href="https://www.linkedin.com/in/joshua-alcaria/">https://www.linkedin.com/in/joshua-alcaria/</a></p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="line h-[30px] bg-black">

            </section>

        </>
    )
}


