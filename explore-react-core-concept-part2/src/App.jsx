import './App.css';
import Counter from './Counter';
import Team from './Team';
import Person from './Person';

function App() {
  const handleClick = () => {
    alert('Handle CLick')
  }
  const handleClick2 = () => {
    alert('Button 2 clicked')
  }

  const addNumber = (num) => {
    alert(num + 5)
  }
  return (
    <>
     <h3>React Core Concepts 2</h3>
     <Counter></Counter>
     <button onClick={handleClick}>Click Me</button>
     <button onClick={handleClick2}>CLick2</button>
     <button onClick={()=>alert('third click')}>Clicked 3</button>
     {/* vajailla */}
     <button onClick={() => addNumber(3)}>Four</button>
     <Team></Team>
     <Person></Person>
    </>
  )
}

export default App
