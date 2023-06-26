$(document).ready(function () {

	// layout mobile menu -- 추후 삭제
	fetch('./mobile-menu.html')
		.then(res => res.text())
		.then(function (data) {
			document.getElementById("mobile-menu").innerHTML = data;
		});




	var btnmenu = 0;
	$(".btnmenu").click(function (e) {
		console.log('hi');
		if ($(window).width() > 900) {
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

		e.preventDefault(); // Prevent default link behavior` 
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
	$(".list-item").click(function (e) {
		e.preventDefault();
		$(".mobile_sub").slideUp().removeClass("on")
		$(this).toggleClass("on").next().stop().slideToggle()
	});



	// 모바일 일때 서브 메뉴 숨기기
	function checkViewportWidth() {
		if (window.innerWidth > 690) $(".sub-depth-2").hide()
		// else $(".sub_tab_list li a").addClass("on")
	}

	checkViewportWidth();

	window.addEventListener("resize", checkViewportWidth);

	$(".sub_tab_list li a").click(function (e) {
		// sub menu child show toggle - with mobile
		if (window.innerWidth <= 690) {
			e.preventDefault();
			$(".sub-depth-2").slideToggle()
			
		}
	});


});