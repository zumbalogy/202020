var count = 0
var pause = false;



function tick(){
    count++
    if (count === 1200) {
        count = 0
    }
    var width = 100 - ((count / 1200) * 100)
    $('#work-bar').width("" + width + '%')
}

setInterval(function(){
    if (pause === false) {
        tick();
    }
},1000)