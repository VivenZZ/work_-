$("body").click(function(e){
	$("#brandContainer").slideUp();
	e.stopPropagation();
});
$("#brand_entrance").on('click',function(e){
	$("#brandContainer").slideToggle();
	$(this).find(".weui-cell__bd").toggleClass("pointDown");
	e.stopPropagation();
});

$("#brandContainer li").on('click',function(e){
	$("#choice").val($(this).attr('data-sign')).click();
	e.stopPropagation();
});

$(".weui-cells, .btn_next").click(function(e){
	e.stopPropagation();
});