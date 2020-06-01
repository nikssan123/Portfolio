const nameInput = $("#name");
const emailInput = $("#email");
const phoneInput = $("#phone");
const messageInput = $("#message");
const modal = $(".modal");




let name = sessionStorage.getItem("name");
let email = sessionStorage.getItem("email");
let phone = sessionStorage.getItem("phone");
let message = sessionStorage.getItem("message");

nameInput.val(name);
emailInput.val(email);
phoneInput.val(phone);
messageInput.val(message);

nameInput.on("change", () => {
    sessionStorage.setItem("name", nameInput.val());
});

emailInput.on("change", () => {
    sessionStorage.setItem("email", emailInput.val());
});

phoneInput.on("change", () => {
    sessionStorage.setItem("phone", phoneInput.val());
});

messageInput.on("change", () => {
    sessionStorage.setItem("message", messageInput.val());
});

$(window).on("scroll", () => {
    
    // let height = window.height();
    // console.log(height);
    let yOffset = window.pageYOffset;
    if(yOffset > 20){
        $(".scroll").css("display", "none");
        
    }
    
    if(yOffset > 80){
        $("nav").fadeOut(500);
        $(".sidemenu").addClass("add");
        $("header h2").addClass("animate");
        
        // Test for logo
        // $(".custom").css("display", "block"); 
        $(".custom").addClass("logoAnimation");
    }
    


    if(yOffset === 0){
        $(".scroll").css("display", "block");
        $("nav").fadeIn("slow");
        $(".sidemenu").removeClass("add");
        $("header h2").removeClass("animate");
        // $(".custom").css("display", "none"); 
        $(".custom").removeClass("logoAnimation");
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

// Modals

window.onclick = event => {
    if($(event.target).is(modal) ){
        modal.css("display", "none");
    }
}

const cvModal = $("div#cvDIV");
const gpaModal = $("div#gpaDIV");
const deanModal = $("div#deanDIV");


function viewCV(){
    cvModal.css("display", "flex");
}   

$("#gpa").on("click", () => {
    gpaModal.css("display", "flex");
});

$("#dean").on("click", () => {
    deanModal.css("display", "flex");
});


