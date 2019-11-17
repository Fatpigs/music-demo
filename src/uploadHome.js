function uploadMusic () {
    //上传歌曲的函数
    function loadMusic (objects) {
        var Todo = AV.Object.extend('Song');
        var songList = []
        
        for (let i = 0;i < objects.length;i++) {
            let song = objects[i]
            let todo = new Todo()
            todo.set('musicAuthor',song.musicAuthor)
            todo.set('musicName',song.musicName)
            todo.set('musicUrl',song.musicUrl)
            var songtype = AV.Object.createWithoutData('SongList', song.songList);
            todo.set('songList', songtype);
            songList.push(todo)
        }
        AV.Object.saveAll(songList);
    }

    var objects = [
        {'musicAuthor':'押尾コータロー','musicName':'Always','musicUrl':'http://q0u2lzqnn.bkt.clouddn.com/Always.mp3','songList':'5dca64c343c257007f5cb35d'},
        {'musicAuthor':'押尾コータロー','musicName':'Destiny','musicUrl':'http://q0u2lzqnn.bkt.clouddn.com/Destiny.mp3','songList':'5dca64c343c257007f5cb35d'},
        {'musicAuthor':'押尾コータロー','musicName':'fight','musicUrl':'http://q0u2lzqnn.bkt.clouddn.com/fight.m4a','songList':'5dca64c343c257007f5cb35d'},
        {'musicAuthor':'押尾コータロー','musicName':'HEART BEAT!','musicUrl':'http://q0u2lzqnn.bkt.clouddn.com/HEART%20BEAT%21.mp3','songList':'5dca64c343c257007f5cb35d'},
        {'musicAuthor':'押尾コータロー','musicName':'IN MY LIFE','musicUrl':'http://q0u2lzqnn.bkt.clouddn.com/IN%20MY%20LIFE.mp3','songList':'5dca64c343c257007f5cb35d'},
        {'musicAuthor':'押尾コータロー','musicName':'グリーンスリーブス','musicUrl':'http://q0u2lzqnn.bkt.clouddn.com/%E3%82%B0%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B9%E3%83%AA%E3%83%BC%E3%83%96%E3%82%B9.mp3','songList':'5dca64c343c257007f5cb35d'},
        {'musicAuthor':'押尾コータロー','musicName':'ティコ','musicUrl':'http://q0u2lzqnn.bkt.clouddn.com/%E3%83%86%E3%82%A3%E3%82%B3.mp3','songList':'5dca64c343c257007f5cb35d'},
        {'musicAuthor':'押尾コータロー','musicName':'プロローグ','musicUrl':'http://q0u2lzqnn.bkt.clouddn.com/%E3%83%97%E3%83%AD%E3%83%AD%E3%83%BC%E3%82%B0.m4a','songList':'5dca64c343c257007f5cb35d'},
        {'musicAuthor':'Beyond','musicName':'不再犹豫','musicUrl':'http://q0u2lzqnn.bkt.clouddn.com/%E4%B8%8D%E5%86%8D%E7%8A%B9%E8%B1%AB.m4a','songList':'5dca64c343c257007f5cb35d'},
        {'musicAuthor':'押尾コータロー','musicName':'黄昏','musicUrl':'http://q0u2lzqnn.bkt.clouddn.com/%E9%BB%84%E6%98%8F.mp3','songList':'5dca64c343c257007f5cb35d'},
        {'musicAuthor':'押尾コータロー','musicName':'見上げてごらん夜の星を','musicUrl':'http://q0u2lzqnn.bkt.clouddn.com/%E8%A6%8B%E4%B8%8A%E3%81%92%E3%81%A6%E3%81%94%E3%82%89%E3%82%93%E5%A4%9C%E3%81%AE%E6%98%9F%E3%82%92.m4a','songList':'5dca64c343c257007f5cb35d'},
        {'musicAuthor':'押尾コータロー','musicName':'手のひら','musicUrl':'http://q0u2lzqnn.bkt.clouddn.com/%E6%89%8B%E3%81%AE%E3%81%B2%E3%82%89.mp3','songList':'5dca64c343c257007f5cb35d'}
    ]
    console.log(objects)
    loadMusic([])//填进参数就上传
}

console.log(uploadMusic)
