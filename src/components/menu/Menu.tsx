import React from 'react'
import './menu.scss'
import { Link } from 'react-router-dom'
import {menu } from '../../data'
const Menu = () => {
  return (
    <div className='menu'>
     
     {
      menu.map((item,i)=>(
        <div className="item" key={i}>
      <span className='title'>{(item.title).toUpperCase()}</span>
      {
        item.listItems.map((listItem,i)=>(
          <Link className='listItems' to={listItem.url} key={listItem.id}>
         <img className='icon' src={listItem.icon} alt='' />
         <span className='listItemTitle'>{listItem.title}</span>
      </Link>
        ))
      }
      
      
     </div>
      ))
     }

     
     
    </div>
  )
}

export default Menu