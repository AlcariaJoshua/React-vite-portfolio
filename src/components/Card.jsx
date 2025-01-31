import React from 'react'


export default function Card({ cardtitle = "No name Available", imageUrl = "", spantitle = "", description = "not available" }) {
  return (

    <div className="card">
      <div className="image-title flex justify-between align-middle flex-row-reverse">
        <img className='w-[55px] h-[55px]' src={imageUrl} alt={cardtitle} />
        <h3>{cardtitle}</h3>
      </div>

      <span className='mb-[10px]' >{spantitle}</span>
      <p>{description}</p>
    </div>
  )
}
