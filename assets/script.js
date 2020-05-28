$(window).on("scroll", () => {
    
    let yOffset = window.pageYOffset;
    if(yOffset > 80){
        $(".scroll").css("display", "none");
        
    }
    
    if(yOffset > 100){
        $("nav").fadeOut(500);
        $(".sidemenu").addClass("add");
        $("header h2").addClass("animate");
    }
    


    if(yOffset === 0){
        $(".scroll").css("display", "block");
        $("nav").fadeIn("slow");
        $(".sidemenu").removeClass("add");
        $("header h2").removeClass("animate");
    }
});

$(".scroll").on("click", () => {
    $(".about").get(0).scrollIntoView();
});


function about(){
    $(".about").get(0).scrollIntoView();
}

function projects(){
    $(".projects").get(0).scrollIntoView();
}

function contact(){
    $(".contact").get(0).scrollIntoView();
}

$(".buttons .code").on("click", () => {
    alert("Show code");
});

$(".buttons .demo").on("click", () => {
    alert("Show demo");
});

