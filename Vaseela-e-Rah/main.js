// menu func 
function menuopen(){
    document.getElementById('menu-links').style.height = "100%";
    document.getElementById('menu-icon').style.display = "none";
    document.getElementById('cross').style.display = "inline"
}
function closemenu(){
    document.getElementById('menu-links').style.height = "0px";
    document.getElementById('menu-icon').style.display = "inline";
    document.getElementById('cross').style.display = "none";
}
// slideshow automated in html file