import React, { useEffect, useState } from 'react';
import './Friends.css'
import Friend from './Friend';

const Friends = () => {
    const [friends,setFriends] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])
    return (
        <div className='box'>
            <h3>Friends:</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;

// 1. state to hole data
// 2. useEffect with dependency array
// 3. use fetch to load data