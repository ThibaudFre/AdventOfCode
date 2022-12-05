import fs from "node:fs"
import path from "node:path"

/*
    The link here: https://adventofcode.com/2020/day/2
    Your flight departs in a few days from the coastal airport; the easiest way down to the coast from here is via toboggan.
    The shopkeeper at the North Pole Toboggan Rental Shop is having a bad day. "Something's wrong with our computers; we can't log in!" You ask if you can take a look.
    Their password database seems to be a little corrupted:
    some of the passwords wouldn't have been allowed by the Official Toboggan Corporate Policy that was in effect when they were chosen.

    To try to debug the problem, they have created a list (your puzzle input) of passwords (according to the corrupted database) and the corporate policy when that password was set.

    For example, suppose you have the following list:

    1-3 a: abcde
    1-3 b: cdefg
    2-9 c: ccccccccc

    Each line gives the password policy and then the password. 
    The password policy indicates the lowest and highest number of times a given letter must appear for the password to be valid.
    For example, 1-3 a means that the password must contain a at least 1 time and at most 3 times.

    In the above example, 2 passwords are valid. The middle password, cdefg, is not; it contains no instances of b, but needs at least 1.
    The first and third passwords are valid: they contain one a or nine c, both within the limits of their respective policies.

    How many passwords are valid according to their policies?
*/

export default () => {
    let validsPasswordsCount = 0;
    /*const test = [
        "1-3 a: abcde",
        "1-3 b: cdefg",
        "2-9 c: ccccccccc"
    ]*/

    //you can uncomment "test" constant above and "test" below to test the function with less password
    fs.readFileSync(path.join(process.cwd(), "./years/2020/in/day2.txt"), {encoding: "utf8"})
        .split("\r\n")
        /*test*/.map(password => {
            //I split my array to keep all the necessary in constants
            const [conditions, psw] = password.split(': ')
            const [range, letter] = conditions.split(' ')
            const [lower, higher] = range.split("-")
            //Here is the count of times of the letter has been found in the password
            let letterCount = 0;
            //loop to search letter by letter in the password
            for(let i = 0 ; i < psw.length; i++){
                //if the pasw[i] is the letter so add 1 to the letterCount
                if (psw[i] === letter) {
                    letterCount ++;
                }
            }
            //if the letterCount is between the lower and the higher number so add 1 to validsPasswordCount because the password is valid
            if(letterCount >= parseInt(lower) && letterCount <= parseInt(higher)){
                validsPasswordsCount++
            }
            
        }) 

    return validsPasswordsCount;

}