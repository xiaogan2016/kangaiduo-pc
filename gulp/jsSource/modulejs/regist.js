//注册模块
require(["../config"], function (m) {
    console.log('regist模块已经加载完成。。。');
    require(["jquery"], function ($) {
        //检验手机号，密码，验证码是否正确
        let CheckMobile = false;
        let CheckPSW = false;
        getCode();
        getRegist();
        init();
        //初始化
        function init() {
            onCheckMobile();
            onCheckPSW();
            onShowAndHidePSW();
            //getGraphCode();
        }

        //验证手机号
        function onCheckMobile() {
            $("#txtMobile").on('blur', function () {
                var txtMobile = $(this).val();
                if (txtMobile.match(/^1(3|5|8|7|4)\d{9}$/)) {
                    CheckMobile = true;
                    console.log('手机号格式正确！');
                    $.ajax({
                        type: 'post',
                        url: 'user/Register/IsExisteMobile?mobile=' + txtMobile,
                        success: function success(data) {
                            console.log(data.Result);
                           if(data.Result){
                                $("#mobileErrorMsg .prompt-icon").css('background','none');
                                $("#mobileErrorMsg .prompt-size").text('');
                                $("#mobileIcon i").css('background',' url(/images/loginAndRegist/iconPng8.png) no-repeat -99px 0'); 
                           }else{
                                $("#mobileErrorMsg .prompt-size").text('');
                                $("#mobileIcon i").css('background','none') 
                                $("#mobileErrorMsg .prompt-icon").css('background','url(/images/loginAndRegist/iconPng8.png) no-repeat');
                                $("#mobileErrorMsg .prompt-size").text('该手机号已存在！');       
                           }
                        }
                    });
                     
                } else {
                    console.log('手机号格式不正确！');
                    $("#mobileErrorMsg .prompt-size").text('');
                    $("#mobileIcon i").css('background','none');
                    $("#mobileErrorMsg .prompt-icon").css('background','url(/images/loginAndRegist/iconPng8.png) no-repeat');
                    $("#mobileErrorMsg .prompt-size").text('手机号格式不正确！');
                    
                }
            });
        }

        //验证密码格式
        
        function onCheckPSW(){
            $('#txtPwd').on('blur', function () {
                var txtMobile = $(this).val();
                console.log(txtMobile);
                if (txtMobile.match(/\w{5,19}$/)) {
                    CheckPSW = true;
                    getCode();
                    console.log('密码格式正确！');
                    $("#pwdErrorMsg .prompt-icon").css('background','none');
                    $("#pwdErrorMsg .prompt-size").text('');
                }else{
                    console.log('密码长度在6-20之间！');
                    $("#pwdErrorMsg .prompt-size").text('');
                    $("#pwdErrorMsg .prompt-icon").css('background','url(/images/loginAndRegist/iconPng8.png) no-repeat');
                    $("#pwdErrorMsg .prompt-size").text('密码长度在6-20之间！');
                }
            })
        }

        //显示隐藏密码
        function onShowAndHidePSW(){
            $("#showPwd").on('click',function(){
                var isShowPwd = $("#isShowPwd");
                if(isShowPwd.hasClass('closeeyes')){
                    isShowPwd.removeClass('closeeyes');
                    isShowPwd.addClass('openeyes');
                    $("#txtPwd").attr('type','text');
                }else{
                    isShowPwd.removeClass('openeyes');
                    isShowPwd.addClass('closeeyes');
                    $("#txtPwd").attr('type','password')
                }
                
            })
        }

        //获取验证码图形
        function getGraphCode(){
            $("#code-pic").on('click',function(){
                var d = new Date();
                console.log(d.getTime());
                $.ajax({
                    type:'get',
                    url:'user/Register/GetValidateCode?t='+ d.getTime(),
                    success:function(data){
                        console.log(data)
                    }
                })
            })  
        }

        //短信认证
        function getCode(){
            if(CheckMobile && CheckPSW ){ 
                $('.code-email').css('background','#409ffb');
                getCodeBtn();// 点击获取验证码按钮
                getRegist();
            }else{
                $('.code-email').css('background','#b5b5b5');
            }  
        }

        //点击获取验证码按钮
        function getCodeBtn(){
            //mobile: $("#txtMobile").val(),
            //vCode: $("txtMobileCode").val()
            let data = {
                mobile:13471134339,
                vCode:2364
            }
            $('.code-email').on('click',function(){
                $.ajax({
                    type:'post',
                    url:'user/Register/GetSms',
                    data:data,
                    success:function(data){
                        console.log(data);
                    }
                })
            })
        }

        //注册认证
        function getRegist(){
            if(CheckMobile && CheckPSW ){ 
                $('.login-btn').css('background','#409ffb');
                getRegistBtn();//执行点击注册按钮函数
            }else{
                $('.login-btn').css('background','#b5b5b5');
            }  
        }

        //点击注册按钮
        function getRegistBtn(){
            //mobile: $("#txtMobile").val(),
            //vCode: $("txtMobileCode").val()
            let data = {
                mobile:13471134336,
                password:22323232,
                imgCode:BMe4,
                vcode:123456,
                loginPlatform:1
            }
            $('.code-email').on('click',function(){
                $.ajax({
                    type:'post',
                    url:'user/Register/RegisterUser',
                    data:data,
                    success:function(data){
                        console.log(data);
                    }
                })
            })
        }
    });
});