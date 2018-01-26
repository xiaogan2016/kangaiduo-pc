'use strict';

/**
 * 定义hotpro模块
 */
define(["jquery"], function ($) {
    console.log('hotpro模块已加载。。。');
    return {
        init: function init() {
            this.secKillPro();
            this.nextPage();
        },

        //秒杀产品
        secKillPro: function secKillPro() {
            $.ajax({
                type: 'get',
                url: "api/product/GetSecKillList?channelCode=1032020&sort=4&type=1&externalCall=true",
                success: function success(data) {
                    console.log(data.Data);
                    var secKillProData = data.Data;
                    var secKillProStr = '';
                    for (var i = 0; i < secKillProData.length; i++) {
                        secKillProStr += '\n                                <li>\n                                    <div class="zhe" >\n                                        <span class="zheS">' + (secKillProData[i].Price / secKillProData[i].MarketPrice * 10).toFixed(1) + '</span>\u6298\n                                    </div>\n                                    <p><a href="" target="_blank"><img src=' + secKillProData[i].Pic180 + ' title=' + secKillProData[i].WareName + '></a></p>\n                                    <div class="clum">\n                                        <dl>\n                                            <dd class="secentLi"><a href="" target="_blank" title=' + secKillProData[i].WareName + '>' + secKillProData[i].WareName + '</a>\n                                            </dd>\n                                            <dd class="thirdLi"><span class="newPrice">\uFFE5' + secKillProData[i].Price + '</span><span class="oldPrice">\uFFE5' + secKillProData[i].MarketPrice + '</span>\n                                            </dd>\n                                        </dl>\n                                    </div>\n                                </li>\n                        ';
                    }
                    var hotProC = $(".hotProC ul").html(secKillProStr);
                    $(".hotProC ul").append(hotProC);
                }
            });
        },

        //秒杀产品点击按钮
        nextPage: function nextPage() {
            $("#nextPage").on('click', function () {
                $(".hotProC ul").animate({ "margin-left": "-1200px" }, 1000);
                $("#reduction").text(2);
            });
            $("#prePage").on('click', function () {
                $(".hotProC ul").animate({ "margin-left": "+0" }, 1000);
                $("#reduction").text(1);
            });
        }

    };
});