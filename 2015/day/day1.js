import fs from 'fs'
import path from 'path'

export default () =>{
    //I split the data to get an array
    const moves = fs.readFileSync(path.join(process.cwd(), './2015/in/day1.txt'), { encoding: 'utf8' })
                .split('');
    /*
    below:  floor start at 0
            if "(" + 1 to floor
            if ")" - 1 to floor
    */

    let floor = 0
    
    for(let char of moves){
        if(char == "(") {
            floor++;
        }else if(char == ")") {
            floor--;
        }

    }
    return floor;
}