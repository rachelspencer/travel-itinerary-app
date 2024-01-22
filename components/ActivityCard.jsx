"use client";

import { useState } from 'react';
import ActivityForm from './ActivityForm';

const ActivityCard = ({ activity }) => {
    const [ showForm, setShowForm ] = useState("false")

    const handleEditClick = () => {
        setShowForm(!showForm);
    };

    return (
        <section className='activity-card'>
            <h3>{activity.title}</h3>
            <p>{activity.address}</p>
            <p>{activity.info}</p>
            <p>£{activity.price}</p>
            <button className='activity-edit-btn' onClick={handleEditClick}>Edit</button>
            {/* {!showForm && <ActivityForm activity={activity} />} */}
        </section>
    )
};

export default ActivityCard;