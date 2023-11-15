import React, { useState, useEffect  } from "react";
import './App.css';
import Ditto from "./ditto"

let ditto
function App() {
  const [cars, setCars] = useState(0)
  const [error, setError] = useState('')

  useEffect(() => {
    let liveQuery
    async function startDitto() {
      ditto = Ditto()
      liveQuery = ditto.store
        .collection('cars')
        .findAll()
        .observeLocal((tickets) => {
          setCars(tickets.length)
        })
    }
    startDitto() 
    return () => {
      liveQuery?.stop()
    }
  }, []);

  function onAddClick (){
    if (!ditto) return setError('No Ditto.')
    setError('')
    ditto.store.collection('cars').upsert({
      "name": 'Toyota'
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h3>
          {cars} cars
          </h3>
          {error && <p style={{"color": "red"}}>{error}</p>}
          <button onClick={onAddClick}>+</button>
        </div>
      </header>
    </div>
  );
}

export default App;
