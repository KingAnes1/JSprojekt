function change_bg() {
    var body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "green";
}

function good_vibes() {
    var div = document.getElementById("goodvibes");
    div.innerText = "Good vibes!";
}

function showTime() {
    document.getElementById("tid").innerHTML = Date();
}

function change_img() {
    var img = document.getElementById("idBild");
    img.src = "kemo1.jpg";
}

function hide_img() {
    var img = document.getElementById("bild");
    img.style.display = "none";
}

function show_picture() {
    var img = document.getElementById("bild");
    img.style.display = "block"



}