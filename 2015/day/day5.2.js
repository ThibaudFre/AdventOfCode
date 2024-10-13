import fs from "fs";
import path from "path";

/*
    Realizing the error of his ways, Santa has switched to a better model of determining whether a string is
    naughty or nice. None of the old rules apply, as they are all clearly ridiculous.
    Now, a nice string is one with all of the following properties:
    It contains a pair of any two letters that appears at least twice in the string without overlapping,
    like xyxy (xy) or aabcdefgaa (aa), but not like aaa (aa, but it overlaps).
    It contains at least one letter which repeats with exactly one letter between them, like xyx,
    abcdefeghi (efe), or even aaa.
*/

export default () => {
    const stringList = fs.readFileSync(path.join(process.cwd(), './2015/in/day5.txt'), {encoding:"utf-8"})
                    .split("\r\n");
    let niceString = 0;

    const isNice = (string) => {
        //RegEx
        let regTwicePairTwice = /(\w\w)\w*\1/gi;
        let regSameSeperated = /(\w)\w\1/gi;
        //RegExTests
        const regTwicePairTwiceTest = regTwicePairTwice.test(string);
        const regSameSeperatedTest = regSameSeperated.test(string);
       
        if(regTwicePairTwiceTest && regSameSeperatedTest){
            niceString ++;
        /* //uncomment for testing only
            return `${string} is a nice String`
        } else {
            return `${string} is a naughty String` */
        }

    
    }
    /*
        //some tests to check isNice function
        let test1 = isNice("qjhvhtzxzqqjkmpb");//nice
        let test2 = isNice("xxyxx");//nice
        let test3 = isNice("uurcxstgmygtbstg");//naughty
        let test4 = isNice("ieodomkazucvgmuy");//naughty

        console.log(test1)

        //don't forget to comment again the tests above to void +2 incrementations at niceSting
    */

    for(let string of stringList){
        isNice(string);
    }

    return niceString;
}