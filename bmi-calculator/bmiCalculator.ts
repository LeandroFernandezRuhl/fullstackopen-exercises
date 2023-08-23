import * as process from "process";

interface BmiValues {
    height: number,
    weight: number
}

const parseArguments = (args: string[]): BmiValues => {
    if (args.length < 4) throw new Error('Not enough arguments')
    if (args.length > 4) throw new Error('Too many arguments')

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            height: Number(args[2]),
            weight: Number(args[3]),
        }
    } else {
        throw new Error('Provided values were not numbers!')
    }
}

const calculateBmi = (heightCm: number, weight: number): string => {
    const heightM = heightCm / 100
   const bmi = weight/(heightM**2)
    console.log(bmi)
    switch(true) {
        case bmi < 18.5:
            return 'Underweight'
        case bmi >= 18.5 && bmi <= 24.9:
            return 'Normal'
        case bmi >= 25 && bmi <= 29.9:
            return 'Overweight'
        case bmi > 29.9:
            return 'Obese'
   }
}

try {
    const { height, weight } = parseArguments(process.argv)
    const bmiResult = calculateBmi(height, weight)
    console.log(`With a height of ${height} and a weight of ${weight} the BMI is: ${bmiResult}`)
} catch (error: unknown) {
    let errorMessage = 'Something bad happened'
    if (error instanceof Error) {
        errorMessage += 'Error: ' + error.message
    }
    console.log(errorMessage)
}