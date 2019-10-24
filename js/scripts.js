$(document).ready(function() {
  $("form#height").submit(function(event){
    var height = parseInt(prompt("How tall are you? (in inches)"));

      if (height < 33) {
        $(alert("Sorry, you're too tiny! Please feel free to check out our partners at the Wee Waterpark"));
      } else if (height < 40) {
        $(".snackAttack").show();
        $(".hurl").hide();
        $(".foodBaby").hide();
      } else if (height >= 40 && height < 60) {
        $(".snackAttack").show();
        $(".foodBaby").show();
        $(".hurl").hide();
      } else if (height >=60 && height < 72) {
        $(".snackAttack").show();
        $(".foodBaby").show();
        $(".hurl").show();
      } else if (height >= 72) {
        $(".hurl").show();
        $(".foodBaby").show();
        $(".snackAttack").hide();
      } else {
        $(alert("Not a valid height, please try again"));
        window.location.reload();
      }

          event.preventDefault();
    });


  });
