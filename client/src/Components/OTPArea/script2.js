function random(){
    document.getElementById("number1").innerHTML = Math.floor(Math.random() * 10);
    document.getElementById("number2").innerHTML = Math.floor(Math.random() * 10);
    document.getElementById("number3").innerHTML = Math.floor(Math.random() * 10);
    document.getElementById("number4").innerHTML = Math.floor(Math.random() * 10);
    document.getElementById("number5").innerHTML = Math.floor(Math.random() * 10);
    document.getElementById("number6").innerHTML = Math.floor(Math.random() * 10);
}

// document.getElementById("btn").onclick = function() {
//     //disable
//     this.disabled = true;

//     //do some validation stuff
// }