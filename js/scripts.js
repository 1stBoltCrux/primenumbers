$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    function isPrime(num) {
      if(num < 2) return false;
      for (var i = 2; i < num; i++) {
        if(num%i==0)
          return false;
    }
    return true;
    }

    var number1 = parseInt($("#input").val());
    var number2 = 2
    var array = [];
    var newArray = [];
    for (number2; number2 <= number1; number2 += 1) {
      array.push(number2);
    }
    console.log(number2);
    console.log(array);
    for(var index = 0; index < number1; index += 1){
      if(isPrime(array[index]) === true){
        newArray.push(array[index]);
      }
    }
    console.log(newArray);
  });
});
