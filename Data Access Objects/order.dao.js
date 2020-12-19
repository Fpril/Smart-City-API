const mongoose = require('../Config/database');
const orderSchema = require('../Models/order.model');

orderSchema.statics = {
    create: function (data, cb) {
        const order = new this(data);
        order.save(cb);
    },

    read: function (query, cb) {
        this.find(query, cb);
    },

    update: function (query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData}, {new: true}, cb);
    },

    delete: function (query, cb) {
        this.findOneAndDelete(query, cb);
    }
}

module.exports = mongoose.model('Order', orderSchema);