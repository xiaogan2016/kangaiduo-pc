"use strict";
/**
 * 暴露模块
 */
require(["../config"], function (m) {
    require(["jquery","header","nav"], 
    function ($,header,nav) {
        // 加载header模块
        $('#header').load('../html/indexPage/header.html', () => {
            header.init();
        });

        // 加载nav模块
        $('#nav').load('../html/indexPage/nav.html', () => {
            nav.init();
            $("#classify").hide();
        });
         // 加载广告模块
         $('#advertisement').load('../html/proDetailPage/advertisement.html', () => {
            
        });

         // 加载产品添加模块
         $('#addproduct').load('../html/proDetailPage/addproduct.html', () => {
            
        });

        // 加载产品推荐购买模块
        $('#prorecomend').load('../html/proDetailPage/prorecomend.html', () => {
            
        });

         // 加载产品详情模块
         $('#productdetail').load('../html/proDetailPage/productdetail.html', () => {
            
        });
        // 加载底部模块
        $('#footer').load('../html/indexPage/footer.html', () => {
            
        });
    });
});