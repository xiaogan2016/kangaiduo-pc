/**
 * 配置文件
 */
requirejs.config({
	baseUrl : 'http://localhost:8000/js',
	paths:{
		"jquery": "lib/jquery-1.11.3",
		"swiper": "lib/swiper-3.4.2.min",
		'common' : 'myplugin/common',
		'header' : 'modulejs/indexpage/header',
		'nav' : 'modulejs/indexpage/nav',
		'banner' : 'modulejs/indexpage/banner',
		'category':'modulejs/indexpage/category',
		'hotpro':'modulejs/indexpage/hotpro',
		'changeP':'modulejs/indexpage/changeP',
		'mainfoor':'modulejs/indexpage/mainfoor',
		'advertisement':'modulejs/prodetail/advertisement',
		'addproduct':'modulejs/prodetail/addproduct',
		'productdetail':'modulejs/prodetail/productdetail',
		'prorecomend':'modulejs/prodetail/prorecomend'
	},
	shim: {
	  
	}
});


