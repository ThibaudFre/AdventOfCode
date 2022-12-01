import fs from "node:fs"
import path from "node:path"

/*
    The Elves in accounting are thankful for your help; one of them even offers you a starfish coin they had left over from a past vacation.
    They offer you a second one if you can find three numbers in your expense report that meet the same criteria.
    Using the above example again, the three entries that sum to 2020 are 979, 366, and 675. Multiplying them together produces the answer, 241861950.

    In your expense report, what is the product of the three entries that sum to 2020?
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
                accounting.map(nb => {
                    if (number + nbr + nb === 2020) {
                        result = number * nbr * nb;
                    }
                })
            })
        })

    return result;
}