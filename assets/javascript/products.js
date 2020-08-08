let menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.overlay-menu');

menuIcon.addEventListener('click', () => {
    if (nav.style.transform != 'translateX(0%)') {
        nav.style.transform = 'translateX(0%)';
        nav.style.transition = 'transform 0.2s ease-out';
    } else {
        nav.style.transform = 'translateX(-100%)';
        nav.style.transition = 'transform 0.2s ease-out';
    }
});

let toggleIcon = document.querySelector('.menuIcon');

toggleIcon.addEventListener('click', () => {
    if (toggleIcon.className != 'menuIcon toggle') {
        toggleIcon.className += ' toggle';
    } else {
        toggleIcon.className = 'menuIcon';
    }
});

$("#tptitle").click(function(){
    $("#topProducts").css("display","inline");
    $("#smartphone").css("display", "none");
    $("#laptop").css("display", "none");
    $("#camera").css("display", "none");
    $("#headphones").css("display", "none");
    $("#coolGadgets").css("display", "none");
    $("#tptitle").css("color","#ff9933");
    $("#sptitle").css("color", "black");
    $("#lptitle").css("color", "black");
    $("#catitle").css("color", "black");
    $("#hptitle").css("color", "black");
    $("#cgtitle").css("color", "black");
});

$("#sptitle").click(function () {
    $("#topProducts").hide();
    $("#smartphone").show();
    $("#laptop").hide();
    $("#camera").hide();
    $("#headphones").hide();
    $("#coolGadgets").hide();
    $("#tptitle").css("color", "black");
    $("#sptitle").css("color", "#ff9933");
    $("#lptitle").css("color", "black");
    $("#catitle").css("color", "black");
    $("#hptitle").css("color", "black");
    $("#cgtitle").css("color", "black");
});

$("#lptitle").click(function () {
    $("#topProducts").css("display", "none");
    $("#smartphone").css("display", "none");
    $("#laptop").css("display", "inline");
    $("#camera").css("display", "none");
    $("#headphones").css("display", "none");
    $("#coolGadgets").css("display", "none");
    $("#tptitle").css("color", "black");
    $("#sptitle").css("color", "black");
    $("#lptitle").css("color", "#ff9933");
    $("#catitle").css("color", "black");
    $("#hptitle").css("color", "black");
    $("#cgtitle").css("color", "black");
});

$("#catitle").click(function () {
    $("#topProducts").css("display", "none");
    $("#smartphone").css("display", "none");
    $("#laptop").css("display", "none");
    $("#camera").css("display", "inline");
    $("#headphones").css("display", "none");
    $("#coolGadgets").css("display", "none");
    $("#tptitle").css("color", "black");
    $("#sptitle").css("color", "black");
    $("#lptitle").css("color", "black");
    $("#catitle").css("color", "#ff9933");
    $("#hptitle").css("color", "black");
    $("#cgtitle").css("color", "black");
});

$("#hptitle").click(function () {
    $("#topProducts").css("display", "none");
    $("#smartphone").css("display", "none");
    $("#laptop").css("display", "none");
    $("#camera").css("display", "none");
    $("#headphones").css("display", "inline");
    $("#coolGadgets").css("display", "none");
    $("#tptitle").css("color", "black");
    $("#sptitle").css("color", "black");
    $("#lptitle").css("color", "black");
    $("#catitle").css("color", "black");
    $("#hptitle").css("color", "#ff9933");
    $("#cgtitle").css("color", "black");
});

$("#cgtitle").click(function () {
    $("#topProducts").css("display", "none");
    $("#smartphone").css("display", "none");
    $("#laptop").css("display", "none");
    $("#camera").css("display", "none");
    $("#headphones").css("display", "none");
    $("#coolGadgets").css("display", "inline");
    $("#tptitle").css("color", "black");
    $("#sptitle").css("color", "black");
    $("#lptitle").css("color", "black");
    $("#catitle").css("color", "black");
    $("#hptitle").css("color", "black");
    $("#cgtitle").css("color", "#ff9933");
});