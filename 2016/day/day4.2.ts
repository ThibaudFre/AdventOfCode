import fs from "node:fs"
import path from "node:path"
/*
    Finally, you come across an information kiosk with a list of rooms. Of course, the list is encrypted and full of decoy data,
    but the instructions to decode the list are barely hidden nearby. Better remove the decoy data first.
    Each room consists of an encrypted name (lowercase letters separated by dashes) followed by a dash, a sector ID,
    and a checksum in square brackets.
    A room is real (not a decoy) if the checksum is the five most common letters in the encrypted name,
    in order, with ties broken by alphabetization. For example:

    aaaaa-bbb-z-y-x-123[abxyz] is a real room because the most common letters are a (5), b (3), and then a tie between x, y, and z,
    which are listed alphabetically.

    a-b-c-d-e-f-g-h-987[abcde] is a real room because although the letters are all tied (1 of each),
    the first five are listed alphabetically.

    not-a-real-room-404[oarel] is a real room.

    totally-real-room-200[decoy] is not.

    Of the real rooms from the list above, the sum of their sector IDs is 1514.

    What is the sum of the sector IDs of the real rooms?
*/

export default () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return fs.readFileSync(path.join(process.cwd(), './2016/in/day4.txt'), { encoding: 'utf-8' })
        .split('\r\n')
        .map((room: string) => {
            //first let's reorder the text for that we need to split the letters value
            const textSplitted = room
                .split('-')
            const text = textSplitted
                .slice(0, -1)
                .join(' ')
            const id = textSplitted
                .join('')
                .match(/\d/gi)
                ?.join('')

            const modulo = typeof id === "string" ?
                parseInt(id) % 26 :
                null;

            const textTranslate = text
                .split('')
                .reduce((prevLetter, letterNow): string => {
                    let letterIndex = alphabet.indexOf(letterNow)
                    console.log(letterIndex)
                    if (letterIndex = -1) {
                        return prevLetter + ' '
                    } else {
                        return letterIndex > 26 && modulo !== null ?
                            prevLetter + alphabet[(letterIndex - 26 + modulo)] :
                            prevLetter + alphabet[modulo]
                    }
                })


            return textTranslate;
        })
} 