window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#parfume").classList.add("move");
    document.querySelector("#parfume").addEventListener("animationend", imageAppear);

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function imageAppear() {
    console.log("imageAppear");

    document.querySelector("#parfume").removeEventListener("move");
    document.querySelector("#parfume").classList.remove("move");
    document.querySelector("#bluecloud_container").classList.add("move");
    document.querySelector("#bluecloud_container").addEventListener("animationend", sidenVises);

}

function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult =
        document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "X";
    }
}
