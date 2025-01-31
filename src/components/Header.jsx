import React from 'react'

import '../assets/css/Header.css'

export default function header() {
  return (
    <div className="header">
        <div className="container">
            <nav className='flex items-center justify-between'>
                <a href="">
                    <p>Joshua Alcaria</p>
                </a>
                <ul className='flex items-center gap-[50px]'>
                    <li><a href="" id='#banner'>Home</a></li>
                    <li><a href="" id='#services'>Services</a></li>
                    <li><a href="" id='#contact'>Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}
