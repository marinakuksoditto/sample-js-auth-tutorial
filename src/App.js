import React, { useState, useEffect  } from "react";
import './App.css';
import Ditto from "./ditto"
import { useAuth0 } from "@auth0/auth0-react"

const domain = "YOUR_AUTH0_DOMAIN_HERE";

let ditto
function App() {
  const { user, loginWithRedirect, getAccessTokenSilently, isAuthenticated, logout } = useAuth0()
  const [cars, setCars] = useState(0)
  const [error, setError] = useState('')

  useEffect(() => {
    let liveQuery
    async function refreshToken () {
      const accessToken = await getAccessTokenSilently({
        audience: `https://${domain}/api/v2/`,
        scope: "read:current_user",
      });

      ditto = Ditto(accessToken)
      liveQuery = ditto.store.collection('cars')
        .findAll()
        .observeLocal((tickets) => {
          setCars(tickets.length)
        })
    }

    if (user) {
      refreshToken()
    }
    return () => {
      liveQuery?.stop()
    }
  }, [user, getAccessTokenSilently]);

  function onAddClick (){
    if (!ditto || !user) return setError('You must log in first.')
    setError('')
    ditto.store.collection('cars').upsert({
      "name": 'Toyota'
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        {!isAuthenticated && <button onClick={() => loginWithRedirect()}>Log In</button>}
        {isAuthenticated &&
          <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        }
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
