/**
 * 定义hotpro模块
 */
define(["jquery"],function($){
    console.log('hotpro模块已加载。。。')
    return{
        init:function(){
           this.secKillPro();
           this.nextPage();
        },

        //秒杀产品
        secKillPro: function(){
            $.ajax({
                type: 'get',
                url: "api/product/GetSecKillList?channelCode=1032020&sort=4&type=1&externalCall=true",
                success : function(data){
                    console.log(data.Data);
                    let secKillProData = data.Data;
                    let secKillProStr = '';
                    for(let i=0;i<secKillProData.length;i++) {
                        secKillProStr += `
                                <li>
                                    <div class="zhe" >
                                        <span class="zheS">${((secKillProData[i].Price/secKillProData[i].MarketPrice)*10).toFixed(1)}</span>折
                                    </div>
                                    <p><a href="" target="_blank"><img src=${secKillProData[i].Pic180} title=${secKillProData[i].WareName}></a></p>
                                    <div class="clum">
                                        <dl>
                                            <dd class="secentLi"><a href="" target="_blank" title=${secKillProData[i].WareName}>${secKillProData[i].WareName}</a>
                                            </dd>
                                            <dd class="thirdLi"><span class="newPrice">￥${secKillProData[i].Price}</span><span class="oldPrice">￥${secKillProData[i].MarketPrice}</span>
                                            </dd>
                                        </dl>
                                    </div>
                                </li>
                        `;
                    } 
                    var hotProC = $(".hotProC ul").html(secKillProStr);
                    $(".hotProC ul").append(hotProC);
                }
            }) 
        },

        //秒杀产品点击按钮
        nextPage: function(){
            $("#nextPage").on('click',function(){
                $(".hotProC ul").animate({"margin-left": "-1200px"},1000);
                $("#reduction").text(2);
            })
            $("#prePage").on('click',function(){
                $(".hotProC ul").animate({"margin-left": "+0"},1000);
                $("#reduction").text(1);
            })
        }

    }
})