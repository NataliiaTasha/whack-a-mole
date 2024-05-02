const circles = document.querySelectorAll(".circle");
const displayScore = document.querySelector(".score");
let score = 0;

function circleRandomizer() {
    // circles.forEach(circle => {
    //     circle.classList.remove ("active");
    //     });
    const randomIndex = Math.floor(Math.random() * circles.length);
    const randomCircle = circles[randomIndex];
    randomCircle.classList.add("active");
   
    randomCircle.style.backgroundColor = "red";

    setTimeout(() => {
        randomCircle.classList.remove("active");
        randomCircle.style.backgroundColor = "beige";
    }, 1500);
}

function changeScore() {
    score += 10;
    displayScore.textContent = `Score: ${score}`;
}

circles.forEach(circle => {
    circle.addEventListener("click", () => {
        if (circle.classList.contains("active")) {
            changeScore();
        }
    });
});
setInterval(circleRandomizer, 1500);