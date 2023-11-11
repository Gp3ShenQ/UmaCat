
// $(".info-box").on('mouseenter',function(){
  //     $(".info-box").css('opacity','0.3')
  //     $(".info-box").css('transition','0.8s')
  //     $(this).css('opacity',"1")
  // })
  // $(".ribbon").on('mouseleave',function(){
    //     $(".info-box").css('opacity','1')
    // })
    
    $(document).on("click",function(e){
      if(!$('.search-input')[0].contains(e.target)) $(".drop-down").removeClass("open")
      if(!$('.aboutBox')[0].contains(e.target)) {$(".evenBox").removeClass("openanimation"); $(".info-box").css("opacity","1")}
    })

// $(".info-box").on('click',function(){
//   $(".info-box").css('opacity','0.3')
//   $(this).css("opacity","1")
//   $(this).css("display", "block")
//   $(".evenBox").addClass("openanimation")
// })

// $(".news").on("click",function(){
//   $(".even").show()
//   $(".addrss").hide()
//   $(".question").hide()
//   $(".us").hide()

// })
// $(".addr").on("click",function(){
//   $(".addrss").show()
//   $(".even").hide()
//   $(".question").hide()
//   $(".us").hide()
// })
// $(".QA").on("click",function(){
//   $(".question").show()
//   $(".addrss").hide()
//   $(".even").hide()
//   $(".us").hide()
// })
// $(".connection").on("click",function(){
//   $(".us").show()
//   $(".addrss").hide()
//   $(".question").hide()
//   $(".even").hide()
// })
let boxIndex;
$('.info-box').on('click',function(){
  if(boxIndex != $(this).index()){
    $('.evensetting').hide()
    $('.evensetting').eq($(this).index()).fadeIn()
  }
  if(!$('.evenBox').hasClass('expand')){
    $('.evenBox').slideDown()
    $('.evenBox').addClass('expand')
  }else if(boxIndex == $(this).index()){
    $('.evenBox').removeClass('expand').slideUp()
  }
  boxIndex = $(this).index()
})


function topbom(){
  let wintop = $(window).scrollTop()
  if (wintop <= 300 ){
      $(".goback").css("display" , "none")
      $(".evenBox").removeClass("openanimation")
      $(".info-box").css("opacity","1")
    }else if (wintop >= 301 , wintop <= 999){
      $(".goback").css("display" , "block")
    }else if (wintop >= 1000){
      $(".evenBox").removeClass("openanimation")
      $(".info-box").css("opacity","1")
}
}
topbom()
$(window).on('scroll',()=>{
  topbom()
})
if ($(window).scrollTop() <= 500 ){
  $(".goback").css("display" , "none")
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
  $(name).fadeIn()
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

$(".searcharea").on("click",function(){
  if ($(".drop-down").hasClass("open")){
      $(".drop-down").removeClass("open")
  }else{
      $(".drop-down").addClass("open")
  }
  })
