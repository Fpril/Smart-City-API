const orderModel = require('../Data Access Objects/order.dao');

exports.createOrder = (request, response, next) => {
    try {
        const order = request.body.order;
    
        orderModel.create(order, (err, order) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                response.json({
                    message: "Order created successfully"
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.getOrders = (request, response, next) => {
    try {
        orderModel.read({}, (err, orders) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                response.json({
                    orders: orders
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.getOrders = (request, response, next) => {
    try {
        orderModel.read({name: request.params.id}, (err, order) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                response.json({
                    order: order
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.updateOrder = (request, response, next) => {
    try {
        const order = request.body.order;
    
        orderModel.update({_id: request.params.id}, order, (err, order) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                response.json({
                    message: "Order updated successfully"
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.removeOrder = (request, response, next) => {
    try {
        orderModel.delete({_id: request.params.id}, (err, order) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                response.json({
                    message: "Order deleted successfully",
                    order: order
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}