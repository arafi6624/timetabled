import './App.css'
import Calendar from './components/Calendar'

const App = () => {
  return(
    <div className="App">
      <h1>Itinerary for 7 days in Los Angeles ✈️ 🌆</h1>
      <h2>Welcome to Los Angeles, Abdul! Check out this calandar to get to know the city and see all the sights during your stay.</h2>
      <Calendar /> 
    </div>
  )
}

export default App