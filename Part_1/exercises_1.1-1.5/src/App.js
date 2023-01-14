import { useState } from "react"

const App = () => {
  const [value, setValue] = useState(0)

  const add = (newValue) => () => {
    console.log("value now", newValue)
   setValue(newValue+1)
  }
  const remove = (newValue) => () => {
    console.log("the value now", newValue)
    setValue(newValue-1)
  }
  const reset = (newValue) => () => {
    console.log("resetting!")
    setValue(0)
  }


  return(
    <>
      {value}
      <button onClick={add(value)}>Add</button>
      <button onClick={remove(value)}>remove</button>
      <button onClick={reset(value)}>reset</button>
    </>
  )
}

export default App