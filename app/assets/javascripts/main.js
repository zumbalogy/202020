var count = 0
var pause = false

var audio = new Audio('alert.mp3')

function tick(){
    count += 1
    if (count > 1200) {
        var break_count = count % 1200
        var break_width = 100 - ((break_count / 20) * 100)
        $('#break-bar').width("" + break_width + '%')
        if (count > 1220) {
            count = 0
            break_count = 0
        }
    }
    var width = 100 - ((count / 1200) * 100)
    $('#work-bar').width("" + width + '%')
}

setInterval(function(){
    if (pause === false) {
        tick();
        if (count === 1200 || count === 1201 || count === 1220) {
            audio.play();
        }
    }
},1000)