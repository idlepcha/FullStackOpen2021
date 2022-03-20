
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
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}



const Header = (props)=>{
return(
  <h1> Course Title : {props.course}</h1>
)
}

const Content = (props)=>{
  return(
  <div>
 <p>
    Part 1: {props.parts[0]['name']}
    Exercises in Part 1: {props.parts[0]['exercises']}
  </p>
  <p>
  Part 2: {props.parts[1]['name']}
  Exercises in Part 2: {props.parts[1]['exercises']}
  </p>
  
  <p>Part 3: {props.parts[2]['name']}
  Exercises in Part 3: {props.parts[2]['exercises']}
  </p>

  </div>
 

  )
}

const Total = (props) => {
return(
  <h4> Total Number of Exercises is : {props.parts[0]['exercises'] + props.parts[1]['exercises'] + props.parts[2]['exercises']}</h4>
)

}
    

export default App  
    

  



