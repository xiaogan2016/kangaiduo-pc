'use strict';

/**
 * 定义changeP健康推荐模块
 */
define(["jquery"], function ($, com) {
    console.log('changeP健康推荐模块已加载。。。');
    return {
        init: function init() {
            this.getData();
            this.onClickChangeBtn();
            this.handleToDetailPage();
        },

        //第一次获取数据
        getData: function getData() {
            $.ajax({
                type: 'get',
                url: "api/DataPlatform/GetIndexGuessLikeProducts?&pagesize=5&pageindex=1",
                success: function success(data) {
                    console.log(data.Data);
                    var fistData = data.Data;
                    var fistDataStr = '';
                    for (var i = 0; i < fistData.length; i++) {
                        fistDataStr += '\n                        <li productID=' + fistData[i].WareSkuCode + '>\n                            <a class="imgpro"><img src=' + fistData[i].Pic180 + ' title=' + fistData[i].WareName + '></a>\n                            <div class="hotPadding">\n                                <p class="nameC"><a title=' + fistData[i].WareName + '>' + fistData[i].WareName + '</a></p>\n                                <p class="priceC">\uFFE5' + fistData[i].SalePrice + '</p>\n                            </div>\n                        </li>\n                        ';
                    }
                    var changePCon = $(".changeP ul").html(fistDataStr);
                    $(".changeP ul").append(changePCon);
                }
            });
        },

        // 换一批商品
        onClickChangeBtn: function onClickChangeBtn() {
            var index = 1;
            $("#changeBtn").on('click', function () {
                $(".changeP ul").html('');
                index++;
                $.ajax({
                    type: 'get',
                    url: "api/DataPlatform/GetIndexGuessLikeProducts?&pagesize=5&pageindex=" + index,
                    success: function success(data) {
                        console.log(data.Data);
                        var fistData = data.Data;
                        var fistDataStr = '';
                        for (var i = 0; i < fistData.length; i++) {
                            fistDataStr += '\n                            <li productID=' + fistData[i].WareSkuCode + '>\n                                <a class="imgpro"><img src=' + fistData[i].Pic180 + ' title=' + fistData[i].WareName + '></a>\n                                <div class="hotPadding">\n                                    <p class="nameC"><a title=' + fistData[i].WareName + '>' + fistData[i].WareName + '</a></p>\n                                    <p class="priceC">\uFFE5' + fistData[i].SalePrice + '</p>\n                                </div>\n                            </li>\n                            ';
                        }
                        var changePCon = $(".changeP ul").html(fistDataStr);
                        $(".changeP ul").append(changePCon);
                    }
                });
            });
        },

        //跳转到详情页并传参
        handleToDetailPage: function handleToDetailPage() {
            $("#productInfo").on('click', 'li', function (e) {
                var productID = $(this).attr('productID');
                console.log($(this).attr('productID'));
                window.location.href = 'http://localhost:8000/html/prodetail.html?proid=' + productID;
            });
        }
    };
});