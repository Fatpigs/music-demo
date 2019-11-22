export function gettype_home($,AV) {

    var loadingImage = new Image()
    loadingImage.src = "//i.loli.net/2019/11/18/cTvoKwnSMFaRLWx.gif"
    
    let $listType = $('ol#listType')  //获取歌单
    function getQuery() {
        var query = new AV.Query('SongList');
        return query.find()
    }

    function fillListType(listType) {
        for (let i = 0; i < listType.length; i++) {
            let type = listType[i]
            $listType.append(template(type))
        }
        $('#listType>img').remove()
    }
    function template(type) {
        return `
        <li data-type="${type.id}">
            <div class="cover">
                <img src="${type.attributes.listPic}" alt="图片">
            </div>
            <p>${type.attributes.listName}</p>
        </li>`
    }

    getQuery().then(fillListType, function () {
        console.log("出错啦!")
    });


    $(document).on('click', 'ol#listType>li', function (e) {

        window.open(`./listtype.html?type=${e.currentTarget.dataset.type}`, "_self")
    })
}
