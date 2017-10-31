var rows = 16;
var columns = 16;
var height = 840 / columns;
var width = 840 / rows;

var $row = $("<div />", {
    class: 'row'
});
var $square = $("<div />", {
    class: 'square'
});

$(document).ready(function () {
    for (var i = 0; i < columns; i++) {
        $row.append($square.clone());
    }
    for (var i = 0; i < rows; i++) {
        $("#container").append($row.clone());
    }
    $(".row").css("height", height);
    $(".square").css("width", width);
    $(".square").css("height", height);


});