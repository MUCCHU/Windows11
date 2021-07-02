function transStartMenu() {
    var startM = document.getElementsByClassName("startMenu")[0];
    if (startM.style.bottom == "55px") {
        startM.style.bottom = "-608px";
    }
    else {
        startM.style.bottom = "55px";
    }
}
function openWindow() {
    var clickedIcon = true;
    var div = document.getElementsByClassName("windowPopup")[0];
    var computedStyles = window.getComputedStyle(div);
    console.log(computedStyles.getPropertyValue("width"));
    if (computedStyles.getPropertyValue("width") == "0px") {
        transStartMenu();
        $(".startMenu").on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
            function () {

                // if (div.style.display == "block") {
                //     div.style.display = "none";
                // }
                // else {
                //     div.style.display = "block";
                // }
                if (computedStyles.getPropertyValue("width") == "0px")
                    div.style.animation = "openUpWindow 0.3s forwards";
                else {
                    console.log("Want to close window");
                    div.style.animation = "closeWindow 0.3s reverse forwards";
                }
            });
    }
    else {
        if (computedStyles.getPropertyValue("width") == "0px")
            div.style.animation = "openUpWindow 0.3s forwards";
        else {
            console.log("Want to close window");
            div.style.animation = "closeWindow 0.3s forwards";
        }

    }
    var clickedIcon = false;
}
async function addDate() {
    var x = new Date();
    document.getElementsByClassName("l2-time")[0].innerHTML = ((x.getHours() < 10) ? "0" + x.getHours() : x.getHours()) + ":" + ((x.getMinutes() < 10) ? "0" + x.getMinutes() : x.getMinutes());
}
setInterval(addDate, 1000);