import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([])

  const handleVisitedCountry = (country) => {
    const newVisitedCountry = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountry)
  }

  const handleVisitedFlags = flag => {
    setVisitedFlags([...visitedFlags, flag])
  }

  useEffect(() =>{
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
    return (
        <div>
            <h2>Countries: {countries.length}</h2>
            {/* visited countries */}
            <h3>Visited country : {visitedCountry.length}</h3>
            <ul>
              {
                visitedCountry.map(country => <li key={country.cca3}>{country.name.common}</li>)
              }
            </ul>
            <div className="flag-container">
            {
                visitedFlags.map((flag, idx)=> <img key={idx} src={flag}></img>)
            }
            </div>
            {/* display Country */}
            <div className="country-container ">
              {
                countries.map(country => <Country 
                  country={country}
                  key={country.cca3}
                  handleVisitedCountry={handleVisitedCountry}
                  handleVisitedFlags ={handleVisitedFlags}
                  ></Country>)
              }
            </div>
        </div>
        
    );
};

export default Countries;