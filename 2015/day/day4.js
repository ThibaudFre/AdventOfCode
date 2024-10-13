import fs from "fs";
import path from "path";
import md5Hex from "md5-hex";

export default () =>{
    /*
        Santa needs help mining some AdventCoins (very similar to bitcoins) to use as gifts for all the economically 
        forward-thinking little girls and boys.
        To do this, he needs to find MD5 hashes which, in hexadecimal, start with at least five zeroes.
        The input to the MD5 hash is some secret key (your puzzle input, given below) followed by a number in decimal.
        To mine AdventCoins, you must find Santa the lowest positive number (no leading zeroes: 1, 2, 3, ...)
        that produces such a hash.
    */
    const key = fs.readFileSync(path.join(process.cwd(), './2015/in/day4.txt'), {encoding: "utf-8"});
    let number = 0
    let result = key;
    const hashing = () => md5Hex(result + number);
    let hash = hashing();

    //while the hash didn't start by 5 Zero hash again
    //if an hash starting with "00000" is encountered so return number
    while (hash.substring(0,5) !== "00000") {
        console.log(hash.substring(0,5));
        number ++;
        hash = hashing();
    }

    return number;
}