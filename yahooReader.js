const YahooFantasy = require("yahoo-fantasy");

const leagueId = "60192"; // Replace with your league ID

const yf = new YahooFantasy(
  "dj0yJmk9S01VTGVXRWRabDQ4JmQ9WVdrOVEyeHZTMXBEWm00bWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTY3",
  "e4efe6b2cd83db4b7b778aea3130e592e363a147"
);

yf.league
  .meta("nba.l.60162", function cb(err, data) {
    console.log(err);
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//418 for nba 2022
