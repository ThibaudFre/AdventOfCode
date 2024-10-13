import fs from "fs";
import path from "path";

/*
    Santa needs help figuring out which strings in his text file are naughty or nice.
    A nice string is one with all of the following properties:
    It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
    It contains at least one letter that appears twice in a row, like xx, abcdde (dd),
    or aabbccdd (aa, bb, cc, or dd).
    It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other
    requirements.
*/

export default () => {
    const stringList = fs.readFileSync(path.join(process.cwd(), './2015/in/day5.txt'), {encoding:"utf-8"})
                    .split("\r\n");
    let niceString = 0;
    //some variables to test
    //let test1 = "ugknbfddgicrmopn";//nice
    //let test2 = "aaa";//nice
    //let test3 = "haegwjzuvuyypxyu";//naughty
    //let test4 = "dvszwmarrgswjxmb";//naughty
    //let test5 = "jchzalrnumimnmhp";//naughty

    const isNice = (string) => {
        //RegEx
        let regVow = /(\w*[aeiou]\w*){3,}/gi;
        let regTwice = /aa|bb|cc|dd|ee|ff|gg|hh|ii|jj|kk|ll|mm|nn|oo|pp|qq|rr|ss|tt|uu|vv|ww|xx|yy|zz/gi;
        let regNotContain = /\w*ab\w*|\w*cd\w*|\w*pq\w*|\w*xy\w*/gi;
        //RegExTests
        const regVowTest = regVow.test(string);
        const regTwiceTest = regTwice.test(string);
        const regNotContainTest = !regNotContain.test(string);
       
        if(regVowTest && regTwiceTest && regNotContainTest){
            niceString ++;
        }
    }

    for(let string of stringList){
        isNice(string);
    }

    return niceString;
}