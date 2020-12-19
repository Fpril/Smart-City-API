const carModel = require('../Data Access Objects/car.dao');

exports.createCar = (request, response, next) => {
    try {
        const car = request.body.car;
    
        carModel.create(car, (err, car) => {
            if (err) {
                response.json({
                    error: err
                });
            }
            response.json({
                message: "Car created successfully"
            });
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.getCars = (request, response, next) => {
    try {
        carModel.read({}, (err, cars) => {
            if (err) {
                response.json({
                    error: err
                });
            }
            response.json({
                cars: cars
            });
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.getCar = (request, response, next) => {
    try {
        carModel.read({name: request.params.id}, (err, car) => {
            if (err) {
                response.json({
                    error: err
                });
            }
            response.json({
                car: car
            });
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.updateCar = (request, response, next) => {
    try {
        const car = request.body.car;
    
        carModel.update({_id: request.params.id}, car, (err, car) => {
            if (err) {
                response.json({
                    error: err
                });
            }
            response.json({
                message: "Car updated successfully"
            });
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.removeCar = (request, response, next) => {
    try {
        carModel.delete({_id: request.params.id}, (err, car) => {
            if (err) {
                response.json({
                    error: err
                });
            }
            response.json({
                message: "Car deleted successfully",
                car: car
            });
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}