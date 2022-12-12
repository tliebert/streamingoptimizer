let combo = require("./schedulemaker");

console.log("hello world");

const p1 = [0, 1, 0, 1, 1, 0, 0];
const p2 = [0, 0, 0, 0, 0, 1, 1];
const p3 = [1, 0, 1, 0, 0, 1, 0];

const allPlayers = [p1, p2, p3];

const exampleAvailability = [1, 2, 1, 2, 2, 1, 2];

function createCombosFromTwoPlayers(availabilityArray) {
  let scheduleLength = availabilityArray.length;
  // create loop that either adds p1 or p2
  let arrayOfSchedules = [];

  for (let i = 0; i <= scheduleLength; i++) {
    const singleCombo = [];

    for (let j = i; j < scheduleLength; j++) {
      // 0, j < 7, j++
      singleCombo.push("p1");
    }
    for (let j = 0; j < i; j++) {
      //7 - 0, 7 > 0, 7-- 7
      singleCombo.push("p2");
    }

    arrayOfSchedules.push(singleCombo);
    let reversedCombo = [...singleCombo].reverse();
    arrayOfSchedules.push(reversedCombo);
  }
  console.log(arrayOfSchedules.length);
  return arrayOfSchedules;
}

let allCombos = createCombosFromTwoPlayers(exampleAvailability);

// function findMaxCombo(arrayOfSchedules) {
//   let maxIndex = arrayOfSchedules.reduce(reducerfn, [0, 0]);
//   return arrayOfSchedules[maxIndex[1]];
// }

// function reducerfn(prev, current, index) {
//   let p1val = 22;
//   let p2val = 23;
//   let total = 0;
//   current.forEach((item) => {
//     total += item === "p1" ? p1val : p2val;
//   });
//   console.log(total);
//   if (total > prev[0]) {
//     return [total, index];
//   }
//   return prev;
// }

function findOptimalSchedule(allCombos) {
    function cb(prev, current, index) {
        current.
    }

    let result = allCombos.reduce(cb, 0)
}

function findOptimnalComboSchedule(comboOfPlayers) {
    
}

var fruits = ["apple", "banana", "lemon", "mango", "ugly"];
console.log(combo(fruits, 2, 2));

let answerSchedule = findMaxCombo(allCombos);
console.log(answerSchedule);
