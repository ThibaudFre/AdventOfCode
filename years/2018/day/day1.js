import fs from "node:fs";
import path from "node:path";

/*
    Link here: https://adventofcode.com/2018/day/1
    After feeling like you've been falling for a few minutes, you look at the device's tiny screen.
    "Error: Device must be calibrated before first use. Frequency drift detected. Cannot maintain destination lock." Below the message,
    the device shows a sequence of changes in frequency (your puzzle input). A value like +6 means the current frequency increases by 6;
    a value like -3 means the current frequency decreases by 3.

    For example, if the device displays frequency changes of +1, -2, +3, +1, then starting from a frequency of zero, the following changes would occur:

    Current frequency  0, change of +1; resulting frequency  1.
    Current frequency  1, change of -2; resulting frequency -1.
    Current frequency -1, change of +3; resulting frequency  2.
    Current frequency  2, change of +1; resulting frequency  3.
    In this example, the resulting frequency is 3.

    Here are other example situations:

    +1, +1, +1 results in  3
    +1, +1, -2 results in  0
    -1, -2, -3 results in -6

    Starting with a frequency of zero, what is the resulting frequency after all of the changes in frequency have been applied?
*/

export default () => {
    const deeps = fs.readFileSync(path.join(process.cwd(), './years/2018/in/day1.txt'), {encoding: "utf8"})
        .split("\r\n")
        .map(nb => parseInt(nb,10))

    return deeps.reduce((a,b) => a + b);
}