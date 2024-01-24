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
            <div className='activity-card-btns'>
                <button className='activity-edit-delete-btn' onClick={handleEditClick}>Edit</button>
                <button className='activity-edit-delete-btn' onClick={handleEditClick}>Delete</button>
            </div>
            <h3>{activity.title}</h3>
            <p>{activity.address}</p>
            <p>{activity.info}</p>
            <p>£{activity.price}</p>
            
            {/* {!showForm && <ActivityForm activity={activity} />} */}
        </section>
    )
};

export default ActivityCard;