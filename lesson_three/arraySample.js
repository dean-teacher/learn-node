var array = [];

array.push(1); //index 0
array[1] = 2; //index 1
array.push(3); //index 2

console.log(array);
console.log(array.join(","));
console.log(array.join(";"));

array[2] = 4; //index 2

console.log(array);
console.log(array.join(","));
console.log(array.join(";"));