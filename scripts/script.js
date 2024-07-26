const textArea = document.getElementById("textarea");
const codeCheck = document.getElementById("code-check");

document.getElementById("body").onload = function () {
    if (localStorage.codeCracked) {
        if (localStorage.codeCracked === "true") {
            codeCheck.innerText = "Code Cracked!";
            range = document.createRange();
            range.selectNode(document.getElementById("secondary-content"));
            range.deleteContents();
            setInterval(shoot, 500);
        }
    } else {
        localStorage.codeCracked = "false";
    }
}

function Update() {
    if (textArea.value == "code") {
        codeCheck.innerText = "Code Cracked!";
        localStorage.codeCracked = "true";
        range = document.createRange();
        range.selectNode(document.getElementById("secondary-content"));
        range.deleteContents();
        setInterval(shoot, 500);
    }
}

textArea.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        Update();
    }
});

// after this is not my code

const defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["star"],
    colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
  };
  
  function shoot() {
    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ["star"],
    });
  
    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ["circle"],
    });
  }