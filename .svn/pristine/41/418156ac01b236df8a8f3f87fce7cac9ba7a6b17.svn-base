
//自定义服务
app.constant('Route',{
	home:'/home',  //首页
	near:'/near',	//附近
	center:'/center', //个人中心
	centerDL:'/centerDL', //个人中心(登录进入信息)
	centerXX:'/centerXX', //个人中心(个人信息)
	city:'/city', //选择城市
	dingcan:'/dingcan', //立即订餐
	login:'/login', //登录
	money:'/money', //账户信息
	more:'/more', //更多
	myDD:'/myDD', //我的订单
	mySC:'/mySC', //我的收藏
	register:'/register', //注册
	waimai:'/waimai', //叫外卖
	xiangqing:'/xiangqing', //商家详情
	yuding:'/yuding' //预订
}); 

app.config(['$routeProvider','Route',function($routeProvider,Route){
	$routeProvider
		.when(Route.home,{
			templateUrl:"views/home.html",
            controller:"homeCtrl"
		})
		.when(Route.near,{
			templateUrl:"views/near.html",
            controller:"nearCtrl"
		})
		.when(Route.center,{
			templateUrl:"views/center.html",
            controller:"centerCtrl"
		})
		.when(Route.centerDL,{
			templateUrl:"views/centerDL.html",
            controller:"centerDLCtrl"
		})
		.when(Route.centerXX,{
			templateUrl:"views/centerXX.html",
            controller:"centerXXCtrl"
		})
		.when(Route.city,{
			templateUrl:"views/city.html",
            controller:"cityCtrl"
		})
		.when(Route.dingcan,{
			templateUrl:"views/dingcan.html",
            controller:"dingcanCtrl"
		})
		.when(Route.login,{
			templateUrl:"views/login.html",
            controller:"loginCtrl"
		})
		.when(Route.money,{
			templateUrl:"views/money.html",
            controller:"moneyCtrl"
		})
		.when(Route.more,{
			templateUrl:"views/more.html",
            controller:"moreCtrl"
		})
		.when(Route.myDD,{
			templateUrl:"views/myDD.html",
            controller:"myDDCtrl"
		})
		.when(Route.mySC,{
			templateUrl:"views/mySC.html",
            controller:"mySCCtrl"
		})
		.when(Route.register,{
			templateUrl:"views/register.html",
            controller:"registerCtrl"
		})
		.when(Route.waimai,{
			templateUrl:"views/waimai.html",
            controller:"waimaiCtrl"
		})
		.when(Route.xiangqing,{
			templateUrl:"views/xiangqing.html",
            controller:"xiangqingCtrl"
		})
		.when(Route.yuding,{
			templateUrl:"views/yuding.html",
            controller:"yudingCtrl"
		})
		.otherwise({
			redirectTo:Route.home
		})
}]);

