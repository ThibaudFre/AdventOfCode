import fs from 'fs'
import path from 'path'

export default () =>{
    const deeps = fs.readFileSync(path.join(process.cwd(), '/in/test1.txt'), { encoding: 'utf8' })
                  .split('\n')
                  .map(value => parseInt(value))
                  .filter(value => !isNaN(value));
    let n = 0;
    let sum1;
    let sum2;
    for(let i=0; i<deeps.length; i++){
        sum1 = deeps[i]+ deeps[i+1]+deeps[i+2]
        sum2 = deeps[i+1]+ deeps[i+2]+deeps[i+3]
        if(sum1<sum2){
            n++;
        }
    }
                  
    return n;
}