$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    var word = $("#input").val();
    var wordArray = word.split("");
    var reverseArray = wordArray.slice().reverse();
    for(var index = 0; index < wordArray.length; index += 1){
      if(wordArray[index] !== reverseArray[index]){
        break;
      }
    }
    if(index === wordArray.length){
      alert("This is a palindrome");
    }
    else{
      alert("This is not a palindrome");
    }
    console.log(wordArray);
    console.log(reverseArray);
  });
});
