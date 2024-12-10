import fs from "node:fs";
import path from "node:path";

/*
    input => triangles are specified in groups of three vertically. Each set of three numbers in a column specifies a triangle. 
    Rows are unrelated.

    For example, given the following specification, numbers with the same hundreds digit would be part of the same triangle:

    101 301 501
    102 302 502
    103 303 503
    201 401 601
    202 402 602
    203 403 603

    my idea is to seperate the data all 3 lines and do the repartition by line in 3 different array as bellow:

    start1 mid1 end1
    start2 mid2 end2
    start3 mid3 end3

    const start = [start1, start2, start3];
    const mid = [mid1, mid2, mid3];
    const end = [end1, end2, end3]

    after I concatenate in on single array as [start1, start2, start3, mid1, mid2, mid3,end1, end2, end3]

    and we continue with the next 3 lines until the end of the data.txt
*/

export default () => {
    const listSides: number[] = fs.readFileSync(path.join(process.cwd(), './2016/in/day3.txt'), { encoding: 'utf-8' })
        //split the data to get all the numbers in an array
        .split(/[^\d+]/)
        .map((toInt) => parseInt(toInt))
        .filter((isNumb) => isNumb > 0)

    const splitByThreeLines: number[][] = [];
    let nineSides: number[] = [];

    let firstTriangle: number[] = [];
    let secondTriangle: number[] = [];
    let thirdTriangle: number[] = [];

    let countNumbSide: number = 1;

    const sortedTriangleList : number[][] = [];

    /*
    below is the method to sort the data as exemple:
    triangle1 triangle2 triangle3
    triangle1 triangle2 triangle3
    triangle1 triangle2 triangle3
    */

    /*
    This method check if this is the last side to separate as exemple below
    triangle1 triangle2 triangle3
    triangle1 triangle2 triangle3
    triangle1 triangle2 TRIANGLE3 <---- TRIANGLE3 is the last side 
     */
    const checkIfLastSide = () : void=> {
        //if thirdTriangle.length === 3 so we this is the last side on the 9th side to separate
        if (thirdTriangle.length === 3){
            //If it's the last side of the third triangle
            //I push the triangles in the sorted Triangle list
            sortedTriangleList.push(firstTriangle)
            sortedTriangleList.push(secondTriangle)
            sortedTriangleList.push(thirdTriangle)
            //delete the sides in the first second and third Triangle for the next run
            firstTriangle = []
            secondTriangle = []
            thirdTriangle = []
        }
        //if countNumbside is > 3 so it means that we finished the line and I initialise countNumbSide for next line
        if (countNumbSide > 3) {
            countNumbSide = 1; 
        }
    }


    //below is the method to sort my listSides array holding all 9 sides in nineSides and push it in splitByThreeLines
    for (let i = 0; i < listSides.length; i++) { 
        //if % 9 === 0 so this I founded the last side of my three triangles
        if ((i + 1) % 9 !== 0) {
            nineSides.push(listSides[i])
        } else {
            nineSides.push(listSides[i])
            splitByThreeLines.push(nineSides)
            nineSides = [];
        }
    }

    
    /*
    now that my data has been seperated all 3 lines I need to separate by lines:
     first, second and third side and push it in their respective triangle array.
    To do that I initiate a counter (countNumbSide) to count if side is 1st, 2nd or 3rd in the line.
    */
    splitByThreeLines.map((sidesThreeTriangles): void => {
        sidesThreeTriangles.map((side: number): void => {
            if (countNumbSide === 1) {
                firstTriangle.push(side)
            } else if (countNumbSide === 2) {
                secondTriangle.push(side)
            } else {
                thirdTriangle.push(side)
            }

            countNumbSide++

            checkIfLastSide();

        })

    })


    /*-----------------------------------------now that the array is sorted by triangles I can use the code of day.3 
    to check which triangle of the list are truly triangles---------------------------------------------------------------------*/


    return sortedTriangleList.reduce((count: number, triangle: number[]): number=>{
        //I split the line to get the side (ignore is a string empty I don't know why it's a side effect of my RegExp)
        const [sideOne, sideTwo, sideThree] : number[] = triangle
            //I sort the data to get first the 2 smaller side
            .sort((a,b) => a - b);
        //I use the formula if the figure is a triangle I return and add +1 to count,
        //in the contrary I just return count
        return (sideOne + sideTwo) > sideThree ? count + 1 : count
        
    },0)

}