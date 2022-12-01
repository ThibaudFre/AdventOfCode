import fs from "node:fs"
import path from "node:path";

/*
    Fuel itself requires fuel just like a module - take its mass, divide by three, round down, and subtract 2. However,
    that fuel also requires fuel, and that fuel requires fuel, and so on. Any mass that would require negative fuel should instead be treated as if it requires zero fuel;
    the remaining mass, if any, is instead handled by wishing really hard, which has no mass and is outside the scope of this calculation.

    So, for each module mass, calculate its fuel and add it to the total. Then, treat the fuel amount you just calculated as the input mass and repeat the process,
    continuing until a fuel requirement is zero or negative. 
    
    For example:

    - A module of mass 14 requires 2 fuel. This fuel requires no further fuel (2 divided by 3 and rounded down is 0, which would call for a negative fuel), 
    so the total fuel required is still just 2.
    - At first, a module of mass 1969 requires 654 fuel. Then, this fuel requires 216 more fuel (654 / 3 - 2). 216 then requires 70 more fuel,
    which requires 21 fuel, which requires 5 fuel, which requires no further fuel. So, the total fuel required for a module of mass 1969 is 654 + 216 + 70 + 21 + 5 = 966.
    - The fuel required by a module of mass 100756 and its fuel is: 33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = 50346.

    What is the sum of the fuel requirements for all of the modules on your spacecraft when also taking into account the mass of the added fuel?
    (Calculate the fuel requirements for each module separately, then add them all up at the end.)
*/

export default () => {
    const deeps = fs.readFileSync(path.join(process.cwd(), '/years/2019/in/day1.txt'), {encoding: "utf8"})
        .split('\r\n')
        .map(nb => parseInt(nb))

        //you can uncomment the "const test" and change "deeps" by "test" to test it with less numbers.
        //const test = [14, 1969, 100756]

        return deeps.reduce((acc,curr) => {
            //my array containing all the mass calculated ny calculateFuel(curr) method
            const totalFuel = [];
            //my method to calculate the Fuel needing depending of the mass while it is over 0
            const calculateFuel = (mass) => {
                //calcul to know how fuel is needing by the mass
                const fuel = Math.floor(mass/3) - 2
                // if the fuel calculated is more than zero so...
                if(fuel > 0) {
                    totalFuel.push(fuel)
                    calculateFuel(fuel);
                }
            }
            
            calculateFuel(curr);
            //I return to the accumulator of the deeps.reduce the sum of all the totalFuel numbers
            return acc += totalFuel.reduce((a,b) => a + b);
        },0)

}