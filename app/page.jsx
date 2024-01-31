"use client"

import { useState } from 'react';
// import { database } from './firebaseConfig';
// import { ref, set } from 'firebase/database';
import DayCard from '../components/DayCard';

const sampleActivity = {
  title: 'The Ferry',
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

  const handleAddActivity = (dayNum, newActivity) => {
    console.log('newActivity', newActivity);
    const daysState = [...days];
    console.log('daysState', daysState);
    const dayToUpdateIndex = daysState.findIndex((day) => day.number === dayNum);
    const dayToUpdate = daysState[dayToUpdateIndex];
    console.log('dayToUpdate', dayToUpdate);
    console.log('dayToUpdateIndex', dayToUpdateIndex);
    // const updatedDaysState = daysState.splice(dayToUpdateIndex, 1, {
    //   number: 4,
    //   activities: [newActivity]
    // });
    daysState[dayToUpdateIndex] = {...dayToUpdate, activities: [...dayToUpdate.activities, newActivity]};

    // console.log("updatedDaysState", updatedDaysState);
    setDays(daysState);
  };

  const renderDays = () => days.map((day, index) => {
    return <DayCard day={day} key={index} handleAddActivity={handleAddActivity}/>;
  })

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