/**
 * 定义productdetail模块
 */
define(["jquery","common"],function($,com){
    console.log('productdetail模块已加载。。。')
     //接收地址栏参数  
    let params = com.getAddressParams(location.search)
    return{     
        init:function(){     
           this.getHistoryPro();
        },
        //获取浏览过的商品
        getHistoryPro:function(){
            $.ajax({
                type: 'get',
                url: "/json/historypro.json",
                success: function(data){
                    console.log(data);
                    let str = '';
                    for (let i=0;i<data.length;i++){
                        str +=  `
                        <li>
                            <p class="buylook-proimg">
                                <a href="" target="_blank">
                                    <img class="lazyimg" src="${data[i].Pic}">
                                </a>
                            </p>
                            <p class="buylook-line1  w-pading5"><a href="" target="_blank">${data[i].WareName}</a></p>
                            <p class="buylook-line2  w-pading5">${data[i].Advertisement}</p>
                            <p class="buylook-proprice w-pading5">￥${data[i].Price}</p>
                        </li>
                        `     
                    } 
                    var historyStr = $("#buylook-list").html(str);
                    $("#buylook-list").append(historyStr);   
                  
                }
            })
        }
    }
})