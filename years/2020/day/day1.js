import fs from "node:fs"
import path from "node:path"

/*  
    Link here: https://adventofcode.com/2020/day/1
    After saving Christmas five years in a row, you've decided to take a vacation at a nice resort on a tropical island. Surely, Christmas will go on without you.
    The tropical island has its own currency and is entirely cash-only. The gold coins used there have a little picture of a starfish; the locals just call them stars. 
    None of the currency exchanges seem to have heard of them, but somehow, you'll need to find fifty of these coins by the time you arrive so you can pay the deposit on your room.
    To save your vacation, you need to get all fifty stars by December 25th.

    Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first.
    Each puzzle grants one star. Good luck!

    Before you leave, the Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up.

    Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

    For example, suppose your expense report contained the following:

    1721
    979
    366
    299
    675
    1456

    In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.

    Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?
 */

export default () => {
    const accounting = fs.readFileSync(path.join(process.cwd(), "./years/2020/in/day1.txt"), {encoding: "utf8"})
        .split("\r\n")
        .map(nb => parseInt(nb))
        //you can uncomment the "const test" and change "accounting" by "test" to test it with less numbers.
        //const test = [1721, 979, 366, 299, 675, 1456]
        let result;

        accounting.map(number => {
            accounting.map(nbr => {
                if (number + nbr === 2020) {
                    result = number * nbr;
                }
            })
        })

    return result;
}