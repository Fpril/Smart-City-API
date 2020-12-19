const mongoose = require('../Config/database');
const carSchema = require('../Models/car.model');

carSchema.statics = {
    create: function (data, cb) {
        const car = new this(data);
        car.save(cb);
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

module.exports = mongoose.model('Car', carSchema);