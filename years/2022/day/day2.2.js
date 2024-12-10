import fs from "node:fs"
import path from "node:path"

/*
    Link here: https://adventofcode.com/2022/day/2
    The Elf finishes helping with the tent and sneaks back over to you. "Anyway, the second column says how the round needs to end: X means you need to lose,
    Y means you need to end the round in a draw, and Z means you need to win. Good luck!"
    The total score is still calculated in the same way, but now you need to figure out what shape to choose so the round ends as indicated.
    The example above now goes like this:

    - In the first round, your opponent will choose Rock (A), and you need the round to end in a draw (Y), so you also choose Rock. This gives you a score of 1 + 3 = 4.
    - In the second round, your opponent will choose Paper (B), and you choose Rock so you lose (X) with a score of 1 + 0 = 1.
    - In the third round, you will defeat your opponent's Scissors with Rock for a score of 1 + 6 = 7.

    Now that you're correctly decrypting the ultra top secret strategy guide, you would get a total score of 12.

    Following the Elf's instructions for the second column, what would your total score be if everything goes exactly according to your strategy guide?
*/

export default () => {
    //as above each letter mean a Rock/Paper/Scissor moove so let's set them in objects for oponent and santa's mooves
    const oponent = {
        A: "Rock",
        B: "Paper",
        C: "Scissor"
    }

    const santa = {
        X: "Loose",
        Y: "Eiad", //End in a draw
        Z: "Win"
    }

    //try to test my code uncommenting "test" below and line 59. Be carefull to comment the return line 57 before
    //const test = ["A Y", "B X", "C Z"]

     return fs.readFileSync(path.join(process.cwd(), "./years/2022/in/day2.txt"), {encoding: "utf8"})
        .split('\r\n')
        /*return test*/.reduce((santaScore, mooves) => {
            //let's divide the string with letters wanted
            const [oponentLetter, santaLetter] = mooves.split(' ')
            //let's check wich moove is the letter
            const oponentMoove = oponent[oponentLetter];
            const santaAct = santa[santaLetter]

            /*
                now let's compare santaAct with oponentMoove using conditions 
                (this is the same trick than day 2.1 only change the points because santa is using Rocks/paper/Scisor depending if he want win loose or Eiad)
            */
            if (santaAct === "Win") {
                if (oponentMoove === "Rock") {
                    return santaScore += 2 + 6 //Rock points + the score for the outcome: you won
                } else if (oponentMoove === "Paper") {
                    return santaScore += 3 + 6 //Paper points + the score for the outcome: you won
                } else if (oponentMoove === "Scissor") {
                    return santaScore += 1 + 6 //Scissor points + the score for the outcome: you won
                }
            } else if (santaAct === "Eiad") {
                if(oponentMoove === "Rock") {
                    return santaScore += 1 + 3 //Rock points + the score for the outcome: the round was a draw
                }else if (oponentMoove === "Paper") {
                    return santaScore += 2 + 3 //Paper points + the score for the outcome: the round was a draw
                } else if (oponentMoove === "Scissor") {
                    return santaScore += 3 + 3 //Scissor points + the score for the outcome: the round was a draw
                }
            } else if (santaAct === "Loose"){
                if(oponentMoove === "Rock") {
                    return santaScore += 3 //Rock points + the score for the outcome: you lost, so nothing
                } else if (oponentMoove === "Paper") {
                    return santaScore += 1//Paper points + the score for the outcome: you won
                } else if (oponentMoove === "Scissor") {
                    return santaScore += 2 //Scissor points + the score for the outcome: the round was a draw
                }
            }
            
        },0)

}