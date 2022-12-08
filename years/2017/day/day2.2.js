import fs from "node:fs"
import path from "node:path"

/*
    The link here: https://adventofcode.com/2017/day/2
    "Great work; looks like we're on the right track after all. Here's a star for your effort." However, the program seems a little worried. Can programs be worried?

    "Based on what we're seeing, it looks like all the User wanted is some information about the evenly divisible values in the spreadsheet.
    Unfortunately, none of us are equipped for that kind of calculation - most of us specialize in bitwise operations."

    It sounds like the goal is to find the only two numbers in each row where one evenly divides the other - that is, where the result of the division operation is a whole number.
    They would like you to find those numbers on each line, divide them, and add up each line's result.

    For example, given the following spreadsheet:

    5 9 2 8
    9 4 7 3
    3 8 6 5

    - In the first row, the only two numbers that evenly divide are 8 and 2; the result of this division is 4.
    - In the second row, the two numbers are 9 and 3; the result is 3.
    - In the third row, the result is 2.

    In this example, the sum of the results would be 4 + 3 + 2 = 9.

    What is the sum of each row's result in your puzzle input?
*/
export default () => {

    /*
        you can uncomment the constant test above and "return test" below.
        Be careful to comment the return before "fs.readFileSync...
    */

    fs.readFileSync(path.join(process.cwd(), "./years/2017/in/day2.txt"), { encoding: "utf8" })
        .split("\r\n")
        .reduce((acc, line) => {
            //I return as acc the result
            return line
                .split('\t')
                .map(nb => {
                    const numbers = nb
                                        .split("")
                                        .map(nb => parseInt(nb))
                    console.log(`\nnumbers are: ${numbers}\n`)
                    return numbers.map((numberFirst, indexFirst) => {
                        console.log(`numberFirst is: ${numberFirst}`)
                        return numbers.map((numberSecond, indexSecond) => {
                            console.log(`numberSecond is ${ numberSecond} `)
                            if (indexFirst !== indexSecond) {
                                console.log(`\nnumberFirst % numberSecond === 0 ? ${numberFirst % numberSecond}
                                and numberSecond % numberFirst === 0  ? ${numberSecond % numberFirst}\n`)
                                if (numberFirst % numberSecond === 0 && numberSecond % numberFirst === 0) {
                                    console.log(`\n YES \n`)
                                    //return acc += Math.max([numberFirst, numberSecond]) / Math.min([numberFirst, numberSecond])
                                }
                            }
                        })

                    })
                })
            /* console.log(`numbers is ${numbers[1]}`)
             */
            
        }, 0)
}