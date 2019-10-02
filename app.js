function func() {
    var sum = 0;
    sum = Number(document.getElementById("a").value) + Number(document.getElementById("b").value) + Number(document.getElementById("c").value);
    document.getElementById('d').value = sum;
}