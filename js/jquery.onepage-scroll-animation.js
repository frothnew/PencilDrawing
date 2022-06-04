$(window).load(function(){
	
//使原有的加载等待动画隐藏。
$("#progress").fadeTo(3000,0);
var timeout=setTimeout(function () {
        $("#progress").css("display","none");
		}, 3000);


	
	
//以下是实现在onepage插件中，初次进入未知的某一page中，设置实现元素弹出效果。

　　	var sHash = window.location.hash;										//取当前页面地址#及后面的值
	var sHashnumber = sHash.substr(1,1);								//本吊成功取到了当前页面的值的纯数字部分
	
	if (sHashnumber=="5" || sHashnumber=="") {
		sHashnumber="1"	;												//消除滚动插件的idnex值的bug
	};
	if (sHashnumber=="0") {
		sHashnumber="4"	;												//消除滚动插件的idnex值的bug
	}; 
	
	if (sHashnumber=="1") {
		$(".city li").each(function(){
			$(this).addClass("scani")									//添加动画类名
		});		
	};
	if (sHashnumber=="2") {
		$(".devil li div").each(function(){
			$(this).addClass("scani")									//添加动画类名
		});		
	};	
	if (sHashnumber=="3") {
		$("#narutoview div.float").each(function(){
			$(this).addClass("scani")									//添加动画类名
		});		
	};	
	if (sHashnumber=="4") {
		$("#dice div.danmian").each(function(){
			$(this).addClass("scani")									//添加动画类名
		});		
	};	


//以下是调用开启JQ单页滚动插件的必须函数，写在这里是为了配合每一页元素弹出动画效果的实现.并且,window.onload = function(){}只能执行一次,所以和上一模块写在一起.

	$('main').onepage_scroll({
		sectionContainer: '.page',
		easing: "ease-in-out",
		direction: 'horizontal',
		animationTime: 1000,
//		responsiveFallback: 600,
//		pagination: false,
		loop: false,
		updateURL: true,
		beforeMove: function(index){
					switch(index){
						case 1:
							if (!($(".city li").is('.scani'))) {
								$(".city li").each(function(){
									$(this).addClass("scani");									//添加动画类名
								});
							};
						break;
												
						case 2:
							if (!($(".devil li div").is('.scani'))) {
								$(".devil li div").each(function(){
									$(this).addClass("scani");									//添加动画类名
								});
							};
						break;
							
						case 3:
							if (!($("#narutoview div.float").is('.scani'))) {
								$("#narutoview div.float").each(function(){
									$(this).addClass("scani")									//添加动画类名
								});	
							};
						break;
							
						case 4:
							if (!($("#dice div.danmian").is('.scani'))) {								
								$("#dice div.danmian").each(function(){
									$(this).addClass("scani")									//添加动画类名
								});	
							};
						break;
							
					}
				}
   
	});


});



//window.onload = function(){}