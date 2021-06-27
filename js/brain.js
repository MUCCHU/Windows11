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