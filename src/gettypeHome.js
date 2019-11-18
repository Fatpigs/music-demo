!(function gettype () {
    let $listType = $('ol#listType')  //获取歌单
    function getQuery () {
        var query = new AV.Query('SongList');
        return query.find()
    }

    function fillListType (listType) {
        for(let i =0;i < listType.length;i++)
        {
            let type = listType[i]
            $listType.append(template(type))
        }
        $('#listType>img').remove()
    }
    function template (type) {
        return `
        <li data-type="${type.id}">
            <div class="cover">
                <img src="${type.attributes.listPic}" alt="图片">
            </div>
            <p>${type.attributes.listName}</p>
        </li>`
    }
    getQuery().then(fillListType,function () {
        console.log("出错啦!")
    });
})()