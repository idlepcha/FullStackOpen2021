
import './App.css';

function App() {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
                  
  return (
    <div>
      <h1> Course Title : {course}</h1>
      <p>

        Part 1: {parts[0]['name']}
        Exercises in Part 1: {parts[0]['exercises']}
       </p>
       <p>
        Part 2: {parts[1]['name']}
        Exercises in Part 2: {parts[1]['exercises']}
        </p>
        
        <p>Part 3: {parts[2]['name']}
        Exercises in Part 3: {parts[2]['exercises']}
      </p>
    <h4> Total Number of Exercises is : {parts[0]['exercises'] + parts[1]['exercises'] + parts[2]['exercises']}</h4>

    </div>
  )
}

export default App



