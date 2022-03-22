import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0) 
  
  return (
    <div>
      <h1> give feedback </h1>
      <button onClick =  {()=>setGood(good + 1)}> Good </button>
      <button onClick = {()=>setBad(bad + 1)}> Bad </button>
      <button onClick = {()=>setNeutral(neutral + 1)}>  Neutral </button> 
      <h2> Statistics </h2>
      
     
      <Statistics good = {good} bad = {bad} neutral = {neutral}/>
    </div>
  )
}

export default App

const Statistics = (props)=>
{

if(props.good == 0){
return(
  <div>
    <h4> No Feedback Given</h4>
  </div>
)
        }
        else{

          return(
            <div>
              <h4>Happy Customers: {props.good} </h4>
               <h4>Sad Customers: {props.bad} </h4>
              <h4>Customers with no comments: {props.neutral} </h4> 
              <h3> Total Votes: {props.good + props.bad + props.neutral} </h3>
              <h3> Percentge of Happpy Customers : {props.good/(props.good + props.bad + props.neutral) * 100}</h3>
            </div>
             
             )
        }
           
          
           }






    


    

  



