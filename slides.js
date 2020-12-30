let myIndex = 0;
change();
function change() {
    var pics = document.getElementsByClassName("mySlides");
    for (let i = 0; i < pics.length; i++) {
        pics[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > pics.length) {
        myIndex = 1;
    }
    pics[myIndex - 1].style.display = "block";
    setTimeout(change, 3000);
}