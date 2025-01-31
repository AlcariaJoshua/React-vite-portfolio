import React from 'react'
import Websites from './Websites'

import niceprint from '../assets/images/niceprint.jpg'
import nobleland from '../assets/images/nobleland.jpg'
import bestorg from '../assets/images/bestorg.jpg'
import amcaluminum from '../assets/images/amcaluminum.jpg'


export default function Works() {
    return (
        <section className="my-works">
            <div className="container">
                <div className="content flex align-center justify-between">
                    <div className="works-container">
                        <Websites
                            iframe={niceprint}
                            urllink='https://niceprintphoto.com/'
                        />
                        <Websites
                            iframe={nobleland}
                            urllink='https://noblelandinc.com/'
                        />
                        <Websites
                            iframe={bestorg}
                            urllink='https://best.org.ph/'
                        />
                        <Websites
                            iframe={amcaluminum}
                            urllink='https://amcaluminum.ph/'
                        />

                    </div>
                    <div className="text">
                        <h3>My Works</h3>
                        <p>Here’s is some  of my works that I’ve been
                            working for 1 year and 6 months. </p>
                    </div>
                </div>
            </div>
        </section>
    )
}




