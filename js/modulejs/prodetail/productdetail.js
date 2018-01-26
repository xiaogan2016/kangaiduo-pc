"use strict";

/**
 * 定义productdetail模块
 */
define(["jquery", "common"], function ($, com) {
    console.log('productdetail模块已加载。。。');
    //接收地址栏参数  
    var params = com.getAddressParams(location.search);
    return {
        init: function init() {
            this.getHistoryPro();
        },
        //获取浏览过的商品
        getHistoryPro: function getHistoryPro() {
            $.ajax({
                type: 'get',
                url: "/json/historypro.json",
                success: function success(data) {
                    console.log(data);
                    var str = '';
                    for (var i = 0; i < data.length; i++) {
                        str += "\n                        <li>\n                            <p class=\"buylook-proimg\">\n                                <a href=\"\" target=\"_blank\">\n                                    <img class=\"lazyimg\" src=\"" + data[i].Pic + "\">\n                                </a>\n                            </p>\n                            <p class=\"buylook-line1  w-pading5\"><a href=\"\" target=\"_blank\">" + data[i].WareName + "</a></p>\n                            <p class=\"buylook-line2  w-pading5\">" + data[i].Advertisement + "</p>\n                            <p class=\"buylook-proprice w-pading5\">\uFFE5" + data[i].Price + "</p>\n                        </li>\n                        ";
                    }
                    var historyStr = $("#buylook-list").html(str);
                    $("#buylook-list").append(historyStr);
                }
            });
        }
    };
});