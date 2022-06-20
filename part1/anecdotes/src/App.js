// STOP AT 1.13

import { useState } from 'react'

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max)
}


const mostVotes = (points) => {
  let maxPoint = 0;
  let maxKey = 0;
  for (const [key, value] of Object.entries(points)) {
    if (value > maxPoint) {
      maxPoint = value;
      maxKey = key;
    }
  }
  return maxKey;
}

const generateAnecdote = (anaecodesList, setSelected, selected) => {
  let newNumber = getRandomInt(anaecodesList.length)
  setSelected(selected = newNumber)
}

const voteAnecdote = (points, selected, setPoints) => {
  const newPoints = {...points}
  newPoints[selected] += 1
  setPoints(points = newPoints)
}

const Anecdotes = (props) => {
  return (
    <div>
      <h1>
        Anecdote of the day
      </h1>
      <div>
        {props.anecdotesList[props.selected]}
        <br/>
        has votes {props.points[props.selected]}
      </div>
      <button onClick= {() => voteAnecdote(props.points, props.selected, props.setPoints)}>vote</button>
      <button onClick = {() => generateAnecdote(props.anecdotesList, props.setSelected, props.selected)}>Next Anecdotes</button>
    </div>
  )
}

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0})

  return (
    <div>
        <Anecdotes anecdotesList={anecdotes} points={points} selected={selected} setSelected={setSelected} setPoints={setPoints}></Anecdotes>
        <div>
          <h1>
            Anaecdote with most votes
          </h1>
          <div>
            {anecdotes[mostVotes(points)]}
            <br/>
            has {points[mostVotes(points)]} votes
          </div>
        </div>
    </div>
  )
}

export default App