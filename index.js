const unmodifiedTestArr = [1, 2, 3, 4]
const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}

    //collection can either be an array or object
// function myEach(collection, callback) {
//     //iterates over the collection of elements
//     //passing each element to the callback function
//     const objToArray = Object.values(collection)
//     objToArray.forEach(element => callback(element))
//     //return value is the original unmodified collection
//     return collection
// }


function myEach(collection, callback) {
    //iterates over the collection of elements
    //passing each element to the callback function
    const objToArray = Object.values(collection)
    for (let idx = 0; idx < objToArray.length; idx++) {
        callback(objToArray[idx]);
      }
    //return value is the original unmodified collection
    return collection
}

function myMap (collection, callback){
    const newArray = []
    const objToArray = Object.values(collection)
    for (let idx = 0; idx < objToArray.length; idx++) {
        newArray.push(callback(objToArray[idx]));
      }
      return newArray
}

function myReduce(collection, callback, initialValue){
    const objToArray = Object.values(collection)
    let acc = initialValue
    for (const element of array) {
        acc = callback(acc, element);
      }
      return acc
}

