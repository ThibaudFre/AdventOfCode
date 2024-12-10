import fs from "fs";
import path from "path";

export default (): string => {
    let result: string = ""
    let test1: string = "ULL\r\nRRDDD\r\nLURDL\r\nUUUUD";
    let padCoordonates = new Map<string, string>([
        ["2,2", "1"],
        ["1,1", "2"],
        ["2,1", "3"],
        ["3,1", "4"],
        ["0,0", "5"],
        ["1,0", "6"],
        ["2,0", "7"],
        ["3,0", "8"],
        ["4,0", "9"],
        ["1,-1", "A"],
        ["2,-1", "B"],
        ["3,-1", "C"],
        ["2,-2", "D"],
    ])

    fs.readFileSync(path.join(process.cwd(), './2016/in/day2.txt'), { encoding: 'utf-8' })
        //test1
        .split("\r\n")
        .reduce((xY: number[], line: string): number[] => {
            console.log(`xY is ${xY} and line is ${line}`)
            const directions: string[] = line.split('')

            directions.map((letter): void => {
                let hasChanged: string = "";
                console.log(`letter is ${letter}`)
                switch (letter) {
                    case "U": 
                        xY[1] += 1;
                        hasChanged = "+y";
                        break;
                    case "D": 
                        xY[1] -= 1;
                        hasChanged = "-y";
                        break;
                    case "L": 
                        xY[0] -= 1;
                        hasChanged = "-x";
                        break;
                    case "R": 
                        xY[0] += 1
                        hasChanged = "+x";
                        break;
                }

                if (hasChanged === "+x" && !padCoordonates.has(`${xY[0]},${xY[1]}`)) {
                    console.log(`${xY} not founded`)
                    xY[0] -= 1;
                } else if (hasChanged === "-x" && !padCoordonates.has(`${xY[0]},${xY[1]}`)) {
                    console.log(`${xY} not founded`)
                    xY[0] += 1;
                }

                if (hasChanged === "+y" && !padCoordonates.has(`${xY[0]},${xY[1]}`)) {
                    console.log(`${xY} not founded`)
                    xY[1] -= 1;
                } else if (hasChanged === "-y" && !padCoordonates.has(`${xY[0]},${xY[1]}`)) {
                    console.log(`${xY} not founded`)
                    xY[1] += 1;
                }
            })
            console.log(`new resultCoordonates = ${xY}`)
            result += padCoordonates.get(`${xY[0]},${xY[1]}`)
           
            return xY

        }, [0, 0])


    console.log(test1)

    return result;
}




