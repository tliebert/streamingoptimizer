const YahooFantasy = require("yahoo-fantasy");

const leagueId = "60192"; // Replace with your league ID

const yf = new YahooFantasy();

yf.league
  .meta("nba.l.60162", function cb(err, data) {
    console.log(err);
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//418 for nba 2022
