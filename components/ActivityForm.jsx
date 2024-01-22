"use client"

import { useEffect, useState } from 'react';

const ActivityForm = ({  onClose, activity, dayNum, handleAddActivity }) => {
    const [ newActivity, setNewActivity ] = useState({
        title: "",
        address: "",
        info: "",
        price: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // call addDay() from Page component and pass in form data + day number
        handleAddActivity(
            dayNum,
            newActivity,
        );

        // setNewActivity({ 
        //     title: "",
        //     address: "",
        //     info: "",
        //     price: "",
        // })

        onClose();
    };

    useEffect(() => {
        if (activity) {
            setNewActivity({
                title: activity.title,
                address: activity.address,
                info: activity.info,
                price: activity.price
                });
        }
    }, [activity]);

    return (
        <section>
            <h3>Add an activity</h3>
            <form className="activity-form" onSubmit={handleSubmit}>
                <label htmlFor="activity-title" className="activity-label">Title</label>
                <input className="small-text-input"
                    type="text"
                    id="activity-title"
                    name="activity-title"
                    value={newActivity.title}
                    onChange={e => setNewActivity({...newActivity, title: e.target.value})}
                />
                <label htmlFor="activity-address" className="activity-label">Address</label>
                <input className="small-text-input"
                    type="text"
                    id="activity-address"
                    name="activity-address"
                    value={newActivity.address}
                    onChange={e => setNewActivity({...newActivity, address: e.target.value})}
                />
                <label htmlFor="activity-info" className="activity-label">Info</label>
                <textarea className="large-text-input"
                    type="text"
                    id="activity-info"
                    name="activity-info"
                    cols="20"
                    rows="5"
                    value={newActivity.info}
                    onChange={e => setNewActivity({...newActivity, info: e.target.value})}
                />
                <label htmlFor="activity-price">Price £</label>
                <input className="price-input"
                    type="number"
                    id="activity-price"
                    name="activity-price"
                    placeholder="0"
                    value={newActivity.price}
                    onChange={e => setNewActivity({...newActivity, price: e.target.value})}
                />
                <button type="submit" className="btn-input-base-styling">Create</button>
            </form>
        </section>
    )
};

export default ActivityForm;