import React from 'react'
import img from '../img/watch_main.png'

export const Home = () => {
  return (
    <div className='home' id='home'>
        <div className='home-content'>
            <div className='home-line'></div>
            <div className='home-text'>
                <p className='home-title'>Весна/Лето 2019</p>
                <p className='home-subtitle'>Коллекция</p>
                <p className='home-subtext'>Швейцарские часы в наличии в Москве и с доставкой по всему миру</p>
                <button className='home-btn'>Смотреть каталог</button>
            </div>
            <div className='home-img'>
              <img src={img} alt='img'/>
            </div>
        </div>
    </div>
  )
}