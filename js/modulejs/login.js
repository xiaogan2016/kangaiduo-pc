"use strict";

//登陆模块
require(["../config"], function (m) {
    console.log('login模块已经加载完成。。。');
    require(["jquery", "common"], function ($, com) {
        $('#UserName').val(com.cookieget("userName"));
        $('#UserPassword').val(com.cookieget("userPSW"));

        var CheckUsername = false;
        var CheckPSW = false;
        var isRemberName = false;

        handleCheckUsername();
        handleCheckPSW();
        isSelectedLogin();
        handleToLogin();
        //验证用户名
        function handleCheckUsername() {
            $('#UserName').on('blur', function () {
                var userNameVal = $(this).val();
                if (userNameVal.match(/^1(3|5|8|7|4)\d{9}$/)) {
                    CheckUsername = true;
                    $('#idPrompt .input-prompt').hide();
                } else {
                    $('#idPrompt .input-prompt').show();
                }
            });
        }

        //验证密码
        function handleCheckPSW() {
            $('#UserPassword').on('blur', function () {
                var PSWVal = $(this).val();
                if (PSWVal.match(/\w{5,19}$/)) {
                    CheckPSW = true;
                    $('#pwdPrompt .input-prompt').hide();
                } else {
                    $('#pwdPrompt .input-prompt').show();
                }
            });
        }

        //判断是否勾选免登录按钮
        function isSelectedLogin() {
            $("#IsRemberName").on('click', function () {
                isRemberName = !isRemberName;
            });
        }

        //登陆按钮
        function handleToLogin() {
            $("#LoginButton").on('click', function () {
                console.log('登陆按钮能点击了！');
                //console.log(CheckUsername);
                //console.log(CheckPSW);

                if (CheckUsername && CheckPSW) {
                    var userName = $('#UserName').val();
                    var pass = $('#UserPassword').val();
                    //ajax请求
                    var userdata = {
                        userName: userName,
                        pass: pass,
                        isRemberName: isRemberName,
                        loginPlatform: 1
                    };
                    $.ajax({
                        type: 'post',
                        url: 'user/Login/AjaxLoginV2',
                        data: userdata,
                        success: function success(res) {
                            console.log(res.Result);
                            if (res.Result) {
                                alert('登陆成功！');
                                if (isRemberName) {
                                    com.cookieset("userName", userName, 3, "/");
                                    com.cookieset("userPSW", pass, 3, "/");
                                }
                                window.location.href = 'http://localhost:8000/index.html';
                            } else {
                                alert('您输入的账户名不存在或密码不匹配，请重新输入！');
                                window.location.href = 'http://localhost:8000/login.html';
                            }
                        }
                    });
                }
            });
        }
    });
});