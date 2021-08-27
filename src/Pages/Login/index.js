import React, {useState} from 'react'
//Components
import { setCurrentUser } from "../../Redux/user/user.actions" ;
import { useDispatch } from 'react-redux';
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useHistory} from 'react-router-dom'
import cookie from 'react-cookies'

const Login = () => {
    console.log(process.env.REACT_APP_URI)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    let history = useHistory();
    const dispatch = useDispatch()

    const expires = new Date()
    expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14)

    const handleLogin = async (e) => {
        e.preventDefault();
        
        await fetch(`${process.env.REACT_APP_URI}/login`, { 
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({
                username : username,
                password : password
            }) // body data type must match "Content-Type" header
        })
        .then(res => {
            res.json().then(result => {
                dispatch(setCurrentUser(result))
                cookie.save('user', result.loginResult, { path: '/' })
                setTimeout(() => {
                    history.push('/')
                }, 1000)
            })
        })
        .catch(err => {
            console.log(err)
        });
    }


    return(
        <div>
            <section className="hero is-primary is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                                 <form onSubmit={handleLogin} className="box">
                                    <div className="field">
                                        <label className="label">Username</label>
                                        <div className="control has-icons-left">
                                            <input type="text" placeholder="admin" value={username} onChange={e => setUsername(e.target.value)} className="input" required />
                                            <span className="icon is-small is-left">
                                                <FontAwesomeIcon icon={faUser} />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Password</label>
                                        <div className="control has-icons-left">
                                            <input type="password" placeholder="*******" value={password} onChange={e => setPassword(e.target.value)} className="input" required />
                                            <span className="icon is-small is-left">
                                                <FontAwesomeIcon icon={faLock} />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="field is-flex  is-align-items-center is-flex-direction-column">
                                        <button type='submit' className="button is-success">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}




export default Login;