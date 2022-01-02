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
// $(document).ready(function() {
// $(".Hover").hover(function(){
//     $(this).animate({opacity:'1'});
// }, 
//     function(){
//     $(this).animate({opacity:'0'});
// });
// });
$(document).ready(function(){
$(".submit").click(function(){
    var name = $("#mce-fname").val();
    var email = $("mce-email").val();
    var message = $("#mce-mesage");
    var key ="b417dfc18ca6a0e998f3fc8642553d4b-us20";
    if (name == "" || email == "" || message == "") {
        alert("ok, but fill in all spaces correctly");
    } else {
        alert("Hi " + name + " We have received your message. Thank you for contacting us");
    }
});
$(".Hover").hover(function(){
    $(this).animate({opacity:'1'}, 100,);
}, 
    function(){
    $(this).animate({opacity:'0'}, 100);
});
});