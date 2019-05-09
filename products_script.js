window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("Siden vises");
    document.querySelector("#parfume1_container").addEventListener("click", infoSkaerm1);
    document.querySelector("#parfume2_container").addEventListener("click", infoSkaerm2);
    document.querySelector("#parfume3_container").addEventListener("click", infoSkaerm3);
    document.querySelector("#parfume4_container").addEventListener("click", infoSkaerm4);
    document.querySelector("#parfume5_container").addEventListener("click", infoSkaerm5);
    document.querySelector("#parfume6_container").addEventListener("click", infoSkaerm6);
    document.querySelector("#parfume7_container").addEventListener("click", infoSkaerm7);
    document.querySelector("#parfume8_container").addEventListener("click", infoSkaerm8);
    document.querySelector("#parfume9_container").addEventListener("click", infoSkaerm9);
    document.querySelector("#parfume10_container").addEventListener("click", infoSkaerm10);
    document.querySelector("#parfume11_container").addEventListener("click", infoSkaerm11);
    document.querySelector("#parfume12_container").addEventListener("click", infoSkaerm12);

}

function infoSkaerm1() {
    console.log("infoskærm");
    document.querySelector("#info_skaerm1").classList.remove("hidden");
    document.querySelector("#parfume1_container").addEventListener("click", infoVaek);

}

function infoSkaerm2() {
    console.log("infoskærm2");
    document.querySelector("#info_skaerm2").classList.remove("hidden");
    document.querySelector("#parfume2_container").addEventListener("click", infoVaek);

}

function infoSkaerm3() {
    console.log("infoskærm3");
    document.querySelector("#info_skaerm3").classList.remove("hidden");
    document.querySelector("#parfume3_container").addEventListener("click", infoVaek);

}

function infoSkaerm4() {
    console.log("infoskærm4");
    document.querySelector("#info_skaerm4").classList.remove("hidden");
    document.querySelector("#parfume4_container").addEventListener("click", infoVaek);

}

function infoSkaerm5() {
    console.log("infoskærm5");
    document.querySelector("#info_skaerm5").classList.remove("hidden");
    document.querySelector("#parfume5_container").addEventListener("click", infoVaek);
}

function infoSkaerm6() {
    console.log("infoskærm6");
    document.querySelector("#info_skaerm6").classList.remove("hidden");
    document.querySelector("#parfume6_container").addEventListener("click", infoVaek);

}

function infoSkaerm7() {
    console.log("infoskærm7");
    document.querySelector("#info_skaerm7").classList.remove("hidden");
    document.querySelector("#parfume7_container").addEventListener("click", infoVaek);

}

function infoSkaerm8() {
    console.log("infoskærm8");
    document.querySelector("#info_skaerm8").classList.remove("hidden");
    document.querySelector("#parfume8_container").addEventListener("click", infoVaek);

}

function infoSkaerm9() {
    console.log("infoskærm9");
    document.querySelector("#info_skaerm9").classList.remove("hidden");
    document.querySelector("#parfume9_container").addEventListener("click", infoVaek);
}

function infoSkaerm10() {
    console.log("infoskærm10");
    document.querySelector("#info_skaerm10").classList.remove("hidden");
    document.querySelector("#parfume10_container").addEventListener("click", infoVaek);
}

function infoSkaerm11() {
    console.log("infoskærm11");
    document.querySelector("#info_skaerm11").classList.remove("hidden");
    document.querySelector("#parfume11_container").addEventListener("click", infoVaek);
}

function infoSkaerm12() {
    console.log("infoskærm12");
    document.querySelector("#info_skaerm12").classList.remove("hidden");
    document.querySelector("#parfume12_container").addEventListener("click", infoVaek);
}

function infoVaek() {
    console.log("infoVæk");

    document.querySelector("#info_skaerm1").classList.add("hidden");
    document.querySelector("#info_skaerm2").classList.add("hidden");
    document.querySelector("#info_skaerm3").classList.add("hidden");
    document.querySelector("#info_skaerm4").classList.add("hidden");
    document.querySelector("#info_skaerm5").classList.add("hidden");
    document.querySelector("#info_skaerm6").classList.add("hidden");
    document.querySelector("#info_skaerm7").classList.add("hidden");
    document.querySelector("#info_skaerm8").classList.add("hidden");
    document.querySelector("#info_skaerm9").classList.add("hidden");
    document.querySelector("#info_skaerm10").classList.add("hidden");
    document.querySelector("#info_skaerm11").classList.add("hidden");
    document.querySelector("#info_skaerm12").classList.add("hidden");
}
