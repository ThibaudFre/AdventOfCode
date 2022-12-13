import fs from "node:fs"
import path from "node:path"

/*
    The link here: https://adventofcode.com/2015/day/2
    The elves are also running low on ribbon. Ribbon is all the same width, so they only have to worry about the length they need to order, which they would again like to be exact.

    The ribbon required to wrap a present is the shortest distance around its sides, or the smallest perimeter of any one face.
    Each present also requires a bow made out of ribbon as well; the feet of ribbon required for the perfect bow is equal to the cubic feet of volume of the present.
    Don't ask how they tie the bow, though; they'll never tell.

    For example:

    A present with dimensions 2x3x4 requires 2+2+3+3 = 10 feet of ribbon to wrap the present plus 2*3*4 = 24 feet of ribbon for the bow, for a total of 34 feet.
    A present with dimensions 1x1x10 requires 1+1+1+1 = 4 feet of ribbon to wrap the present plus 1*1*10 = 10 feet of ribbon for the bow, for a total of 14 feet.

    How many total feet of ribbon should they order?
*/

export default () => {
    //const test = "2x3x4\r\n1x1x10"
    //my function to calcul the ribbon length
    const ribbonLengthCalcul = (l,w,h) => {
        //I sort the perimeters from the lower to the higher
        const sortedPerimetters = [l, w, h].sort((a,b) => a - b)
        //I return the two smallestParameters added together and multipliated by two - plus the calcul of the extra ribbon for the bow so all the perimetters multiplied together.
        return (2*(sortedPerimetters[0] + sortedPerimetters[1])) + (l * w * h);
    }

    return fs.readFileSync(path.join(process.cwd(), "./years/2015/in/day2.txt"), {encoding: "utf8"})
        /*return test*/.split("\r\n")
        .reduce((totalPaper, boxDimensions) => {
            //for each boxDimensions I split the line and save the datas in the constants l, w, h as integer
            const [l, w, h] = boxDimensions
                                    .split("x")
                                    .map(nb => parseInt(nb));
            //I add to the accumulator of reduce the result of ribbonLengthCalcul() with l,w,h constants as parameters
            return totalPaper += ribbonLengthCalcul(l,w,h);
        }, 0)
}