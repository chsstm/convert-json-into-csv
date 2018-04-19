export default JSONintoCSV = (json,keySeparator = '_',delimiter = '"',valueSeparator = ',') => {
    var plainData = {};
    var csv = ``;

    plainData = parseInner(json,keySeparator,plainData);

    let rows = getRowLength(plainData);
    let cols = Object.keys(plainData).length;

    let count = 0;
    //Writing column header with keys
    for(let key in plainData){
        csv += delimiter+key+delimiter+ (count < cols-1? valueSeparator:'\n');
        count++;
    }

    //Writing row data with values
    for(let row=0; row<rows; row++){
        let count = 0;
        for(let key in plainData){
            if(plainData[key][row]){
                csv += delimiter+plainData[key][row]+delimiter;
            }else{
                csv += delimiter+delimiter;
            }
            csv += count < cols-1? valueSeparator:'\n';
            count++;
        }
    }

    return csv;
}

//Get rows length
function getRowLength(plainData){
    for(let key in plainData){
        return plainData[key].length;
    }
}

function parseInner(json,keySeparator,plainData,parentKey){
    let newData = plainData;
    for(let key in json){
        if(typeof(json[key]) === 'object'){
            let newKey = parentKey? parentKey + keySeparator + key:key;
            if(!parentKey && Object.keys(json).length === 1){
                newKey = null;
            }
            if(json[key].length > 0){
                if(typeof(json[key][0]) === 'object'){
                    for(let arrayObj of json[key]){
                        newData = parseInner(arrayObj,keySeparator,newData,newKey);
                    }
                }else{
                    for(let value of json[key]){
                        if(newData.hasOwnProperty(newKey) ===  true){
                            newData[newKey].push(value);
                        }else{
                            newData[newKey] = [];
                            newData[newKey].push(value);
                        }

                        let newLength = newData[newKey].length;
                        for(let objKey in newData){
                            if(newData[objKey].length === newLength){
                                break;
                            }
                            while(newData[objKey].length < newLength){
                                newData[objKey].push(null);
                            }
                        }
                    }
                }
            }else{
                newData = parseInner(json[key],keySeparator,newData,newKey);
            }
        }else{
            let value = json[key];
            let newKey = parentKey? parentKey + keySeparator + key:key;
            if(newData.hasOwnProperty(newKey) ===  true){
                newData[newKey].push(value);
            }else{
                newData[newKey] = [];
                let rows = getRowLength(plainData);
                while(rows-1 > 0){
                    newData[newKey].push(null);
                    rows--;
                }
                newData[newKey].push(value);
            }

            let newLength = newData[newKey].length;
            for(let objKey in newData){
                if(newData[objKey].length === newLength){
                    break;
                }
                while(newData[objKey].length < newLength){
                    newData[objKey].push(null);
                }
            }
        }
    }
    return plainData;
}