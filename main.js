function deactivateAll(){
    document.querySelectorAll(".power").forEach(function(e){e.classList = "power disabled"})
}
function activateAll(){
    document.querySelectorAll(".power").forEach(function(e){e.classList = "power enabled"})
}

function flight(){
    deactivateAll();
    document.getElementById("flight").classList = "power enabled";
}

function mindreading(){
    deactivateAll();
    document.getElementById("mindreading").classList = "power enabled";
}

function xray(){
    deactivateAll();
    document.getElementById("xray").classList = "power enabled";
}

document.getElementById("activate-flight").addEventListener("click", flight);
document.getElementById("activate-mindreading").addEventListener("click", mindreading);
document.getElementById("activate-xray").addEventListener("click", xray);

document.getElementById("activate-all").addEventListener("click", activateAll);
document.getElementById("deactivate-all").addEventListener("click", deactivateAll);