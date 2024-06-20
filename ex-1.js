// Exercise #1: For Each Function

function forEach(array, operation, num) {
  // Start coding here
  const result = [];
  for (let i of array) {
    result.push(operation(i, num));
  }
  return result
}

function addSalaries(arr, num) {
  return arr + num
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = forEach(employeeSalaries, addSalaries, 5000); // function foreach

// Using `forEach` function here

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
