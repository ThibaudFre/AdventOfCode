import fs from 'fs';
import path from 'path';

export default () => {
    let paperToOrder = 0;

    const presentsList = fs.readFileSync(path.join(process.cwd(), './2015/in/day2.txt'), { encoding: 'utf8' })
                            .split('\r\n');
    //some tests as exemple
    const test1 = "2x3x4" //should result 58;
    //const test2 = "1x1x10" //Should result 43;

    //Function to calculate the needing paper by present
    const RibbonPresent = (present) => {
        //let's split the datas l,w,h of the given present
        const [l,w,h] = present.split('x')
                                .map(x => parseInt(x));
        
        const feetRibbon = () => {
            return l + l + w + w;
        }
        
        const bowRibbon = () => {
            return l * w *h;
        }

        return feetRibbon() + bowRibbon();
    }


    for (let present of presentsList) {
        paperToOrder += RibbonPresent(present);
    }

    return paperToOrder;
}