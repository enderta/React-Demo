import React from 'react'
import './best.css'
import Apt1 from './Img/apt1.png'
import Apt2 from './Img/apt2.jpeg'
import Apt3 from './Img/apt3.jpeg'


const Best = () => {
  return (
    <div>
           <div className='best'>
            <h1>Find Best Rated Properties</h1>
            <div>
                <p><span className='bold'>All</span></p>
                <p>Commercial</p>
                <p>Residential</p>
                <p>Agricultural</p>
            </div>
            <div className='container'>
                <img src={Apt1} alt='' />
                <img src={Apt2} alt='' />
                <img src={Apt3} alt='' />
            </div>
            <button className='btn'>View All</button>
        </div>
    </div>
  )
}

export default Best