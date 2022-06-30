import React  from 'react'
import {FaTrash} from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'

export const ModalFol = ({item,orders, setOrders, typeM, onDelete, onDeleteFollow}) => {
    const {id, img, name, price, piece, maxPiece} = item
    const isMaxLimit = piece === maxPiece
    const isMinLimit = piece === 1
    const handleDecrementPiece = () => {
        if(!isMinLimit){
            const decrementedPiece = piece - 1
            const changeOrders = orders.map(item => {
                if(item['id'] === id){
                    return {...item, piece: decrementedPiece, totalPrice: price * decrementedPiece}
                }
                return item
            })
            setOrders(changeOrders)
            console.log(orders)
        }
    }
    const handleIncrementPiece = () =>{
        if(!isMaxLimit){
            const incrementedPiece = piece + 1
            const changeOrders = orders.map(item => {
                if(item['id'] === id){
                    return {...item, piece: incrementedPiece, totalPrice: price * incrementedPiece}
                }
                return item
            })
            setOrders(changeOrders)
        }
    }
  return (
    <>
        <div className='item'>
            <img src={img} alt='img'/>
            <h2>{name}</h2>
            <h2>{price} {item.money}</h2>
            {typeM === 'cart' ? <FaTrash className='delete-icon' onClick={() => onDelete(item.id)}/> : <FaTrash className='delete-icon' onClick={() => onDeleteFollow(item.id)}/>}
            {typeM === 'cart' ?
            <div className='increment'>
                <button className='incr-btn' onClick={handleIncrementPiece}>+</button>
                <input type='number' value={piece} onChange={e => Number(e.target.value)}  className='incr-input'/>
                <button className='decr-btn' onClick={handleDecrementPiece} >-</button>
            </div> : ''}
        </div>
    </>
  )
}
// }e => setIncr(Number(e.target.value))