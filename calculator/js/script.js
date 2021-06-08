
function Display(val) {
    document.getElementById("result").value += val;
}
 
function calculate() {
    var val = document.getElementById("result").value;
    var res = eval(val);
    document.getElementById("result").value = res;
}
 
function clr() {
    document.getElementById("result").value = ""
}
 
function cancel() {
    var value = document.getElementById("result").value;
 
    document.getElementById("result").value
        = value.substr(0, value.length - 1);
} 
