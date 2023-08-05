import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import { useState, useEffect } from 'react';
import DogList from './components/DogList';
import DogLocations from './components/DogLocations';
import DogReviews from './components/DogReviews';
import DogHome from './components/DogHome';
import Navbar from  './components/Navbar';
import { Container } from 'react-bootstrap';

function App(props) {
  const API_URL = "https://64a89351dca581464b85e18b.mockapi.io/dogs";

  const [dogs, setDogs] = useState([]);

  async function getDogs() {
    try {
      const response = await fetch(API_URL);
      const dogData = await response.json();

      return dogData;
    } catch (e) { console.error(e); }
  }

  const deleteDog = async (dogId) => {
    try {
      const response = await fetch(`${API_URL}/${dogId}`, {
        method: 'DELETE'
      });
    } catch (e) { console.error(e); }

    getDogs().then((value) => setDogs(value));
  }

  useEffect(() => {
    getDogs().then((value) => setDogs(value));
  }, []);

  let output = [];

  if (props.page == "dogs") {
    output.push(<DogList key="doglist" dogs={dogs} deleteDog={deleteDog} getDogs={() => {getDogs().then((value) => setDogs(value))}} />);
  }

  if (props.page == "locations") {
    output.push(<DogLocations key="doglocations" dogs={dogs} />);
  }

  if (props.page == "reviews") {
    output.push(<DogReviews key="dogreviews" dogs={dogs} />);
  }

  if (props.page == "home") {
    output.push(<DogHome key="doghome" />);
  }

  if (props.page == "error") {
    output.push(
      <div id="errorPage" className="mt-3">
        <h3>Error!</h3>
        <p>This page is not reachable.</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Container>
        {output}
      </Container>
    </>
  );
}

export default App;
