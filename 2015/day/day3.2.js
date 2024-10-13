import fs from "fs";
import path from "path";

/*
    to speed up the process, Santa creates a robot version of himself, Robo-Santa, to deliver presents with him.
    Santa and Robo-Santa start at the same location (delivering two presents to the same starting house),
    then take turns moving based on instructions from the elf, who is eggnoggedly reading from the same script as
    the previous year.

    This year, how many houses receive at least one present?
    */

export default () => {
    const movements = fs.readFileSync(path.join(process.cwd(), './2015/in/day3.txt'), { encoding: 'utf-8' })
        .split("");
    //let's create the santa and SantaBot position with variable x and y regarding their actual position
    let santaPos = [0, 0];
    let santaBotPos = [0, 0];
    let santaMoves = "";
    let santaBotMoves = "";
    let [santaX, santaY] = santaPos;
    let [santaBotX, santaBotY] = santaBotPos;
    //some test to use. Don't forget to split('') them in splitSantaBotAndSantaMoves(test1.split(''));
    //const test1 = "^v"; //result 3
    //const test2 = "^>v<"; //result 3
    //const test3 = "^v^v^v^v^v"; // result 11
    /*
        array initiated with the starting santa house's location. This array will contain all differents 
        new home locations where santa will deliver presents. 
    */
    let houseAtLeastOnce = [[0, 0]];

    /*
        In function of the given direction, we need to change the position X and Y of Santa for each moove
        to know the new Position of santa and after compare it to last mooves. From that we will know if 
        Santa already passed to this house.
    */

    /*
        increment / decrement X an Y position of santa or santaBot 
        depending to the given direction and who need to move
    */
    const directionGiven = (direction, who) => {
        //if santa is the person to move
        if (who === "santa") {
            switch (direction) {
                case '^':
                    santaY++;
                    break;
                case '>':
                    santaX++;
                    break;
                case 'v':
                    santaY--;
                    break;
                case '<':
                    santaX--;
                    break;
            }
            santaPos = [santaX, santaY];

         //if santaBot need to move
        } else if (who === "santaBot") {
            switch (direction) {
                case '^':
                    santaBotY++;
                    break;
                case '>':
                    santaBotX++;
                    break;
                case 'v':
                    santaBotY--;
                    break;
                case '<':
                    santaBotX--;
                    break;
            }

            santaBotPos = [santaBotX, santaBotY];
        }

    }
    santaPos = [santaX, santaY];


    /*
        let's generate a function to split movements data ex: "^v^v^v^v^v" => 
        santa move "^^^^^" so even indexes and santaRob move "vvvvv" so odd indexes"
    */

    const splitSantaBotAndSantaMoves = (moves) => {
        /*
            so I create a loop in which if index of move of moves is even I had the move to santa Moves.
            If odd I add it to santaBotMoves.
        */
        for (let i = 0; i <= moves.length; i++) {
            if (i % 2 == 0) {
                santaMoves += moves[i];
            } else {
                santaBotMoves += moves[i];
            }
        }
    }

    /*
        let's generate a loop function wich will change the Santa or SantaBot position at each given moove and check
        if santa or santaBot already passed at this house.
    */

    const mooveAndCheck = (instruction, who) => {
        /*
            whe need to know who move: Santa or SantaBot to change their positions and check if one of them
            already passed at their actual positions 
        */
        const personToMove = who;
        //to check X or Y position later we need to check who is passed to the function
        //if who is "Santa", whoX will be santaX and whoY will be santaY
        // if who is "santaBot", whoX will be santaBotx and...
        const whoX = (who) => who === "santa" ? santaX : santaBotX;
        const whoY = (who) => who === "santa" ? santaY : santaBotY

        for (let move of instruction) {
            directionGiven(move, personToMove);
            let alreadyPassed = false;
            for (let house of houseAtLeastOnce) {
                const [houseX, houseY] = house;
                /*
                    if [houseX,houseY] so house === [santaX, santaY] so santaPos 
                    that means that santa already passed at this home 
                */
                if (houseX === whoX(personToMove) && houseY === whoY(personToMove)) {
                    alreadyPassed = true;
                }
            }
            /*
                if santa never passed to this home location
                that mean it's a new home location so I add it to the houses array
            */
            if (alreadyPassed === false) {
                //if who is santa we push the position of santa to houseAtLeastOnce
                // if who is santaBot we push the position of santaBot.
                who === "santa" ? 
                    houseAtLeastOnce.push(santaPos) : 
                    houseAtLeastOnce.push(santaBotPos)
            }
        }

    }

    splitSantaBotAndSantaMoves(movements);
    mooveAndCheck(santaBotMoves, "santaBot");
    mooveAndCheck(santaMoves, "santa");

    return houseAtLeastOnce.length;

}
