import React from 'react'

export default function Destination({img,loc,name,date,desc}){
    return (
        <div className='dest'>
            <img src={`/Images/${img}`} className='dest--pic'/>
            <div className='info'>
                <img src={process.env.PUBLIC_URL + "/Images/MapPic.webp"} className='map--img'/>
                <span className='dest--loc'>{loc}</span>
                <span className='Map'><u>View on Google Maps</u></span>
                <h1 className='dest--name'>{name}</h1>
                <p className='dest--date'>{date}</p>
                <p className='dest-desc'>{desc}</p>
            </div>
        </div>
    )
}