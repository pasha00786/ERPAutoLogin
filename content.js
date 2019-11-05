// Made by Ashutosh Gupta on 5th Novemeber 2019
$(function() {
  $("#user_id").focus();
  $("#user_id").val(''); //Enter Roll No.
  $("#password").focus();
  $("#password").val(''); //Enter Password
  setTimeout(
  function() 
  {
	    var ques = $('#question').text();
	    var answer;
	  switch(ques) {
		  	case '': //Enter 1st security Question
		  		answer = ''; // //Enter 1st security Answer
		  		break;
			case '': //Enter 2nd security Question
		  		answer = ''; //Enter 2nd security Answer
		  		break;
		  	case '': //Enter 3rd security Question
		  		answer = ''; //Enter 3rd security Question
		  		break; 	
		  }
	$("#answer").focus();	  
	$("#answer").val(answer);
  }, 500);
  setTimeout(
  function() 
  {
	$("#signin > div > div > div > div > form > fieldset > div.row > div > input.btn.btn-primary").click();
  }, 500);
});
