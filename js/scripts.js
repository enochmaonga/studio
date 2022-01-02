// alert("my Name is Erick")

$(document).ready(function(){
    $("#design").click(function(){
        $("#design-showing").toggle();
        $(".hide-design-image").toggle();

    });
});
$(document).ready(function(){
    $("#development").click(function(){
        $("#development-showing").toggle();
        $(".hide-development-image").toggle();

    });
});
$(document).ready(function(){
    $("#productManagement").click(function(){
        $("#product-management-showing").toggle();
        $(".hide-product-management").toggle();

    });
});
$("row").hover(function(){
    $(".column1").css("background-color, white");
}, function(){
        $("column1").css("background-color, none");
});