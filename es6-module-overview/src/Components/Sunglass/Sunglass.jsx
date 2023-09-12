import React from 'react';
import Watch from './../Watch/Watch';
import { add, multiply, divideTowNumverFirstAndSecond as division } from '../Utils/calculate';


const Sunglass = () => {
    const first = 55;
    const second = 199;
    const sum = add(first, second);
    const multi = multiply(first, second);
    const divi = division(first, second)
    return (
        <div>
            <Watch></Watch>
            <h1>{sum}</h1>
            <h1>{multi}</h1>
            <h1>{divi.toFixed(2)}</h1>
        </div>
    );
};

export default Sunglass;