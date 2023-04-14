function ConvertHandler() {

  let units = [['gal','l'],['mi','km'],['lbs','kg']];

  let regex = /[a-z]+|[^a-z]+/gi;
  
  this.getNum = function(input) {

   let result = input.match(regex)[0];

    if(isNumber(Number(result)))
    return result;

    else{
      result = 1;
      return result;
    }
  };
  
  this.getUnit = function(input) {
    let result = input.match(regex)[0];
  
    if(isNumber(Number(result))){
      result = input.match(regex)[1];  
    return result;
    }
    return result;
     
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;

    let iUnit = initUnit.toLowerCase();

    for( let i=0 ; i<3 ;i++){
      for( let j=0 ; j<2 ;j++ ){
        if(iUnit === units[i][j]){
          
          if(j === 0){
            if(i===0){
              result = units[0][1].toUpperCase();
              return result;
            }
            result = units[i][1];
            return result;

          }
          else{
            result = units[i][0];
            return result;
          }
        }
      }
    }

    return 'invalid';
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const miToKm = 1.60934;
    const lbsToKg = 0.453592;
    let result;
    let iUnit = initUnit.toLowerCase();

    switch(initUnit){

      case 'gal':
        result = initNum*galToL;
      break; 
      case 'l':
        result = initNum/galToL;
      break; 
      case 'mi':
        result = initNum*miToKm;
      break; 
      case 'km':
        result = initNum/miToKm;
      break; 
      case 'lbs':
        result = initNum*lbsToKg;
      break;
      case 'kg':
        result = initNum/lbsToKg;
      break; 
    }

    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    result = '${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}'
    
    return result;
  };
  
}

module.exports = ConvertHandler;
