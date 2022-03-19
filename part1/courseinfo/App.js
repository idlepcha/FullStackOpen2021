
import './App.css';

function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'            
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
                  
  return (
    <div>
      <Header course={course} />
      <Content part1 = {part1} part2 = {part2} part3 = {part3} exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
      <Total total =  {exercises1 +  exercises2 + exercises3} />
    </div>
  );
}

export default App;

const Header = (props) =>{
  return(
  <div>
    <h1>
      Course Title : {props.course}
    </h1>

  </div>)
}

const Content = (props) =>{
  return(
  <div>
      <p>
        Part 1 : {props.part1}
        Exercises in this part : {props.exercises1}
      </p>
      <p>
      Part 2: {props.part2}
      Exercises in this part : {props.exercises2}
      </p>
      
     <p>
      Part 3: {props.part3}
      Exercises in this part: {props.exercises3}
     </p>
      
      
      
  </div>
  )
}

const Total = (props) =>{
 
  return(
    
  <div>
  <h4>
    Total number of exercises: {props.total}
  </h4>
 
 
  </div>
  )
}