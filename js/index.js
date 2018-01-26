"use strict";
/**
 * 暴露模块
 */
require(["config"], function (m) {
    require(["jquery","header", "nav","banner","category","hotpro","changeP",'mainfoor'], 
    function ($,header,nav,banner,category,hotpro,changeP,mainfoor) {
        // 加载header模块
        $('#header').load('../html/indexPage/header.html', () => {
            header.init();
        });

        // 加载nav模块
        $('#nav').load('../html/indexPage/nav.html', () => {
            nav.init();
        });

        // 加载banner模块
        $('#banner').load('../html/indexPage/banner.html', () => {
            banner.init();
        });

        // 加载category模块
        $('#category').load('../html/indexPage/category.html', () => {
            category.init();
        });

        // 加载hotpro模块
        $('#hotpro').load('../html/indexPage/hotpro.html', () => {
            hotpro.init();
        });

        // 加载changeP健康推荐模块
        $('#changeP').load('../html/indexPage/changeP.html', () => {
            changeP.init();
        });

        //加载mainfoor楼层导航模块
        $('#mainfoor').load('../html/indexPage/mainfoor.html', () => {
            mainfoor.init();
        });

        //加载footer模块
        $('#footer').load('../html/indexPage/footer.html', () => {
           
        });
    });
});