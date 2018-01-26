/**
 * 定义advertisement模块
 */
define(["jquery","common"],function($,com){
    console.log('advertisement模块已加载。。。')
     //接收地址栏参数  
    let params = com.getAddressParams(location.search)
    return{     
        init:function(){     
            console.log(params);
        }
    }
})