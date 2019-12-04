import React, { useState, useRef } from 'react';

export const Timer = () => {
    const [second, setSecond] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    setTimeout(() => {
        setSecond(second + 1)
        if(second==59)
        {
            setSecond(0)
            setMinutes(minutes + 1)
        }
        if(minutes==59)
        {
            setMinutes(0)
            setHours(hours + 1)
        }
        if(hours==12)
        {
            setHours(0)
        }   
    }, 1000) 
    return (
        <div style={{ margin: '10%' }}>
            <h1> Timer</h1>
            <h2> {hours}:{minutes}:{second}</h2>
            <h1> Enjoy :)</h1>
            <br />
            {/* <button outClick={restart}>restart</button> */}
        </div>
    )
}