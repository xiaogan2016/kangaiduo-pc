"use strict";

/**
 * 定义prorecomend模块
 */
define(["jquery", "common"], function ($, com) {
    console.log('prorecomend模块已加载。。。');
    //接收地址栏参数  
    var params = com.getAddressParams(location.search);
    return {
        init: function init() {}
    };
});