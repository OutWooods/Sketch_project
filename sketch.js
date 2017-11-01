var rows = 20;
var size = 360;
var circle =  false;
var eraser = false;
var boring = false;


var $row = $("<div />", {
    class: 'row'
});
var $square = $("<div />", {
    class: 'square blue'
});

function gridMaker(number){
	height = size / number;
    width = size / number; 
    for (var i = 0; i < number; i++) {
        $row.append($square.clone());
    }
    for (var i = 0; i < number; i++) {
        $("#container").append($row.clone());
    }
    $(".row").css("height", height);
    $(".square").css("width", width);
    $(".square").css("height", height);
 }

function colourGen() {
      var a = Math.random()* 255  
      var b = Math.random()* 255  
      var c = Math.random()* 255  
  return "rgb(" + a + ", " + b + ", " + c + ")" 
}


$(document).ready(function () {
    gridMaker(rows);

    $(document.body).on("mouseover", ".square", function() {
    	 $(this).removeClass("blue");
    	  var colour = colourGen()
    	  if (eraser == true) {
         	colour = "blue"
           };
           if(boring == true) {
           	colour = "black";
           };
         $(this).css("background-color", colour);
         if (circle == true) {
         	$(this).addClass("circle");
         }
         else {
            $(this).removeClass("circle");
         };
        
    });
    $(".reset").on("click", function() {
         $("#container").empty();
         circle = false;
         eraser = false;
          $($row).empty();
         var thing = prompt("How many rows do you want? (Whole numbers between 1-61)");
         if(thing < 61  && thing > 1 &&  thing % 1 == 0) {
         	 gridMaker(thing);
         }
         else {
         	alert("Not in the input range, we've just reset the original grid for you :)");
         	gridMaker(rows);
         }

    });
    $(".dot").on("click", function () {
        if(circle == false) { 
        	circle = true;
            $(".dot span").text("Circle Mode On");
            }
       else {circle = false;
            $(".dot span").text("Circle Mode Off");};
    });

     $(".eraser").on("click", function () {
        if(eraser == false) { 
        	boring = false;
        	eraser = true;
        	$(".eraser span").text("Eraser Mode On");
            circle = false;}
       else {eraser = false
            $(".eraser span").text("Eraser Mode Off");
       };
    });

     $(".boring").on("click", function () {
        if(boring == false) { 
        	boring = true;
        	eraser = false;
        	$(".boring span").text("Make it Rainbow")
            }
       else {boring = false
            $(".boring span").text("Paint it black")
       }; 
    });

   
});


 
       