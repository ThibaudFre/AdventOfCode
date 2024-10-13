import fs from "fs";
import path from "path";

/*
    Santa have directions given by an elf he need to follow the instructions
    and at each move let a present to an home.
    At some moments Santa pass a second time at a same location home (what a lucky kid there).
    We need to know how many houses got at least on present.
    Santa start to let 1 present at the starting position ([0,0]) and follow the elf instructions.
*/

export default () => {
    const movements = fs .readFileSync(path.join(process.cwd(), './2015/in/day3.txt'), {encoding:'utf-8'})
                    .split("");
    //let's create the santa position with variable x and y regarding is position
    let santaPos = [0 , 0];
    let [santaX, santaY] = santaPos;
    //some test to use
    //const test1 = ">"; //result 2
    //const test2 = "^>v<"; //result 4
    //const test3 = "^v^v^v^v^v"; // result 2
    /*
        array initiated with the starting santa house's location. This array will contain all differents 
        new home locations where santa will deliver presents. 
    */
    let houseAtLeastOnce = [[0,0]];

    /*
        In function of the given direction, we need to change the position X and Y of Santa for each moove
        to know the new Position of santa and after compare it to last mooves. From that we will know if 
        Santa already passed to this house.
    */
    //increment / decrement X an Y position of santa depending to the given direction
    const directionGiven = (direction) => {
        switch (direction) {
            case '^':
                santaY ++;
            break;
            case '>':
                santaX ++;
            break;
            case 'v':
                santaY --;
            break;
            case '<':
                santaX --;
            break;
        }        
    }
    /*
        let's generate a loop wich will change the Santa position at each given moove and check
        if santa already passed at this house.
    */
    for(let move of movements) {
        //let's change Santa X and Y change
        directionGiven(move);
        //and save it as the new Santa Position
        santaPos = [santaX, santaY];
        /*so now at each move we need to check if Santa already passed by this house:
            we need to check the santa position and last positions in the houseAtLeastOnce array
            to know if he already passed at this location.
            if not it's a new home and we will save it in houseAtLeastOnce array.
        */
        
         let santaAlreadyPassed = false;
        //let's check if santa already passed at this house
        //I create a loop to check the location of all last houses and compare it with the actual Santa position
        for(let house of houseAtLeastOnce) {
            const [houseX, houseY] = house;
            /*
                if [houseX,houseY] so house === [santaX, santaY] so santaPos 
                that means that santa already passed at this home 
            */
            if(houseX === santaX && houseY === santaY) {
                santaAlreadyPassed = true;
            }
        }
        /*
            if santa never passed to this home location
            that mean it's a new home location so I add it to the houses array
        */
        if(santaAlreadyPassed === false) {
            houseAtLeastOnce.push(santaPos);
        }
    }

    return houseAtLeastOnce.length;
}
