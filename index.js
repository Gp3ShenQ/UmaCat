
$(".info-box").on('mouseenter',function(){
    $(".info-box").css('opacity','0.3')
    $(".info-box").css('transition','0.8s')
    $(this).css('opacity',"1")
});
$(".ribbon").on('mouseleave',function(){
    $(".info-box").css('opacity','1')
})