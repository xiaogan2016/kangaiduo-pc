/**
 * 定义header模块
 */
define(["jquery","common"],function($,com){
    console.log('header模块已加载。。。');
    return{
        init: function(){
            com.onShowAndHide($(".Ywebnav"),$(".Ywebnav_list1"));
            com.onShowAndHide($(".YService"),$(".Ywebnav_list2"));
            com.onShowAndHide($(".Ymyorder"),$(".Ywebnav_list3"));
            com.onShowAndHide($(".Ymykad"),$(".Ywebnav_list4"));

            this.searchmore();
        },   
       /*搜索更多功能*/
		searchmore : function() {
			var oInput = $(".inputtxt");
			oInput.on("keyup", function() { //按下键盘的时候发起请求
				//jsonp("http://suggestion.baidu.com/su?wd="+this.value+"&cb=test"); //后台动态生成js并返回数值  回调的test必须写
                jsonp("http://search.360kad.com/Home/SearchPanGuWordResult?KeyWord="+this.value+"k&callback=test")
            });
			var searchlist = $(".searchlist");
			//target监听
			searchlist.on("click", function(e) {
				var e = e || window.event; 
				var target = e.target || e.srcElement;
				if(target.nodeName == "LI") {
					oInput.val(target.innerText) ;
					this.innerHTML = ""; //this代表datalist    点击后清空			
				}		
			});
			/*搜索框为空时*/
			oInput.on("blur",function(){
				if(oInput.val()==""){
					searchlist.html(" ");
				} 
			})
			function jsonp(url) { //在页面创建script标签
				var _script = document.createElement("script");
				_script.src = url;
				_script.id = "jsonp_script_date";
				document.body.appendChild(_script);
			}
	
			window.test=function(data) { //接收数据
				console.log(data);
				let str='';
				for(let i=0;i<data.length;i++){
					str += `
						<ul>
							<li>${data[i].KeyWord}</li>	
						</ul>
					
					`
				}
				var searchlistStr = $(".searchlist").html(str);
				searchlist.append(searchlistStr);
				$("#jsonp_script_date").remove(); //接收数据完了script标签消失
			}
		}
    }
})