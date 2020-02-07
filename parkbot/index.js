const argv = process.argv;
const Parkbot = require('./commands.js');
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
      console.log(ParkBot.findPriceHourlyLte(argv[4]))
    }
    else if (argv[3] === "find_price_hourly_gt") {
      console.log(ParkBot.findPriceHourlyGt(argv[4]))
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