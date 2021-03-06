$(document).ready(function(){

	'use strict';

	$('.flexslider').flexslider({
		animation: "slide",
		slideshow: true,
		pausePlay: true
	});


	/**
	** Toogle menu on click and add class shown
	**/

	$('header nav .menu-holder span').on('click', function(e){
			e.stopPropagation();
			$('header nav .menu-holder ul').addClass('shown').slideToggle();

	});

	/**
	 * menu size = nav size
	 */
	$('.menu-holder ul').width($('header nav').width());
	$(window).on("resize", function(){
		$('.menu-holder ul').width($('header nav').width());
	});

	/** 
	** close menu on click every where on the window
	*/

	$('html').on('click', function(e){
		e.stopPropagation();

		var wind = $(window).width(); /* prevent menu hide on big screen after resize*/
		var menu = $('header nav .menu-holder ul');
		if(menu.hasClass('shown') && wind < 786){
			menu.slideUp();
		}
	})

	/**
	** on window resize hide or show the menu 
	** this is to prevent menu disapearence in case of browser manual resize 
	** this has no effect on mobiles 
	*/

	$(window).on('resize', function(){
		var menu = $('header nav .menu-holder ul');
		if($(this).width() > 786){
			menu.show();
		}else{
			menu.hide();
		}

	});

	/**
	** Remove any input placeholder just onfocus and get it back on blur 
	**	all inputs exept buttons radio button ckeckbox date time range exetra
	**/
	$('[type!="button"],[type!="radio"],[type!="checkbox"],[type!="date"]').on('focus', function(){

		$(this).attr('data-holder',$(this).attr('placeholder')).attr('placeholder', '');
		
	});

	$('[type!="button"],[type!="radio"],[type!="checkbox"],[type!="date"]').on('blur', function(){

		$(this).attr('placeholder',$(this).data('holder')).removeAttr('data-holder');

	});



	/*
	** ========== > modal < ========== 
	*/
	/**
	** open model 
	** display the form based on the id of the link 
	* if the user is coming from login show login form and hide signup for & vise versa
	*/
	$('#signup, #signin').on('click', function(){

		$('#modal').show();
		$('body').css('overflow','hidden');
		
	});



/*
** Close the modal when clicking on the whole screen but not at the middle on the content area 
*/
	
	$('#modal, #minimize').on('click', function(e){
		e.stopPropagation();

		var modal = $('#modal').css('display');

		if(modal === 'block'){
			$('#modal').css('display','none');
			$('body').css('overflow','auto');
		}

	});

	/*
	** prevent closing the modal on clicking on the content area (area at the middle) 
	*/
	$('#modal-content').on('click', function(e){
		e.stopPropagation();
	});

	/*
	** close the modal when pressing ESC Key on the keyboard
	*/
	$(window).on('keydown', function(e){
		var modal = $('#modal').css('display');

		if(e.keyCode === 27){
			if(modal === 'block'){
				$('#modal').css('display','none');
				$('body').css('overflow','auto');
			}

		}
	
	});

	/**
	 * back to top arrow
	 */
	$('.back-top').on('click', function(){
		$("html, body").animate({
			scrollTop : 0
		});
	});

	$(window).on('scroll', function(){

		var height = $(document).scrollTop();
		var elem   = $('.back-top');

		if(height >= 800)
		{
			elem.css("display", "block");
		}else{
			elem.css("display", "none");
		}
		
	});



});