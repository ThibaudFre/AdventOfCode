import fs from 'fs'
import path from 'path'

export default () =>{
    const deeps = fs.readFileSync(path.join(process.cwd(), './years/2016/in/day1.txt'), { encoding: 'utf8' })
                 .split(', ');

    const orientSanta = (mooves) => {
        const test = ["R8", "R10", "R4", "R8","R8","R4","R10", "R8"]
        let orientationSanta = "N";
        let [finalX, finalY] = [0,0];

        let visited = [];

        for(let moove of mooves) {
            visited.push([finalX, finalY])
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

            const lastVisited = visited[visited.length-1];
            const [lastX, lastY] = lastVisited;
            console.log(`last visited is: ${lastVisited} and last x is: ${lastX} and last Y is ${lastY}`);

            const isVisitedTwice = (localisation) => {
                const [locX, locY] = localisation;
                let result = false;

                visited.map((pastLoc) => {
                    const [x, y] = pastLoc;
                    if(x === locX && y === locY) {
                        result = true;
                    }
                })

                return result;
            }

            if(lastX < finalX) {
                for(let i = lastX + 1; i < finalX; i++) {
                    if (isVisitedTwice([i,lastY])) {
                        return Math.abs(i) + Math.abs(lastY)
                    }
                    visited.push([i,lastY]);
                }

            } else if (lastX > finalX) {
                for(let i = lastX - 1; i > finalX; i--) {
                    if (isVisitedTwice([i,lastY])) {
                        return Math.abs(i) + Math.abs(lastY)
                    }
                    visited.push([i,lastY]);
                }
            } else if (lastY < finalY) {
                for (let i = lastY + 1; i < finalY; i++) {
                    if (isVisitedTwice([lastX, i])) {
                        return Math.abs(lastX) + Math.abs(i)
                    }
                    visited.push([lastX, i]);
                }
            } else if (lastY > finalY) {
                for (let i = lastY - 1; i > finalY; i--) {
                    if (isVisitedTwice([lastX, i])) {
                        return Math.abs(lastX) + Math.abs(i)
                    }
                    visited.push([lastX,i]);
                }
            }

            console.log(`visited is now: ${visited}`);
            console.log(`now santa is at: \n final[${finalX},${finalY}]\n------------------------------------\n`)

        } 
    } 


    return orientSanta(deeps);
}