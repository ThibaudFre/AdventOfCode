import fs from 'node:fs'
import path from 'node:path'

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