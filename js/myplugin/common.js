"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * 定义common模块
 */
define(["jquery"], function ($) {
	console.log("common模块已加载。。。");
	return {
		// 显示隐藏下拉菜单功能
		onShowAndHide: function onShowAndHide(startTag, endTag) {
			startTag.on("mouseenter", function () {
				endTag.show();
				$(this).addClass('onmouseshow');
			});
			startTag.on("mouseleave", function () {
				endTag.hide();
				$(this).removeClass('onmouseshow');
			});
		},

		/*cookie验证*/
		cookieget: function cookieget(key) {
			var cookiestr = document.cookie;
			var list = cookiestr.split("; ");
			for (var i = 0; i < list.length; i++) {
				var kvs = list[i].split("=");
				if (kvs[0] == key) {
					return kvs[1];
				}
			}
			return null;
		},
		cookieset: function cookieset(key, value, expires, path) {
			if (typeof expires == "number" || typeof expires == "string") {
				expires = Number(expires);
				if (isNaN(expires)) {
					expires = undefined;
				} else {
					var d = new Date();
					d.setDate(d.getDate() + expires);
					expires = d;
				}
			}
			if (!(expires instanceof Date) && (typeof expires === "undefined" ? "undefined" : _typeof(expires)) == "object") {
				expires = undefined;
			}
			document.cookie = key + "=" + value + ";" + (expires ? "expires=" + expires + ";" : "") + (path ? "path=" + path + ";" : "");
		}
	};
});