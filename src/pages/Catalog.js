import React from 'react'
import img from '../img/photo_banner.jpg'

export const Catalog = () => {
  return (
    <div className='catalog' id='catalog'>
      <div className='catalog-content'>
        <div className='catalog-img'>
          <img src={img} alt='img' />
        </div>
        <div className='catalog-text'>
          <div className='catalog-text_content'>
            <p className='catalog-title'>Подлинное качество</p>
            <p className='catalog-subtitle'>Все часы производятся в Швейцарии и имеют сертификаты качества. Настоящие швейцарские часы - это предмет гордости и престижа.</p>
            <button className='catalog-btn'>Смотреть Каталог</button>
          </div>
        </div>
      </div>
    </div>
  )
}