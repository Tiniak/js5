var color = "purple";
var number = 10;
var word = "cool";

if (color == "purple") {
    $('.N').css("background", "purple");
}
$('.E').text("Change");

if(number > 100){
    console.log("whoah, that's a big number.")
}
else{
    console.log("just a regular number, please.")
}

if(word==="cool"){
    $('.S').text("Power of DOM");
}
else{
    $('.W').text("Power of DOM")
}