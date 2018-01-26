"use strict";
/**
 * 暴露模块
 */

require(["../config"], function (m) {
    require(["jquery", "header", "nav"], function ($, header, nav) {
        // 加载header模块
        $('#header').load('../html/indexPage/header.html', function () {
            header.init();
        });

        // 加载nav模块
        $('#nav').load('../html/indexPage/nav.html', function () {
            nav.init();
            $("#classify").hide();
        });
        // 加载广告模块
        $('#advertisement').load('../html/proDetailPage/advertisement.html', function () {});

        // 加载产品添加模块
        $('#addproduct').load('../html/proDetailPage/addproduct.html', function () {});

        // 加载产品推荐购买模块
        $('#prorecomend').load('../html/proDetailPage/prorecomend.html', function () {});

        // 加载产品详情模块
        $('#productdetail').load('../html/proDetailPage/productdetail.html', function () {});
        // 加载底部模块
        $('#footer').load('../html/indexPage/footer.html', function () {});
    });
});