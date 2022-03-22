import { useState } from 'react'



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0) 
  
  return (
    <div>
      <h1> give feedback </h1>
      <div>
       <button onClick =  {()=>setGood(good + 1)}>Good </button>
      <button onClick = {()=>setBad(bad + 1)}> Bad </button>
      <button onClick = {()=>setNeutral(neutral + 1)}> Neutral </button>  
      </div>
      <h2> Statistics </h2>
      <h4>Happy Customers: {good}</h4>
      <h4>Sad Customers: {bad}</h4>
      <h4>Customers with no comments: {neutral}</h4>
     
     
    </div>
   
  )
}

export default App


    


    

  



