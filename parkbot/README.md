# AirGarage Coding Challenge -- ParkBot 🚙🤖
Challenge link: https://gist.github.com/scottfits/e4f7a2e607934a6bd2f6239521456280

### Install Instructions

Clone the repo: 
```git clone https://github.com/TeddyAmkie/Parkbot/tree/master/parkbot```

Install packages:
```
cd parkbot
npm install
```
Add the script to run from terminal properly:
```chmod +x parkbot```

### Running the ParkBot Script:

./parkbot airgarage-data.json [command] [argument]

Possible commands:

#### Locate - Locate all locations within a state(2-letter abreviation only):

./parkbot airgarage-data.json locate [location]

```./parkbot airgarage-data.json locate CA``

Expected output:
```Tempe Beach Park, Safeway, Azusa Ramen```

#### find_price_hourly_lte - Find prices lower or equal to the argument given(in cents).

./parkbot airgarage-data.json find_price_hourly_lte [price]

```./parkbot airgarage-data.json find_price_hourly_lte 200```

Expected output:
[ 'Church of 8 Wheels',
  'Tempe Beach Park',
  'AirGarage HQ',
  'Safeway',
  'Walgreens',
  'Goldilocks Pizza',
  'The Salon',
  'Archer Salon' ]

#### find_price_hourly_lte - Find prices lower or equal to the argument given(in cents).

./parkbot airgarage-data.json find_price_hourly_lte [price]

```./parkbot airgarage-data.json find_price_hourly_gt 200```

Expected output:
[ 'Sweetgreen', 'Sandwiches n More', 'Azusa Ramen' ]

### Tests
To run the test suite:

```
 jest ```



