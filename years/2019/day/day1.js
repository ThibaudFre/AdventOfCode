import fs from "node:fs"
import path from "node:path";

/*
    Link here: https://adventofcode.com/2019/day/1
    The Elves quickly load you into a spacecraft and prepare to launch.

    At the first Go / No Go poll, every Elf is Go until the Fuel Counter-Upper. They haven't determined the amount of fuel required yet.

    Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three,
    round down, and subtract 2.

    For example:

    For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
    For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
    For a mass of 1969, the fuel required is 654.
    For a mass of 100756, the fuel required is 33583.
    The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input),
    then add together all the fuel values.

    What is the sum of the fuel requirements for all of the modules on your spacecraft?
*/

export default () => {
    const deeps = fs.readFileSync(path.join(process.cwd(), '/years/2019/in/day1.txt'), {encoding: "utf8"})
        .split('\r\n')
        .map(nb => parseInt(nb))

        //you can uncomment the "const test" and change "deeps" by "test" to test it with less numbers.
        //const test = [12, 14, 1969, 100756]

        return deeps.reduce((acc,curr) => {
            return acc += Math.floor(curr/3) - 2
        },0)

}