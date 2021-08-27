import React, {useState} from 'react'

//Components
import Navbar from '../../Components/Navbar'
import Header from '../../Components/Header'

import { faMap, faMonument, faTimes, faCheck ,faUser, faPhoneAlt, faMapMarkerAlt, faStreetView} from '@fortawesome/free-solid-svg-icons'
import {useHistory} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Dashboard = () => {
    let history = useHistory();

    const hookah_size = ['Choose Item','Large', 'Medium', 'Small']
    const hookah_id = ['Choose Item',1,2,3,4,5,6,7,8,9,10]
    const flavor = ['Choose Item','Blue Mist', 'Queen of Sex', 'Zaafran Paan', 'Vanilla', 'Mango', 'Brain Freezer']
    const price = ['Choose Item',350, 400, 600, 750]

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [phone, setCustomerPhone] = useState('');
    const [hookahSize, setHookahSize] = useState('');
    const [hookahId, setHookahId] = useState('');
    const [hookahPrice, setPrice] = useState('');
    const [hookahFlavor, setHookahFlavor] = useState('');
    const [houseNumber, setHouseNumber] = useState('')
    const [street_name, setStreetName] = useState('')
    const [area_name, setAreaName] = useState('')
    const [pincode, setPincode] = useState('')

    const handleAddOrder = async (e) => {
        e.preventDefault()

        const data = {
            _id : phone,
            first_name : first_name,
            last_name : last_name,
            phone : phone,
            hookahSize : hookahSize,
            hookahId : hookahId,
            hookahFlavor : hookahFlavor,
            hookahPrice : hookahPrice,
            houseNumber : houseNumber,
            street_name : street_name,
            area_name : area_name,
            pincode : pincode,
            delivered : false,
            in_use : false,
            collected : false,
            deliver_time : 0,
            in_use_time : 0,
            collected_time : 0
        }

        await fetch(`${process.env.REACT_APP_URI}/order`, { 
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
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        })
        .then(() => {
            alert("Order Added Successfully")
            history.push('/orders')
        })
        .catch(() => {
        });
    }


    return(
        <div>
            <Header />
            <div className='is-flex'>
            <Navbar />
                <div className="has-background-light p-4" style={{height : '88vh',overflowY : 'scroll', width : '100%'}} >
                    <div className='box my-3 p-5'>
                        <h1 className='is-size-5 has-text-weight-bold mb-5'>Add New Order</h1>
                        
                        <h1 className='is-size-5 has-text-weight-semibold'>Add Customer Details</h1>
                        <div className='columns py-4'>
                            <div className='field column'>
                                <div className="is-normal">
                                    <label className="label my-2">First Name :</label>
                                </div>
                                <div className='field-body'>
                                    <div className="field">
                                      <p className="control is-expanded has-icons-left">
                                        <input className="input" required type="text" placeholder="First Name" value={first_name} onChange={e => setFirstName(e.target.value)} />
                                        <span className="icon is-small is-left">
                                            <FontAwesomeIcon icon={faUser} />
                                        </span>
                                      </p>
                                    </div>
                                </div>
                            </div>
                            <div className='field column'>
                                <div className="is-normal">
                                    <label className="label my-2">Last Name :</label>
                                </div>
                                <div className='field-body'>
                                    <div className="field">
                                      <p className="control is-expanded has-icons-left">
                                        <input className="input" required type="text" placeholder="Last Name" value={last_name} onChange={e => setLastName(e.target.value)} />
                                        <span className="icon is-small is-left">
                                            <FontAwesomeIcon icon={faUser} />
                                        </span>
                                      </p>
                                    </div>
                                </div>
                            </div>
                            <div className='field column'>
                                <div className="is-normal ">
                                    <label className="label my-2">Phone Number :</label>
                                </div>
                                <div className='field-body columns'>
                                    <div className="field column">
                                      <p className="control is-expanded has-icons-left">
                                        <input className="input" required type="text" placeholder="Phone Number" value={phone} onChange={e => setCustomerPhone(e.target.value)} />
                                        <span className="icon is-small is-left">
                                            <FontAwesomeIcon icon={faPhoneAlt} />
                                        </span>
                                      </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h1 className='is-size-5 has-text-weight-semibold'>Address : </h1>
                        <div className='columns'>
                            <div className='column'>
                                <div className='field'>
                                    <div className="is-normal">
                                        <label className="label my-2">House/Flat Number</label>
                                    </div>
                                    <div className='field-body '>
                                        <div className="field ">
                                          <p className="control is-expanded has-icons-left">
                                            <input className="input" required type="text" placeholder="House No." value={houseNumber} onChange={e => setHouseNumber(e.target.value)} />
                                            <span className="icon is-small is-left">
                                                <FontAwesomeIcon icon={faMonument} />
                                            </span>
                                          </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='column'>
                                <div className='field'>
                                    <div className="is-normal">
                                        <label className="label my-2">Street Name</label>
                                    </div>
                                    <div className='field-body '>
                                        <div className="field ">
                                          <p className="control is-expanded has-icons-left">
                                            <input className="input" required type="text" placeholder="Street Name" value={street_name} onChange={e => setStreetName(e.target.value)} />
                                            <span className="icon is-small is-left">
                                                <FontAwesomeIcon icon={faStreetView} />
                                            </span>
                                          </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='column'>
                                <div className='field'>
                                    <div className="is-normal">
                                        <label className="label my-2">Area Name</label>
                                    </div>
                                    <div className='field-body '>
                                        <div className="field ">
                                          <p className="control is-expanded has-icons-left">
                                            <input className="input" required type="text" placeholder="Area Name" value={area_name} onChange={e => setAreaName(e.target.value)} />
                                            <span className="icon is-small is-left">
                                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                            </span>
                                          </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='column'>
                                <div className='field'>
                                    <div className="is-normal">
                                        <label className="label my-2">Pincode</label>
                                    </div>
                                    <div className='field-body '>
                                        <div className="field ">
                                          <p className="control is-expanded has-icons-left">
                                            <input className="input" required type="text" placeholder="Pincode" value={pincode} onChange={e => setPincode(e.target.value)} />
                                            <span className="icon is-small is-left">
                                                <FontAwesomeIcon icon={faMap} />
                                            </span>
                                          </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <h1 className='is-size-5 has-text-weight-semibold'>Add Hookah Details</h1>
                        <div className='columns py-4'>
                            <div className='field column'>
                                <div className="is-normal">
                                    <label className="label my-2">Hookah Size :</label>
                                </div>
                                <div className='field-body'>
                                    <div className="field">
                                        <div className='select'>
                                            <select onChange={e => setHookahSize(e.target.value)} value={hookahSize}>
                                                {hookah_size.map((item, i) => {
                                                    return(
                                                        <option value={item} key={i}>{item}</option>
                                                    )
                                                })} 
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='field column'>
                                <div className="is-normal">
                                    <label className="label my-2">Hookah ID :</label>
                                </div>
                                <div className='field-body'>
                                    <div className="field">
                                        <div className='select'>
                                            <select onChange={e => setHookahId(e.target.value)} value={hookahId}>
                                                {hookah_id.map((item, i) => {
                                                    return(
                                                        <option value={item} key={i}>{item}</option>
                                                    )
                                                })} 
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='field column'>
                                <div className="is-normal">
                                    <label className="label my-2">Hookah Flavour :</label>
                                </div>
                                <div className='field-body'>
                                    <div className="field">
                                        <div className='select'>
                                            <select onChange={e => setHookahFlavor(e.target.value)} value={hookahFlavor}>
                                                {flavor.map((item, i) => {
                                                    return(
                                                        <option value={item} key={i}>{item}</option>
                                                    )
                                                })} 
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='field column'>
                                <div className="is-normal">
                                    <label className="label my-2">Price :</label>
                                </div>
                                <div className='field-body'>
                                    <div className="field">
                                        <div className='select'>
                                            <select onChange={e => setPrice(e.target.value)} value={hookahPrice}>
                                                {price.map((item, i) => {
                                                    return(
                                                        <option value={item} key={i}>{item}</option>
                                                    )
                                                })} 
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='is-flex is-flex-direction-column is-align-items-center'>
                            <div className='is-flex is-flex-direction-row is-align-items-center'>
                                <button className="button is-success" onClick={handleAddOrder} onSubmit={handleAddOrder}>
                                    <span className="icon is-small">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    <span>Add Order</span>
                                </button>
                                <button className="button is-danger mx-2">
                                    <span className="icon is-small">
                                        <FontAwesomeIcon icon={faTimes} />
                                    </span>
                                    <span>Cancel</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;