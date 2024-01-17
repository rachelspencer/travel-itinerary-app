"use client"

import { useState } from 'react';
import ActivityForm from "./ActivityForm";

const DayCard = ({ activity }) => {
    // toggle state to show/hide ActivityForm
    const [ showForm, setShowForm ] = useState(false);

    const handleAddClick = () => {
        setShowForm(!showForm);
    };

    const handleEditClick = () => {
        setShowForm(!showForm);
    };

    return (
        <section className="day-card">
            <h3>Day 1</h3>
            <button onClick={handleEditClick}>Edit</button>
            {/* <button>Delete</button> */}
            <button onClick={handleAddClick}>Add Activity</button>
            {!showForm && (
                <>
                    <h3>{activity.title}</h3>
                    <p>{activity.address}</p>
                </>
            )}
            {showForm && <ActivityForm activity={activity} />}
        </section>
    )
};

export default DayCard;