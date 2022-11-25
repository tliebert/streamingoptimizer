const examplePlayer1 = {
  name: "Thomas",
  ppg: 25,
  schedule: [1, 1, 1, 0],
};

const examplePlayer2 = {
  name: "John",
  ppg: 26,
  schedule: [0, 0, 0, 1],
};

const examplePlayer3 = {
  name: "MC",
  ppg: 26,
  schedule: [0, 0, 1, 0],
};

const examplePlayer4 = {
  name: "JJ",
  ppg: 22,
  schedule: [1, 1, 1, 1],
};

const examplePlayer5 = {
  name: "Poboy",
  ppg: 27,
  schedule: [0, 0, 1, 0],
};

const examplePlayer6 = {
  name: "Tre",
  ppg: 20,
  schedule: [1, 0, 1, 0],
};

let everyPlayer = [
  examplePlayer1,
  examplePlayer2,
  examplePlayer3,
  examplePlayer4,
  examplePlayer5,
  examplePlayer6,
];

everyPlayer.sort((a, b) => {
  return a.ppg > b.ppg ? -1 : 1;
});

function createAllSubarrays(arrayOfArrays) {
  let allCombos;
  arrayOfArrays.flatMap((curent, index, wholeArray) => {
    wholeArray.slice(i);
  });

  return allCombos;
}

var fruits = ["apple", "banana", "lemon", "mango", "ugly"];

// var result = fruits.flatMap((v, i) =>
//   fruits.slice(i + 1).map((w) => v + " " + w)
// );

// console.log(result);

var combo = function (a, min, max) {
  console.time("comboclock");
  min = min || 1;
  max = max < a.length ? max : a.length;
  var fn = function (n, src, got, all) {
    if (n == 0) {
      if (got.length > 0 && got.length === max) {
        all[all.length] = got;
      }
      return;
    }
    for (var j = 0; j < src.length; j++) {
      fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
    }
    return;
  };
  var all = [];
  for (var i = min; i < a.length; i++) {
    fn(i, a, [], all);
  }
  if (a.length == max) {
    all.push(a);
  }
  console.timeEnd("comboclock");
  return all;
};

console.log("combo method", combo(everyPlayer, 4, 4));
