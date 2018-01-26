'use strict';

/**
* 定义mainfoor楼层导航模块
*/
define(["jquery", 'swiper'], function ($, swiper) {
    console.log('mainfoor楼层导航模块已加载。。。');
    return {
        init: function init() {
            this.foorBannerScroll();
        },

        //图片轮播
        foorBannerScroll: function foorBannerScroll() {
            var mySwiper = new swiper('.contextLou .swiper-container', {
                loop: true,

                // 分页器
                pagination: '.contextLou .swiper-pagination',
                autoplay: 2500, //时间间隔
                direction: 'horizontal', //水平方向
                autoplayDisableOnInteraction: false, //在点击之后可以继续实现轮播

                paginationClickable: true //点击小圆点
            });
        }
    };
});