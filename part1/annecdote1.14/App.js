import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients' ]

  const [selected, setSelected] = useState(0)
  const [state, setState] = useState([0,0,0,0,0,0,0])
 
  const increment = () =>
 
  {
  
 const temp_state = [...state]
 temp_state[selected] += 1
 setState(temp_state)
  }
  Math.max(state[0],state[1],state[2],state[3],state[4],state[5],state[6])
  
   
  return (
    <div>
      <h3>Annecdote of the Day</h3>
      <p> {anecdotes[selected]}</p>
       <p> has {state[selected]} votes </p>
      <button onClick = {()=> setSelected(Math.floor(Math.random()*7))}>Next Annecdote</button>
      <button onClick = {increment}> Vote for this Annecdote </button>
      <h3> Most liked Annecdote </h3>
      {anecdotes[state.indexOf(Math.max(state[0],state[1],state[2],state[3],state[4],state[5],state[6]))] }
    </div>
  )
}
export default App











    


    

  



