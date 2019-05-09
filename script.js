window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#bluecloud_container").classList.remove("move");
    document.querySelector("#bluecloud_container").removeEventListener("animationend", sidenVises);
    document.querySelector("#parfume1").classList.remove("move");

    document.querySelector("#parfume1").removeEventListener("animationend", sidenVises);


    if (document.getElementById("parfume")) {
        document.querySelector("#parfume").classList.add("move");

        document.querySelector("#parfume").addEventListener("animationend", imageAppear);
    }
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function imageAppear() {
    console.log("imageAppear");

    //    document.querySelector("#parfume").classList.remove("move");

    document.querySelector("#bluecloud_container").classList.add("move");
    document.querySelector("#bluecloud_container").addEventListener("animationend", imageAppear1);
    document.querySelector("#parfume").classList.remove("move");

    document.querySelector("#parfume").removeEventListener("animationend", imageAppear);
}

function imageAppear1() {
    console.log("imageAppear1");

    document.querySelector("#parfume1").classList.add("move");
    document.querySelector("#parfume1").addEventListener("animationend", sidenVises);
    document.querySelector("#bluecloud_container").classList.remove("move");

    document.querySelector("#bluecloud_container").removeEventListener("animationend", sidenVises);
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

    if (document.getElementById("products.html")) {
        document.querySelector("#info_skaerm1").classList.add("image_hidden");
        document.querySelector("#pink").addEventListener("click", infoSkaerm1);
    }
}


function infoSkaerm1() {
    console.log("infoSkaerm1");
    document.querySelector("#info_skaerm1").classList.remove("image_hidden");
    document.querySelector("#kryds1").addEventListener("click", perfumeScreen);
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
