function ageInDays() {
    var birthYear = prompt("What year were you born?");
    var numberOfDays=(2024-birthYear)*365;
    var h2 = document.createElement("h2");
    var textAnswear = document.createTextNode("You are " + numberOfDays + " days!");
    h2.setAttribute("id","ageInDays");
    h2.appendChild(textAnswear);
    document.getElementById("flex-box-result").appendChild(h2);
}

function remove() {
    document.getElementById("ageInDays").remove();
}