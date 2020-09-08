$(document).ready(function () {
    // first hide show 
    $("#hide").click(function () {
        $(".hideshow_1").hide();
    });
    $("#show").click(function () {
        $(".hideshow_1").show();
    });
    // toggle hide show 
    $("#toggle_1").click(function () {
        $(".hideshow_2").toggle();
    });
    // para dissapair 
    $(".s_para").click(function () {
        $(this).hide();
    });
    $(".dbl_click").dblclick(function () {
        $(this).hide();
    });
    // card bg change 
    $("#card_1").click(function () {
        $(this).removeClass('bg-primary').addClass('bg-warning');
    });
    $("#card_2").click(function () {
        $(this).removeClass('bg-success').addClass('bg-danger');
    });
    $("#card_3").click(function () {
        $(this).removeClass('bg-danger').addClass('bg-success');
    });
    $("#card_4").click(function () {
        $(this).removeClass('bg-warning').addClass('bg-primary');
    });

    // Mouse events 
    $(".me_1").mouseenter(function () {
        alert("Mouse Enter Event");
    });
    $(".me_2").mouseleave(function () {
        alert("Mouse Leave Event 2");
    });
    $(".me_3").mouseup(function () {
        alert("Mouse up over p3!");
    });
    $(".me_4").mousedown(function () {
        alert("Mouse down over p4!");
    });

    // Events 
    $("#me_5").hover(function () {
        $(this).removeClass('border-dark').addClass("text-white bg-primary border-warning");
    });
    // Focus Events
    $("input").focus(function () {
        $(this).css("background-color", "yellow");
    });
    $("input").blur(function () {
        $(this).css("background-color", "coral");
    });

    //Animations1
    $("#amimation").click(function () {
        var div = $(".amnimate_div");
        div.animate({
            height: '300px',
            opacity: '0.4'
        }, "slow");
        div.animate({
            width: '300px',
            opacity: '0.8'
        }, "slow");
        div.animate({
            height: '100px',
            opacity: '0.4'
        }, "slow");
        div.animate({
            width: '100px',
            opacity: '0.8'
        }, "slow");
    });
    //Animation2
    $("#amimation2").click(function () {
        var div = $(".amnimate_div2");
        div.animate({
            left: '100px'
        }, "slow");
        div.animate({
            fontSize: '3em'
        }, "slow");
    });

    // Fade in out 
    $("#f-out").click(function () {
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);
    });
    $("#f-in").click(function () {
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });

    // Fun
    $("#fun").click(function () {
        $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
    });
});

// Function for change text
function changeMe() {
    document.getElementById('alert').innerHTML = "heloooooooo";
}

function originalMe() {
    document.getElementById('alert').innerHTML = "I will be change soon! If you clcik me!";
}

//footer current year with this following
document.getElementById("year").innerHTML = new Date().getFullYear();