
//part 1.1 and part 1.2 done
//part 1.3 done(added objects and made the website work)
//part 1.4 done(putting the objects into and array and modifying variable definitions)
//part 1.5 done(Changed the course and it's parts into a single JavaScript object)

//Made the component called Header
const Header = (props) => {

  console.log(props)

  return(
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}


//Made the component called {Part}
const Part = (props) => {
  return(
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )

}


//Made the component called Content
const Content = (props) =>{
  return(
    <div>

      <Part part={props.parts[0]}  />
      <Part part={props.parts[1]}  />
      <Part part={props.parts[2]}  />
            
    </div>

  )
}

//Made a component called Total
const Total = (props) => {
  return(
    <div>
      <p>
      Number of exercises {""}
      {props.parts.reduce((total, part) =>{
        return part.exercises +total}, 0)}
      
    </p>
    
    </div>

  )
}

//Main App 
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }



  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      
    </div>
  )
}






export default App