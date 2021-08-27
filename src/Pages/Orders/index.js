import React, {useState, useEffect} from 'react'
import Switch from 'react-switch'

//Components
import Navbar from '../../Components/Navbar'
import Header from '../../Components/Header'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Orders = () => {

    const tableHeads = ['Id','Name', 'Address', 'Hookah Size','Hookah ID','Flavor','Price', 'Phone', 'Delivered','In-Use','Collected']
    const [orders, setOrders] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(() => {
        async function getOrders() {
            await fetch(`${process.env.REACT_APP_URI}/order`,{ 
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            }).then(res => {
                res.json()
                .then(result => {
                    setOrders(result)
                })
            })
            .catch(err => {
                console.log(err)
            });
        }
        getOrders();
    }, [])

    return(
        <div>
            <Header />
            <div className='is-flex'>
                <Navbar />
                <div className="column has-background-light">
                    <div className="box" >
                        <div className='is-flex is-justify-content-space-between'>
                            <h1 className='is-size-5 has-text-weight-bold'>Ongoing Orders</h1>
                            <div>
                                <div className='field-body '>
                                    <div className="field ">
                                        <p className="control is-expanded has-icons-left">
                                        <input className="input is-rounded" required type="text" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} />
                                        <span className="icon is-small is-left">
                                            <FontAwesomeIcon icon={faSearch} />
                                        </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='hero my-4' style={{height : '70vh', overflowY : 'scroll'}}>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        {tableHeads.map((item,i) => {
                                            return(
                                                <th key={i}><abbr title={item}>{item}</abbr></th>
                                            )
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((item,i) => {
                                        return(
                                            <tr key={i}>
                                                <th>{i+1}</th>
                                                <td>{item.first_name} {item.last_name}</td>
                                                <td>{item.houseNumber}, {item.street_name}, {item.area_name}, {item.pincode}</td>
                                                <td>{item.hookahSize}</td>
                                                <td>{item.hookahId}</td>
                                                <td>{item.hookahFlavor}</td>
                                                <td>{item.hookahPrice}</td>
                                                <td>{item.phone}</td>
                                                <td>{<Switch disabled checked={item.delivered} />} <br /> {item.deliver_time === '1970-01-01T00:00:00.000Z' ? 'Not Delivered' : `${item.deliver_time}`}</td>
                                                <td>{<Switch disabled checked={item.in_use} />} <br /> {item.in_use_time === '1970-01-01T00:00:00.000Z' ? 'Not in Use' : `${item.in_use_time}`}</td>
                                                <td>{<Switch disabled checked={item.collected} />} <br /> {item.collected_time === '1970-01-01T00:00:00.000Z' ? 'Not Collected' : `${item.collected_time}`}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            
        </div>
    );
}

export default Orders;