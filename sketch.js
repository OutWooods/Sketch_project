var rows = 100;
var height = 840 / rows;
var width = 840 / rows;

var $row = $("<div />", {
    class: 'row'
});
var $square = $("<div />", {
    class: 'square'
});



$(document).ready(function () {
    for (var i = 0; i < rows; i++) {
        $row.append($square.clone());
    }
    for (var i = 0; i < rows; i++) {
        $("#container").append($row.clone());
    }
    $(".row").css("height", height);
    $(".square").css("width", width);
    $(".square").css("height", height);

    $(document.body).on("mouseover", ".square", function() {
         $(this).css("background-color", "red")
    });
});


 
       