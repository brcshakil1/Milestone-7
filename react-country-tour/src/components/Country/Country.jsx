import { useState } from "react";
import './Country.css'
import CountryDetail from './../CountryDetail/CountryDetail';

const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name,flags, area, population, cca3} = country;
    // console.log(country)

    const countryStyle = {
        border: '4px solid skyblue',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }

    const [visited, setVisited] = useState(false)

    const handleClick = () => {
        setVisited(!visited)
    }

    // console.log(handleVisitedCountry)
    return (
        <div className={visited && 'visited'} style={countryStyle}>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="" style={{width:'150px'}}/>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>COde: {cca3}</p>
            <button onClick={()=> handleVisitedCountry(country)}>Make Visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <button onClick={handleClick}>{visited ? 'Visited' : 'Going'}</button>
            {
                visited ? <p>I've visited</p> : <p>I haven't visit yet</p>
            }
            <hr />
            <CountryDetail
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags = {handleVisitedFlags}
            >

            </CountryDetail>
        </div>
    );
};

export default Country;