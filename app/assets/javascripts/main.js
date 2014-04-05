var count = 0
var pause = false;

var audio = new Audio('alert.mp3');

function tick(){
    count += 1
    if (count > 1200) {
        $('#next-words').text('Next Break in: ')
        var break_count = count % 1200
        var break_width = 100 - ((break_count / 20) * 100)
        $('#break-bar').width("" + break_width + '%')
        $('#break-words').text('Break Over in: ' + (20 - break_count) + 's')
        if (count > 1220) {
            count = 0
            break_count = 0
            $('#break-words').text('Break Over in: ')
        }
    } else {
        var width = 100 - ((count / 1200) * 100)
        $('#work-bar').width("" + width + '%')
        var mins = Math.floor(20 - (count / 60))
        if (count === 1200) {
            var secs = 0
        } else {
            var secs = 60 - (count % 60)
        }
        $('#next-words').text('Next Break in: ' + mins + 'm ' + secs + 's')
    }
}

setInterval(function(){
    if (pause === false) {
        tick();
        if (count === 1200 || count === 1201 || count === 1220) {
            audio.play();
        }
    }
},1000)


$(function(){
    var button = $('#pause')
    button.on('click', function(){
        pause = !pause
        if (pause === true) {
            button.text('Unpause')
        } else {
             button.text('Pause')
        }
    })
})