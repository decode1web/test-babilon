import React from 'react'
import { Catalog } from '../../pages/Catalog'
import { Home } from '../../pages/Home'
import { PopularModel } from '../../pages/PopularModel'
import { Subscribe } from '../../pages/Subscribe'


export const Main = ({items, onAdd, follow, onAddFollow}) => {
  return (
    <div className='card-content'>
        <Home />
        <PopularModel items={items} onAdd={onAdd} onAddFollow={onAddFollow}/>
        <Catalog />
        <Subscribe />
    </div>
  )
}