
document.addEventListener("DOMContentLoaded", function() {

    let counter = document.getElementById("counter");
    let cookieButton = document.getElementById("cookieButton");
    let resetButton = document.getElementById("reset");
    let shop1 = document.getElementById("mom")
    let shop2 = document.getElementById("bakery")
    let shop3 = document.getElementById("factory")

    let intervalIDs = [];

        cookieButton.addEventListener("click", function() {
            let currentCount = parseInt(counter.textContent, 10);
            counter.textContent = ++currentCount;



        });
    cookieButton.addEventListener("mouseenter", function() {
        cookieButton.classList.add("mouseenter1");
        });
    cookieButton.addEventListener("mouseleave", function() {
        cookieButton.classList.remove("mouseenter1");
        });

    resetButton.addEventListener("click", function() {
        counter.textContent = 0;

        intervalIDs.forEach(clearInterval)
        intervalIDs = [];

        });



        shop1.addEventListener("click", function() {
            let currentCount = parseInt(counter.textContent, 10);
            if (counter.textContent >= 20) {
                counter.textContent = currentCount - 20;
                momInterval = setInterval(function() {
                    let updatedCount = parseInt(counter.textContent, 10);
                    counter.textContent = updatedCount + 1;
                }, 1000);
                intervalIDs.push(momInterval);
            }

        });

        shop2.addEventListener("click", function() {
            let currentCount = parseInt(counter.textContent, 10);
            if (counter.textContent >= 50) {
                counter.textContent = currentCount - 50;
                bakeryInterval = setInterval(function() {
                    let updatedCount = parseInt(counter.textContent, 10);
                    counter.textContent = updatedCount + 3;
                }, 1000);
                intervalIDs.push(bakeryInterval)
            }

        });

        shop3.addEventListener("click", function() {
            let currentCount = parseInt(counter.textContent, 10);
            if (counter.textContent >= 100) {
                counter.textContent = currentCount - 100;
                factoryInterval = setInterval(function() {
                    let updatedCount = parseInt(counter.textContent, 10);
                    counter.textContent = updatedCount + 7;
                }, 1000);
                intervalIDs.push(factoryInterval)
            }

        });
});