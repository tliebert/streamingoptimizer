let bestPlayersObject = require("./bestPlayers");

// n is the total, x is the number of adds. N will normally be 7, for a whole week
// but can be adjusted for midweek chanages.

function integerPartition(n, x) {
  // Create an empty array to store the partitions
  const partitions = [];

  // Check if the input values are valid
  if (n >= x && x > 0) {
    //generate all possible partitions
    function generatePartitions(
      currentPartition,
      remainingSum,
      remainingMembers
    ) {
      // If the remaining sum is 0 and there are no more members left, the current partition is valid
      if (remainingSum === 0 && remainingMembers === 0) {
        partitions.push(currentPartition);
      } else {
        // Loop over numbers from 1 to the remaining sum
        for (let i = 1; i <= remainingSum; i++) {
          // Create a new partition by adding the current number to the current partition
          const newPartition = currentPartition.concat(i);
          // Generate all partitions using the new partition, a reduced remaining sum, and a reduced number of remaining members
          generatePartitions(
            newPartition,
            remainingSum - i,
            remainingMembers - 1
          );
        }
      }
    }

    // Actually generate all partitions starting with an empty current partition
    generatePartitions([], n, x);
  }

  return partitions;
}

// console.log(integerPartition(7, 5));
// console.log(integerPartition(7, 1));
// console.log(integerPartition(7, 2));

// generates each possible partition from given days and adds, and uses the bestDays object to calculate the optimal schedule
// best days requires that the optimal points for each "job" already be generated (i.e. we know the max for each subarray span in the week)

function calculateOptimalStreamingSlot(days, adds, bestDays) {
  const schedulesToTry = integerPartition(days, adds);
  let highestTotal = 0;
  let daysSchedule = [];
  let bestPlayers = [];

  schedulesToTry.forEach((schedule) => {
    console.log(schedule);

    // [1, 2, 3, 1] e.g.
    let total = 0;
    let startingIndex = 0;
    let players = [];

    schedule.forEach((dayUnit) => {
      console.log("day unit", dayUnit);
      console.log("starting index", startingIndex);
      total += bestDays[dayUnit][startingIndex][0];
      console.log(total);
      players.push(bestDays[dayUnit][startingIndex][1]);
      startingIndex += dayUnit;
    });

    if (total > highestTotal) {
      highestTotal = total;
      daysSchedule = schedule;
      bestPlayers = players;
    }
  });
  return { highestTotal, daysSchedule, bestPlayers };
}

// console.log(bestPlayersObject);
let bestStreamsObject = calculateOptimalStreamingSlot(7, 5, bestPlayersObject);
console.log(bestStreamsObject);
