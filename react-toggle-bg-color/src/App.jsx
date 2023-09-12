import { useState } from 'react';
import './App.css';
import image from './assets/images.jpeg'

function App() {
const [color, setColor] = useState('');

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const randomColor = () => {
  let hex = '#';
  for(let i = 0; i < 6; i++) {
    hex += array[randomNum()]
  }
  return hex;
} 

const randomNum = () =>{
  const num = Math.floor(Math.random()*array.length);
  return num
}

const handleColor = () => {
  setColor(randomColor());
}

console.log(color)

const bgColor = {
  backgroundColor: color
}

  return (
    <div className='background' style={bgColor}>
      <img src={image} alt="" onClick={handleColor}/>
    </div>
  )
}

export default App
