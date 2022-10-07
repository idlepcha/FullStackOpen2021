
const Course = ({course}) => {
  const Header = ({head}) => <h1> {head}</h1>
  const Content = ({contents}) => 
    {
      return (
        <ul>
          {contents.map(content => (
            <li key={content.id}>{content.name}</li>
          ))}
        </ul>
      ); 
          }
 
const Total = ({contents}) => {
            const total = contents.reduce(
              (prevValue, currentValue) => prevValue + currentValue.exercises,
              0
            );
            return <h3>Total of {total} exercises</h3>;
          };
     
  
  return (
    <div>    
       <Header head={course.name}/> 
       <Content contents={course.parts}/> 
       <Total contents = {course.parts}/>
     </div>
  )
  };

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
    <div>
      <Course course = {courses[0]}/>
      <Course course = {courses[1]}/>
    </div>
  )
}

export default App