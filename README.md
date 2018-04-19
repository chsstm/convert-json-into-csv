## Convert JSON into CSV

It is a npm package with a function which receives a `JSON` object as a parameter and returns a `CSV` data to show in tabular form.

## Setup process
1. Run **npm install convert-json-into-csv** 

## Use Method

#### Code :
```javascript
import JsonToCsv from 'convert-json-into-csv'; //ES6
//OR
const JsonToCsv = require('convert-json-into-csv'); //ES5

let csv = ``;
let json = {
    name: 'Saimon Thada Magar',
    company: 'ChicMic, Mohali, India',
    profession: 'Software Engineer'
}

csv = JsonToCsv(json);
console.log(csv);
```

#### Output (return value):
```
"name","company","profession"
"Saimon Thada Magar","ChicMic, Mohali, India","Software Engineer"
```

#### CSV Tabular View:
![CSV in tabluar view](https://raw.githubusercontent.com/chsstm/online-images/master/normal-csv-table.png)

## Upcoming new Features
1. User can select symbol for text **delimiter**.
2. User can select symbol for text **separation**.