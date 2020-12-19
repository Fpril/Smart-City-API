const carController = require('../Controllers/car.controller');

module.exports = router => {
    router.post('/create', carController.createCar);
    router.get('/read', carController.getCars);
    router.get('/read/:id', carController.getCar);
    router.put('/update/:id', carController.updateCar);
    router.delete('/delete/:id', carController.removeCar);
}