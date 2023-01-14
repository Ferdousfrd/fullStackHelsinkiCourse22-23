import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({text, value}) => <p>{text} {value}</p>

const Header = () => <h1> give feedback</h1>

const Statistics = ({good, neutral,bad}) => {
  const sum = good + neutral+ bad
  return(
    sum>0 ?(
    <>
      <h2>statistics</h2>
      <StatisticLine text = "good" value = {good} />
      <StatisticLine text = "neutral" value = {neutral} />
      <StatisticLine text = "bad" value = {bad} />
      <StatisticLine text = "all" value = {sum} />

      <p>average {good-bad/sum } </p>
      <p>positive {good/sum*100} %</p>
    </>
    ) :( 
    <p>No feedback given</p>
    )
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increment = (count, totalCount) => () => totalCount(count+1)
  

 

  return (
    <div>
      <Header />

      <Button onClick={increment(good, setGood)} text ="good" />
      <Button onClick={increment(neutral, setNeutral)} text= "nertral"/>
      <Button onClick={increment(bad, setBad)} text="bad"/>

      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App