const ActivityForm = () => {
    return (
        <section className="activity-form">
            <h3>Add an activity</h3>
            <form className="activity-form">
                <label htmlFor="activity-title" className="activity-label">Title</label>
                <input className="small-text-input"
                type="text"
                id="activity-title"
                name="activity-title"
                ></input>
                <label htmlFor="activity-address" className="activity-label">Address</label>
                <input className="activity-input-short-text"
                type="text"
                id="activity-address"
                name="activity-address"
                ></input>
                <label htmlFor="activity-info" className="activity-label">Info</label>
                <input className="large-text-input"
                type="text"
                id="activity-info"
                name="activity-info"
                ></input>
                <label htmlFor="activity-price" className="activity-label">Price</label>
                <input className="price-input"
                type="number"
                id="activity-price"
                name="activity-price"
                placeholder="0"
                ></input>
                <button className="btn-input-base-styling">Create</button>
            </form>
        </section>
               
    )
};

export default ActivityForm;