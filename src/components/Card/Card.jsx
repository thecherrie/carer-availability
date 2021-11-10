import React from 'react'
import './Card.styles.css';


export default function Card({ image, setScheduling, name, slots }) {

    function formatSlots(numSlots) {
        if (numSlots == 0) return "No slots available"
        if (numSlots == 1) return "1 slot available"
        else return `${numSlots} slots available`
    }

    return (
        <div className="cardWrapper">
            <div>
                <img className="cardPhoto" src={image} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ marginTop: "10px" }}>
                        <h1 style={{ fontSize: "18px", fontWeight: "bold" }} >{name}</h1>
                        <p style={{ fontSize: "18px", color: "#880E4F" }}>{formatSlots(slots)}</p>
                    </div>
                    <button onClick={() => setScheduling(name, true)} className="cardButton">Check availability</button>
                </div>
            </div>
        </div>
    )
}
