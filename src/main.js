$('.tapbars>ol').on('click', 'li', function (e) {
    let $li = $(e.currentTarget)
    let index = $li.index()
    let $content = $('.tapbarsContent>li')
    $li.addClass('active').siblings().removeClass('active')
    $content.eq(index).addClass('active').siblings().removeClass('active')
})


//上传歌曲的格式
$(document).on('click', 'ol#listType>li', function (e) {
    
    window.open(`./listtype.html?type=${e.currentTarget.dataset.type}`, "_self")
})
$(document).on('click', 'ol#songs>li', function (e) {
    console.log(e)   
})





