import React  from 'react'
import { 
    BiHeart,
    BiCart
} from 'react-icons/bi'

export const PopularModel = ({items, onAdd, onAddFollow}) => {
  return (
    <div className='popular' id='popular'>
        <div className='popular-content'>
            <div className='see-more'>
                <p className='see-name'>Смотреть все</p>
                <div className='see-line'></div>
            </div>
            <h2 className='pop-name'>Популярные модели</h2>
            <div className='popular-items'>
                {items.map(el => (
                    <div className='popular-item' key={el.id}>
                        <BiHeart className={!el.like ? 'item-like' : 'item-like click-like'} onClick={() => {
                            onAddFollow(el)
                            el.like = true
                        }}/>
                        <BiCart className={!el.cart ? 'item-cart' : 'item-cart click-cart'} onClick={() => {
                            onAdd(el)
                            el.cart = true
                        }}/>
                        <div className='popular-title'>
                            <p className='popular-name'>{el.name}</p>
                            <p className='popular-price'>{el.price} ₽</p>
                        </div>
                        <div className='popular-img'>
                            <img src={el.img} alt='watch' />
                        </div>
                        <div className='popular-info'>
                            <div className='info-line'></div>
                            <p className='info-more'>Подробнее</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}