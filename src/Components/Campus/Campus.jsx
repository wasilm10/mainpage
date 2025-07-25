import React from 'react'
import './Campus.css'
import g1 from '../../assets/img1.png'
import g2 from '../../assets/img2.png'
import g3 from '../../assets/img3.png'
import g4 from '../../assets/img4.png'
import white_arrow from '../../assets/white-arrow.png'
const Campus = () => {
  return (
    <div className='campus'>
        <div className='gallery'>
            <img src={g1} alt="" />
            <img src={g2} alt="" />
            <img src={g3} alt="" />
            <img src={g4} alt="" />
        </div>
        <button className='btn dark-btn'> See more <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus