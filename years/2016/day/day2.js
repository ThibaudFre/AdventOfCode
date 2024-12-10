import fs from "node:fs"
import path from "node:path"

/*
    The link here: https://adventofcode.com/2016/day/2
    You arrive at Easter Bunny Headquarters under cover of darkness. However, you left in such a rush that you forgot to use the bathroom!
    Fancy office buildings like this one usually have keypad locks on their bathrooms, so you search the front desk for the code.

    "In order to improve security," the document you find says, "bathroom codes will no longer be written down.
    Instead, please memorize and follow the procedure below to access the bathrooms."

    The document goes on to explain that each button to be pressed can be found by starting on the previous button and moving to adjacent buttons on the keypad:
    U moves up, D moves down, L moves left, and R moves right. Each line of instructions corresponds to one button,
    starting at the previous button (or, for the first line, the "5" button); press whatever button you're on at the end of each line.
    If a move doesn't lead to a button, ignore it.

    You can't hold it much longer, so you decide to figure out the code as you walk to the bathroom. You picture a keypad like this:

    1 2 3
    4 5 6
    7 8 9

    Suppose your instructions are:

    ULL
    RRDDD
    LURDL
    UUUUD

    - You start at "5" and move up (to "2"), left (to "1"), and left (you can't, and stay on "1"), so the first button is 1.
    - Starting from the previous button ("1"), you move right twice (to "3") and then down three times (stopping at "9" after two moves and ignoring the third),
    ending up with 9.
    - Continuing from "9", you move left, up, right, down, and left, ending with 8.
    - Finally, you move up four times (stopping at "2"), then down once, ending with 5.

    So, in this example, the bathroom code is 1985.

    Your puzzle input is the instructions from the document you found at the front desk. What is the bathroom code?
*/

export default () => {
    //const test = `ULL\r\nRRDDD\r\nLURDL\r\nUUUUD`
    let result = "";

    /*
        I set an object Map to use [x,y] coordonates to find a keypad number.
        each coordonates represent a number.

        1 2 3   ==>         '-1,1'      '0,1'       '1,1'           ==>        Y
        4 5 6   ==>         '-1,0'      '0,0'       '1,0'           ==>    -X  0  X
        7 8 9   ==>         '-1,-1'     '0,-1'      '1,-1'          ==>       -Y
    */

    let coordonates = new Map()

    coordonates.set('-1,1', "1")
    coordonates.set('0,1', "2")
    coordonates.set('1,1', "3")
    coordonates.set('-1,0', "4")
    coordonates.set('0,0', "5")
    coordonates.set('1,0', "6")
    coordonates.set('-1,-1', "7")
    coordonates.set('0,-1', "8")
    coordonates.set('1,-1', "9")

    //Now that the structure is ready with the Mpa object lets focus on the data as entry

    fs.readFileSync(path.join(process.cwd(), "./years/2016/in/day2.txt"), {encoding: "utf8"})
    /*test*/
        //I split the entry in instruction lines containing letters of direction
        .split(`\r\n`)
        .reduce((xY, line) => {
            //By line I split the letters to save the direction ("U","D","L","R") in the "directions" constant
            const directions = line.split("")
            /*
                I map all the letters and by letter:
                - chek wich letter is letter with the switch
                - I will add +1 or substract -1 to the x or y coordonates (xY[0] for x and xY[1] for y in the reduce),
                depending of the letter founded by the switch().
            */
            directions.map(letter => {
                console.log(`letter is ${letter}`)
                switch (letter) {
                    case "U":
                        console.log(`letter U founded xY[1] is ${xY[1]}`)
                        xY[1] += 1;
                        console.log(`xY[1] is now ${xY[1]}`)
                        break
                    case "D":
                        console.log(`letter D founded xY[1] is ${xY[1]}`)
                        xY[1] -= 1;
                        console.log(`xY[1] is now ${xY[1]}`)
                        break
                    case "L":
                        console.log(`letter L founded xY[0] is ${xY[0]}`)
                        xY[0] -= 1;
                        console.log(`xY[0] is now ${xY[0]}`)
                        break
                    case "R":
                        console.log(`letter R founded xY[0] is ${xY[0]}`)
                        xY[0] += 1;
                        console.log(`xY[0] is now ${xY[0]}`)
                        break
                }

                /*
                    now that my [x,y] coordonates are defined, I don't want to exit the key pad area.
                    So x and y doesn't need to exceed -1 or +1.
                    So I will add 1 or substract 1 to x or y depending if they exceed +1 or -1 (like 2 or -2), because we don't have this coordonates on the keypad/Map object
                */ 
                if(xY[0] === 2) {
                    xY[0] -= 1;
                } else if( xY[0] === -2) {
                    xY[0] += 1;
                }

                if(xY[1] === 2) {
                    xY[1] -= 1;
                } else if( xY[1] === -2) {
                    xY[1] += 1;
                }

            })

            //for each coordonates defined by line I will add the value of this coordonates wich have been get in the map to the result constant (string concatanation)
            result += coordonates.get(`${xY[0]},${xY[1]}`)
            //I retur xY to the reduce to continue next turn with the last coordonates
            return xY
        }, [0,0])

        return result
        
}