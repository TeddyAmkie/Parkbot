
// Pass in 
class Commands {
  constructor(data) {
    this.data = data
  }

  locate(location) {
    let locations = []
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].address.state === location) {
        locations.push(this.data[i].name)
      }
    }
    return locations;
  }

  findPriceHourlyLte(price) {
    let locations = []
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].price_hourly <= price) {
        locations.push(this.data[i].name)
      }
    }
    return locations;
  }

  findPriceHourlyGt(price) {
    let locations = []
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].price_hourly > price) {
        locations.push(this.data[i].name)
      }
    }
    return locations;
  }
}

module.exports = {
  Commands
}