const PORT = 5000;
const express = require("express");
const cors = require("cors");
const axios = require('axios')
const bodyParser = require('body-parser');

const app = express();

app.use(cors());

const config = {
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': '4JTjqMmvgC2WeZfzglpFAaiYVxDaLmPI1I43Is1U'
    }
}

app.post('/api/form', bodyParser.json(), (req, res) => {
    console.log(req.body)
    axios.post('https://json.freeastrologyapi.com/planets', req.body, config).then((response) => {
        res.json(response.data);
        console.log(response.data)
    }).catch((error) => {
        res.json(error);
    });

})

app.post('/api/chart', bodyParser.json(), (req, res) => {
    console.log(req.body)
    axios.post('https://json.freeastrologyapi.com/horoscope-chart-url', req.body, config).then((response) => {
        res.json(response.data);
        console.log(response.data)
    }).catch((error) => {
        res.json(error);
    });

})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
