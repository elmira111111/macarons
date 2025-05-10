import React from 'react'
import "./Present.scss"
import { present } from '../../data'

function Present() {
    return (
        <div className='present'>
            {
                present.map((item) => (
                    <div className={`content ${item.id === 9 ? "hide-mobile" : ""}`} key={item.id}>
                        <img src={item.img} alt="" />
                        <div className='content-text'>
                            <h6>{item.number}</h6>
                            <h5>{item.title}</h5>
                            <h4>{item.p}</h4>
                        </div>
                    </div>
                ))
            }
        </div >
    )
}

export default Present