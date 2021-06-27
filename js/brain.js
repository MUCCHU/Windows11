function openStartMenu() {
    // console.log("fxn called");
    var div = document.getElementsByClassName("startMenu")[0];
    var dispType = div.style.display;
    if (dispType == "")
        dispType = window.getComputedStyle(div).getPropertyValue("display");
    if (dispType == "none") {
        // console.log("The display type was ");
        // console.log(div.style.display);
        div.style.display = "flex";
    }
    else {
        // console.log("The display type was ");
        // console.log(div.style.display);
        div.style.display = "none";
    }
}
async function addDate() {
    var x = new Date();
    document.getElementsByClassName("l2-time")[0].innerHTML = ((x.getHours() < 10) ? "0" + x.getHours() : x.getHours()) + ":" + ((x.getMinutes() < 10) ? "0" + x.getMinutes() : x.getMinutes());
}
setInterval(addDate, 1000);