"use client"

import React,  { useState } from 'react';

const DayForm = () => {
    const [ day, setDay ] = useState("")

    const handleDay = (event) => {
        setDay(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(day)
    };

    return(
        <form className="day-form" onSubmit={handleSubmit}>
            <label htmlFor="days">How many days is your itinerary?</label>
            <input className="day-form-input"
                type="number" 
                id="days" 
                name="days"
                min="1"
                max="40"
                placeholder="0"
                value={day}
                onChange={handleDay}
                ></input>
            <button className="day-form-btn" type="submit">Go!</button>
        </form>
    )
};

export default DayForm;