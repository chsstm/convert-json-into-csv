## Convert JSON into CSV

```
     ___     _________      __________      _____     ___
    /\  \   /\   _____\    /\   ____  \    /\    \   /\  \
    \ \  \  \ \  \____/    \ \  \__/\  \   \ \  \  \ \ \  \
     \ \  \  \ \  \_______  \ \  \ \ \  \   \ \  \\  \\ \  \
  __  \ \  \  \ \_______  \  \ \  \ \ \  \   \ \  \ \  \ \  \
 /\  \ \ \  \  \/______/\  \  \ \  \ \ \  \   \ \  \\ \  \\  \
 \ \  \_\_\  \     ____\_\  \  \ \  \_\_\  \   \ \  \ \ \  \  \
  \ \_________\   /\_________\  \ \_________\   \ \__\  \ \____\
   \/_________/   \/_________/   \/_________/    \/__/   \/____/

 ____________     __________
/\____   ____\   /\   ____  \
\/___/\  \___/   \ \  \__/\  \
     \ \  \       \ \  \ \ \  \
      \ \  \       \ \  \ \ \  \
       \ \  \       \ \  \ \ \  \
        \ \  \       \ \  \_\_\  \
         \ \__\       \ \_________\
          \/__/        \/_________/

 _________     _________      ___    ___
/\   _____\   /\   _____\    /\  \  /\  \
\ \  \____/   \ \  \____/    \ \  \ \ \  \
 \ \  \        \ \  \_______  \ \  \ \ \  \
  \ \  \        \ \_______  \  \ \  \ \ \  \
   \ \  \        \/______/\  \  \ \  \ \/  /
    \ \  \______     ____\_\  \  \ \  \/  /
     \ \________\   /\_________\  \ \____/  
      \/________/   \/_________/   \/___/

                             
```

It is a npm package with a function which receives a `JSON` object as a parameter and returns a `CSV` data to show in tabular form.

## New Features
:white_check_mark: &nbsp;&nbsp; Custom **key separator** :boom: <br/>
:white_check_mark: &nbsp;&nbsp; Custom text **delimiter** and text **separator** :boom:

## Setup process
```
npm install convert-json-into-csv --save
```

## Function Parameters
1. **JSON object [Object:Required]** :- a JSON object which you want to convert to csv.
2. **Key Separator [String:Optional]** :- a symbol to separate the JSON key names of parent and child object. Default value is ` _ `.
4. **Delimeter [String:Optional]** :- a symbol to wrap the CSV value. Default value is ` " `.
3. **Value Separator [String:Optional]** :- a symbol to separate the diffent values of CSV. Default value is ` , `.

## Use Method

#### Example 1 :
```javascript
import JsonToCsv from 'convert-json-into-csv'; //ES6
//OR
const JsonToCsv = require('convert-json-into-csv'); //ES5

let csv = ``;
let json = {
    name: 'Saimon Thada Magar',
    company: 'ChicMic, Mohali, India',
    profession: 'Software Engineer',
    address: {
        city: 'Khoptar -4, Rampur',
        country: 'Nepal'
    }
}

csv = JsonToCsv(json);
console.log(csv);
```

#### Output (return value):
```
"name","email","address_city","address_country"
"Saimon Thada Magar","xyz@abc.com","Khoptar -4, Rampur","Nepal"
```

#### CSV Tabular View:
name | email | address_city | address_country
---- | ----- | ------------ | ---------------
Saimon Thada Magar | xyz@abc.com | Khoptar -4, Rampur | Nepal

#### Example 2 :
```javascript
import JsonToCsv from 'convert-json-into-csv'; //ES6
//OR
const JsonToCsv = require('convert-json-into-csv'); //ES5

let csv = ``;
let json = {
    name: 'Saimon Thada Magar',
    email: 'xyz@abc.com',
    address: {
        city: 'Khoptar -4, Rampur',
        country: 'Nepal'
    },
    hobbies: ['Programming','Music','Sports']
}

csv = JsonToCsv(json,'-',"'",'.');
console.log(csv);
```

#### Output (return value):
```
'name'.'email'.'address-city'.'address-country'.'hobbies'
'Saimon Thada Magar'.'xyz@abc.com'.'Khoptar -4, Rampur'.'Nepal'.'Programming'
''.''.''.''.'Music'
''.''.''.''.'Sports'
```

#### CSV Tabular View:
name | email | address_city | address_country | hobbies
---- | ----- | ------------ | --------------- | ------
Saimon Thada Magar | xyz@abc.com | Khoptar -4, Rampur | Nepal | Programming
| | | | | Music
| | | | | Sports


## Upcoming new Features 
:soon: Custom column names instead of joined JSON keys.