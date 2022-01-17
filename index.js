const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/data/2.5/weather',(req, res) => res.send({
    "coord": {
      "lon": -123.262,
      "lat": 44.5646
    },
    "weather": [
      {
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 280.21,
      "feels_like": 280.21,
      "temp_min": 279.18,
      "temp_max": 285.07,
      "pressure": 1024,
      "humidity": 92
    },
    "visibility": 10000,
    "wind": {
      "speed": 0.45,
      "deg": 45,
      "gust": 0.45
    },
    "clouds": {
      "all": 100
    },
    "dt": 1642283492,
    "sys": {
      "type": 2,
      "id": 2040223,
      "country": "US",
      "sunrise": 1642261568,
      "sunset": 1642294710
    },
    "timezone": -28800,
    "id": 5720727,
    "name": "Corvallis",
    "cod": 200
  }
));
app.listen(PORT, () => console.log(`Server listening in port ${PORT}`))