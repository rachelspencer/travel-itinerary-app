"use client"

import { useState } from 'react';
import ActivityCard from './ActivityCard';
import ActivityForm from "./ActivityForm";

const DayCard = ({ activity, daysArray, onFormSubmit }) => {
    // toggle state to show/hide ActivityForm
    const [ showForm, setShowForm ] = useState(false);

    const handleAddClick = () => {
        setShowForm(!showForm);
    };

    // const handleEditClick = () => {
    //     setShowForm(!showForm);
    // };

    return (
        <section className="day-card">
            <h3>Day 1</h3>
            {/* <button onClick={handleEditClick}>Edit</button> */}
            {/* <button>Delete</button> */}
            
            {!showForm && <ActivityCard activityData={activity}/>}
            {!showForm  ? <button className='add-activity-btn' onClick={handleAddClick}>Add Activity</button> : null}
            {showForm && <ActivityForm onSubmit={onFormSubmit} activityData={activity} daysArray={daysArray}/>}
        </section>
    )
};

export default DayCard;