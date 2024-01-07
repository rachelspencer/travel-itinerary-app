const DayForm = () => {
    return(
        <form className="day-form">
            <label className="day-form" for='days'>How many days is your itinerary?</label>
            <input className='day-form-input'
                type='number' 
                id='days' 
                name='days'
                min='1'
                max='40'
                placeholder='enter a number'
                ></input>
            <button className='day-form-btn'>Go!</button>
        </form>
    )
};

export default DayForm;