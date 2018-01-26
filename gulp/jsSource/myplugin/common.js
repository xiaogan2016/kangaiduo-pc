/**
 * 定义common模块
 */
define(["jquery"],function($){
	console.log("common模块已加载。。。");
	return {
		// 显示隐藏下拉菜单功能
        onShowAndHide: function(startTag,endTag){
            startTag.on("mouseenter",function(){
                endTag.show();
                $(this).addClass('onmouseshow')
            })
            startTag.on("mouseleave",function(){
                endTag.hide();
                $(this).removeClass('onmouseshow')
            })
		},
		
		/*cookie验证*/
		cookieget: function(key){
			var cookiestr = document.cookie;
			var list = cookiestr.split("; ");
			for(var i=0; i<list.length; i++){
				var kvs = list[i].split("=");
				if(kvs[0]==key) {
					return kvs[1];
				}
			}
			return null;
		},
		cookieset: function(key,value,expires,path){
			if( (typeof expires == "number") || (typeof expires == "string")) {
				expires = Number(expires);
				if(isNaN(expires)) {
					expires = undefined;
				} else {
					var d = new Date();
					d.setDate(d.getDate()+expires);
					expires = d;
				}
			} 
			if( !(expires instanceof Date) && typeof expires == "object") {
				expires = undefined;
			}
			document.cookie = key+"="+value+";" + (expires?"expires="+expires+";":"") + (path?"path="+path+";":"");
		},

		
		//获取地址栏参数
		getAddressParams: function(param){
			var theRequest = new Object();  
			if ( param.indexOf( "?" ) != -1 ) {  
			  var str = param.substr( 1 ); //substr()方法返回从参数值开始到结束的字符串；  
			  var strs = str.split( "&" );  
			  for ( var i = 0; i < strs.length; i++ ) {  
				theRequest[ strs[ i ].split( "=" )[ 0 ] ] = ( strs[ i ].split( "=" )[ 1 ] );  
			  }
			} 
			return theRequest;
		}
	}
})