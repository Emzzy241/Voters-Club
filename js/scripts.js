// userInterface Logic

$(document).ready( function(){
    voterAge = parseInt(prompt("Enter your Age Dear User"));

    if( voterAge >= 18){
        $(".eligible").show();
    }else {
        $(".notEligible").show();
    }


});