const Parkbot = require("./commands.js")

const data = require("./data.json")

describe("Parkbot", function () {
  let ParkBot = new Parkbot.Commands(data);

  describe("location", function () {
    test('Test that locations are properly populated', function () {
      let results = ParkBot.locate("AZ")
      expect(results).toEqual(['Tempe Beach Park', 'Safeway', 'Azusa Ramen'])
    })
    // test("Test that location has been entered", function () {

    // })
    // test("Test that location is a valid state.", function () {

    // })
  })

  describe("findPriceHourlyLte", function () {
    test("Find prices lower than entered amount", function () {
      let results = ParkBot.findPriceHourlyLte(149)
      expect(results).toEqual(['AirGarage HQ']);
    })
    test("Find prices equal to entered amount", function () {
      let results = ParkBot.findPriceHourlyLte(150)
      expect(results).toEqual(['Tempe Beach Park', 'AirGarage HQ']);
    })
  })

  describe("findPriceHourlyGt", function () {
    test("Find prices greater than entered amount", function () {
      let results = ParkBot.findPriceHourlyGt(500)
      expect(results).toEqual(['Azusa Ramen']);
    })
    test("Does not find prices equal to entered amount", function () {
      let results = ParkBot.findPriceHourlyGt(500)
      expect(results).not.toEqual(expect.arrayContaining['Sweetgreen']);
    })
  })
})