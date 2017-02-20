document.addEventListener("deviceready", onDeviceReady, false);
	    function onDeviceReady() {
            console.log(StatusBar);
            StatusBar.backgroundColorByName("black");
            console.log(navigator.vibrate);
            console.log(Media);
	    }
    function vibrate() {
    navigator.vibrate(100);
}
document.addEventListener('deviceready', function () {
        StatusBar.overlaysWebView(false); //Turns off web view overlay.
}, false);

// Play audio
//
function playAudio(url) {
    // Play the audio file at url
    var my_media = new Media(url,
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    // Play audio
    my_media.play();
}

function saveLieu(id){
  localStorage.setItem("lieu", id);
}

function saveConnexion(id){
localStorage.setItem("connexion", id);
window.location.href = "index-splash.html";
}

function deconnexion(){
localStorage.removeItem("connexion");
window.location.href = "index.html";
}

function redirection(page){
window.location.href = page + ".html";
}
