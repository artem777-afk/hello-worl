function func() {
    var sum = 0;
    console.log($(".num"));
    $(".num").each(function() {
            sum += Number(this.value);
        })
        // sum = Number($(".num").val()) + Number($(".num").val()) + Number($(".num").val());
        // console.log(sum);
    $('#result').append(sum);
}