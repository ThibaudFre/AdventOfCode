import fs from "node:fs"
import path from "node:path"

/* 
    Link Here: https://adventofcode.com/2021/day/2
    Now, you need to figure out how to pilot this thing.

    It seems like the submarine can take a series of commands like forward 1, down 2, or up 3:

    forward X increases the horizontal position by X units.
    down X increases the depth by X units.
    up X decreases the depth by X units.
    Note that since you're on a submarine, down and up affect your depth, and so they have the opposite result of what you might expect.

    The submarine seems to already have a planned course (your puzzle input). You should probably figure out where it's going. For example:

    forward 5
    down 5
    forward 8
    up 3
    down 8
    forward 2

    Your horizontal position and depth both start at 0. The steps above would then modify them as follows:

    forward 5 adds 5 to your horizontal position, a total of 5.
    down 5 adds 5 to your depth, resulting in a value of 5.
    forward 8 adds 8 to your horizontal position, a total of 13.
    up 3 decreases your depth by 3, resulting in a value of 2.
    down 8 adds 8 to your depth, resulting in a value of 10.
    forward 2 adds 2 to your horizontal position, a total of 15.
    After following these instructions, you would have a horizontal position of 15 and a depth of 10. (Multiplying these together produces 150.)

    Calculate the horizontal position and depth you would have after following the planned course. What do you get if you multiply your final horizontal position by your final depth?
*/

export default () => {
    let horizontal = 0;
    let depth = 0;
    /*const test = [
        "forward 5",
        "down 5",
        "forward 8",
        "up 3",
        "down 8",
        "forward 2",
    ]*/

    //You can uncomment the const "test"  above and "test" below to test the function with less directions
    fs.readFileSync(path.join(process.cwd(), "./years/2021/in/day2.txt"), {encoding: "utf8"})
        .split("\r\n")
        /*test*/.map(direction => {
            //I save the action here (forward/down/up)
            const action = direction.split(" ")[0];
            //I save the number indicated next to the action
            const numb = parseInt(direction.split(" ")[1]);
            //here is the conditions. The result is depending on wich action is given
            if (action === "forward") {
                horizontal += numb
            } else if (action === "down") {
                depth += numb
            } else if (action === "up") {
                depth -= numb
            }
        })

    return horizontal * depth;

}