import React, { useEffect, useState } from 'react'
import './Scheduler.styles.css'
import axios from 'axios';
import { numTimeFormat } from '../../utils/TimeFormatter';

import { GrClose } from 'react-icons/gr'

export default function Scheduler({ setScheduling, name }) {

    const [loading, setLoading] = useState(true)
    const [slots, setSlots] = useState()

    useEffect(() => {
        const url = "https://ceracare.github.io/availableSlots.json";
        axios.get(url).then(data => {
            setSlots(data.data.UTCAvailableSlots)
            setLoading(false)
        })
    }, [])

    const [message, setMessage] = useState(null)
    const [success, setSuccess] = useState(false)


    function scheduleSlot(slot) {
        setMessage(null)
        const url = "https://ceracare.github.io/availableSlots.json"
        axios.get(url).then(data => {
            if (data.status = 200) {
                setMessage("Your carer has been scheduled ✅")
                return setSuccess(true)
            }
        })
    }

    return (

        <div className="schedulerPane">
            <div className="schedulerWrapper">
                <GrClose onClick={() => setScheduling(false)} color={"DFDEDE"} style={{ cursor: "pointer", color: "whitesmoke", position: "absolute", top: "20px", right: "20px" }} size="30px" />
                <h1>Schedule Carer</h1>
                <h3>{name}</h3>
                {!success ? <div className="schedulerButtonWrapper">
                    {
                        loading ?
                            <h1>Loading...</h1> :
                            slots.map((slot, idx) => {
                                return <button onClick={() => scheduleSlot(slot)} className="schedulerButton" key={idx}>{numTimeFormat(slot)}</button>
                            })
                    }
                </div> : null}
                <span>{message}</span>
            </div>
        </div>
    )
}
