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
$(document).ready(function() {
$(".Hover").hover(function(){
    $(this).animate({opacity:'1'});
}, 
    function(){
    $(this).animate({opacity:'0'});
})
});
