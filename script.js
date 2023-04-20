function addToInput(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    var input = document.getElementById('result').value;
    var result = eval(input);
    document.getElementById('result').value = result;
}

function clearInput() {
    document.getElementById('result').value = "";
}