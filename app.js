const envelope = document.getElementById("envelope");
const seal = document.getElementById("seal");

seal.addEventListener("click", () => {
    envelope.classList.add("open");
});