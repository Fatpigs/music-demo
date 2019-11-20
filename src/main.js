require(["getsong-home","gettype-home","tabs","./av-init"], function(song,type,tabs,avInit){
    avInit()
    song()
    type()
    tabs()
})
