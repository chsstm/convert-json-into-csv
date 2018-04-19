## Convert JSON into CSV

It is a npm package with a function which receives a `JSON` object as a parameter and returns a `CSV` data to show in tabular form.

## New Features
1. Custom **key separator**.
2. Custom text **delimiter** and text **separator**.

## Setup process
1. Run **npm install convert-json-into-csv** 

## Function Parameters
1. **JSON object [Object:Required]** :- a JSON object which you want to convert to csv.
2. **Key Separator [String:Optional]** :- a symbol to separate the JSON key names of parent and child object. Default value is ` _ `.
4. **Delimeter [String:Optional]** :- a symbol to wrap the CSV value. Default value is ` " `.
3. **Value Separator [String:Optional]** :- a symbol to separate the diffent values of CSV. Default value is ` , `.

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
1. Custom column names instead of joined JSON keys.