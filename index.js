class JSONintoCSV {
    constructor(_keySeparator = '_', _delimiter = '"', _valueSeparator = ',') {
        this.keySeparator = _keySeparator;
        this.delimiter = _delimiter;
        this.valueSeparator = _valueSeparator;
        this.plainData = {};
        this.csv = ``;
    }
}

JSONintoCSV.prototype.parseCSV = (json) => {
    this.parseInner(json);
    this.writeHeader();
    this.writeRows();

    return this.csv;
}

//Get rows length
JSONintoCSV.prototype.getRowLength = () => {
    for (let key in plainData) {
        return plainData[key].length;
    }
}

//Get columns length
JSONintoCSV.prototype.getColLength = () => {
    return Object.keys(this.plainData).length;
}

//Writing column header with keys
JSONintoCSV.prototype.writeHeader = () => {
    let count = 0;
    for (let key in plainData) {
        csv += delimiter + key + delimiter + (count < cols - 1 ? valueSeparator : '\n');
        count++;
    }
}

//Writing row data with values
JSONintoCSV.prototype.writeRows = () => {
    let rows = this.getRowLength();
    let cols = this.getColLength();
    for (let row = 0; row < rows; row++) {
        let count = 0;
        for (let key in plainData) {
            if (plainData[key][row]) {
                csv += delimiter + plainData[key][row] + delimiter;
            } else {
                csv += delimiter + delimiter;
            }
            csv += count < cols - 1 ? valueSeparator : '\n';
            count++;
        }
    }
}

JSONintoCSV.prototype.parseInner = (json, parentKey) => {
    for (let key in json) {
        if (typeof (json[key]) === 'object') {
            this.parseNewObject(json, parent, key);
        } else {
            this.writeNewValue(json, parentKey, key);
        }
    }
}

JSONintoCSV.prototype.parseNewObject = (json, parentKey, key) => {
    let newKey = parentKey ? parentKey + keySeparator + key : key;
    if (!parentKey && Object.keys(json).length === 1) {
        newKey = null;
    }
    if (json[key].length > 0) {
        if (typeof (json[key][0]) === 'object') {
            for (let arrayObj of json[key]) {
                newData = this.parseInner(arrayObj, keySeparator, newData, newKey);
            }
        } else {
            for (let value of json[key]) {
                if (newData.hasOwnProperty(newKey) === true) {
                    newData[newKey].push(value);
                } else {
                    newData[newKey] = [];
                    newData[newKey].push(value);
                }

                let newLength = newData[newKey].length;
                for (let objKey in newData) {
                    if (newData[objKey].length === newLength) {
                        break;
                    }
                    while (newData[objKey].length < newLength) {
                        newData[objKey].push(null);
                    }
                }
            }
        }
    } else {
        newData = this.parseInner(json[key], keySeparator, newData, newKey);
    }
}

JSONintoCSV.prototype.writeNewValue = (json, parentKey, key) => {
    let value = json[key];
    let newKey = parentKey ? parentKey + keySeparator + key : key;
    if (newData.hasOwnProperty(newKey) === true) {
        newData[newKey].push(value);
    } else {
        newData[newKey] = [];
        let rows = getRowLength(plainData);
        while (rows - 1 > 0) {
            newData[newKey].push(null);
            rows--;
        }
        newData[newKey].push(value);
    }

    let newLength = newData[newKey].length;
    for (let objKey in newData) {
        if (newData[objKey].length === newLength) {
            break;
        }
        while (newData[objKey].length < newLength) {
            newData[objKey].push(null);
        }
    }
}

let parser = new JSONintoCSV();
parser.parseCSV({
    one: 1
})