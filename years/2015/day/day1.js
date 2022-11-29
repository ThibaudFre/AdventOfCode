import fs from 'node:fs'
import path from 'node:path'

/*
    Santa is trying to deliver presents in a large apartment building, but he can't find the right floor - the directions he got are a little confusing. He starts on the ground floor (floor 0) and then follows the instructions one character at a time.

    An opening parenthesis, (, means he should go up one floor, and a closing parenthesis, ), means he should go down one floor.

    The apartment building is very tall, and the basement is very deep; he will never find the top or bottom floors.

    For example:

    (()) and ()() both result in floor 0.
    ((( and (()(()( both result in floor 3.
    ))((((( also results in floor 3.
    ()) and ))( both result in floor -1 (the first basement level).
    ))) and )())()) both result in floor -3. 

*/

export default () =>{
    const deeps = fs.readFileSync(path.join(process.cwd(), './years/2015/in/day1.txt'), { encoding: 'utf8' })
                 .split('')

    const findFloor = (data) => {
        //const test = ["(","(",")","(","(",")","(","("];
        let findedFloor = 0;
        data.map((parenthese) => {
            if(parenthese === "(") {
                findedFloor ++;
            } else if (parenthese === ")") {
                findedFloor --;
            }
        })

        return findedFloor;
    }

    return findFloor(deeps);
}