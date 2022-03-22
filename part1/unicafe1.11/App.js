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
              <Statisticline happy = {props.good} sad = {props.bad} no_comment = {props.neutral} total =  {props.good + props.bad + props.neutral} pct = {props.good/(props.good + props.bad + props.neutral) * 100}/>
             </div>
             
             )
        }
           
          
           }
const Statisticline = (props)=>{
return(
  <div>
    <table>
      
     
     
     <tr> <td>Happy Customers:</td> <td>{props.happy}</td></tr>
     <tr> <td> Sad Customers: </td> <td>{props.sad}</td></tr>
     <tr><td>Customers with no comments: </td><td>{props.no_comment}</td> </tr>
     <tr><td>Total Votes:</td> <td>{props.total}</td> </tr>
     <tr> <td>Percentage of Happy Customers:</td> <td>{props.pct}</td></tr>

     
    </table>
     

  </div>
 
)

}






    


    

  



