/**
 * Loop through an object and print the key-value pairs with their types

 * key: name | type:  string
    key: age | type:  number
    key: city | type:  string
    key: isStudent | type:  boolean

 */

let myObjects = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

const keys = Object.keys(myObjects);
console.log(keys);

for(const key of keys){
    console.log(key, ':', typeof myObjects[key])
}