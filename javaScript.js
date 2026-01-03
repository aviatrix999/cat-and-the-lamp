let bulb = document.getElementById("bulbImage");
let eyes = document.getElementById("catImage");
let switchStatus = document.getElementById("switch");
let off = document.getElementById("offSwitch");
let on = document.getElementById("onSwitch");

function offSwitch() {
    bulb.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    eyes.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    switchStatus.textContent = "Switched Off";
    off.style.backgroundColor = "#22c55e";
    on.style.backgroundColor = "#cbd2d9";
}

function onSwitch() {
    bulb.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    eyes.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    switchStatus.textContent = "Switched On";
    off.style.backgroundColor = "#e12d39";
    on.style.backgroundColor = "#cbd2d9";
}