window.addEventListener("load", toggleMenu);

function sidenVises() {
    console.log("sidenVises");


}
document.querySelector("#menuknap").addEventListener("click", toggleMenu);




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

perfumeScreen();


function perfumeScreen() {
    console.log("perfumeScreen");

    if (document.getElementById("parfume1")) {
        document.querySelector("#info_skaerm1").classList.add("hidden");
        document.querySelector("#parfume1").addEventListener("click", infoSkaerm1);
    }
}


function infoSkaerm1() {
    console.log("infoSkaerm1");
    document.querySelector("#info_skaerm1").classList.remove("hidden");
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
