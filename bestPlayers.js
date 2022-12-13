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
