const exampleList = [
  [32.5, [1, 0, 0, 1, 0, 1, 0], "P1"],
  [28, [1, 0, 0, 1, 0, 1, 1], "P2"],
  [23.4, [0, 1, 1, 0, 0, 1, 0], "P3"],
  [24.7, [1, 0, 1, 1, 0, 0, 1], "P4"],
  [25, [0, 1, 1, 0, 0, 0, 1], "P5"],
];

function sortRawPlayerInfo(rawInfo) {
  let sorted = rawInfo.sort((a, b) => {
    a[0] > b[0];
  });
  return sorted;
}

function createSubarrays(arr) {
  const subarrays = [];

  // Iterate over the original array and create subarrays of all possible lengths
  for (let n = 1; n <= arr.length; n++) {
    for (let i = 0; i <= arr.length - n; i++) {
      // Get the subarray of length n starting at index i
      const subarray = arr.slice(i, i + n);
      // Add the subarray to the list of subarrays
      subarrays.push(subarray);
    }
  }
  return subarrays;
}

function findBestPlayer(players, subarrays) {
  // Create an empty list to store the sums for each player
  const sums = [];

  // Iterate over the players
  for (let player of players) {
    // Get the points value and the subarray for the current player
    const points = player[0];
    const playerSubarray = player[1];

    // Create a variable to store the sum for the current player
    let sum = 0;

    // Iterate over the subarrays and calculate the sum for the current player
    for (let subarray of subarrays) {
      for (let i = 0; i < subarray.length; i++) {
        if (subarray[i] === 1 && playerSubarray[i] === 1) {
          sum += points;
        }
      }
    }

    // Add the sum for the current player to the list of sums
    sums.push(sum);
  }

  // Find the index of the player with the highest sum
  const bestPlayerIndex = sums.indexOf(Math.max(...sums));

  // Return the player with the highest sum
  return players[bestPlayerIndex];
}

console.log(sortRawPlayerInfo(exampleList));

function createBestPlayersObject(processedList) {}

// example object best players object returned from the processing of the array of every player

const bestPerformancesObject = {
  1: {
    0: [23, "P1"],
    1: [24, "P4"],
    2: [24, "P4"],
    3: [23, "P1"],
    4: [24, "P4"],
    5: [24, "P4"],
    6: [23, "P1"],
  },
  2: {
    0: [42, "P2"],
    1: [48, "P4"],
    2: [24, "P4"],
    3: [24, "P4"],
    4: [24, "P4"],
    5: [44, "P3"],
  },
  3: {
    0: [63, "P2"],
    1: [48, "P4"],
    2: [48, "P4"],
    3: [44, "P3"],
    4: [44, "P3"],
  },
  4: {
    0: [63, "P2"],
    1: [72, "P4"],
    2: [48, "P4"],
    3: [66, "P3"],
  },
  5: {
    0: [72, "P4"],
    1: [72, "P4"],
    2: [66, "P3"],
  },
  6: {
    0: [72, "P4"],
    1: [72, "P4"],
  },
  7: {
    0: [72, "P4"],
  },
};

module.exports = bestPerformancesObject;

// https://api.login.yahoo.com/oauth2/request_auth?client_id=dj0yJmk9S01VTGVXRWRabDQ4JmQ9WVdrOVEyeHZTMXBEWm00bWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTY3&redirect_uri=oob&response_type=code&language=en-us

// Sharing Approval code: ngmuc4e
