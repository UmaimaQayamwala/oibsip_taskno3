console.log("script working");
let celcius = document.getElementById('celcius');
let fahrenheit = document.getElementById('fahrenheit');
let result = document.getElementById('result');
let button = document.getElementById('convert');
let dropdown = document.getElementById('dd');
let selected = dropdown.options[dropdown.selectedIndex].value

function tocelcius(temp) {
    return (temp - 32) * (5 / 9);

}
function tofahrenheit(temp) {
    return temp * 9 / 5 + 32;
}
button.onclick = function () {
    let val = document.getElementById('value').value;
    let ans;

    val = Number(val);

    if (selected == "celcius") {
        ans = tocelcius(val).toLocaleString(undefined, { style: 'unit', unit: 'celsius', minimumFractionDigits: 2, maximumFractionDigits: 2 });

    }
    else {
        ans = tofahrenheit(val).toLocaleString(undefined, { style: 'unit', unit: 'celsius', minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    result.innerHTML = ans;
}