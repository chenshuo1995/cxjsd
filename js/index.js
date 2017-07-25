$('.swiper-wrapper').css({
		width:$(window).width(),height:$(window).height()
})

  var swiper1 = new Swiper ('.swiper1', {
  direction: 'vertical',
	initialSlide:0,
  
  
  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    swiperAnimateCache(swiper); //隐藏动画元素 
    swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    if (swiper.activeIndex == '3') {
      $('.slide4 .renwu').css('display','block');
    }
    if (swiper.activeIndex == '4') {
      $('.slide5 .people1').css('display','none');
      $('.slide5 span').css('display','none');
    }
  }
});
var swiper2 = new Swiper('.swiper2', {
   direction: 'horizontal',
   // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  
    // paginationClickable: true,
    // spaceBetween: 30,
    });

// 第四页切换
 
$('.slide4').find('.renwu img').click(function(){
  $(this).parent().css('display','none');
   $('.swiper2 img').css('display','block');
  // $('.swiper2 .swiper-slide').css('display','block');  
  
  $('.slide4').find('.swiper2 .swiper-wrapper img').eq($(this).index()).css('display','block');
  $('.swiper2 .prev').css('display','block');
  $('.swiper2 .next').css('display','block');
 
})
// 第五页切换
$('.slide5').find('.people img').click(function(){
   $('.slide5 span').show(1000,"easeInBack");
   $('.people1').css('display','block');
   $('.slide5').find('.people1 img').eq($(this).index()).show(1000,"easeInCirc").siblings().css('display','none');
})
$('.slide5').find(' span').click(function(){
  $('.people1').css('display','none');
  $('.slide5 span').css('display','none');
})
// 音乐点击
var audioEle = document.getElementsByTagName('audio');
var flag = true;
$('.music').click(function(){
  if (flag) {
    $('.music1').css('display','block');
    audioEle[0].pause();
    $('.music').css({animation:'none'});
    flag = false;
  }else{
    $('.music1').css('display','none');
    audioEle[0].play();
    $('.music').css({animation:'xz 2s 0s linear infinite normal'});
    flag = true;
  }
})
// 第二页地球转动
var time = null;
var n = 0;
time = setInterval(function(){
    $('.slide2 .box img').eq(n).show().siblings().hide();
    n+=1;
    if (n>=47) {
      n=0;    
    }
},50);

  


