import fs from "node:fs";
import path from "node:path";

/*
    Link here: https://adventofcode.com/2018/day/2
    You stop falling through time, catch your breath, and check the screen on the device.
    "Destination reached. Current Year: 1518. Current Location: North Pole Utility Closet 83N10." You made it! Now, to find those anomalies.

    Outside the utility closet, you hear footsteps and a voice. "...I'm not sure either. But now that so many people have chimneys,
    maybe he could sneak in that way?" Another voice responds, "Actually, we've been working on a new kind of suit that would let him fit through tight spaces like that. But,
    I heard that a few days ago, they lost the prototype fabric, the design plans, everything! Nobody on the team can even seem to remember important details of the project!"

    "Wouldn't they have had enough fabric to fill several boxes in the warehouse? They'd be stored together, so the box IDs should be similar.
    Too bad it would take forever to search the warehouse for two similar box IDs..." They walk too far away to hear any more.

    Late at night, you sneak to the warehouse - who knows what kinds of paradoxes you could cause if you were discovered
    - and use your fancy wrist device to quickly scan every box and produce a list of the likely candidates (your puzzle input).

    To make sure you didn't miss any, you scan the likely candidate boxes again,
    counting the number that have an ID containing exactly two of any letter and then separately counting those with exactly three of any letter.
    You can multiply those two counts together to get a rudimentary checksum and compare it to what your device predicts.

    For example, if you see the following box IDs:

    abcdef contains no letters that appear exactly two or three times.
    bababc contains two a and three b, so it counts for both.
    abbcde contains two b, but no letter appears exactly three times.
    abcccd contains three c, but no letter appears exactly two times.
    aabcdd contains two a and two d, but it only counts once.
    abcdee contains two e.
    ababab contains three a and three b, but it only counts once.

    Of these box IDs, four of them contain a letter which appears exactly twice,
    and three of them contain a letter which appears exactly three times.
    Multiplying these together produces a checksum of 4 * 3 = 12.

    What is the checksum for your list of box IDs?
*/

export default () => {

    let threeLetters = 0;
    let twoLetters = 0;
    const test = [
        "abcdef",
        "bababc",
        "abbcde",
        "abcccd",
        "aabcdd",
        "abcdee",
        "ababab"
    ]
    


    fs.readFileSync(path.join(process.cwd(), "./years/2018/in/day2.txt"), {encoding: "utf8"})
        .split('\r\n')
        /*test*/.map(id => {
            //I split to keep an array of the letters of the Id
            const letters = id.split('')
            //I create a Map object to save all the letters of my Id
            const lettersFounded = new Map
            //I put here booleans to say if the Id contains 2 times the same letter or three times
            let isThreeLetters = false
            let isTwoLetters = false

            letters.map(letter => {
                //now I check letter by letter if
                //my Map does it contains already the letter
                if(lettersFounded.has(letter)) {
                    /*
                        in this case I increment on the value of this key/letter so I catch the actual value of it with get method add one
                        and set it with set method of Map object.
                     */
                    lettersFounded.set(letter, (lettersFounded.get(letter) + 1))
                //If the map doesn't contain already the letter I set it with 1;
                } else {
                    lettersFounded.set(letter, 1)
                }
            })

            //so now tha all the letter of the Id has been counted and save in the Map objec, I will browse each letter.
            lettersFounded.forEach((value, key, map) => {
                //if the key value is 3
                if(value === 3) {
                    isThreeLetters = true;
                //if the key value is 2
                } else if (value === 2) {
                    isTwoLetters = true;
                }
            })

            /*
                now I have my booleans setted depending of the letters repetition in the Id.
                I will check if my Id contain two times the same letter or three times and increment the variable depending on it
            */
            if (isThreeLetters === true) {
                threeLetters ++
            }
            if(isTwoLetters === true){
                twoLetters ++ 
            }
             
        })
        
        return threeLetters * twoLetters
}