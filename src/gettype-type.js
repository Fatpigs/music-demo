!(function getListType() {

    function queryString() {
        return (document.location.search.match(new RegExp("(?:^\\?|&)" + key + "=(.*?)(?=&|$)")) || ['', null])[1];
    }

    function template(type) {
        return `
        <div class="bgFuzzy" style="background: url(${type.attributes.listPic}) no-repeat;"> </div>
        <div class="list_header">
            <img src="${type.attributes.listPic}" alt="list_header">
            <p>${type.attributes.listName}</p>
        </div>
        <div class="songIntro">
            <p><span>简介:</span>${type.attributes.listIntro}</p>
        </div>
    `
    }

    function getQuery() {
        var query = new AV.Query('SongList');
        return query
    }

    function getTypeInfo() {
        var $headerWrap = $('#headerWrap')
        var typeString = queryString('type')
        getQuery.get(typeString).then(function (type) {
            $headerWrap.append(template(type))
        });
    }
    return getTypeInfo
})()