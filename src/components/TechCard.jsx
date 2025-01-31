import React from 'react'


export default function TechCard({ logo = 'no logo available' }) {
    return (
        <div className="card">
            <img src={logo} alt="" />
        </div>
    )
}
