function transStartMenu() {
    var startM = document.getElementsByClassName("startMenu")[0];
    if (startM.style.bottom == "55px") {
        startM.style.bottom = "-608px";
    }
    else {
        startM.style.bottom = "55px";
    }
}
async function addDate() {
    var x = new Date();
    document.getElementsByClassName("l2-time")[0].innerHTML = ((x.getHours() < 10) ? "0" + x.getHours() : x.getHours()) + ":" + ((x.getMinutes() < 10) ? "0" + x.getMinutes() : x.getMinutes());
}
setInterval(addDate, 1000);