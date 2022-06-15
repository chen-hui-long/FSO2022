import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) => {
  return (
    <div>
      {props.stats} {props.value}
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodScore = 1
  const neutralScore = 0
  const badScore = -1

  const totalCount = good + neutral + bad
  const averageScore = (goodScore * good + neutralScore * neutral + badScore * bad) / totalCount
  const positive = (good / totalCount) * 100 + ' %'

  const increaseButtonCount = (state, action) => {
    action(state + 1)
  }

  return (
    <div>
      <div>
        <h1>
          give feedback
        </h1>
      </div>
      <Button handleClick={() => increaseButtonCount(good, setGood)} text ='good'/>
      <Button handleClick={() => increaseButtonCount(neutral, setNeutral)} text ='neutral'/>
      <Button handleClick={() => increaseButtonCount(bad, setBad)} text ='bad'/>
      <div>
        <h1>
          statistics
        </h1>
      </div>
      <Statistics stats='good' value={good}/>
      <Statistics stats='neutral' value={neutral}/>
      <Statistics stats='bad' value={bad}/>
      <Statistics stats='all' value={totalCount}/>
      <Statistics stats='average' value={averageScore}/>
      <Statistics stats='positive' value={positive}/>
    </div>
  )
}

export default App