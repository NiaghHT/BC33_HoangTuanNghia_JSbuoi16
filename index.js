//Ex1
function ex1() {
    var sum = 0;
    var number = 0;
    for (var i = 1; i < 10000; i++) {
        sum = sum + i;
        number++;
        if (sum > 10000) {
            console.log(number);
            break;
        }
    }
    document.getElementById("resultBt1").innerHTML = number
}
ex1()

//Ex2
function ex2() {
    var x = +document.getElementById("txtNumx").value;
    var n = +document.getElementById("txtNumn").value;
    var total = 0;
    for (var i = 1; i < n + 1; i++) {
        total += Math.pow(x, i);
    }
    document.getElementById("resultBt2").innerHTML = total
}

//Ex3 
function ex3() {
    var n = +document.getElementById("txtNum3").value;
    var factorial = 1;
    for (var i = 2; i < n + 1; i++) {
        factorial *= i;
    }
    document.getElementById("resultBt3").innerHTML = factorial
}

//Ex4
function ex4() {
    var content = ""
    for (var i = 1; i < 11; i++) {
        if (i % 2 === 0) { content += "<div class='bg-danger text-white p-2'>Div chẵn </div>" } else { content += "<div class='bg-primary text-white  p-2'>Div lẻ </div>" }
        document.getElementById("resultBt4").innerHTML = content
    }
}

//Ex5

function ex5() {
    var n = +document.getElementById("txtNum5").value;
    var snt = "";
    for (i = 1; i <= n; i++) {
        check(i) && (snt += i + " ");
    }
    document.getElementById("resultBt5").innerHTML = snt
}

function check(i) {
    for (var t = 2; t <= Math.sqrt(i); t++) { if (i % t == 0) { return 0; } }
    return 1;
}