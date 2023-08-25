import * as process from "process";

interface Result {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: string,
    ratingDescription: string,
    target: number,
    average: number
}

interface ProcessedInput {
    target: number,
    daysData: number[]
}

const parseArguments = (args: string[]): ProcessedInput => {
    if (args.length < 2) throw new Error('not enough arguments')
    args = args.slice(2)
    const checkNaN = (element: string) => isNaN(Number(element))
    if (args.some(checkNaN))
        throw new Error('one or several provided values were not numbers!')
    return {
        target: Number(args[0]),
        daysData: args.slice(1).map(element => Number(element))
    }
}

const calculateExercises = ({target, daysData}: ProcessedInput): Result => {
    const periodLength = daysData.length
    const countTrainingDays = (accumulator: number, currentValue: number) =>
        currentValue !== 0 ? ++accumulator : accumulator
    const countHoursOfTraining = (accumulator: number, currentValue: number) => accumulator += currentValue
    const trainingDays = daysData.reduce(countTrainingDays, 0)
    const average = daysData.reduce(countHoursOfTraining, 0) / periodLength
    const success = average >= target
    let rating
    let ratingDescription
    switch (true) {
        case ((average < target) && (trainingDays > 0)):
            rating = 'C'
            ratingDescription = 'at least you tried...'
            break
        case (average === target):
            rating = 'B'
            ratingDescription = 'you reached your target!'
            break
        case (average > target):
            rating = 'A'
            ratingDescription = 'congratulations! You exceeded your expectations!'
            break
    }
    return {
        periodLength: periodLength,
        trainingDays: trainingDays,
        success: success,
        rating: rating,
        ratingDescription: ratingDescription,
        target: target,
        average: average
    }
}

try {
    const proccesedInput = parseArguments(process.argv)
    const result = calculateExercises(proccesedInput)
} catch (error: unknown) {
    let errorMessage = 'Something bad happened '
    if (error instanceof Error) {
        errorMessage += 'Error: ' + error.message
    }
    console.log(error)
}