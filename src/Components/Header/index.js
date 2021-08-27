import React from 'react'
import cookie from 'react-cookies'
import {useHistory} from 'react-router-dom'
import logo from '../../Images/logo.svg'


const Header = () => {
    let history = useHistory();
    return(
        <header className='px-4 pt-4 columns is-multiline is-mobile is-justify-content-space-between mb-0'>
            <div className='column is-centered is-one-quarter'>
                <img className='ml-6' src={logo} alt='logo'/>
            </div>
            <div className='column is-half'>
                <input className="input is-rounded has-background-light" type="text" placeholder='Search' />
            </div>
            <div className='column is-one-quarter has-text-right'>
                <button onClick={() => {
                    cookie.remove('user', {path : '/'})
                    history.push('/')
                }} className='button primary'>Logout</button>
            </div>
        </header>
    )
}

export default Header;