import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) => {
  if (props.totalCount === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine stats='good' value={props.good}/>
          <StatisticLine stats='neutral' value={props.neutral}/>
          <StatisticLine stats='bad' value={props.bad}/>
          <StatisticLine stats='all' value={props.all}/>
          <StatisticLine stats='average' value={props.average}/>
          <StatisticLine stats='positive' value={props.positive}/>
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
    <td>{props.stats} </td>
    <td>{props.value}</td>
    </tr>
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
      <Statistics totalCount = {totalCount} good={good} neutral ={neutral} bad ={bad} all = {totalCount} average = {averageScore} positive = {positive}/>
    </div>
  )
}

export default App