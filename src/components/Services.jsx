import React from 'react'

import Card from '../components/Card'

import Figma from '../assets/logo/logo1.png'
import Wordpress from '../assets/logo/logo8.png'
import Dev from '../assets/logo/dev.png'

export default function Services() {
  return (
    <section className="services " >
      <div className="container">
        <div className="content flex">
          <div className="title">
            <h3 className='mb-[25px]' >Services</h3>
            <p>Here’s is my service’s that I can do, my skills
              and experience.</p>
          </div>
          <div className="card-con">
            <Card imageUrl={Figma} cardtitle='UI/UX Design' spantitle='Experience Figma designer'
              description='Experience is one that seamlessly blends form and function to 
            create a delightful and intuitive interaction between users and technology.'
            />

            <Card imageUrl={Wordpress} cardtitle='WordPress Development' spantitle='Experience WordPress developer'
              description='A WordPress developer has experience in designing, developing, and maintaining websites using the WordPress platform and its related technologies.'
            />

            <Card imageUrl={Dev} cardtitle='Web Development' spantitle='Experience Web Developer'
              description='As a web developer I am responsible for building responsive and user-friendly websites using various programming languages, frameworks, and libraries '
            />

          </div>
        </div>
      </div>
    </section>
  )
}
