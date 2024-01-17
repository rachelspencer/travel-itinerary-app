import DayCard from '../components/DayCard';

const sampleActivity = {
  title: 'some title',
  address: 'some address',
  info: 'some info', 
  price: 25,
};
export default function Page() {
    //fetch activites from backend

    return (
      <div>
        <div className='intro-text'>
          <h1>So you are going to Scotland eh?</h1>
          <h2>Create your itinerary here!</h2>
        </div>
        {/* {activities.map(activity => <DayCard activity={activity} />)} */}
        <DayCard activity={sampleActivity}/>
      </div>
    )
  };