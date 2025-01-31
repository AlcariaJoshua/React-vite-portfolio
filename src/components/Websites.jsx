import React from 'react'

export default function Websites({iframe = "No Iframe", urllink = "No link"}) {
    return (
        <div className="websites">
            <a href={urllink} >
                <img src={iframe} alt="" />
            </a>
        </div>
    )
}
