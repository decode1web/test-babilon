import React from 'react'
import {FaTrash} from 'react-icons/fa'

export const Follower = ({item, onDeleteFollow}) => {
  return (
    <div className='item'>
        <img src={item.img} />
        <h2>{item.name}</h2>
        <h2>{item.price} {item.money}</h2>
        <FaTrash className='delete-icon' onClick={() => onDeleteFollow(item.id)}/>
    </div>
  )
}