const argv = process.argv;
const axios = require('axios');
const Parkbot = require('./parkbot.js');
const fs = require('fs');


async function main(path) {
  fs.readFile(path, 'utf8', function processFile(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    data = JSON.parse(data);
    let ParkBot = new Parkbot.Commands(data)
    if (argv[3] === "locate") {
      console.log(ParkBot.locate(argv[4]));
    }
    else if (argv[3] === "find_price_hourly_lte") {
      return console.log("Coming soon!")
    }
    else if (argv[3] === "find_price_hourly_gt") {
      console.log("Coming soon!")
    }
    else {
      throw new Error("Please enter a valid command.");
    }
  })
}

try {
  main(argv[2]);
} catch (err) {
  console.log(err);
}