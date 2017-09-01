app.controller('registerCtrl',['$scope',function(scope){

	//判断当前时间段
	function time(){
            var time=new Date().getHours();
            if(time>=6 && time<12){
                $('.tit p').html("亲，上午好");
            }
            else if(time>=12 && time<14){
                $('.tit p').html("亲，中午好");
            }
            else if(time>=14 &&time<18){
                $('.tit p').html("亲，下午好");
            }
            else if(time>=18 && time<=24 || time>0 && time<6){
                $('.tit p').html("亲，晚上好");
            }
            else{
                $('.tit p').html("亲，你好");
            }
    }
    time();

    //切换同意协议
	$('.cont_botm .argee span').click(function(){
		$(this).toggleClass('on');
	});



	//点击注册时
	$('.cont_botm .btn').click(function () {
		var uname = $('.inp_tel').val();
		var pwd1 = $(".inp_pwd1").val();
		var pwd2 = $(".inp_pwd2").val();
		if(uname==''){
		 	// alert();
			$('.cont_botm .tip').html('请输入用户名!');

		}
		else if(uname.length !=11 ||  isNaN(uname)){
			$('.cont_botm .tip').html('请输入正确的手机号码!');
		}
		else if(pwd1=='' || pwd2==''){
			$('.cont_botm .tip').html('请输入密码!');

		}
		else if(pwd1.length<8){
			$('.cont_botm .tip').html('请输入8位以上的密码!');

		}
		else if(pwd1!=pwd2){
			$('.cont_botm .tip').html('请输入相同的密码!');

		}
		else if(!$('.cont_botm .argee span').hasClass('on')){
			$('.cont_botm .tip').html('请接受协议!');

		}
		else if(uname!='' && pwd1!='' && pwd2!=''){
	        $.ajax({
	            type:"post",
	            url:"http://127.0.0.1/love11/myphp/register.php",
	            data:{
	                user:$(".inp_tel").val(),
		            password:$(".inp_pwd1").val()
	            },
	            success:function(data){
	            	// console.log(data[0].uname);
	                if(data.length!=0){

	                    alert('注册成功');
	                    window.location.href = 'index.html#home';

	                }else{
	                    $('.cont_botm .tip').html('注册失败');

	                }
	            }
	        });
		}
    });


}])