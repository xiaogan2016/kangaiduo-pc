"use strict";
/**
 * 暴露模块
 */
require(["../config"], function (m) {
    require(["jquery","header","nav","common","advertisement","addproduct","productdetail","prorecomend"], 
    function ($,header,nav,com,adv,addpro,prod,pror) {
        
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
            adv.init();
        });

         // 加载产品添加模块
         $('#addproduct').load('../html/proDetailPage/addproduct.html', () => {
            addpro.init();
        });

        // 加载产品推荐购买模块
        $('#prorecomend').load('../html/proDetailPage/prorecomend.html', () => {
            prod.init();
        });

         // 加载产品详情模块
         $('#productdetail').load('../html/proDetailPage/productdetail.html', () => {
            pror.init();
        });
        // 加载底部模块
        $('#footer').load('../html/indexPage/footer.html', () => {
            
        });
    });
});