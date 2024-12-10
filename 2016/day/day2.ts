import fs from "fs";
import path from "path";

export default (): string => {
    let result: string = ""
    let test1: string = "ULL\r\nRRDDD\r\nLURDL\r\nUUUUD";
    let padCoordonates = new Map<string, string>([
        ["-1,1", "1"],
        ["0,1", "2"],
        ["1,1", "3"],
        ["-1,0", "4"],
        ["0,0", "5"],
        ["1,0", "6"],
        ["-1,-1", "7"],
        ["0,-1", "8"],
        ["1,-1", "9"]
    ])

    fs.readFileSync(path.join(process.cwd(), './2016/in/day2.txt'), { encoding: 'utf-8' })
        //test1
        .split("\r\n")
        .reduce((xY: number[], line: string): number[] => {
            console.log(`xY is ${xY} and line is ${line}`)
            const directions: string[] = line.split('')

            directions.map((letter): void => {
                console.log(`letter is ${letter}`)
                switch (letter) {
                    case "U": xY[1] += 1
                        break;
                    case "D": xY[1] -= 1
                        break;
                    case "L": xY[0] -= 1
                        break;
                    case "R": xY[0] += 1
                        break;
                }

                if (xY[0] === 2) {
                    xY[0] -= 1;
                } else if (xY[0] === -2) {
                    xY[0] += 1;
                }

                if (xY[1] === 2) {
                    xY[1] -= 1;
                } else if (xY[1] === -2) {
                    xY[1] += 1;
                }


            })


            result += padCoordonates.get(`${xY[0]},${xY[1]}`)
            return xY
        }, [0, 0])


    console.log(test1)

    return result;
}




