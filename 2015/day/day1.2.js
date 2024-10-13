import fs from 'fs'
import path from 'path'

export default () =>{
    //lets split the data to get an array
    const moves = fs.readFileSync(path.join(process.cwd(), './2015/in/day1.txt'), { encoding: 'utf8' })
                .split('');
    //
    let charPosition = 0;
    let floor = 0;
    
    for(let char of moves){
        /*
            if the floor is negative I stop the loop. Which will give us
            the Position of the data's array that is the first charac which giv to santa a negativ floor (-1)
        */
       
        if(floor < 0) {
            break;
        }
        charPosition++;

        if(char == "(") {
            floor++;
        }else if(char == ")") {
            floor--;
        }

    }


    return charPosition;
}