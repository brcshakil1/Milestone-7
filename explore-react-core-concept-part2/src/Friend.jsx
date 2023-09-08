import React from 'react';

const Friend = ({friend}) => {
    const {name, email} = friend;
    return (
        <div className='box'>
            <h3>Name: {name}</h3>
            <h4>Email: {email}</h4>
        </div>
    );
};

export default Friend;