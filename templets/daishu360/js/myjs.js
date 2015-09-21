// 设为首页
function SetHome(obj, vrl) {
	vrl = "http://www.qqwangdai.com/";
	try {
		obj.style.behavior = 'url(#default#homepage)';
		obj.setHomePage(vrl);
	} catch (e) {
		if (window.netscape) {
			try {
				netscape.security.PrivilegeManager
						.enablePrivilege("UniversalXPConnect");
			} catch (e) {
				alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
			}
			var prefs = Components.classes['@mozilla.org/preferences-service;1']
					.getService(Components.interfaces.nsIPrefBranch);
			prefs.setCharPref('browser.startup.homepage', vrl);
		} else {
			alert("请检查您是否安装了以下软件——360安全卫士、金山卫士、QQ电脑管家、金山毒霸。如已安装，请参考软件中的浏览器设置主页的方法进行设置。");
			//alert("您的浏览器不支持，请按照下面步骤操作：1.打开浏览器设置。2.点击设置网页。3.输入：" + vrl + "点击确定。");
		}
	}
}

// 加入收藏
function AddFavorite(type) {
	var sURL = window.location.href;

	var sTitle = "贷鼠网";
	try {
		window.external.addFavorite(sURL, sTitle);
	} catch (e) {
		try {
			window.sidebar.addPanel(sTitle, sURL, "");
		} catch (e) {
			alert("加入收藏失败，请使用Ctrl+D进行添加");
		}
	}
}
// JavaScript Document
$(function() {
	//banner轮播
	if($(".banner .slidesjs-slide").length >1 ){
		$(".banner").slidesjs({
			width: 950,
			height: 489,
			responsiveWidth:710,
			play: {
				interval: 5000,
				auto: true,
				pauseOnHover: true,
				restartDelay: 2500
			}
		});

	}

	if($(".banners a").length >1 ){
		$(".banners").slidesjs({
			width: 390,
			height: 255,
			responsiveWidth:710,
			play: {
				
				auto: false
				
			}
		});

	}
	if($(".iloan_scroll .slidesjs-slide").length >1 ){
		$(".iloan_scroll").slidesjs({
			width: 750,
			height:105,
			pagination: false,
			effect: {
				slide: {
			  		speed: 3500
				}
		  	}
		});

	}
	
	if($(".index_case_box .slidesjs-slide").length >1 ){
		$(".index_case_box").slidesjs({
			width:1000,
			height:331,
			responsiveWidth:710,
			navigation:false,
			pagination: {
				effect: "fade"
			},
			effect: {
				fade: {
					speed: 400
				}
			},
			play: {
				effect: "fade",
				interval: 5000,
				auto: true,
				pauseOnHover: true,
				restartDelay: 2500
			}
		});

	}
	
	$(".show_more").click(function(){
		var text = $(this).text();
		if(text == "+展开" && $(this).siblings("p").hasClass("service_text2")){
			$(this).text("收 起").siblings(".service_text2").fadeIn("slow").siblings(".service_text1").hide();
		}else{
			$(this).text("+展开").siblings(".service_text1").fadeIn("slow").siblings(".service_text2").hide();	
		}
	})
	
	$(".announce_info").Scroll({line:1,speed:500,timer:3000,up:"announce_btn_up",down:"announce_btn_down"}); //公告轮播
	$(".iloan_adv_text").Scroll({line:1,speed:500,timer:3000,up:"iloan_btn_up",down:"iloan_btn_down"}); //iloan优势介绍轮播
	
	$(document).ready(function() {
		$('#topmenuhref > a').each(function(){
			var cc = $(this);
			cc.attr('class','');
		});
		if(window.location.href.indexOf('product')>-1){
			$('#menu_17').attr('class','active');
		}else if(window.location.href.indexOf('story')>-1){
			$('#menu_13').attr('class','active');
		}else if(window.location.href.indexOf('service')>-1){
			$('#menu_14').attr('class','active');
		}else if(window.location.href.indexOf('program')>-1){
			$('#menu_15').attr('class','active');
		}else if(window.location.href.indexOf('aboutus')>-1){
			$('#menu_16').attr('class','active');
		}else if(window.location.href.indexOf('news')>-1 || window.location.href.indexOf('detail')>-1){
			$('#menu_20').attr('class','active');
		}else if(window.location.href.indexOf('program')>-1){
			$('#menu_16').attr('class','active');
		}else{
			$('#menu_index').attr('class','active');
		}
	});
});



