import fs from "node:fs"
import path from "node:path"

/*
    Link here: https://adventofcode.com/2022/day/2
    The Elves begin to set up camp on the beach. To decide whose tent gets to be closest to the snack storage, a giant Rock Paper Scissors tournament is already in progress.
    Rock Paper Scissors is a game between two players. Each game contains many rounds; in each round, the players each simultaneously choose one of Rock, Paper,
    or Scissors using a hand shape. Then, a winner for that round is selected: Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock.
    If both players choose the same shape, the round instead ends in a draw.

    Appreciative of your help yesterday, one Elf gives you an encrypted strategy guide (your puzzle input) that they say will be sure to help you win.
    "The first column is what your opponent is going to play: A for Rock, B for Paper, and C for Scissors. The second column--" Suddenly,
    the Elf is called away to help with someone's tent.
    The second column, you reason, must be what you should play in response: X for Rock, Y for Paper, and Z for Scissors. 
    inning every time would be suspicious, so the responses must have been carefully chosen.
    The winner of the whole tournament is the player with the highest score. Your total score is the sum of your scores for each round.
    The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors) plus
    the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).

    Since you can't be sure if the Elf is trying to help you or trick you,
    you should calculate the score you would get if you were to follow the strategy guide.

    For example, suppose you were given the following strategy guide:

    A Y
    B X
    C Z

    This strategy guide predicts and recommends the following:

    - In the first round, your opponent will choose Rock (A), and you should choose Paper (Y). This ends in a win for you with a score of 8 (2 because you chose Paper + 6 because you won).
    - In the second round, your opponent will choose Paper (B), and you should choose Rock (X). This ends in a loss for you with a score of 1 (1 + 0).
    - The third round is a draw with both players choosing Scissors, giving you a score of 3 + 3 = 6.

    In this example, if you were to follow the strategy guide, you would get a total score of 15 (8 + 1 + 6).

    What would your total score be if everything goes exactly according to your strategy guide?
*/

export default () => {
    //as above each letter mean a Rock/Paper/Scissor moove so let's set them in objects for oponent and santa's mooves
    const oponent = {
        A: "Rock",
        B: "Paper",
        C: "Scissor"
    }

    const santa = {
        X: "Rock",
        Y: "Paper",
        Z: "Scissor"
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
            const santaMoove = santa[santaLetter]

            //now let's compare santaMoove with oponentMoove using conditions
            if (santaMoove === "Rock") {
                if (oponentMoove === "Rock") {
                    return santaScore += 1 + 3 //Rock points + the score for the outcome: the round was a draw
                } else if (oponentMoove === "Paper") {
                    return santaScore += 1 //Rock points + the score for the outcome: you lost, so nothing
                } else if (oponentMoove === "Scissor") {
                    return santaScore += 1 + 6 //Rock points + the score for the outcome: you won
                }
            } else if (santaMoove === "Paper") {
                if(oponentMoove === "Rock") {
                    return santaScore += 2 + 6 //Paper points + the score for the outcome: you won
                }else if (oponentMoove === "Paper") {
                    return santaScore += 2 + 3 //Paper points + the score for the outcome: the round was a draw
                } else if (oponentMoove === "Scissor") {
                    return santaScore += 2 //Paper points + the score for the outcome: you lost, so nothing
                }
            } else if (santaMoove === "Scissor"){
                if(oponentMoove === "Rock") {
                    return santaScore += 3 //Scissor points + the score for the outcome: you lost, so nothing
                } else if (oponentMoove === "Paper") {
                    return santaScore += 3 + 6 //Scissor points + the score for the outcome: you won
                } else if (oponentMoove === "Scissor") {
                    return santaScore += 3 + 3 //Scissor points + the score for the outcome: the round was a draw
                }
            }
            
        },0)

}