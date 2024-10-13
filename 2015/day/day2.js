import fs from 'fs';
import path from 'path';

export default () => {
    let paperToOrder = 0;

    const presentsList = fs.readFileSync(path.join(process.cwd(), './2015/in/day2.txt'), { encoding: 'utf8' })
                            .split('\n');
    //some tests as exemple
    //const test1 = "2x3x4" //should result 58;
    //const test2 = "1x1x10" //Should result 43;

    //Function to calculate the needing paper by present
    const paperForPresent = (present) => {
        //let's split the datas l,w,h of the given present
        const [l,w,h] = present.split('x');
        //let's calculate the 3 areas
        const area1 = (l*w);
        const area2 = (w*h);
        const area3 = (h*l);
        //the function to calculate the Surface Area 2*l*w + 2*w*h + 2*h*l
        const surfaceArea = (area1,area2,area3) => {
            return area1*2 + area2*2 + area3*2;
        }
        //the function to calculate the extra paper needing so the smallest area
        const extraPaper =(area1, area2, area3) => {
            return Math.min(area1, area2, area3);
        }

        return surfaceArea(area1,area2,area3) + extraPaper(area1,area2,area3);
    }


    for (let present of presentsList) {
        paperToOrder += paperForPresent(present);
    }

    return paperToOrder;
}