import './TopBar.styles.css'
import React from 'react'
import logo from '../../assets/cera_logo.png'
import timeFormat from '../../utils/TimeFormatter'

export default function TopBar() {

    return (
        <div className="topBarContainer">
            <div style={{ display: "flex", alignItems: "center" }}>
                <img src={logo} />
                <div style={{ marginLeft: "50px" }}>
                    <h1 style={{ marginTop:"15px", lineHeight:"25px"}}>Carers</h1>
                    <p style={{ margin:0 }}>Here you'll be able to schedule your carer visits.</p>
                </div>
            </div>
            <h3 style={{ fontSize:"25px" }}>{timeFormat(new Date)}</h3>
        </div>
    )
}
