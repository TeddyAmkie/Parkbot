const { Search } = require("./search.js")

const data = require("./airgarage-data.json")

describe("Parkbot", function () {
  let Parkbot = new Search(data);

  describe("location", function () {
    test('Test that locations are properly populated', function () {
      let results = Parkbot.locate("AZ")
      expect(results).toEqual(['Tempe Beach Park', 'Safeway', 'Azusa Ramen'])
    })
    test("Test that a lower-case location works", function() {
      let results = Parkbot.locate("az")
      expect(results).toEqual(['Tempe Beach Park', 'Safeway', 'Azusa Ramen'])
    }) 
  })

  describe("findPriceHourlyLte", function () {
    test("Find prices lower than entered amount", function () {
      let results = Parkbot.findPriceHourlyLte(149)
      expect(results).toEqual(['AirGarage HQ']);
    })
    test("Find prices equal to entered amount", function () {
      let results = Parkbot.findPriceHourlyLte(150)
      expect(results).toEqual(['Tempe Beach Park', 'AirGarage HQ']);
    })
  })

  describe("findPriceHourlyGt", function () {
    test("Find prices greater than entered amount", function () {
      let results = Parkbot.findPriceHourlyGt(500)
      expect(results).toEqual(['Azusa Ramen']);
    })
    test("Does not find prices equal to entered amount", function () {
      let results = Parkbot.findPriceHourlyGt(500)
      expect(results).not.toEqual(expect.arrayContaining['Sweetgreen']);
    })
  })
})