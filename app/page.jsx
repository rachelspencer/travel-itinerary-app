import DayForm from '../components/DayForm';
import Feed from '../components/Feed';

export default function Page() {
    return (
      <div>
        <div className='intro-text'>
          <h1>So you are going to Scotland eh?</h1>
          <h2>Create your itinerary here!</h2>
        </div>
        
        <DayForm/>
        <Feed/>
      </div>
    )
  };