window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    if (document.getElementById("parfume")) {
        document.querySelector("#parfume").classList.add("move");

        document.querySelector("#parfume").addEventListener("animationend", imageAppear);
    }
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


function perfumeScreen() {
    console.log("perfumeScreen");
    document.getElementById("products.html").innerHTML;
    document.querySelector("#info_skaerm1").classList.add("hidden");
    document.querySelector("#pink").addEventListener("click", infoSkaerm1);
}

function infoSkaerm1() {
    console.log("infoSkaerm1");
    document.querySelector("#info_skaerm1").classList.remove("hidden");
    document.querySelector("#kryds1").addEventListener("click", perfumeScreen);
}
