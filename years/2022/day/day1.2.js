import fs from "node:fs"
import path from "node:path"

/*
    The link here: https://adventofcode.com/2022/day/1
    By the time you calculate the answer to the Elves' question,
    they've already realized that the Elf carrying the most Calories of food might eventually run out of snacks.
    To avoid this unacceptable situation, the Elves would instead like to know the total Calories carried by the top three Elves carrying the most Calories.
    That way, even if one of those Elves runs out of snacks, they still have two backups.
    In the example above, the top three Elves are the fourth Elf (with 24000 Calories),
    then the third Elf (with 11000 Calories), then the fifth Elf (with 10000 Calories). The sum of the Calories carried by these three elves is 45000.

    Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?
*/

export default () => {
    //Uncomment "test" below to test the code with less numbers
    //const test = ["1000", "2000","3000", "", "4000", "", "5000", "6000", "", "7000", "8000", "9000", "", "10000"]
    let caloriesByElves = [];
    fs.readFileSync(path.join(process.cwd(), './years/2022/in/day1.txt'), { encoding: "utf8" })
        .split('\r\n')
        /*test*/.reduce((acc, curr) => {
            //need To parse in numbers strings
            const elfCalorie = parseInt(curr)
            //if current value is not empty so it's a number
            if(curr !== ""){
                //still the reduce meet a number as current value that mean that the calories is still for the same elf so I accumulate it to acc
                return acc += elfCalorie
            //if curr is an empty string so that mean that we arrive to the end of the last Calories of the last Elf
            } else {
                caloriesByElves.push(acc)
                //in all cases as the end of  calories of the last Elf I change acc to 0 to restart the accumulation at the next turn of reduce.
                return acc = 0;
            }
        },0)
    //I sort all the Calories needq by elves from the higher to the lower
    const calorieSort = caloriesByElves.sort((a,b) => b - a );
    //I save the sum of the 3 hungrier elves calories.
    const threeHungrierElves = calorieSort[0] + calorieSort[1] + calorieSort[2]
    
    return threeHungrierElves
}