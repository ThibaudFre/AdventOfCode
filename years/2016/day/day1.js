import fs from 'node:fs'
import path from 'node:path'

/*
     Link here: https://adventofcode.com/2016/day/1
     You're airdropped near Easter Bunny Headquarters in a city somewhere. "Near", unfortunately, is as close as you can get - the instructions on the Easter Bunny Recruiting
     Document the Elves intercepted start here, and nobody had time to work them out further.

     The Document indicates that you should start at the given coordinates (where you just landed) and face North. Then, follow the provided sequence:
     either turn left (L) or right (R) 90 degrees, then walk forward the given number of blocks, ending at a new intersection.

     There's no time to follow such ridiculous instructions on foot, though, so you take a moment and work out the destination. 
     
     Given that you can only walk on the street grid of the city, how far is the shortest path to the destination?

     For example:

     Following R2, L3 leaves you 2 blocks East and 3 blocks North, or 5 blocks away.
     R2, R2, R2 leaves you 2 blocks due South of your starting position, which is 2 blocks away.
     R5, L5, R5, R3 leaves you 12 blocks away.
     How many blocks away is Easter Bunny HQ?
*/

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