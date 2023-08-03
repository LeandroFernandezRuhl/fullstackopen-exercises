const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header course={course}/>
            <Content partContent1={{part: part1, exercises: exercises1}}
                partContent2={{part: part2, exercises: exercises2}}
                partContent3={{part: part3, exercises: exercises3}}
            />
            <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
        </div>
    )
}

const Header = ({course}) => (<h1>{course}</h1>)

const Part = ({partContent}) => (<p>{partContent.part} {partContent.exercises}</p>)

const Content = ({partContent1, partContent2, partContent3}) => {
    return (
        <>
            <Part partContent={partContent1}/>
            <Part partContent={partContent2}/>
            <Part partContent={partContent3}/>
        </>
    )
}

const Total = ({exercises1, exercises2, exercises3}) => (
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>)

export default App