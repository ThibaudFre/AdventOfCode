import fs from "node:fs"
import path from "node:path"

/*
    The link here: https://adventofcode.com/2020/day/2
    While it appears you validated the passwords correctly, they don't seem to be what the Official Toboggan Corporate Authentication System is expecting.
    The shopkeeper suddenly realizes that he just accidentally explained the password policy rules from his old job at the sled rental place down the street!
    The Official Toboggan Corporate Policy actually works a little differently.

    Each policy actually describes two positions in the password, where 1 means the first character,
    2 means the second character, and so on. (Be careful; Toboggan Corporate Policies have no concept of "index zero"!)
    Exactly one of these positions must contain the given letter. Other occurrences of the letter are irrelevant for the purposes of policy enforcement.

    Given the same example list from above:

    1-3 a: abcde is valid: position 1 contains a and position 3 does not.
    1-3 b: cdefg is invalid: neither position 1 nor position 3 contains b.
    2-9 c: ccccccccc is invalid: both position 2 and position 9 contain c.
    How many passwords are valid according to the new interpretation of the policies?
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
            const [firstIndex, secondIndex] = range.split("-")
            
            //if firstIndex - 1 of psw is the letter and secondIndex - 1 of psw is not the letter add 1 to validsPasswordsCount
            if(psw[parseInt(firstIndex) - 1 ] === letter) {
                if(psw[parseInt(secondIndex) - 1] !== letter){
                    //pasword is valid
                    validsPasswordsCount ++
                }
            //if firstIndex - 1 of psw is not the letter and secondIndex - 1 of psw is the letter add 1 to validsPasswordsCount   
            } else {
                if(psw[parseInt(secondIndex) - 1] === letter){
                    //pasword is valid
                    validsPasswordsCount ++
                }
            }
            
            
        }) 

    return validsPasswordsCount;

}