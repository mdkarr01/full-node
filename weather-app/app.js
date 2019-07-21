const request = require("request");

// const url =
//   "https://api.darksky.net/forecast/a74881a8e9a091a88951a9796eccd71a/37.8267,-122.4233";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log('Oops!');
//   } else if (response.body.error) {
//     console.log('Bad location');
//   } else {
//     console.log(
//       `${response.body.daily.data[0].summary} The temp is currently ${
//       response.body.currently.temperature
//       } degrees with a ${
//       response.body.currently.precipProbability
//       }% chance of rain.`
//     );
//   }
// });

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.eyJ1IjoibWRrYXJyMDEiLCJhIjoiY2p4b3Zma2g5MGI1ZDNscXVtYjNjcjR6ZyJ9.Jx5abht67MVH6IP6khTtSQ&limit=1";

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log('No connection');
  } else if (response.body.features.length === 0) {
    console.log('Oh no!');
  } else {
    const placename = response.body.features[0].place_name;
    console.log(
      `The latitude and longitude for ${placename} is ${
      response.body.features[0].center[1]
      } lat and ${response.body.features[0].center[0]} long.`
    );
  }
});
