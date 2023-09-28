import React from 'react'
import './topbox.scss'
import { topDealUsers } from '../../data'
const Topbox = () => {
  return (
    <div className='topbox'>
        <h1>Top Deals</h1>
        <div className="list">
            {
                topDealUsers.map((user,i)=>(
                    <div className="listItem" key={user.id}>
                       <div className="user">
                         <img src={user.img}  />
                         <div className="userTexts">
                            <span className='username'>{user.username}</span>
                            <span className='email'>{user.email}</span>
                         </div>
                       </div>
                       <span className='amount'>{user.amount}</span>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Topbox