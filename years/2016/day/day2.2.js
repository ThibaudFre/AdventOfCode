import fs from "node:fs"
import path from "node:path"

/*
    The link here: https://adventofcode.com/2016/day/2
    You finally arrive at the bathroom (it's a several minute walk from the lobby so visitors can behold the many fancy conference rooms and water coolers on this floor) and go to punch in the code. Much to your bladder's dismay, the keypad is not at all like you imagined it. Instead, you are confronted with the result of hundreds of man-hours of bathroom-keypad-design meetings:

        1
      2 3 4
    5 6 7 8 9
      A B C
        D
    You still start at "5" and stop when you're at an edge, but given the same instructions as above, the outcome is very different:

    You start at "5" and don't move at all (up and left are both edges), ending at 5.
    Continuing from "5", you move right twice and down three times (through "6", "7", "B", "D", "D"), ending at D.
    Then, from "D", you move five more times (through "D", "B", "C", "C", "B"), ending at B.
    Finally, after five more moves, you end at 3.
    So, given the actual keypad layout, the code would be 5DB3.

    Using the same instructions in your puzzle input, what is the correct bathroom code?
*/

export default () => {
    //const test = `ULL\r\nRRDDD\r\nLURDL\r\nUUUUD`
    let result = "";

    /*
        I set an object Map to use [x,y] coordonates to find a keypad number.
        each coordonates represent a number.
        the difference next to the day2.1 are that the coordonates are not similar the area is a diamond shape and not a square
    */

    let coordonates = new Map()

    coordonates.set('2,2', "1")
    coordonates.set('1,1', "2")
    coordonates.set('2,1', "3")
    coordonates.set('3,1', "4")
    coordonates.set('0,0', "5")
    coordonates.set('1,0', "6")
    coordonates.set('2,0', "7")
    coordonates.set('3,0', "8")
    coordonates.set('4,0', "9")
    coordonates.set('1,-1', "A")
    coordonates.set('2,-1', "B")
    coordonates.set('3,-1', "C")
    coordonates.set('2,-2', "D")

    //Now that the structure is ready with the Mpa object lets focus on the data as entry

    fs.readFileSync(path.join(process.cwd(), "./years/2016/in/day2.txt"), {encoding: "utf8"})
    //You can uncomment the test constant above and "test" just below to test the function with less directions
    //test
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
                - add "+x", "-x", "+y","-y" to hasChanged constant to say which direction has been changed and say if we add or substract.
            */
            directions.map(letter => {
                let hasChanged;
                console.log(`letter is ${letter}`)
                switch (letter) {
                    case "U":
                        xY[1] += 1;
                        hasChanged = "+y"
                        break
                    case "D":
                        xY[1] -= 1;
                        hasChanged = "-y"
                        break
                    case "L":
                        xY[0] -= 1;
                        hasChanged = "-x"
                        break
                    case "R":
                        xY[0] += 1;
                        hasChanged = "+x"
                        break
                }

                /*
                    now that my [x,y] coordonates are defined, I don't want to exit the key pad area.
                    So x and y doesn't need to exceed the area with -1 or +1.
                    So I will add 1 or substract 1 to x or y depending if they exceed +1 or -1 of the area. to check it I will check if the new coordonates exist in my Map object.
                    If it doesn't exist and that x have been changed (or y) I will check if previously in the switch it add or substract one (checking with hasChanged constant)
                */ 
                if (hasChanged === "+x" && !coordonates.has(`${xY[0]},${xY[1]}`)) {
                    xY[0] -= 1;
                } else if (hasChanged === "-x" && !coordonates.has(`${xY[0]},${xY[1]}`)) {
                    xY[0] += 1;
                }

                if (hasChanged === "+y" && !coordonates.has(`${xY[0]},${xY[1]}`)) {
                    xY[1] -= 1;
                } else if (hasChanged === "-y" && !coordonates.has(`${xY[0]},${xY[1]}`)) {
                    xY[1] += 1;
                }

            })

            //for each coordonates defined by line I will add the value of this coordonates wich have been get in the map to the result constant (string concatanation)
            result += coordonates.get(`${xY[0]},${xY[1]}`)
            //I return xY to the reduce to continue next turn with the last coordonates
            return xY
        }, [0,0])

        return result
        
}