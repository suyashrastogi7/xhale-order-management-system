import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll } from '@fortawesome/free-solid-svg-icons'
import { faStore } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
    return(
        <div className='column is-one-fifth'  style={{height : '85vh',overflowY : 'scroll'}}>
            <aside className="menu" >
                <p className="menu-label px-5">
                  General
                </p>
                <ul className="menu-list">
                  <li className='px-5 py-1'><a href='/'><FontAwesomeIcon className='mx-2' icon={faBorderAll} color='#38305f' />Dashboard</a></li>
                  <li className='px-5 py-1'><a href='/orders'><FontAwesomeIcon className='mx-2' icon={faStore} color='#38305f'/>Orders</a></li>
                  <li className='px-5 py-1'><a href='/completed-orders'><FontAwesomeIcon className='mx-2' icon={faStore} color='#38305f'/>Completed Orders</a></li>
                </ul>
                
            </aside>
        </div>
    )
}

export default Navbar;