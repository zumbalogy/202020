var count = 1190
var pause = false;



function tick(){
    count += 2
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
    }
},1000)