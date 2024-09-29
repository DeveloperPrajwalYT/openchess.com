let playCount = 0;
let puzzleCount = 0;

document.getElementById("new-game").addEventListener("click", function() {
    playCount++;
    document.getElementById("play-count").textContent = playCount;
});

document.getElementById("solve-puzzle").addEventListener("click", function() {
    puzzleCount++;
    document.getElementById("puzzle-count").textContent = puzzleCount;
});
