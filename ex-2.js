//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = qualityCheck(count, studentScoresRoom1, 70, 5, 1);
let scoreRoom2Result = qualityCheck(count, studentScoresRoom2, 70, 5, 2);;
let scoreRoom3Result = qualityCheck(count, studentScoresRoom3, 70, 5, 3);;

//function that count numbers of students that pass the 70 criteria
function count(arr, point){
  let counter = 0;

  for (let i of arr) {
    if (i >= point) {
      counter = counter + 1
    }
  }
  return counter;
}

//function higher-order function that show the resut base on criteria

  function qualityCheck(callbackOperation, array, point, criteria, roomNum) {
    let result = callbackOperation(array, point);
    let message;

    if (result >= criteria) {
      message = `นักเรียนห้องที่ ${roomNum} ผ่านเกณฑ์`;
    } else {
      message = `นักเรียนห้องที่ ${roomNum} ไม่ผ่านเกณฑ์`;
    }
    return message
  }

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
