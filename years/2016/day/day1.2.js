import fs from 'node:fs'
import path from 'node:path'

export default () =>{
    const deeps = fs.readFileSync(path.join(process.cwd(), './years/2016/in/day1.txt'), { encoding: 'utf8' })
                 .split(', ');

    const orientSanta = (mooves) => {
        //you can uncomment the "const test" and change in the for loop "mooves" by "test" to test it with less mooves.
        //const test = ["R8", "R10", "R4", "R8","R8","R4","R10", "R8"]
        let orientationSanta = "N";
        let [finalX, finalY] = [0,0];
        //array of cells already stepped on it;
        let visited = [];

        //some actions to do for each moove of santa
        for(let moove of mooves) {
            //for each loop we push the actual cell to compare with later...
            visited.push([finalX, finalY])

            const direction = moove.split('')[0]
            const stringNumber = moove.slice(1);
            console.log(typeof direction," ", typeof stringNumber);
            const number = parseInt(stringNumber)
            //Santa start the moove oriented...
            if(orientationSanta === "N") {
                //if the direction given is R (right) so...
               if(direction === "R"){
                    //I add the number of steps for the x coordonate to add where is santa on x coordonate;
                    finalX += number;
                    orientationSanta = "E";
                    console.log(`${orientationSanta}`)
                //if the direction given is L (left) so...
               } else if(direction === "L") {
                    //I substract the number of steps for the x coordonate to add where is santa on x coordonate;
                    finalX -= number;
                    orientationSanta = "W";
                    console.log(`${orientationSanta}`)
               }
            } else if(orientationSanta === "E") {
               if(direction === "R"){
                    //I substract the number of steps for the x coordonate to add where is santa on y coordonate;
                    finalY -= number;
                    orientationSanta = "S"
                    console.log(`${orientationSanta}`)
               } else if(direction === "L") {
                    //I add the number of steps for the y coordonate to add where is santa on y coordonate;
                    finalY += number;
                    orientationSanta ="N";
                    console.log(`${orientationSanta}`)
               }    
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
            //I want to compare with the last cell visited
            const lastVisited = visited[visited.length-1];
            const [lastX, lastY] = lastVisited;
            //function to verify if the cell stepping on actually  was already visited in the "visited" array
            const isVisitedTwice = (localisation) => {
                const [locX, locY] = localisation;
                let result = false;

                visited.map((pastLoc) => {
                    const [x, y] = pastLoc;
                    //if x === locX && y === locY so it is the second time that santa walk on this cell. VICTORY !
                    if(x === locX && y === locY) {
                        result = true;
                    }
                })

                return result;
            }
            //here is tricky conditional way... 
                //I want to push in the visited array all the steps(in cordonate [x,y]) between the last moove of santa and the actual one.
                //and for all the steps I will check if santa already passed on with isVisitedTwice function... 
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
        } 
    } 


    return orientSanta(deeps);
}