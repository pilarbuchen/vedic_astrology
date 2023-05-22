
const PORT = 8080;
const express = require("express");
const cors = require("cors");
const axios = require('axios')
const request = require('request');

require("dotenv").config();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    const options = {
        method: "POST",
        url: "https://json.freeastrologyapi.com/planets",
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': '4JTjqMmvgC2WeZfzglpFAaiYVxDaLmPI1I43Is1U'
        },
        body: JSON.stringify({
            "year": 2022,
            "month": 8,
            "date": 11,
            "hours": 6,
            "minutes": 0,
            "seconds": 0,
            "latitude": 17.38333,
            "longitude": 78.4666,
            "timezone": 5.5,
            "settings": {
              "observation_point": "topocentric",
              "ayanamsha": "lahiri"
            }
          })
    };


   
    // axios.request(options).then((response) => {
    //     res.json(response.data);
    //     console.log(response.data)
    // }).catch((error) => {
    //     res.json(error);
    // });

    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
      });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
