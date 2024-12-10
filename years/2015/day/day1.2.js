import fs from 'node:fs'
import path from 'node:path'

/*
    Link here: https://adventofcode.com/2015/day/1
    Now, given the same instructions, find the position of the first character that causes him to enter the basement (floor -1). 
    The first character in the instructions has position 1, the second character has position 2, and so on.

    For example:

    ) causes him to enter the basement at character position 1.
    ()()) causes him to enter the basement at character position 5.

    What is the position of the character that causes Santa to first enter the basement? 
*/

export default () =>{
    const directions = fs.readFileSync(path.join(process.cwd(), './years/2015/in/day1.txt'), { encoding: 'utf8' })
                 .split('')

    const findFloor = (data) => {
        //const test = ["(","(",")","(","(",")","(",")",")",")",')','('];
        let findedFloor = 0;
        for (let i = 0; i < data.length ; i++) {
            if(data[i] === "(") {
                findedFloor ++;
            } else if (data[i] === ")") {
                findedFloor --;
            }
            if(findedFloor === -1) {
                return i + 1;
            }        
        }
    }

    return findFloor(directions);
}