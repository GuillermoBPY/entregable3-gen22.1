import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Location from "./components/Location";
import ParticlesBG from "./components/ParticlesBG";
import ResidentInfo from "./components/ResidentInfo";
import SearchBar from "./components/SearchBar";
import "./styles/App.css";
import getRandomLocation from "./utils/getRandomLocation";

function App() {
  const [locationinfo, setlocationinfo] = useState();
  const [numberLocation, setnumberLocation] = useState(getRandomLocation());

  const callApi = () => {
    const url = `https://rickandmortyapi.com/api/location/${numberLocation}`;
    axios
      .get(url)
      .then((res) => setlocationinfo(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(callApi, [numberLocation]);

  return (
    <div className="App">
      <ParticlesBG />
      <Home />
      <Header />
      <SearchBar setnumberLocation={setnumberLocation} />
      <Location locationinfo={locationinfo} />
      <div className="residentgrid">
        {locationinfo?.residents.length === 0 ? (
          <h1 className="nono">No known residents</h1>
        ) : (
          locationinfo?.residents?.map((url) => (
            <ResidentInfo key={url} url={url} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
