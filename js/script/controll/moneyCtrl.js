app.controller('moneyCtrl',['$scope',function(scope){
	
	

	$('.cont_money .btn').click(function(){
		var utel = $('.inp_num').val();
		var upwd = $('.inp_pwd').val();
		var uaddress = $('.inp_address').val();

		if(utel == ''){
			$('.cont_money p').html('请输入手机号');
		}
		else if(utel.length != 11 || isNaN(utel)){
			
			$('.cont_money p').html('请输入正确的手机号');
		}
		else if(upwd == ''){
			$('.cont_money p').html('请输入密码');
		}
		else if(uaddress == ''){
			$('.cont_money p').html('请输入收货地址');
		}
		else{
			$.ajax({
	            type:"post",
	            url:"http://192.168.6.35/love11/myphp/udata.php",
	            data:{
	                user:utel,
		            password:upwd
	            },
	            success:function(data){
	            	
	                if(data.length!=0){

	                    alert('修改成功');
	                    window.location.href = 'index.html#login';

	                }else{
	                    alert('修改失败');

	                }
	            }
	        });

		}
	});
}])