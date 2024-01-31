"use client"

import { useState } from 'react';
import ActivityCard from './ActivityCard';
import ActivityForm from "./ActivityForm";

const DayCard = ({ onFormSubmit, day, handleAddActivity }) => {
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

    const renderActivities = () => {
       return day.activities.map((activity) => <ActivityCard activity={activity} key={activity.dayNum} />)
    };

    return (
        <section className="day-card">
            <h3>Day {day.number}</h3>
            {/* <button onClick={handleEditClick}>Edit</button> */}
            {/* <button>Delete</button> */}
            
            {renderActivities()}
            {!showForm  ? <button className='add-activity-btn' onClick={handleAddClick}>Add Activity</button> : null}
            {showForm && <ActivityForm onSubmit={onFormSubmit} onClose={handleClose} dayNum={day.number} handleAddActivity={handleAddActivity}/>}
        </section>
    )
};

export default DayCard;