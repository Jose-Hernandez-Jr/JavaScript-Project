function Food_Function() {
    var Food_Output;
    var Foods = document.getElementById("Food_Input").value;
    var Food_String = " is a great food!";
    switch(Foods) {
        case "Pizza":
            Food_Output = "Pizza" + Food_String;
        break;
        case "Hot Dog":
            Food_Output = "Hot Dog" + Food_String;
        break;
        case "Cake":
            Food_Output = "Cake" + Food_String;
        break;
        case "Hamburger":
            Food_Output = "Hamburger" + Food_String;
        break;
        case "Tacos":
            Food_Output = "Tacos" + Food_String;
        break;
        case "Spaghetti":
            Food_Output = "Spaghetti" + Food_String;
        break;
        default:
        Food_Output = "Please enter a food exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Food_Output;
}

function This_Is_New_Function() {
    var A = document.getElementsByClassName("Clicky");
    A[0].innerHTML = "The text has changed!";
}


const c = document.getElementById("The_Box");
const ctx = c.getContext("2d");
const grd = ctx.createLinearGradient(0, 0, 250, 250);
grd.addColorStop(0, "red");
grd.addColorStop(0.5, "black")
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 250, 250);
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(20, 100);
ctx.lineTo(70, 100);
ctx.lineTo(70, 20)
ctx.lineTo(20, 20)
ctx.strokeStyle = "white";
ctx.stroke();