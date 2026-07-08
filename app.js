// ==============================
// INVITACIÓN DANIEL & BELÉN
// ==============================

const envelope = document.getElementById("envelope");

let opened = false;
let animating = false;

envelope.addEventListener("click", () => {

    if (animating) return;

    animating = true;

    if (!opened) {

        envelope.classList.add("open");
        opened = true;

    } else {

        envelope.classList.remove("open");
        opened = false;

    }

    setTimeout(() => {

        animating = false;

    }, 1600);

});