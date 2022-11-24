import fs from 'node:fs'
import path from 'node:path'

export default () =>{
    const deeps = fs.readFileSync(path.join(process.cwd(), './years/2015/in/day1.txt'), { encoding: 'utf8' })
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

    return findFloor(deeps);
}