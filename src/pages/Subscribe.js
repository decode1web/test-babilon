import React from 'react'
import {
    FaInstagram,
    FaFacebookF,
    FaTwitter
} from 'react-icons/fa'
import img1 from '../img/photo_1.jpg'
import img2 from '../img/photo_3.jpg'
import img3 from '../img/photo_2.jpg'

export const Subscribe = () => {
  return (
    <div className='subscribe'>
    <div className='subscribe-content'>
        <div className='subscribe-text'>
            <p className='subscribe-title'>Следите за нашими новостями</p>
            <p className='subscribe-subtitle' >Подписывайтесь на <b>@conquest_watch</b> в соцсетях и узнавайте о новинках и акциях первыми.</p>
            <div className='subscribe-social-icon'>
                <a href='#'><FaInstagram /></a>
                <a href='#'><FaFacebookF /></a>
                <a href='#'><FaTwitter /></a>
            </div>
        </div>
        <div className='subscribe-img'>
            <div className='subscribe-img1'>
                <img src={img1} alt='img1' />
            </div>
            <div className='subscribe-img3'>
                <img src={img3} alt='img1' />
            </div>
            <div className='subscribe-img2'>
                <img src={img2} alt='img1' />   
            </div>
        </div>
    </div>
    </div>
  )
}