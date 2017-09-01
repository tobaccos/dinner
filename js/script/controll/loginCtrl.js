app.controller('loginCtrl',['$scope',function(scope){
	
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


	
	//点击登录时
	$('.cont_botm .dl').click(function () {
		var uname = $('.inp_num').val();
		var pwd = $(".inp_pwd").val();
		
		if(uname == ''){
			$('.cont_botm .logintip').html('请输入用户名！');
		}
		else if(pwd == ''){
			$('.cont_botm .logintip').html('请输入密码！');
		}
		else if(uname !='' && pwd !=''){
	        $.ajax({
	            type:"post",
	            url:"http://127.0.0.1/love11/myphp/login.php",
	            data:{
	                user:uname,
	                password:pwd
	            },
	            success:function(data){
	            	// console.log(data[0].uname);
	                if(data.length!=0){

	                    alert('登录成功');
	                    
	                    window.location.href = 'index.html#center';

	                }else{
	                    alert('登录失败');

	                }
	            }
	        });
		}
	});
}])