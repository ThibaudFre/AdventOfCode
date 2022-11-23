import fs from 'fs'
import path from 'path'

export default () =>{
    const deeps = fs.readFileSync(path.join(process.cwd(), '/in/day1.txt'), { encoding: 'utf8' })
                  .split('\n')
                  .map(value => parseInt(value))
                  .filter(value => !isNaN(value));
    let n = 0;
    for(let i=0; i<deeps.length; i++){
        if(deeps[i]>deeps[i-1]){
            n++;
        }
    }
                  
    return n;
}