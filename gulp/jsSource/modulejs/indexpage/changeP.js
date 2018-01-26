/**
 * 定义changeP健康推荐模块
 */
define(["jquery"],function($,com){
    console.log('changeP健康推荐模块已加载。。。')
    return{
        init:function(){
           this.getData();
           this.onClickChangeBtn();
           this.handleToDetailPage();
        },

        //第一次获取数据
        getData: function(){
            $.ajax({
                type: 'get',
                url: "api/DataPlatform/GetIndexGuessLikeProducts?&pagesize=5&pageindex=1",
                success: function(data){
                    console.log(data.Data);
                    let fistData = data.Data;
                    let fistDataStr = '';
                    for(let i=0;i<fistData.length;i++){
                        fistDataStr += `
                        <li productID=${fistData[i].WareSkuCode}>
                            <a class="imgpro"><img src=${fistData[i].Pic180} title=${fistData[i].WareName}></a>
                            <div class="hotPadding">
                                <p class="nameC"><a title=${fistData[i].WareName}>${fistData[i].WareName}</a></p>
                                <p class="priceC">￥${fistData[i].SalePrice}</p>
                            </div>
                        </li>
                        `
                    }
                    var changePCon = $(".changeP ul").html(fistDataStr);
                    $(".changeP ul").append(changePCon);
                }
            })
        },

        // 换一批商品
        onClickChangeBtn: function(){
            let index = 1;
            $("#changeBtn").on('click',function(){
                $(".changeP ul").html('');
                index++;
                $.ajax({
                    type: 'get',
                    url: "api/DataPlatform/GetIndexGuessLikeProducts?&pagesize=5&pageindex="+ index,
                    success: function(data){
                        console.log(data.Data);
                        let fistData = data.Data;
                        let fistDataStr = '';
                        for(let i=0;i<fistData.length;i++){
                            fistDataStr += `
                            <li productID=${fistData[i].WareSkuCode}>
                                <a class="imgpro"><img src=${fistData[i].Pic180} title=${fistData[i].WareName}></a>
                                <div class="hotPadding">
                                    <p class="nameC"><a title=${fistData[i].WareName}>${fistData[i].WareName}</a></p>
                                    <p class="priceC">￥${fistData[i].SalePrice}</p>
                                </div>
                            </li>
                            `
                        }
                        var changePCon = $(".changeP ul").html(fistDataStr);
                        $(".changeP ul").append(changePCon);
                        
                    }
                });
                
            });
               
        },

        //跳转到详情页并传参
        handleToDetailPage(){
            $("#productInfo").on('click','li',function(e){
                var productID = $(this).attr('productID');
                console.log($(this).attr('productID'));
                window.location.href = 'http://localhost:8000/html/prodetail.html?proid='+productID;
            })
        }
        
    }
})