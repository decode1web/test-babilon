import React from 'react'
import logo from '../../img/logo-white.png'
export const Footer = () => {
  return (
    <footer>
      <div className='footer-addres'>
        <span><img src={logo} alt='logo' /></span>
        <p className='footer-phone'>8 (499) 450-47-97</p>
        <p className='footer-email'>info@conquest.watch.ru</p>
      </div>
      <div className='footer-links'>
        <span className='links-name'>О компании</span>
        <ul className='links-items'>
          <li>
            <a href='#'>Наши магазины</a>
          </li>
          <li>
            <a href='#'>Вакансии</a>
          </li>
          <li>
            <a href='#'>Сертификаты</a>
          </li>
          <li>
            <a href='#'>Отзывы</a>
          </li>
        </ul>
      </div>
      <div className='footer-links'>
        <span className='links-name'>Покупателям</span>
        <ul className='links-items'>
          <li>
            <a href='#'>Каталог товаров</a>
          </li>
          <li>
            <a href='#'>Как заказать</a>
          </li>
          <li>
            <a href='#'>FAQ</a>
          </li>
          <li>
            <a href='#'>Корпоративным клиентам</a>
          </li>
        </ul>
      </div>
      <div className='footer-links'>
        <span className='links-name'>Оплата и Доставка</span>
        <ul className='links-items'>
          <li>
            <a href='#'>Способ оплаты</a>
          </li>
          <li>
            <a href='#'>Время доставкы</a>
          </li>
          <li>
            <a href='#'>Гарантии и ремонт</a>
          </li>
          <li>
            <a href='#'>Возврат и компенсация</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}