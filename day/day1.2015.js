import fs from 'fs'
import path from 'path'

export default () =>{
    const deeps = fs.readFileSync(path.join(process.cwd(), '/in/day1.txt'), { encoding: 'utf8' })
                 .split('\n')
                  .map(value => parseInt(value))
                  .filter(value => !isNaN(value));
}