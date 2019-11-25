export function getsong_home($,AV){
    let $loaderWrap = $('.loaderWrap') //获取歌曲列表
    let page = 1
    let limit = 10
    let reach = true
    function getQuery (limit,page) {
        var query = new AV.Query('Song');
        query.limit(limit);
        query.skip(page * 10)
        return query.find()
    }

    function fillSongs (Songs) {
        for(let i =0;i < Songs.length;i++)
        {
            
            let song = Songs[i]
            $loaderWrap.before(template(song))
        }
        if(Songs.length < 10)
        {
            $('.loadMore').remove()
            $('.noMore').addClass('active')
        }
        else {
            page += 1
            reach = true
        }
        
    }
    function template (song) {
        return `<li data-id="${song.id}" class="songClick">
            <div class="songBaseInfo">
                <h3>${song.attributes.musicName}</h3>
                <p><i></i>${song.attributes.musicAuthor}</p>
            </div>
            <a></a>
        </li>`
    }

    function getSong() {
        getQuery(limit,page).then(fillSongs,function(){
            console.log("出错了")
        });
    }
    function gotoSongDetail(){
        $(document).on('click', 'ol#songs>li', function (e) {
            window.open(`./song.html?id=${e.currentTarget.dataset.id}`,"_self")
        })
    }
    

    function loadMore (){
        $(document).on('scroll',function(){
            
            var top  = reach ? $('.loadMore').offset().top -  $(window).scrollTop() : -1;
            if(reach && top < 700)
            {
                reach = false
                getQuery(limit,page).then(fillSongs,function(){
                    console.log("出错了")
                });
            }
        })
        
    }

    getSong()
    gotoSongDetail()
    loadMore()
}
