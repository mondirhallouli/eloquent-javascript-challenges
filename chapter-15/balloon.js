let balloonElem = document.createElement("div");
let balloonEmoji = document.createTextNode("🎈");
let explosionEmoji = document.createTextNode("💥");
balloonElem.appendChild(balloonEmoji);

document.body.appendChild(balloonElem);
let fontSize = 2;
balloonElem.style.fontSize = `${fontSize}rem`;

function inflateDeflate(e) {
    if (e.key == 'ArrowUp') {
        fontSize += fontSize * 0.2;
        balloonElem.style.fontSize = `${fontSize}rem`;
        if (fontSize > 10) {
            balloonElem.replaceChild(explosionEmoji, balloonEmoji);
            window.removeEventListener("keydown", inflateDeflate);
        }
    }
    if (e.key == "ArrowDown") {
        fontSize -= fontSize * 0.2;
        balloonElem.style.fontSize = `${fontSize}rem`;
    }
}
window.addEventListener("keydown", inflateDeflate);