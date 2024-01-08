import DayForm from '../components/DayForm';
import ActivityForm from '../components/ActivityForm';

export default function Page() {
    return (
      <div>
        <div className='intro-text'>
          <h1>So you are going to Scotland eh?</h1>
          <h2>Create your itinerary here!</h2>
        </div>
        <DayForm/>
        <ActivityForm/>
      </div>
    )
  };