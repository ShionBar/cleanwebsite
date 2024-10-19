var service;

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {

    var residentialCleaningCard = document.getElementById("residentialCleaningCard");
    var commercialCleaningCard = document.getElementById("commercialCleaningCard");
    var specialCleaningCard = document.getElementById("specialCleaningCard");

    residentialCleaningCard.addEventListener('click', cleaningCardClicked)
    commercialCleaningCard.addEventListener('click', cleaningCardClicked)
    specialCleaningCard.addEventListener('click', cleaningCardClicked)
}

function cleaningCardClicked(event) {
    var element = event.target;
    service = element.querySelector(".products_text h2").innerText;
    console.log("DEBUG: " + service);
}

