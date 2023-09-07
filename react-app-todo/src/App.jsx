import './App.css'
import Todo from './Todo';
import Actor from './Actor';
import Singer from './Singer';
import BookStore from './BookStore';

function App() {
  const actors = ['Sakib', 'Shoriful Raj', 'Jasim', 'Rubal', 'Salman Shah'];

  const singers = [
    {id:0, name:'Dr. Mahfuzur Rahman', age:68},
    {id:1,name:'Eva Rahman', age:48},
    {id:2,name:'Shuvroto Dev', age:28},
    {id:3,name:'Monir Kgan', age:45},
  ];

  const books = [
    {id:1, name:'Physics', price:150},
    {id:2, name:'Biology', price:250},
    {id:3, name:'Chemistry', price:154},
    {id:4, name:'Math', price:244},
  ]

  return (
    <>
    {/* <Todo task="Learn React" isDone={true}></Todo>
    <Todo task="Core Concepts" isDone={false}></Todo>
    <Todo task="Try JSX" isDone={true}></Todo> */}
    {/* <Actor name="Bappa Raz"></Actor>
    {
      actors.map(actor => <Actor name={actor}></Actor>)
    } */}

    {
      singers.map(singer => <Singer name={singer.name} key={singer.id} age={singer.age}></Singer>)
    }
    <BookStore books={books}></BookStore>
    </>
  )
}

export default App
