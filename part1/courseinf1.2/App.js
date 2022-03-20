
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
      <Part1 part = {props.part1} ex = {props.exercises1}/>
      <Part2 part = {props.part2} ex = {props.exercises2}/>
      <Part2 part = {props.part3} ex = {props.exercises3}/>
      
  </div> 
   )
  }
  const Part1 = (props)=>{
    return(
      <p>
        Part 1 : {props.part}
        Exercises in this part : {props.ex}
      </p>
    )
  }
  const Part2 = (props)=>{
    return(   
      <p>
      Part 2: {props.part}
      Exercises in this part : {props.ex}
      </p>
    )
  }
  const Part3 = (props)=>{
    return(
     <p>
      Part 3: {props.part}
      Exercises in this part: {props.ex}
     </p>
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

