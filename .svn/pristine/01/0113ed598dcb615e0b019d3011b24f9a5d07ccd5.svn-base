app.controller('dingcanCtrl',['$scope',function(scope){
	
		//1.获取元素
		
		var qc = $('.qc');

		var qbcp = $('.qbcp');
		
		var mask = $('.mask');
		
		var city = $('.echo_city');
		
		var menu = $('.echo_menu');
		
		var num = 1;
		
		//2.点击按钮
		
		qc.click(function(){
			
			//3.让模态窗口  和选择窗口显示
			if(num==1){
				
				mask.fadeIn();
			
				city.fadeIn();

				num = 2;
			}else{
				
				//4.添加关闭事件
				mask.hide(500);
			
				city.hide(500);
			
				num = 1;
			}
			
			
			
		});

		qbcp.click(function(){
			
			//3.让模态窗口  和选择窗口显示
			if(num==1){
				
				mask.fadeIn();
			
				menu.fadeIn();

				num = 2;
			}else{
				
				//4.添加关闭事件
				mask.hide(500);
			
				menu.hide(500);
			
				num = 1;
			}
			
			
			
		});
		
}])