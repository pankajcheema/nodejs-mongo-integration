/* eslint-disable strict */
let response = {};

//var SomeModel = require('./../models/TestModel');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const db = require('./../config/db')

class Test {
  constructer() {
    console.log('constructer called');
  }

  async insert(data) {

    const SomeModelSchema = new Schema({
      test: {
          type: String,
          min:[6,'min length should be 6'],
          required: true
      },    
      sirname: {
          type: Number,
          min: [3,'min 3 length'],
          required: true,
      }      
  });

  var SomeModel = mongoose.model('SomeModel', SomeModelSchema );

  var somemodel = new SomeModel({
      test:'aj',
      sirname: '1'    });

    var error=somemodel.validateSync()

    if(error){
      console.log(error);
    }
    console.log(error);
    return somemodel.save()

    
  }
  async Cat(data){
    var breakfastSchema = new Schema({
      eggs: {
        type: Number,
        min: [6, 'Too few eggs'],
        max: 12
      },
      bacon: {
        type: Number,
        required: [true, 'Why no bacon?']
      },
      drink: {
        type: String,
        enum: ['Coffee', 'Tea'],
        required: function() {
          return this.bacon > 3;
        }
      }
    });
    var Breakfast = mongoose.model('Breakfast', breakfastSchema);
    
    var badBreakfast = new Breakfast({
      eggs: 2,
      bacon: 0,
      drink: 'Milk'
    });
    var error = badBreakfast.validateSync();
    console.log(error);
  }
}

module.exports = new Test();
