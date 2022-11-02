let elem = document.querySelector(".container")

color_select.onchange = function () {
    let colorOption = document.querySelector('#color_select').value;
    switch (colorOption) 
    {
        case "1": clearClasses ();
        elem.classList.add("white"); break;

        case "2": clearClasses ();
        elem.classList.add("yellow"); break;

        case "3": clearClasses ();
        elem.classList.add("green"); break;
    }
}

function clearClasses() {
    if  (elem.classList.contains ("yellow")) {
        elem.classList.remove ("yellow");}
    if  (elem.classList.contains ("green")) {
        elem.classList.remove ("green");}
    if  (elem.classList.contains ("white")) {
        elem.classList.remove ("white");}
}