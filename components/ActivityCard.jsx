"use client";

import { useState } from 'react';
import ActivityForm from './ActivityForm';

const ActivityCard = ({ activityData }) => {
    const [ showForm, setShowForm ] = useState("false")

    const handleEditClick = () => {
        setShowForm(!showForm);
    };

    return (
        <section className='activity-card'>
            <h3>{activityData.title}</h3>
            <p>{activityData.address}</p>
            <p>{activityData.info}</p>
            <p>£{activityData.price}</p>
            <button className='activity-edit-btn' onClick={handleEditClick}>Edit</button>
            {!showForm && <ActivityForm activity={activity} />}
        </section>
    )
};

export default ActivityCard;