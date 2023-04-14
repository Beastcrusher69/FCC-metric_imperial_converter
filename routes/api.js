'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert/input=:input').get((req,res)=>{

    let input = req.params.input;

    let initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);

    let returnNum = convertHandler.convert(initNum,initUnit);
    let returnUnit = convertHandler.getReturnUnit(initUnit);

    res.json({ initNum,initUnit,returnNum,returnUnit})
  })

};
