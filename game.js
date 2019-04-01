var arr = []
var wins = 0, losses = 0
var total = 0

function random() {
    var computer = Math.floor(Math.random() * 120) + 19
    return computer
}
var comp = random()
$(".main-section").html(comp)

function random2() {
    while (arr.length < 4) {
        var player = Math.floor(Math.random() * 20) + 1
        if (arr.indexOf(player) === -1) {
            arr.push(player)

        }

    }
    $("#img1").attr("data-num", arr[0])
    $("#img2").attr("data-num", arr[1])
    $("#img3").attr("data-num", arr[2])
    $("#img4").attr("data-num", arr[3])
}
random2()
function reset() {
    total = 0
    comp = random()
    $(".main-section").html(comp)
    $(".total").text(total)


}


$(".image").on("click", function () {
    var data = parseInt($(this).attr("data-num"))
    total += data
    $(".total").html(total)
    if (total == comp) {
        wins++
        $(".span1").html(wins)
         if($(".main").find(".result-text").length<=0){
            x = $("<div>")
            $(x).addClass("result-text")
            $(".main").prepend(x)
        }
        $(x).text("You win")

        reset()

    }
    else if (total > comp) {
        losses++
        $(".span2").html(losses)
        if($(".main").find(".result-text").length<=0){
            x = $("<div>")
            $(x).addClass("result-text")
            $(".main").prepend(x)
        }
        $(x).text("You lose")
       reset()
    }
})



