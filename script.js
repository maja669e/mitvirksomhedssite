window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#parfume").classList.add("move");
    document.querySelector("#parfume").addEventListener("animationend", imageAppear);
}

function imageAppear() {
    console.log("imageAppear");

    document.querySelector("#parfume").removeEventListener("move");
    document.querySelector("#parfume").classList.remove("move");
    document.querySelector("#bluecloud_container").classList.add("move");
    document.querySelector("#bluecloud_container").addEventListener("animationend", sidenVises);

}
