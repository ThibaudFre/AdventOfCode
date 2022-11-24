import fs from 'node:fs'
import path from 'node:path'

export default () =>{
    const deeps = fs.readFileSync(path.join(process.cwd(), './years/2016/in/day1.txt'), { encoding: 'utf8' })
                 .split(', ');

    const orientSanta = (mooves) => {
        const test = ["R5", "L5", "R5", "R3"]
        let orientationSanta = "N";
        let [finalX, finalY] = [0,0];

        for(let moove of mooves) {
            const direction = moove.split('')[0]
            const stringNumber = moove.slice(1);
            console.log(typeof direction," ", typeof stringNumber);
            const number = parseInt(stringNumber)
            //Santa start the moove oriented...
            console.log(`santa moove from the ${orientationSanta} turn to the ${direction} and step forward to ${number} cases in direction of the`);
            if(orientationSanta === "N") {
               if(direction === "R"){
                    finalX += number;
                    orientationSanta = "E";
                    console.log(`${orientationSanta}`)
               } else if(direction === "L") {
                    finalX -= number;
                    orientationSanta = "W";
                    console.log(`${orientationSanta}`)
               }
            //Santa start the moove oriented... 
            } else if(orientationSanta === "E") {
               if(direction === "R"){
                    finalY -= number;
                    orientationSanta = "S"
                    console.log(`${orientationSanta}`)
               } else if(direction === "L") {
                    finalY += number;
                    orientationSanta ="N";
                    console.log(`${orientationSanta}`)
               }
            //Santa start the moove oriented...     
            } else if(orientationSanta === "S") {
               if(direction === "R"){
                    finalX -= number;
                    orientationSanta = "W"
                    console.log(`${orientationSanta}`)
               } else if(direction === "L") {
                    finalX += number;
                    orientationSanta = "E"
                    console.log(`${orientationSanta}`)
               }
            //Santa start the moove oriented... 
            }else if(orientationSanta === "W") {
               if(direction === "R"){
                    finalY += number;
                    orientationSanta = "N";
                    console.log(`${orientationSanta}`)
               } else if(direction === "L") {
                    finalY -= number;
                    orientationSanta = "S"
                    console.log(`${orientationSanta}`)
               } 
            }
            console.log(`now santa is at: \n final[${finalX},${finalY}]\n------------------------------------\n`)
        }
        return Math.abs(finalX) + Math.abs(finalY);
    } 


    return orientSanta(deeps);
}