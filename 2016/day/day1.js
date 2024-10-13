import fs from "fs";
import path from "path";


/*
    Santa's sleigh uses a very high-precision clock to guide its movements, and the clock's oscillator is regulated by stars. Unfortunately, the stars have been stolen...
    by the Easter Bunny. To save Christmas, Santa needs you to retrieve all fifty stars by December 25th.
    Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first.
    Each puzzle grants one star. Good luck!
    You're airdropped near Easter Bunny Headquarters in a city somewhere. "Near", unfortunately, is as close as you can get - the instructions on the Easter Bunny
    Recruiting Document the Elves intercepted start here, and nobody had time to work them out further.
    The Document indicates that you should start at the given coordinates (where you just landed) and face North. Then, follow the provided sequence: either turn left (L)
    or right (R) 90 degrees, then walk forward the given number of blocks, ending at a new intersection.
    There's no time to follow such ridiculous instructions on foot, though, so you take a moment and work out the destination.
    Given that you can only walk on the street grid of the city, how far is the shortest path to the destination?
*/

export default () => {
    const instructionList = fs.readFileSync(path.join(process.cwd(), './2016/in/day1.txt'), {encoding: 'utf-8'})
                                .split(", ");
    let face = "N";
    let santaPos = [0,0];

    const test1 = ["R2","L3"];
    const test2 = ["R2","R2", "R2"];
    const test3 = ["R5","L5", "R5", "R3"];
    const test4 = ["L78","R356","L478", "L24","L5"];


    const changeFace = (orient, RorL) => {
        if (orient === "N") {
            if (RorL === "L") {
                face = "W"
            } else if (RorL === "R") {
                face = "E"
            }
        } else if (orient === "E") {
            if (RorL === "L") {
                face = "N"
            } else if (RorL === "R") {
                face = "S"
            }
        } else if (orient === "S") {
            if (RorL === "L") {
                face = "E"
            } else if (RorL === "R") {
                face = "W"
            }
        } else if (orient === "W") {
            if (RorL === "L") {
                face = "S";
            } else if (RorL === "R") {
                face = "N";
            }
        }
        console.log(`face is now ${face}`)
    }

    for(let instruction of instructionList){
        console.log(instruction)
        console.log(`Santa face the ${face} orientation and is at ${santaPos}`)
        const letter = instruction[0];
        const numb = instruction.substring(1);
        const int = parseInt(numb);
        changeFace(face, letter);
        console.log(`now santa face ${face} and will move in this dir to ${int} steps`)
        switch(face) {
            case "N":
                santaPos[1] += int;
            break;
            case "E":
                santaPos[0] += int
            break;
            case "S":
                santaPos[1] -= int;
            break;
            case "W":
                santaPos[0] -= int;
            break;
        }
        console.log(`santa is finishing the moove at: ${santaPos}`)
    }
 return (0 - santaPos[0]) + (0 - santaPos[1]);
}