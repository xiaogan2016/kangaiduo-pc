/**
 * 定义addproduct模块
 */
define(["jquery","common"],function($,com){
    console.log('addproduct模块已加载。。。')
     //接收地址栏参数  
    let params = com.getAddressParams(location.search)
    return{     
        init:function(){     
            this.getAllProTotal();
            this.getProPice();
        },


        //获取商品总数和剩余量
        getAllProTotal:function(){
            $.ajax({
                type: 'get',
                url: "/api/product/GetActivityStock?productid="+params.proid,
                success: function(data){
                    console.log(data);
                    let str = '';
                    str =  `
                        <p>厂家特供 <span id="tegong_all">${data.ActivityStockNum}</span></p>
                        <p class="tegong-p2" id="tegong_end">${data.LeftStockNum}</p>
                    `                
                    $("#getAllProTotal").append(str);
                    $("#tegong_end").css("color",data.BackColor);
                }
            })
        },

        //获取商品价格
        getProPice: function(){
            $.ajax({
                type: 'get',
                url: "/api/product/getprice?wareskucode="+params.proid,
                success: function(data){
                    console.log(data.StyleInfo);
                    let pricedata = data.StyleInfo;
                    let str = '';
                    str =  `
                    <p class="grey888 nophone-l fl" id="saleprice_name">会员价</p>
                    <p class="nophone-r fl">
                        <span class="nophone-rspan1">￥</span>
                        <span class="nophone-rspan2" id="saleprice_value">${pricedata.Price}</span>
                        <span class="grey888 nophone-rspan3">￥<font id="original_price">${pricedata.OrigPrice}</font></span>
                        <span class="nophone-rspan5">立省￥<font class="henan_price">${pricedata.OrigPrice-pricedata.Price}</font></span>
                    </p>
                    `             
                    $("#activityMesst").append(str);
                }
            })
        }
    }
})