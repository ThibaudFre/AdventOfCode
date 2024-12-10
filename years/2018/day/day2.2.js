import fs from "node:fs";
import path from "node:path";

/*
    Link here: https://adventofcode.com/2018/day/2
    Confident that your list of box IDs is complete, you're ready to find the boxes full of prototype fabric.
    The boxes will have IDs which differ by exactly one character at the same position in both strings. For example, given the following box IDs:

    abcde
    fghij
    klmno
    pqrst
    fguij
    axcye
    wvxyz

    The IDs abcde and axcye are close, but they differ by two characters (the second and fourth).
    However, the IDs fghij and fguij differ by exactly one character, the third (h and u). Those must be the correct boxes.

    What letters are common between the two correct box IDs? (In the example above, this is found by removing the differing character from either ID, producing fgij.)
*/

export default () => {

    let threeLetters = 0;
    let twoLetters = 0;
    /*const test = [
        "abcde",
        "fghij",
        "klmno",
        "pqrst",
        "fguij",
        "axcye",
        "wvxyz"
    ]*/

    //You can uncomment the test constant above and the two "test" below to test the function with less ids. Be careful to comment the "ids" written just before.
    
    //the higher most similar letters between two Ids 
    let higherSimilarLetters = ""

    const ids = fs.readFileSync(path.join(process.cwd(), "./years/2018/in/day2.txt"), {encoding: "utf8"})
        .split('\r\n')

        ids/*test*/.map((idFirst, indexFirst) => {
            //I split to keep an array of the letters of the Id
            const letterFirst = idFirst.split('')
            //I browse each Id to compare with the  idFirst an idSecond
            ids/*test*/.map((idSecond, indexSecond) =>{
                //I split the second Id to keep the letters in an array
                const letterSecond = idSecond.split('')
                //I creat a variable to increment on it each time a letter is similar between the two Ids (first and second)
                let similarLetters = "";
                //If the Ids are not the same
                if(indexFirst !== indexSecond){  
                    //with a for loop I compare each letters of the two Ids at the same index 
                    for (let i = 0; i < letterSecond.length; i++){
                        //If they are the same I increment in similarLettersCount variable and concatain with similarLetter the similar letter.
                        if (letterFirst[i] === letterSecond[i]) {
                            similarLetters += letterFirst[i]
                        }
                    }
                }
                //if the similarLetters variable have more letters than the higherSimilarLetters so save it as new highSimilarLetters
                if (similarLetters.length > higherSimilarLetters.length) {
                    higherSimilarLetters = similarLetters;
                }
            })
        })
        
        return higherSimilarLetters;
}