/**
 * 定义banner模块
 */
define(["jquery","swiper"],function($,swiper){
    console.log('banner模块已加载。。。')
    return{
        init:function(){
           this.bannerScroll();
        },
        bannerScroll:function(){
            var mySwiper = new swiper ('.banner .swiper-container', {
                loop: true,
                
                // 分页器
                pagination: '.banner .swiper-pagination',
                autoplay:3000, //时间间隔
                direction: 'horizontal', //水平方向
                autoplayDisableOnInteraction: false, //在点击之后可以继续实现轮播
                
                //前进后退按钮
                nextButton: '.banner .swiper-button-next',
                prevButton: '.banner .swiper-button-prev',

                paginationClickable: true //点击小圆点
              }) 
        }

    }
})