function func() {
    var res = 0;
    var a = 10;
    var f = 0;
    var e = Number($("#a").val());
    console.log(e);
    while (e > 0) {
        f = e % a;
        res += f;
        e = Math.round(e / a);
    }

    $('#result').append(res);
}