import {useState} from 'react'

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <>
            <Title text={"give feedback"}/>
            <Button text={"bad"} handleClick={() => setBad(bad + 1)}/>
            <Button text={"neutral"} handleClick={() => setNeutral(neutral + 1)}/>
            <Button text={"good"} handleClick={() => setGood(good + 1)}/>
            <Title text={"statistics"}/>
            <Stats good={good} bad={bad} neutral={neutral}/>
        </>
    )
}

const Title = (props) => <h1>{props.text}</h1>

const Stats = ({good, bad, neutral}) => {
    const total = bad + neutral + good
    if (total === 0) return <Title text={"No feedback given"}/>
    return (
        <table>
            <tbody>
            <StatisticLine text={"good "} value={good}/>
            <StatisticLine text={"neutral "} value={neutral}/>
            <StatisticLine text={"bad "} value={bad}/>
            <StatisticLine text={"total "} value={total}/>
            <StatisticLine text={"average "} value={(good-bad)/total}/>
            <StatisticLine text={"positive "} value={(100*good)/total}/>
            </tbody>
        </table>
    )
}

const StatisticLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
)

export default App
