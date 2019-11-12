$('.tapbars>ol').on('click','li',function (e) {
    let $li = $(e.currentTarget)
    let index = $li.index()
    let $content = $('.tapbarsContent>li')
    $li.addClass('active').siblings().removeClass('active')
    $content.eq(index).addClass('active').siblings().removeClass('active')

})

