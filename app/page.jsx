"use client"

import { useState } from 'react';
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
];

export default function Page() {
  const [ days, setDays ] = useState(sampleDaysArray);
 
  const handleAddDay = () => {
    let dayNum = 1;

     if (days.length) {
      const lastDayNum = days[days.length - 1].number;
      dayNum = lastDayNum + 1
     }
    setDays([...days,  {
      number: dayNum,
      activities: [],
    }]);
  };

  const renderDays = () => days.map((day, index) => {
    return <DayCard day={day} key={index} />;
  })

  console.log("days state array", days)
    return (
      <div>
        <div className='intro-text'>
          <h1>So you are going to Scotland eh?</h1>
          <h2>Create your itinerary here!</h2>
        </div>
        {/* <DayCard day={days} activity={sampleActivity} onFormSubmit={addDay} daysArray={sampleDaysArray}/> */}
        <div>{renderDays()}</div>
        <button className='add-day-btn' onClick={handleAddDay}>Add Day</button>
      </div>
    )
  };