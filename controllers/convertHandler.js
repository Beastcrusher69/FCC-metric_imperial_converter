function ConvertHandler() {

  let units = [['gal','L'],['mi','km'],['lbs','kg']];

  let regex = /[a-z]+|[^a-z]+/gi;
  
  this.getNum = function(input) {

   let result = input.match(regex)[0];

    if(Number(eval(result))){
      result = eval(result);
    return result;
      
    }

    else{
      
      if(units.includes(result)){
      result = 1;
      return result;
      }
      else{
        return 'invalid number';
      }
    }
  };
  
  this.getUnit = function(input) {
    let result = input.match(regex)[0];
  
    if(Number(eval(result))){
      result = input.match(regex)[1];  

      
      if(result.toUpperCase() === 'L'){
        result = result.toUpperCase();
        return result;
      }
      else{
        result = result.toLowerCase();
        return result;
      }
    }
    return resul;
     
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    for( let i=0 ; i<3 ;i++){
      for( let j=0 ; j<2 ;j++ ){
        if(initUnit === units[i][j]){
          
          if(j === 0){
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
     return 'invalid unit';
      };
    

   
  

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const miToKm = 1.60934;
    const lbsToKg = 0.453592;
    let result=1;
    

    switch(initUnit){

      case 'gal':
        result = initNum*galToL;
      break; 
      case 'L':
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

    result = result.toFixed(5);
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    result = initNum + ' ' + initUnit + ' converts to ' + returnNum + ' ' + returnUnit ;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
