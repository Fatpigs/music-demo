!(function getSong () {

    $(document).on('click','#songsList>li',function(e){
        window.open(`./song.html?id=${e.currentTarget.dataset.id}`,"_self")
    })

    function queryString(key) {
        return (document.location.search.match(new RegExp("(?:^\\?|&)" + key + "=(.*?)(?=&|$)")) || ['', null])[1];
    }

    function template(song) {
        return `
        <li data-id="${song.id}">
            <div class="number">${i+1}</div>
            <div class="songBaseInfo">
                <h3>${song.attributes.musicName}</h3>
                <p>${song.attributes.musicAuthor}</p>
            </div>
            <a href="${song.attributes.musicUrl}"></a>
        </li>
         `
    }

    function getQuery() {
        var pointer = AV.Object.createWithoutData('SongList', queryString('type'));
        var query = new AV.Query('Song');
        query.equalTo('songList', pointer);
        return query
    }

    function getSong (){
        getQuery.find().then(function (songs) {
            var $songsList = $('#songsList')
            // students 是包含满足条件的 Student 对象的数组
            for(let i = 0;i < songs.length;i++) {
                $songsList.append(template(songs[i]))
            }
        });
    }
    
    return getSong
})()