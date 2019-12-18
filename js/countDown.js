
var t = 60;//秒数,默认60s
var count;//设定保存秒数的容器
var time;//设定定时器

function showtime(){
	
	count = count-1;

	var s = count;
	if(s<10){
		s="0"+s;	
	}
	var d=(s=="0-1")?"":'<span>'+s+'</span>s';
	$('#vcode').html(d+"后重新获取");

	//当倒数变为0，或者用户切换到了登录界面时计时器关闭
	if(count == 0 || $("#tab2").css("display") == 'none'){
		clearInterval(time);
		$("#vcode").removeAttr("disabled");
		$("#vcode").removeClass("weui-btn_disabled weui-btn weui-btn_default");
		$("#vcode").html("获取验证码");
	}
	//console.log(count);
}

$('#vcode').on("click",function(){
	clearInterval(time);//修复多次点击倒数变快的问题
	$(this).html(t+"s后重新获取");
	$(this).attr("disabled","disabled");//避免倒计时状态下可继续点击
	$(this).addClass("weui-btn_disabled weui-btn weui-btn_default");
	
	time = setInterval("showtime()",1000);

	//console.log("hello0"+t);
	count = t;
	
});





