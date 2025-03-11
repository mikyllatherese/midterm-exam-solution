// function to count the numbers
function countProperties(obj) {
    return Object.keys(obj).length;  
}

//example usage
const exampleObject = { a: 1, b: 2, c: 3 };
console.log(countProperties(exampleObject));
