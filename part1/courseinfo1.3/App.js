
import './App.css';

function App() {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
                  
  return (
    <div>
      <h1> Course Title : {course}</h1>
      <p>

        Part 1: {part1['name']}
        Exercises in Part 1: {part1['exercises']}
       </p>
       <p>
        Part 2: {part2['name']}
        Exercises in Part 2: {part2['exercises']}
        </p>
        
        <p>Part 3: {part3['name']}
        Exercises in Part 3: {part3['exercises']}
      </p>
    <h4> Total Number of Exercises is : {part1['exercises'] + part2['exercises'] + part3['exercises']}</h4>

    </div>
  )
}

export default App



