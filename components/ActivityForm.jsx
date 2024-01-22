"use client"

import { useEffect, useState } from 'react';

const ActivityForm = ({  onSubmit, onClose, activityData, daysArray }) => {
    // const dayNumber = daysArray.number;
    const [ activity, setActivity ] = useState({
        title: "",
        address: "",
        info: "",
        price: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("title", activity.title)
        console.log("address", activity.address)
        console.log("info", activity.info)
        console.log("price", activity.price)
        
        // call addDay() from Page component and pass in form data + day number
        onSubmit({
            number: "",
            activities: {
                setActivity
            }
        });

        setActivity({ 
            title: "",
            address: "",
            info: "",
            price: "",
        })

        onClose();
    };

    useEffect(() => {
        if (activityData) {
            setActivity({
                title: activity.title,
                address: activity.address,
                info: activity.info,
                price: activity.price
                });
        }
    }, [activityData]);

    return (
        <section>
            <h3>Add an activity</h3>
            <form className="activity-form" onSubmit={handleSubmit}>
                <label htmlFor="activity-title" className="activity-label">Title</label>
                <input className="small-text-input"
                    type="text"
                    id="activity-title"
                    name="activity-title"
                    value={activity.title}
                    onChange={e => setActivity({...activity, title: e.target.value})}
                />
                <label htmlFor="activity-address" className="activity-label">Address</label>
                <input className="small-text-input"
                    type="text"
                    id="activity-address"
                    name="activity-address"
                    value={activity.address}
                    onChange={e => setActivity({...activity, address: e.target.value})}
                />
                <label htmlFor="activity-info" className="activity-label">Info</label>
                <textarea className="large-text-input"
                    type="text"
                    id="activity-info"
                    name="activity-info"
                    cols="20"
                    rows="5"
                    value={activity.info}
                    onChange={e => setActivity({...activity, info: e.target.value})}
                />
                <label htmlFor="activity-price">Price £</label>
                <input className="price-input"
                    type="number"
                    id="activity-price"
                    name="activity-price"
                    placeholder="0"
                    value={activity.price}
                    onChange={e => setActivity({...activity, price: e.target.value})}
                />
                <button type="submit" className="btn-input-base-styling">Create</button>
            </form>
        </section>
    )
};

export default ActivityForm;