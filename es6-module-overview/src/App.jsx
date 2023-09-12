
import { useEffect, useState } from 'react'
import './App.css'
import Watch from './Components/Watch/Watch'

function App() {
  const [watches, setWatches] = useState([]);

  useEffect(()=>{
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  },[])

  // const watches = [
  //   { id: 1, name: "Rolex", price: 5000 },
  //   { id: 2, name: "Tag Heuer", price: 3000 },
  //   { id: 3, name: "Omega", price: 4000 },
  //   { id: 4, name: "Seiko", price: 200 },
  //   { id: 5, name: "Casio", price: 100 }
  // ];

  return (
    <>
      {
        watches.map(watch => <Watch key={watch.id} watch ={watch}></Watch>)
      }
    </>
  )
}

export default App
