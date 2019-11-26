
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const SomeModelSchema = new Schema({
    test: {
        type: String,
        min:[6,'min length should be 6'],
        required: true
    },    
    sirname: {
        type: String,
        min: [3,'min 3 length'],
        required: true,
    },
    
});
const SomeModel = mongoose.model('SomeModel', SomeModelSchema );
//module.exports.SomeModelSchema = SomeModelSchema;
module.exports = SomeModel; 