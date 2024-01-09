const ActivityForm = () => {
    return (
        <section className="activity-form">
            <h3>Add an activity</h3>
            <form className="activity-form">
                <label htmlFor="activity-title">Title</label>
                <input className="activity-form-input"
                type="text"
                id="activity-title"
                name="activity-title"
                ></input>
                <label htmlFor="activity-price">Price</label>
                <input className="activity-form-input"
                type="number"
                id="activity-price"
                name="activity-price"
                placeholder="0"
                ></input>
                <label htmlFor="activity-address">Address</label>
                <input className="activity-form-input"
                type="text"
                id="activity-address"
                name="activity-address"
                ></input>
                <label htmlFor="activity-info">info</label>
                <input className="activity-form-input"
                type="text"
                id="activity-info"
                name="activity-info"
                ></input>
                <button className="btn-input-base-styling">Create</button>
            </form>
        </section>
               
    )
};

export default ActivityForm;