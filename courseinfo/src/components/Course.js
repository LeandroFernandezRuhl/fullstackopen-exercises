const Course = ({course}) => {
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
            {parts.map(part => <Part key={part.id} partContent={part}/>)}
        </>
    )
}

const Total = ({parts}) => {
    const getNumberOfExercises = parts.reduce((accumulator, current) => {
        return accumulator + current.exercises
    }, 0)

    return (
        <p>Number of exercises {getNumberOfExercises}</p>
    )
}
export default Course