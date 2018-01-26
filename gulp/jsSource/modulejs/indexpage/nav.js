/**
 * 定义nav模块
 */
define(["jquery","common"],function($,com){
    console.log('nav模块已加载。。。')
    return{
        init:function(){
            com.onShowAndHide($(".classify_ul>li"),$(".lNav_pop"));
        }
    }
})