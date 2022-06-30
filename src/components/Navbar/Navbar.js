import React, { useState } from 'react'
import { 
    BiMenu,
    BiSearch,
    BiHeart,
    BiCart,
    BiRuble
} from 'react-icons/bi'
import logo from '../../img/logo.svg'
import {Modal} from 'react-bootstrap'
import { ModalFol } from '../Modal/Modal'

export const Navbar = ({orders,setOrders, onDelete, follow, onDeleteFollow, onAdd}) => {
    const [menuClick, setMenuClick] = useState(false)  
    const [cartOpen, setCartOpen] = useState(false)
    const [followerOpen, setFollowerOpen] = useState(false)
    const [typM, setTypM] = useState('')
    let [total] = useState(0)
    orders.filter(el => total += Number.parseFloat(el.totalPrice))
    

    const handleMenuClick = () => setMenuClick(!menuClick)
    return (
    <nav>
            <BiMenu className='toggle-navbar' onClick={handleMenuClick}/>
            <span className='nav-logo'>
                <img src={logo} alt='logo'/>
            </span>
            <ul className='manu-link' style={menuClick ? {left: '0'} : {left: '-100%'}}>
                <li>
                    <a href='#'>Каталог</a>
                </li>
                <li>
                    <a href='#'>Акции</a>
                </li>
                <li>
                    <a href='#'>Доставка</a>
                </li>
                <li>
                    <a href='#'>Контакты</a>
                </li>
            </ul>
            <ul className='icons-link'>
                <li>
                    <BiSearch />
                </li>
                <li onClick={() => {
                    setFollowerOpen(!followerOpen)
                    setTypM('follow')
                }}>
                    <BiHeart/>
                    {follow.length === 0 ? '' : <span className='heart-opt'>{follow.length}</span>}
                </li>
                <li onClick={() => {
                    setCartOpen(!cartOpen)
                    setTypM('cart')
                }}>
                    <BiCart />
                    {orders.length === 0 ? '' : <span className='heart-opt'>{orders.length}</span>}
                </li>
            </ul>
            {followerOpen && (
                <div className='foll-cart'>
                    <Modal show={followerOpen} onHide={() => setFollowerOpen(!followerOpen)} >
                        <Modal.Header closeButton>
                        <Modal.Title>Понравившиеся часы</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {follow.map(el => (
                                <ModalFol 
                                    typeM={typM} 
                                    modal={followerOpen} 
                                    modalClose={() => setFollowerOpen(!followerOpen)} 
                                    key={el.id} 
                                    item={el} 
                                    onDeleteFollow={onDeleteFollow}
                                />
                            ))}
                        </Modal.Body>
                    </Modal>
                </div>
            )}
            {cartOpen && (
                <div className='shop-cart'>
                        <Modal show={cartOpen} onHide={() => setCartOpen(!cartOpen)} >
                            <Modal.Header closeButton>
                            <Modal.Title>Ваш заказ</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {orders.map(el => (
                                <ModalFol 
                                    typeM={typM} 
                                    modal={cartOpen} 
                                    modalClose={() => setCartOpen(!cartOpen)} 
                                    item={el}
                                    key={el.id}
                                    orders={orders}
                                    setOrders={setOrders}
                                    onDelete={onDelete} 
                                />
                                ))}
                            </Modal.Body>
                            <Modal.Footer>
                                {typM === 'cart' ? (
                                    <p className='total-price'>Итог: {new Intl.NumberFormat().format(total)} {<BiRuble />}</p>
                                    ) : ''
                                }
                            </Modal.Footer>
                        </Modal>
                </div>
            )}
    </nav>
  )
}