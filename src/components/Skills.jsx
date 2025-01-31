import React from 'react'

import logo1 from '../assets/logo/logo1.png'
import logo2 from '../assets/logo/logo2.png'
import logo3 from '../assets/logo/logo3.png'
import logo4 from '../assets/logo/logo4.png'
import logo5 from '../assets/logo/logo5.png'
import logo6 from '../assets/logo/logo6.png'
import logo7 from '../assets/logo/logo7.png'
import logo8 from '../assets/logo/logo8.png'
import TechCard from './TechCard'

export default function Skills() {
  return (
    <>
        <div className="skills-container">
            <div className="container">
                <div className="content flex align-center">
                    <div className="text">
                        <h3>Skills</h3>
                        <p>
                        Here’s is my different skills that I’ve been using
                        to develop and design a web page’s.
                        </p>
                    </div>
                    <div className="skill-con">
                        <TechCard logo={logo1} />
                        <TechCard logo={logo2} />
                        <TechCard logo={logo3} />
                        <TechCard logo={logo4} />
                        <TechCard logo={logo5} />
                        <TechCard logo={logo6} />
                        <TechCard logo={logo7} />
                        <TechCard logo={logo8} />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
