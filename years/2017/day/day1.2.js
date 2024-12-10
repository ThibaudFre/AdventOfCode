import fs from 'node:fs'
import path from 'node:path'

/*
    Link here: https://adventofcode.com/2017/day/1
    You notice a progress bar that jumps to 50% completion. Apparently, the door isn't yet satisfied,
    but it did emit a star as encouragement. The instructions change:

    Now, instead of considering the next digit, it wants you to consider the digit halfway around the circular list.
    That is, if your list contains 10 items, only include a digit in your sum if the digit 10/2 = 5 steps forward matches it.
    Fortunately, your list has an even number of elements.

    For example:

    1212 produces 6: the list contains 4 items, and all four digits match the digit 2 items ahead.
    1221 produces 0, because every comparison is between a 1 and a 2.
    123425 produces 4, because both 2s match each other, but no other digit has a match.
    123123 produces 12.
    12131415 produces 4.
    What is the solution to your new captcha?
*/

export default () =>{
    const digits = fs.readFileSync(path.join(process.cwd(), './years/2017/in/day1.txt'), { encoding: 'utf8' })
                 .split('').map(nb => parseInt(nb));
    //you can uncomment the "const test" and change "digits" by "test" to test it with less numbers.

    //const test = [1,2,1,2];
    //const test = [1,2,2,1];
    //const test = [1,2,3,4,2,5];
    //const test = [1,2,3,1,2,3];
    //const test = [1,2,1,3,1,4,1,5];
    const middleArr = Math.floor(digits.length/2);
    
    return digits.reduce((acc, curr, index, array) => {
        const diff = array.length - (index)
        //same than before only conditions change
        if(index < middleArr && curr === digits[index + middleArr]) {
            acc += curr;
        } else if ( index >= middleArr && curr === digits[middleArr - diff]) {
            acc += curr;
        }

        return acc;
    }, 0)
}


    
