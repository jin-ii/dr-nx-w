$(document).ready(function () {

	// layout mobile menu
	fetch('./mobile-menu.html')
	.then(res => res.text())
	.then(function(data) {
		document.getElementById("mobile-menu").innerHTML = data;
	})

	
	var btnmenu = 0;
	$(".btnmenu").click(function(e){
			console.log('hi');
		if($(window).width() > 900) {
			// Redirect to another link
			window.location.href = "sitemap.html";
			return;
		}
		
		if (btnmenu == 0) {
			$(this).stop().addClass("openmenu");
			$(".allmenu").addClass("open");
			btnmenu = 1;
		} else {
			$(this).stop().removeClass("openmenu");
			$(".allmenu").removeClass("open");
			btnmenu = 0;
		}
		
		e.preventDefault(); // Prevent default link behavior
	});

	$(" .pc_nav>ul>li").mouseover(function () {
		liNum = $(".pc_nav>ul>li").index($(this));
		$("#header").addClass("wh");
		$(".pc_nav .bg").stop().slideDown();
		$(this).find(".sub").addClass("act").parent().siblings().find(".sub").removeClass("act");
	});
	$("#header").mouseleave(function () {
		$("#header").removeClass("wh");
		$(".pc_nav .bg").stop().slideUp();
		$(this).find(".sub").removeClass("act");

	})

	// aos
	AOS.init();

	


	//모바일메뉴
	$(".mobile_sub").hide()

	// nav menu
	$(".list-item").click(function(e) {
		e.preventDefault();
		$(".mobile_sub").slideUp().removeClass("on")
		$(this).toggleClass("on").next().stop().slideToggle()

		
	});

	$(".sub_tab_list li a").click(function(e) {
		e.preventDefault();
		$(".sub-depth-2").slideUp().removeClass("on")
		$(this).toggleClass("on").next().stop().slideToggle()

		
	})



	

});