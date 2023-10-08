
$(".info-box").on('mouseenter',function(){
    $(".info-box").css('opacity','0.3')
    $(".info-box").css('transition','0.8s')
    $(this).css('opacity',"1")
});
$(".ribbon").on('mouseleave',function(){
    $(".info-box").css('opacity','1')
}) 


if ($(window).scrollTop() >= 500 ){
    $(".goback").css("dispaly" , "block")
}

$(".goback").on("click",function(){
    $('html,body').animate({scrollTop:0}, 100)
})


$(".box-wrap1").on("click",function(){
    catBox(".uma")
})
$(".box-wrap2").on("click",function(){
    catBox(".small")
})
$(".box-wrap3").on("click",function(){
    catBox(".start")
})

function catBox(name){
    $(name).css("display" , "flex") 
    $(".aboutMask").css("display" , "block")
    $(".aboutCat").css("display" , "block")
    $(".bgMask").css("display" , "block")
}

$(".close1").on("click",function(){
    clear(".uma")
})
$(".close2").on("click",function(){
    clear(".small")
})
$(".close3").on("click",function(){
    clear(".start")
})
$(".bgMask").on("click",function(){
    $(".uma , .small , .start").css("display" , "none")
    clearBox()
})

function clear(name){
    $(name).css("display" , "none")
    clearBox()
}
function clearBox(){
    $(".aboutMask").css("display" , "none")
    $(".aboutCat").css("display" , "none")
    $(".bgMask").css("display" , "none")
    
}
