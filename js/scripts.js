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

$(document).ready(function() {
    $(".Hover1").hover(function(){
        $(this).animate({opacity:'1'});
      },
      function(){
        $(this).animate({opacity:'0'});
      })
});

$(document).ready(function() {
    $(".Hover2").hover(function(){
        $(this).animate({opacity:'1'});
      },
      function(){
        $(this).animate({opacity:'0'});
      })
});
$(document).ready(function(){
$(".submit").click(function(){
    var Name = $("#mce-FNAME").val();
    var Email = $("#mce-EMAIL").val();
    var Message = $("#mce-MESSAGE");
    var key ="b417dfc18ca6a0e998f3fc8642553d4b-us20";
    if (Name == " " || Email == " " || Message == " ") {
        alert("ok, but fill in all spaces correctly");
    } else {
        alert("Hi " + Name + " We have received your message. Thank you for contacting us");
    }
});
});

// $(document).ready(function(){
// $(".submit").click(function(event){
// var Name = $("#mce-FNAME").val();
//     var Email = $("#mce-EMAIL").val();
//     var Message = $("#mce-MESSAGE");
//     var key ="b417dfc18ca6a0e998f3fc8642553d4b-us20";
//     if ($("#mce-FNAME").val() && $("#mce-EMAIL").val() && ("#mce-MESSAGE").val()) {
// 	alert (Name + ", we have received your message. Thank you for reaching out to us.");
//     } else {
//         alert("Please enter all details!");
//     }
// });
// });

