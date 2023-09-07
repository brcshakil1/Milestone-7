import './App.css';
import Todo from './todo';

function App() {

  return (
    <>
    <Todo></Todo>
      {/* <Device name="Laptop" price='10k'></Device>
      <Device name="Mobile" price='5k'></Device>
      <Device name="Mac book" price='7k'></Device>
      <Student name="Shakil" age="26" inClass={15} score={99}></Student>
      <Student name="Bayaizd" age="25" inClass={16} score={98}></Student>
      <Student name="Jakaria" age="26" inClass={14} score={97}></Student>
      <Person></Person>
      <Developer></Developer> */}
    </>
  )
}

// const Device = ({name, price}) => {
//   return <h2>This Device: {name} price: {price}</h2>
// }

// const Person = () => {
//   const person = {name:'Shakib', age: 25}
//   return (
//     <>
//       <h3>I am {person.name}</h3>
//       <p>I am {person.age} years old</p>
//     </>
//   )
// }

// const Student = (props) => {
//   const {name,age, inClass, score} = props;
//   return (
//     <div className='student'>
//       <h1>I am {name}</h1>
//       <h2>I am {age}</h2>
//       <h2>I am in class {inClass}</h2>
//       <p>I got {score}</p>
//     </div>
//   )
// }

// const Developer = () => {
//   const styling = {
//     border: '2px solid blue',
//     borderRadius : '15px',
//     margin: '10px',
//     padding: '10px'
//   }
//   return (
//     <div style={styling}>
//       <h3>I am a developer</h3>
//       <p>I like coding</p>
//     </div>
//   )
// }
export default App
