import fs from "fs";
import path from "path";

/*
    Because your neighbors keep defeating you in the holiday house decorating contest year after year,
    you've decided to deploy one million lights in a 1000x1000 grid.
    Furthermore, because you've been especially nice this year, Santa has mailed you instructions on how
    to display the ideal lighting configuration.
    Lights in your grid are numbered from 0 to 999 in each direction; the lights at each corner are 
    at 0,0, 0,999, 999,999, and 999,0. The instructions include whether to turn on, turn off, or toggle
    various inclusive ranges given as coordinate pairs. Each coordinate pair represents opposite corners
    of a rectangle, inclusive; a coordinate pair like 0,0 through 2,2 therefore refers to 9
    lights in a 3x3 square. The lights all start turned off.
    To defeat your neighbors this year, all you have to do is set up your lights by doing the instructions
    Santa sent you in order.
*/

export default () => {
    const instructionsList = fs.readFileSync(path.join(process.cwd(), './2015/in/day6.txt'), {encoding: 'utf-8'})
                    .split("\r\n")

    const gridArea = [];
    //my RegExp to keep only the number part in the string instruction
    const regNumb = /\d{1,3},\d{1,3}/g;

    /*
        I create in a loop all the cordonates point of the grid area ranged between 0 and 999 in x and y axis
        and push them in the gridArea array
    */
    for(let x = 0; x <= 999 ; x++){
        for(let y = 0; y <= 999; y++){
            gridArea.push([[x,y],false]);
        }
    }
    
    //this function transform the string instruction with [x,y] coordonates in numbers
    const transformStartEndXY = (startEnd) => {
        return startEnd .split(',')
                        .map(num => parseInt(num));
    }
    
    /*
        here is the loop to get the instructions in the list instruction and operate actions, instruction
        by instruction
    */
    for(let instruction of instructionsList){
        //to keep the area of cordonates point given by the instruction
        const touchedArea = [];
        //I use my RegEx to get only the begining and the ending coordonates of the lighted area 
        const [start, end] =  instruction.match(regNumb);
        // I use transformStartEndXY function to split the data in X Y coordonates number
        const [startX, startY] = transformStartEndXY(start);
        const [endX, endY] = transformStartEndXY(end);

        /*
            I do a loop to create all the coordonates points ranged between [startX, startY] and [endX,endY]
            given by the instruction and push it to the touchedArea aray
        */
        for(let x = startX; x <= endX; x++){
            for(let y = startY; y <= endY; y++){
                touchedArea.push([x,y]);

            }
        }

        /*
            I create a loop to browse the touchedArea array and point by point, find them in gridArea and change
            the status in true or false
        */
        for(let coordonate of touchedArea){
            const [pointX, pointY] = coordonate;
            /*
                if coordonate [x,y] is founded in the loop below browsing the gridArea I change the status of the
                light gridArea[i] if it was false it becomes true and contrary.
            */
            for(let i = 0; i < gridArea.length; i++){
                let [[lightX, lightY], status] = gridArea[i];
                break;
                if(pointX === lightX && pointY === lightY){
                    break;
                    if(status){
                        //gridArea[i][1] = false;
                    } else {
                        //gridArea[i][1] = true;
                    }
                    break;
                }
            }
        }       

    }

    let restLighted = 0;

    for(let light of gridArea){
        const [coordonates, status] = light;
        if(status){
            restLighted ++;
        }
    }

    return restLighted;

}