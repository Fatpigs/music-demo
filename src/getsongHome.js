
!(function getSong () {
    let $songList = $('ol#songs') //获取歌曲列表
    function getQuery () {
        var query = new AV.Query('Song');
        return query.find()
    }

    function fillSongs (Songs) {
        for(let i =0;i < Songs.length;i++)
        {
            let song = Songs[i].attributes
            $songList.append(template(song))
        }
    }
    function template (song) {
        return `<li data-id="${song.id}">
            <div class="songBaseInfo">
                <h3>${song.musicName}</h3>
                <p><i></i>${song.musicAuthor}</p>
            </div>
            <a href="${song.musicUrl}"></a>
        </li>`
    }

    getQuery().then(fillSongs,function(){
        console.log("出错了")
    });
})()
