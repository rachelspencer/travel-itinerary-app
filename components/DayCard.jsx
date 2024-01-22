"use client"

import { useState } from 'react';
import ActivityCard from './ActivityCard';
import ActivityForm from "./ActivityForm";

const DayCard = ({ onFormSubmit, day }) => {
    // toggle state to show/hide ActivityForm
    const [ showForm, setShowForm ] = useState(false);

    const handleAddClick = () => {
        setShowForm(!showForm);
    };

    const handleClose = () => {
        setShowForm(!showForm);
    }

    // const handleEditClick = () => {
    //     setShowForm(!showForm);
    // };

    return (
        <section className="day-card">
            <h3>Day {day.number}</h3>
            {/* <button onClick={handleEditClick}>Edit</button> */}
            {/* <button>Delete</button> */}
            
            {!showForm && <ActivityCard activity={day.activities[0]}/>}
            {!showForm  ? <button className='add-activity-btn' onClick={handleAddClick}>Add Activity</button> : null}
            {showForm && <ActivityForm onSubmit={onFormSubmit} onClose={handleClose} activityData={activity}/>}
        </section>
    )
};

export default DayCard;