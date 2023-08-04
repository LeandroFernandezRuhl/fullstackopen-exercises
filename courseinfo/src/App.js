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
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}

const Header = ({course}) => (<h1>{course}</h1>)

const Part = ({partContent}) => (<p>{partContent.name} {partContent.exercises}</p>)

const Content = ({parts}) => {
    return (
        <>
            <Part partContent={parts[0]}/>
            <Part partContent={parts[1]}/>
            <Part partContent={parts[2]}/>
        </>
    )
}

const Total = ({parts}) => (
    <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>)

export default App