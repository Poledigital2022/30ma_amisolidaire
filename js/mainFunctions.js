$(document).ready(function(){
	setTimeout(function() {
		$('#txt1').addClass('txt1');
		$('#txt2').addClass('txt2');
		$('#txt3').addClass('txt3');
		$('#txt4').addClass('txt4');
	  }, 600);
	//Open & Close Newsletter
	function open_newsletter(){
		$('.newsletter_content').addClass('newsletter_active');
		window.setTimeout(function(){
			$('.newsletter_content').addClass('z_index4');
			statut = true;
		}, 600);
	}
	function close_newsletter(){
		$('.newsletter_content').removeClass('z_index4');
		window.setTimeout(function(){
			$('.newsletter_content').removeClass('newsletter_active');
		}, 250);
		statut = false;
	}
	statut = false;
	$('#newsletter').click(function(){
		$('#open_newsletter').toggleClass('d-none');
		$('#close_newsletter').toggleClass('d-none');
		if(statut == false){
			open_newsletter();
		}
		else{
			close_newsletter();
		}
	});
	$('.close_newsletter2').click(function(){
		$('#open_newsletter').toggleClass('d-none');
		$('#close_newsletter').toggleClass('d-none');
		close_newsletter();
	});
	//section1
	$('.section1_btn').click(function(){
		$('.section1').toggleClass('active1');
	});
	function isOnScreen(elem) {
		// if the element doesn't exist, abort
		if( elem.length == 0 ) {
			return;
		}
		var $window = jQuery(window)
		var viewport_top = $window.scrollTop()
		var viewport_height = $window.height()
		var viewport_bottom = viewport_top + viewport_height
		var $elem = jQuery(elem)
		var top = $elem.offset().top
		var height = $elem.height()
		var bottom = top + height
	
		return (top >= viewport_top && top < viewport_bottom) ||
		(bottom > viewport_top && bottom <= viewport_bottom) ||
		(height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
	}
	section2_stat = false;
	function section2(){
		setTimeout(function() {
			if(section2_stat == false){
				$('.section2_img').addClass('img_top');
				$('.section2_text2').addClass('text2_top');
				$('.section2_text1').addClass('text_top');
			}
			else{
				return false;
			}
		  }, 500);
	}
	window.addEventListener('scroll', function(e) {
		if( isOnScreen( jQuery( '.section2' ) ) ) {
			section2();
		 }	
	});
	// window.addEventListener('scroll', function(e) {
	// 	if( isOnScreen( jQuery( '.section4_padding' ) ) ) {
	// 		$('.sticky_header').removeClass('sticky_header_hide');
	// 	 }	
	// 	 else{
	// 		$('.sticky_header').addClass('sticky_header_hide');
	// 	 }
	// });
	window.addEventListener('scroll', function(e) {
		var height = $(window).scrollTop();
		var vheight = $(window).height()/2;

		if(height  > vheight) {
			$('.sticky_header').removeClass('sticky_header_hide');
			$('.center-mode1').addClass('center-mode3');
		}
		else{
			$('.sticky_header').addClass('sticky_header_hide');
			$('.center-mode1').removeClass('center-mode3');
		}
	});


	//slides
	$('.boot_bar').click(function(){
		setTimeout(function() {
			$(document).ready(function(){
				$('.slide_desk').slick({
					arrows: true,
					dots: true,
					autoplay: false,
					fade: true,
				});
			});
		  }, 300);
	});
	$('.slide_size_close').click(function(){
		$('.slide_size').addClass('hide_slide2');
		setTimeout(function() {
			$('.slide_size').addClass('hide_slide');
			// alert("hello")
		  }, 500);
		  setTimeout(function() {
			$(document).ready(function(){
				$('.slide_mobile').slick('unslick');
			});
		  }, 600);
	});
	function slide(w,v){
		$('.slide_size').removeClass('hide_slide');
		setTimeout(function() {
			$('.slide_size').removeClass('hide_slide2');
			// alert("hello")
		  }, 500);
		  setTimeout(function() {
			$(document).ready(function(){
				$(w).slick({
					arrows: true,
					dots: false,
					autoplay: false,
					fade: true,
					initialSlide:v
				});
			});
		  }, 100);
	}
	function slide2(v){
		$('.slide_desk').addClass('hide_slide2');
		setTimeout(function() {
			$('.slide_desk').slick('unslick');
			// $('.slide_size').removeClass('hide_slide2');
			// alert("hello")
		  }, 100);
		  setTimeout(function() {
			$(document).ready(function(){
				$('.slide_desk').slick({
					arrows: true,
					dots: false,
					autoplay: false,
					fade: true,
					initialSlide:v
				});
			});
			$('.slide_desk').removeClass('hide_slide2');
		  }, 300);
	}
	$('#arrow1_mob').click(function(){
		slide('.slide_mobile',2);
	});
	$('#arrow2_mob').click(function(){
		slide('.slide_mobile',0);
	});
	$('#arrow3_mob').click(function(){
		slide('.slide_mobile',1);
	});
	$('#arrow4_mob').click(function(){
		slide('.slide_mobile',3);
	});
	$('#arrow5_mob').click(function(){
		slide('.slide_mobile',4);
	});
	$('#arrow6_mob').click(function(){
		slide('.slide_mobile',5);
	});

	$('#arrow1_desk').click(function(){
		slide2(2);
	});
	$('#arrow2_desk').click(function(){
		slide2(0);
	});
	$('#arrow3_desk').click(function(){
		slide2(1);
	});
	$('#arrow4_desk').click(function(){
		slide2(3);
	});
	$('#arrow5_desk').click(function(){
		slide2(4);
	});
	$('#arrow6_desk').click(function(){
		slide2(5);
	});
	
	$('.target1').click(function(){
		$('html').addClass('body_fix');
		$('body').addClass('body_fix');
		// 	if ($(window).width() < 768) {
		// 		$('html').css( { height: 'calc(100vh - ' + h + 'px)' } );
			

		// }
	// 	setTimeout(function() {
	// 		$('.sticky_header').removeClass('sticky_header_hide');
	//   }, 1000);
		$('.center-mode1').toggleClass('center-mode2');
		$('.bounce-7').toggleClass('bounce-6');
		setTimeout(function() {
				$('.bounce-7').removeClass('bounce-6');
		  }, 2000);
	});
	$('.close_1').click(function(){
		$('html').removeClass('body_fix');
		$('body').removeClass('body_fix');
		// $('.sticky_header').addClass('sticky_header_hide');
		$('.center-mode1').removeClass('center-mode2');
		$('.bounce-7').removeClass('bounce-6');
	});
	$('.close1').click(function(){
		$('.slide_size').addClass('hide_slide2');
		setTimeout(function() {
			$('.slide_size').addClass('hide_slide');
			// alert("hello")
		  }, 500);
		  setTimeout(function() {
			$(document).ready(function(){
				$('.slide_mobile').slick('unslick');
			});
		  }, 600);
	});
	/**/
	$("#email_submit").click(function(){
		var email = $("#Email1").val();
		$('#email_submit').removeClass('spinner_hide');
		// alert(email);
		$.ajax({
		   url : 'newsletter.php', // La ressource ciblée
		   type : 'POST', // Le type de la requête HTTP.
		   data : 'email=' + email,
		   success : function(code_html, statut){ // success est toujours en place, bien sûr !
			$('#email_submit').addClass('spinner_hide');
			$("#Email1").val("");
			alert(code_html);
		   },
		});
	   
	});
	/**/
	$("#email_submit2").click(function(){
		var email2 = $("#Email2").val();
		$.ajax({
		   url : 'newsletter.php', // La ressource ciblée
		   type : 'POST', // Le type de la requête HTTP.
		   data : 'email=' + email2,
		   success : function(code_html, statut){ // success est toujours en place, bien sûr !
			$("#Email2").val("");
			alert(code_html);
		   },
		});
	   
	});
		/**/
		$(".cookies_btn").click(function(){
			$('#banner-cookies').fadeOut(800);
		});
	
	$(document).on('click', '.cookies_btn', function(){    

		$.ajax({
	
			url : 'cookies.php',
	
			type : 'GET',
	
		//    success : function(code_html, statut){
	
		//     $("#banner-cookies").fadeOut(800);          
	
		//    }
	
		}); 
	
	});
	function resetHeight(){
		// reset the body height to that of the inner browser
		document.body.style.height = window.innerHeight + "px";
	}
	// reset the height whenever the window's resized
	window.addEventListener("resize", resetHeight);
	// called to initially set the height.
	resetHeight();
	h = 45;
	// $(window).on("load resize scroll",function(e){
	// 	if ($(window).width() < 768) {
	// 		setTimeout(function() {
	// 			$('.center-mode1').css( { height: 'calc(100vh - ' + h + 'px)' } );
	// 		  }, 500);
			
	// 		// alert("ok")
	// 	}
		
	// });
	
});


