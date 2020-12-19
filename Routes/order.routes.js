const orderController = require('../Controllers/order.controller');

module.exports = router => {
    router.post('/create', orderController.createOrder);
    router.get('/read', orderController.getOrders);
    router.get('/read/:id', orderController.getOrders);
    router.put('/update/:id', orderController.updateOrder);
    router.delete('/delete/:id', orderController.removeOrder);
}