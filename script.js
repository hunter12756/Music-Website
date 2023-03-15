const iconElement = document.getElementById("icon");
const mySongElement = document.getElementById("mySong");

iconElement.onclick = function() {
    if(mySongElement.paused) {
        mySongElement.play();
        iconElement.src ="./assets/pause.png"
    } else {
        mySongElement.pause();
        iconElement.src="./assets/play.png"
    }
}
