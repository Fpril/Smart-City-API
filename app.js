const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = require('./Config/properties').PORT;

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('', (req, res) => {
    res.json({
        message: 'Connected'
    });
});

var router = express.Router();
app.use('/car', router);
require('./Routes/car.routes')(router);

var router = express.Router();
app.use('/order', router);
require('./Routes/order.routes')(router);

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on ${process.env.PORT || PORT} port.`);
});