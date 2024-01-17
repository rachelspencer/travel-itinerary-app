"use client"
import DayCard from '../components/DayCard';

const sampleActivity = {
  title: 'Take the Ferry from Mallaig',
  address: 'Ferry Terminal, Mallaig PH41 4QD, UK',
  info: 'If you’ve been visiting staying in Fort William for Ben Nevis, or even the Harry Potter Train, you can get the ferry from Mallaig to the Isle of Skye. It runs twice daily and docks at Armadale.', 
  price: 6,
};
const sampleDaysArray = [
  {
    number: 1,
    activities: [
      sampleActivity,
    ]
  }
]
export default function Page() {
    // store days in state here (array)


    const addDay = (formData) => {
      console.log(formData);
      // call backend with formData (can be a separate function in another file that calls backend)
    }
    return (
      <div>
        <div className='intro-text'>
          <h1>So you are going to Scotland eh?</h1>
          <h2>Create your itinerary here!</h2>
        </div>
        {/* {days.map(day => <DayCard day={day} />)} */}
        <DayCard activity={sampleActivity} onFormSubmit={addDay} daysArray={sampleDaysArray}/>
      </div>
    )
  };