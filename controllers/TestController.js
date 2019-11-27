/* eslint-disable strict */
let response = {};


const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var SomeModel = require('./../models/TestModel');

const db = require('./../config/db')

class Test {
  constructer() {
    console.log('constructer called');
  }

  async insert(data) {

  
  var somemodel = new SomeModel(data);

    var error=somemodel.validateSync()

    if(error){
      response.error=error.errors;
      response.httpstatus=400;
      response.message="validation error";
      return response;
    }
    
    let result = somemodel.save() 
    response.data=result;
    response.httpstatus=200;
    response.message="success";

    return response;

    
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
        min: 6,
        required: true
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
