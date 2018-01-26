"use strict";

/**
 * 定义addproduct模块
 */
define(["jquery", "common"], function ($, com) {
    console.log('addproduct模块已加载。。。');
    //接收地址栏参数  
    var params = com.getAddressParams(location.search);
    return {
        init: function init() {
            this.getAllProTotal();
            this.getProPice();
        },

        //获取商品总数和剩余量
        getAllProTotal: function getAllProTotal() {
            $.ajax({
                type: 'get',
                url: "/api/product/GetActivityStock?productid=" + params.proid,
                success: function success(data) {
                    console.log(data);
                    var str = '';
                    str = "\n                        <p>\u5382\u5BB6\u7279\u4F9B <span id=\"tegong_all\">" + data.ActivityStockNum + "</span></p>\n                        <p class=\"tegong-p2\" id=\"tegong_end\">" + data.LeftStockNum + "</p>\n                    ";
                    $("#getAllProTotal").append(str);
                    $("#tegong_end").css("color", data.BackColor);
                }
            });
        },

        //获取商品价格
        getProPice: function getProPice() {
            $.ajax({
                type: 'get',
                url: "/api/product/getprice?wareskucode=" + params.proid,
                success: function success(data) {
                    console.log(data.StyleInfo);
                    var pricedata = data.StyleInfo;
                    var str = '';
                    str = "\n                    <p class=\"grey888 nophone-l fl\" id=\"saleprice_name\">\u4F1A\u5458\u4EF7</p>\n                    <p class=\"nophone-r fl\">\n                        <span class=\"nophone-rspan1\">\uFFE5</span>\n                        <span class=\"nophone-rspan2\" id=\"saleprice_value\">" + pricedata.Price + "</span>\n                        <span class=\"grey888 nophone-rspan3\">\uFFE5<font id=\"original_price\">" + pricedata.OrigPrice + "</font></span>\n                        <span class=\"nophone-rspan5\">\u7ACB\u7701\uFFE5<font class=\"henan_price\">" + (pricedata.OrigPrice - pricedata.Price) + "</font></span>\n                    </p>\n                    ";
                    $("#activityMesst").append(str);
                }
            });
        }
    };
});