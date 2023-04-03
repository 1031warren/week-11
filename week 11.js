function swapImage(){
    var arrImages = ["img1.png.", "img3.jpeg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg"];

    var theImg = document.getElementById("img1");


    var randomNumber = Math.floor(Math.random() *arrImages.length);
    theImg.src = arrImages[randomNumber];
}

function swapImage2(){
    var theImg = document.getElementById("img1");
    theImg.src = "img4.jpg";
}

function dontClick(){
    alert("Error!!!!");
    alert("You weren't supposed to click the button!!!");
    alert("You should listen better next time!!");
    alert("Follow the rules next time!!!!!!");
    alert("You could break the website by not following the rules. ");
    alert("Put yourself in timeout");
}