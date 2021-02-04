var arr = [];
var leval = 1;
var it = 0; 
var audio = new Audio("sounds/blue.mp3");
var wrong = new Audio("sounds/wrong.mp3");
var newSqu = new Audio("sounds/green.mp3");
$(".btn").click(function (e) {
    if (arr[it] !== $(e.target).attr("id")) {
        leval = 1;
        it = 0;
        arr = [];
        $("body").addClass("game-over");
        wrong.play();
        $("body").addClass("key-active");
        changeH1(-1);
      }
     else if (it === arr.length - 1) {
        leval++; it = 0;
        $(e.target).addClass("pressed");
        audio.play();
            setTimeout(function(){
                $(e.target).removeClass("pressed");
                changeH1(leval);
            }, 200);
            setTimeout(function() {
                generatNewArray(); 
            }, 500);
    }
    else {
        $(e.target).addClass("pressed");
        audio.play();
        setTimeout(function(){
        $(e.target).removeClass("pressed");
        }, 200);
        it++;
    }
});
$(document).keypress(function (e) {
    if ($("body").hasClass("key-active")){
        changeH1(leval);
         if ($("body").hasClass("game-over")) {
             $("body").removeClass("game-over");
             setTimeout(function () {
                generatNewArray();
             }, 500);
         }
        else {
        generatNewArray();
        }  
    $("body").removeClass("key-active");
  }
});
function changeH1(i){
    if (i == -1) {
        $("h1").text("Game Over! Press Any Key To Continue");
    }
    else
        $("h1").text("Leval "+i);
}
function generatNewArray() {
    let str = addRandomPattern();
    arr.push(str);
    $("." + str).addClass("pressed-auto");
    newSqu.play();
    setTimeout(function () {
        $("."+str).removeClass("pressed-auto");
    },450);
}
function addRandomPattern(){
    let rand = Math.floor(Math.random() * 4) + 1;
    if (rand == 1) return "green";
    if (rand == 2) return "red";
    if (rand == 3) return "yellow";
    if (rand == 4) return "blue";
}