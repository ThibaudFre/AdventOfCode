import fs from "node:fs"
import path from "node:path"

/*
    The link here: https://adventofcode.com/2017/day/2
    As you walk through the door, a glowing humanoid shape yells in your direction.
    "You there! Your state appears to be idle. Come help us repair the corruption in this spreadsheet - if we take another millisecond,
    we'll have to display an hourglass cursor!"

    The spreadsheet consists of rows of apparently-random numbers. To make sure the recovery process is on the right track,
    they need you to calculate the spreadsheet's checksum. For each row, determine the difference between the largest value and the smallest value;
    the checksum is the sum of all of these differences.

    For example, given the following spreadsheet:

    5 1 9 5
    7 5 3
    2 4 6 8

    -The first row's largest and smallest values are 9 and 1, and their difference is 8.
    -The second row's largest and smallest values are 7 and 3, and their difference is 4.
    -The third row's difference is 6.

    In this example, the spreadsheet's checksum would be 8 + 4 + 6 = 18.

    What is the checksum for the spreadsheet in your puzzle input?
*/
export default () => {
    /*
        const test = 
            `5    1    9    5\r
            7    5    3\r
            2    4    6    8` 
    */

    /*
        you can uncomment the constant test above and "return test" below.
        Be careful to comment the return before "fs.readFileSync...
    */

    return fs.readFileSync(path.join(process.cwd(), "./years/2017/in/day2.txt"), {encoding: "utf8"})
    /*return test*/ .split("\r\n")
        .reduce((acc, line) => {
            //I save the numbers of each line in an constant named numbers
            const numbers = line
                                .split('\t')
                                .map(nb => parseInt(nb))
            //I return in the accumulator plus the result of the operation asked (higher numb of numbers - lower numb of numbers)
            return acc + (Math.max(...numbers) - Math.min(...numbers))
        },0)
}