//limit number of attempts to 3
var attempts = 3;

//validate that both fields
function validate() {
  //get user email
  var pass = document.getElementById("password").value;
//get user password
  var email = document.getElementById("email").value;
//check that both fields are filled out
  if ((email == null || email == '') || (pass == null || pass == '')) {
    attempts --;
    alert("Make sure to file in both an email and password. You have " + attempts + " left.");
    if (attempts == 0) {
      alert("Damn it! We told you what to do!!");
      document.getElementById("email").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
    return false;
  } else {
    alert("Welcome movie fan!")
  }
}

$(function() {

  var $newCommentForm = $('#newCommentForm');
  var $textInput = $('input:text');

  $newCommentForm.on('submit', function(event){
    var newText = $('input:text').val();
    $('section:first').prepend('<div><p>' + newText + '</p></div>');
    $textInput.val('');
    event.preventDefault();
  });

});
