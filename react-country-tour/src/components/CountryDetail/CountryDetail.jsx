import React from 'react';
import CountryData from '../CountryData/CountryData';

const CountryDetail = (props) => {
    return (
        <div>
            <h3>Country Details</h3>

            <CountryData
                {...props}
            ></CountryData>
        </div>
    );
};

export default CountryDetail;