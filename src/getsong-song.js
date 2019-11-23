export function getsong_song($,AV){


    var $disk = $('#disk')

    var queryString = function (key) {
        return (document.location.search.match(new RegExp("(?:^\\?|&)" + key + "=(.*?)(?=&|$)")) || ['', null])[1];
    }
    
    $(document).on('click', function () {
        var $circle = $('.circle')
        var audio = document.querySelector('audio#play')
        if (audio.paused) {
            audio.play()
            $circle.removeClass('pause')
        } else {
            audio.pause()
            $circle.addClass('pause')
        }
    })

    function template(){
        return `<div class="circle playing">
            <img src="/images/place.jpg" alt="图片">
        </div>`
    }

    function getQuery(){
        var query = new AV.Query('Song');
        return query
    }

    function getSong() {
        getQuery().get(queryString('id')).then(function (song) {
            $disk.append(template())
            
            playAudio(song)
        });
    }

    function playAudio(song){
        let audio = document.createElement('audio')
        audio.src = song.attributes.musicUrl
        audio.id = 'play'
        audio.play()
        document.querySelector('body').append(audio)
    }
    function changeScroll(){
        $(document).unbind('scroll')
    }
    changeScroll()
    getSong()
}