import fs from "node:fs";
import path from "node:path";

/*
    Link here: https://adventofcode.com/2018/day/1
    You notice that the device repeats the same frequency change list over and over. To calibrate the device, you need to find the first frequency it reaches twice.

    For example, using the same list of changes above, the device would loop as follows:

    Current frequency  0, change of +1; resulting frequency  1.
    Current frequency  1, change of -2; resulting frequency -1.
    Current frequency -1, change of +3; resulting frequency  2.
    Current frequency  2, change of +1; resulting frequency  3.
    (At this point, the device continues from the start of the list.)
    Current frequency  3, change of +1; resulting frequency  4.
    Current frequency  4, change of -2; resulting frequency  2, which has already been seen.
    In this example, the first frequency reached twice is 2. 
    Note that your device might need to repeat its list of frequency changes many times before a duplicate frequency is found,
    and that duplicates might be found while in the middle of processing the list.

    Here are other examples:

    +1, -1 first reaches 0 twice.
    +3, +3, +4, -2, -4 first reaches 10 twice.
    -6, +3, +8, +5, -6 first reaches 5 twice.
    +7, +7, -2, -7, -4 first reaches 14 twice.

    What is the first frequency your device reaches twice?
*/

export default () => {
    const frequencies = fs.readFileSync(path.join(process.cwd(), './years/2018/in/day1.txt'), {encoding: "utf8"})
        .split("\r\n")
        .map(nb => parseInt(nb, 10))

    //you can uncomment the "const test" and change "frequencies" by "test" to test it with less numbers.

    //const test = [1, -1];
    //const test = [3, 3, 4, -2, -4];
    //const test = [-6, 3, 8, 5, -6];
    //const test = [7, 7, -2, -7, -4];
    //I save the last Frequencies in this array
    const lastFrequencies = [0];
    let result;

    const findFreq = () => {    
        frequencies.reduce((a,b) => {
            //if the result was not already  founded and the array lestFrenquencies contained already the same Frequencie (a+b) so...
            if(result === undefined && lastFrequencies.includes(a + b)){
                //save in the result let the Frequencie founded twice
                result = a + b
            }
            //if not push the new Frequencie (a+b) in the lastFrequencies array
            lastFrequencies.push( a + b)
            //return a+b as next curr value/ Frequencie
            return a + b;
            //as initial Value for reduce use the last Frequencie founded so saved in the lastFrequencies array
        },lastFrequencies[lastFrequencies.length - 1]);

        //while result is not find reuse findFreq() to do recursivity... over and over
        if(result === undefined) {
            findFreq();
        }
    }

    findFreq();

    return result;
}