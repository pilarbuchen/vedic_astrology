const PORT = 5000;
const express = require("express");
const cors = require("cors");
const axios = require('axios')
const bodyParser = require('body-parser');

const app = express();

app.use(cors());

app.get('/api',(req,res) => {
    res.send('From server')
})

app.post('/api/form',bodyParser.json(), (req, res) => {
    console.log(req.body)
    axios.post('https://json.freeastrologyapi.com/planets', req.body
        , {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': '4JTjqMmvgC2WeZfzglpFAaiYVxDaLmPI1I43Is1U'
            }
          }).then((response) => {
            res.json(response.data);
            console.log(response.data)
        }).catch((error) => {
            res.json(error);
        });
})

// app.get("/", async (req, res) => {
//     await axios.post('https://json.freeastrologyapi.com/planets', await req.body
//     , {
//         headers: {
//             'Content-Type': 'application/json',
//             'x-api-key': '4JTjqMmvgC2WeZfzglpFAaiYVxDaLmPI1I43Is1U'
//         }
//       }).then((response) => {
//         console.log(req.body.data)
//         res.json(response.data);
//         console.log(response.data)
//     }).catch((error) => {
//         res.json(error);
//     });
// });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

