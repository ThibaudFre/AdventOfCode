/*
    Now, instead of considering the next digit, it wants you to consider the digit halfway around the circular list.
    That is, if your list contains 10 items, only include a digit in your sum if the digit 10/2 = 5 steps forward matches it.
    Fortunately, your list has an even number of elements.
*/

import fs from 'node:fs'
import path from 'node:path'

export default () =>{
    const deeps = fs.readFileSync(path.join(process.cwd(), './years/2017/in/day1.txt'), { encoding: 'utf8' })
                 .split('')

    const findCaptcha = (numbers) => {
        //you can uncomment the "const test" and change in the "toCheck variable" "numbers.map()" by "test.map()" to test it with less numbers.
        //const test = ["1", "2", "1", "2"]
        //const test = ["1", "2", "2", "1"];
        //const test = ["1", "2", "3", "4", "2", "5"];
        //const test = ["1", "2", "3", "1", "2", "3"];
        //const test = ["1", "2", "1", "3", "1", "4", "1", "5"];
        //I copy an aray of numbers to check
        let toCheck = numbers.map(numb => numb);
        //my array of numbers that I need to add Value each other later to return the result
        const toAdd = [];
        //the numb I need to check to match with the same number for each loop in the while
        let toSearch;
        //if at the first turn the first number is the last too. remember the numbers list is circular.
        if (toCheck[0] === toCheck[toCheck.length-1]) {
            toAdd.push(parseInt(toCheck[0]))
        }

        while(toCheck.length > 0){
            //I save the first index to compare it after...
            toSearch = toCheck[0];
            //I delete the first index from the "toCheck" array
            toCheck.shift();
            //I compare the last first index with the newOne if they are the same
            if (toCheck[0] === toSearch) {
                toAdd.push(parseInt(toCheck[0]))
            }
        }

        //if to Add is empty return 0 or return the add of the numbers founded
        const result = toAdd.length > 0 ? toAdd.reduce((a,b) => a + b) : 0;

        return result;
    }

        
    return findCaptcha(deeps);
}


    
