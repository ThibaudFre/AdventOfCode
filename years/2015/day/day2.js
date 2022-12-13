import fs from "node:fs"
import path from "node:path"

/*
    The link here: https://adventofcode.com/2015/day/2
    The elves are running low on wrapping paper, and so they need to submit an order for more. They have a list of the dimensions (length l, width w, and height h) of each present, and only want to order exactly as much as they need.

    Fortunately, every present is a box (a perfect right rectangular prism), which makes calculating the required wrapping paper for each gift a little easier: find the surface area of the box, which is 2*l*w + 2*w*h + 2*h*l. The elves also need a little extra paper for each present: the area of the smallest side.

    For example:

    A present with dimensions 2x3x4 requires 2*6 + 2*12 + 2*8 = 52 square feet of wrapping paper plus 6 square feet of slack, for a total of 58 square feet.
    A present with dimensions 1x1x10 requires 2*1 + 2*10 + 2*10 = 42 square feet of wrapping paper plus 1 square foot of slack, for a total of 43 square feet.
    All numbers in the elves' list are in feet. How many total square feet of wrapping paper should they order?
*/

export default () => {
    //const test = "2x3x4\r\n1x1x10"
    const wrappingPaperCalcul = (l,w,h) => {
        //I calcul the diferrents area
        const areaOne = l*w;
        const areaTwo = w*h;
        const areaThree = h*l;
        //do the calcul to calcul the wrapping paper needed
        const wrapping = 2 * (areaOne + areaTwo + areaThree);
        //save the smallest Area
        const smallestArea = Math.min(areaOne, areaTwo, areaThree)
        //return the wrapping Paper needed + the smallest Area
        return wrapping + smallestArea;
    }

    return fs.readFileSync(path.join(process.cwd(), "./years/2015/in/day2.txt"), {encoding: "utf8"})
        /*return test*/.split("\r\n")
        .reduce((totalPaper, boxDimensions) => {
            //for each boxDimensions I split the line and save the datas in the constants l, w, h
            const [l, w, h] = boxDimensions.split("x");
            //I add to the accumulator of reduce the result of wrappingPaperCalcul() with l,w,h constants as parameters
            return totalPaper += wrappingPaperCalcul(l,w,h);
        }, 0)
}