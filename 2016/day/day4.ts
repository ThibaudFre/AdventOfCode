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
    let count = 0;
    fs.readFileSync(path.join(process.cwd(), './2016/in/day4.txt'), { encoding: 'utf-8' })
        .split('\r\n')
        .map((room: string) => {
            //first let's reorder the text for that we need to split the letters value
            const textSplitted = room.split('-')
            //extract the idCheckSum at the end of the line ex: aoubshwq-pibbm-kcfygvcd    '  740[wnucy] <----- this part
            const idChecksum = textSplitted[textSplitted.length - 1]
            //keep the id so only the numbers in idCheckSum
            const id = idChecksum
                .match(/\d/ig)
                ?.join('');
            //keep the checkSum in idChecksum
            const checkSum = idChecksum
                .match(/[a-z]/ig)
                ?.join('')
            //textSplitted is an array so I join all to get one complet string of all
            const text = textSplitted.slice(0, -1).join('');
            const regex = /(.)\1*/g
            //after that I need to sort the letters alphabetically
            const textSorted = text
                .split('')
                .sort((a, b) => {
                    return a.localeCompare(b, "en")
                })
                .join("")
            // I split the data by unity/group of letters with regex ex: accdggglmpp => a cc d ggg l m pp
            const textSplitedByLetters: RegExpMatchArray | null = textSorted.match(regex)
            // I sort the letters to keep ordered by alphabet but get first the letters wich are more than onec ex:
            // abbdddcefg ===> dddbbacefg
            const finalSortedText: string[] | undefined = textSplitedByLetters?.sort((a: string, b: string) => {
                return b.length - a.length
            })
            //I use a reduce to concatenate each firts letter of letter from finalSortedText
            //ex: finalstortedText = [aaa,bbbb, ff, g,h] ===> textToTest ===> "abfgh"
            const textToTest = finalSortedText?.reduce((letters, letter, index): string => {
                if (index === 1) {
                    return letters[0] + letter[0]
                } else {
                    return letters + letter[0];
                }
            })
            //now that the letters are well sorted if the five first letters of textToTest are equal to checkSum so
            //we add the id to the count
            if (textToTest?.slice(0, 5) === checkSum) {
                if(typeof id === "string"){
                    count += parseInt(id);
                }
            }
        })

    return count

} 