export function csvText_to_json(data){
    const splitEachLine = data.split('\n');
    console.log(splitEachLine);
    let topLine = undefined;
    let returnData =[];
    splitEachLine.forEach((element,index) => {
        const splitCommaEachLine = element.split(',');
        switch(index){
            case 0:
                topLine = splitCommaEachLine;
                break;
            default:
                if(element == ""){
                    break;
                }
                const makeObject = {}
                for(let d=0; d<splitCommaEachLine.length; d++){
                    makeObject[topLine[d]] = splitCommaEachLine[d];
                }
                returnData.push(makeObject);
                break;
        }
    });
    return returnData;
}