import fs from "node:fs";
import path from "node:path";

/*
    input => a list of lines of three sides as below:
        777  419  758
        536  434  269
        291  624  351
        372  151  768

    each line is a figure the goal is to find how many fifures are a triangle.
    For that we have the formula to find a triangle: side1 + side2 > side3
    Noting that side 1 and side 2 are the smallest side of the triangle.
*/

export default () => {
    return fs.readFileSync(path.join(process.cwd(), './2016/in/day3.txt' ), { encoding: 'utf-8' })
        //split the data by line
        .split('\r\n')
        //I use reduce to line by line count if the figure is a triangle
        .reduce((count: number, triangle: string): number =>{
            //I split the line to get the side (ignore is a string empty I don't know why it's a side effect of my RegExp)
            const [sideOne, sideTwo, sideThree] : number[] = triangle
                .trim()
                .split(/\s+/g)
                //I use map to transform string in integer
                .map((sideString) => parseInt(sideString))
                //I sort the data to get first the 2 smaller side
                .sort((a,b) => a - b);
            //I use the formula if the figure is a triangle I return and add +1 to count,
            //in the contrary I just return count
            return (sideOne + sideTwo) > sideThree ? count + 1 : count
            
        },0)
}