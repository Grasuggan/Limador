/*======================================
  #Set browser class
======================================*/
navigator.browserSpecs = (function(){
    var ua= navigator.userAgent, tem,
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return {name:'IE',version:(tem[1] || '')};
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return {name:tem[1].replace('OPR', 'Opera'),version:tem[2]};
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return {name:M[0],version:M[1]};
})();

$(function(){
  var OSName="os";
  if (navigator.appVersion.indexOf("Win")!=-1) OSName="windows";
  else if (navigator.appVersion.indexOf("Mac")!=-1) OSName="macos";
  else if (navigator.appVersion.indexOf("X11")!=-1) OSName="unix";
  else if (navigator.appVersion.indexOf("Linux")!=-1) OSName="linux";
  $("body").addClass(OSName);

  if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) { $('body').addClass('browser-opera'); }
  else if(navigator.userAgent.indexOf("Chrome") != -1 ) { $('body').addClass('browser-chrome'); }
  else if(navigator.userAgent.indexOf("Safari") != -1) { $('body').addClass('browser-safari'); }
  else if(navigator.userAgent.indexOf("Firefox") != -1 ) { $('body').addClass('browser-firefox'); }
  else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )){ $('body').addClass('browser-explorer'); }
  else if(navigator.userAgent.indexOf("Edge") != -1 ) { $('body').addClass('browser-edge'); }
  if(navigator.browserSpecs.version){ $('body').addClass('browser-version-'+navigator.browserSpecs.version); }

  var el = document.createElement('div');
  el.setAttribute('ongesturestart', 'return;');
  if(typeof el.ongesturestart == "function"){ $("body").addClass("touch"); }
  else { $("body").addClass("no-touch"); }
});

/*======================================
  #Set .scroll class on scroll
======================================*/
$(function(){
  var body          = $("body"),
    scrollVal       = 1;
    currentScroll   = 0;
    
  if($(".pre-top").length && $(".pre-top").is(":visible")){ scrollVal = $(".pre-top").outerHeight();}
  if($(window).scrollTop() > scrollVal){body.addClass("scroll");}

  $(window).on("scroll", function(){
    currentScroll = $(this).scrollTop();
    if(currentScroll > scrollVal){body.addClass("scroll");}
    else{body.removeClass("scroll");}
  });
});

/*======================================
  #Toggle mobile nav
======================================*/
$(function(){
  $(document).on("click", ".hamburger", function(e){
    e.preventDefault();
    $("body").toggleClass("mobile-nav-visible");
  });

  //Toggle mobile second level nav
  $(document).on("click", ".main-nav ul li a .expand", function(e){
    e.preventDefault();
    $(this).toggleClass("open").closest("li").children("ul").slideToggle(200);
  });
});

/*======================================
  #Adjust navigation offscreen
======================================*/
$(window).on("load", function(){
  var navs = $(".main-nav ul ul");
  var screenWidth = $(window).width();
  navs.each(function(){
    var rightEdge = $(this).width() + $(this).offset().left;
    if(rightEdge > screenWidth){
      $(this).addClass("go-right");
    }
  });
});

/*======================================
  #Navigation touch/focus support
======================================*/
$(document).on("touchstart focus", ".main-nav ul li a, .pre-top__list li a", function(e){
    var navLi = $(this).parent("li");
    var navAllLi = $(".main-nav li, .pre-top__list li");
    var dropExist = navLi.children("ul").length;

    if(!navLi.hasClass("touch-open") && dropExist && !$("body").hasClass("mobile-nav-visible")){
      e.preventDefault();
      var parentLi = navLi.closest(".touch-open");
      navAllLi.not(parentLi).removeClass("touch-open");
      navLi.addClass("touch-open");
    }
    else if(dropExist){
      navAllLi.removeClass("touch-open");
    }
});

/*======================================
  #Scroll to top
======================================*/
$(function(){
  $(document).on("click", ".to-top", function(e){
    e.preventDefault();
    $("html, body").animate({scrollTop: 0}, 500);
  });
});

/*======================================
  #Responsive video
======================================*/
$(document).ready(function(){
  $("body").fitVids();
});

/*======================================
  #Googlemap
======================================*/
$(function(){
  if ($(".map .map__canvas").length){
    $(".map .map__canvas").each(function(){

      var map = $(this),
          mapCanvas = map[0],
          lat = map.data("lat"),
          long = map.data("long"),
          zoom = map.data("zoom"),
          pin = map.data("pin");

      var mapOptions = {
          center: new google.maps.LatLng(lat, long),
          zoom: zoom,
          scrollwheel: false
      };

      var mapobj = new google.maps.Map(mapCanvas, mapOptions);

      if(pin == "no"){
         var marker = new google.maps.Marker({
          position: new google.maps.LatLng(lat, long),
          map: mapobj
        });
      }
      else{
        var image = {
            url: pin,
            scaledSize: new google.maps.Size(50, 50),
        };

        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(lat, long),
          map: mapobj,
          optimized: false,
          icon: image
        });
      }

    });
  }

});

/*======================================
  #Instagram
======================================*/
$(function(){
	if ($("#instafeed").length){
		$("#instafeed").each(function(){
			
			var wrap = $(this),
		        count = wrap.data("count"),  
		        link = wrap.data("link"),
		        icon = wrap.data("icon"),
		        token = wrap.data("token"),
		        user = wrap.data("user"),
		        username = wrap.data("username"),
		        imagewidth = wrap.data("imagewidth"),
		        template = "",
		        linkstart = "",
		        linkend = "",
		        iconlink = "";

		        if(link == "1"){
		        	linkstart = '<a href="{{link}}" class="instagram-image-link" target="_blank">';
		        	linkend = '</a>';
		        }

		        if(icon == "1"){
		        	iconlink = '<a target="_blank" class="instagram-user-link" href="https://www.instagram.com/'+ username +'"><i class="fa fa-instagram"></a></i>';
		        }

		        template = '<div class="col-'+ imagewidth +'"><div class="gallery__item"><figure>'+iconlink+''+linkstart+'<span class="bg" style="display:block;background-size:cover;background-position:center; padding-top: 100%; width: 100%; height: 100% ;background-image: url({{image}});" alt="{{caption}}"></span>'+linkend+'</figure></div></div>';

			// Get images
			var feed = new Instafeed({
		    	userId: user,
		    	accessToken: token,
		        get: 'user',
				limit: count,		
				template: template,
				resolution: 'standard_resolution'
		    });
		    feed.run();
		});
	}	
});

/*======================================
  #PhotoSwipe gallery
======================================*/
$(function(){
  if ($(".gallery").length || $(".product-post__media").length){

    $('.gallery').each( function() {
        var $pic     = $(this),
            getItems = function() {
                var items = [];
                $pic.find('a').each(function() {
                    var $href   = $(this).attr('href'),
                        $size   = $(this).data('size').split('x'),
                        $width  = $size[0],
                        $height = $size[1];

                    var item = {
                        src : $href,
                        w   : $width,
                        h   : $height
                    };

                    items.push(item);
                });
                return items;
            };

        var items = getItems();

        var $pswp = $('.pswp')[0];
        $pic.on('click', 'figure', function(event) {
          event.preventDefault();

          var $index = $(this).index();
          var options = {
              index: $index,
              bgOpacity: 0.9,
              showHideOpacity: true,
              shareEl: false,
              getThumbBoundsFn: function($index) {
                var thumbnail = document.querySelectorAll('.gallery__item img')[$index];
                var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
                var rect = thumbnail.getBoundingClientRect(); 
                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            }
          };

          // Initialize PhotoSwipe
          var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
          lightBox.init();
      });
    });
  }
});


/*======================================
  #Accordion
======================================*/
$(function(){
  $(document).on("click", ".acc__head", function(e){
    e.preventDefault();
    $(this).parent(".acc").toggleClass("acc--open");
    $(this).next(".acc__body").slideToggle(300);
  });
});;

/*======================================
  #Share modals
======================================*/
$(function(){
  $(document).on("click", ".share-list a", function(e){
      if($(window).width() > 768){
        e.preventDefault();

        var targetUrl = $(this).attr("href");
        var winWidth = $(this).data("width");
        var winHeight = $(this).data("height");
        PopupCenter(targetUrl,'sharer',winWidth,winHeight);

      }
  });
});

function PopupCenter(url, title, w, h) {
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    if (window.focus) {
        newWindow.focus();
    }
}

/*======================================
  #Contact Form
======================================*/
$(function(){
  $('#contact-form').on('submit', function(e){
    if($("#contact-form")[0].checkValidity()){
      e.preventDefault();

      var $form = $(this);

      $.ajax({
        url: $form.data('posturl'),
        method: "POST",
        data: $form.serialize(),
        success: function(data){
          $form.html('<svg aria-hidden="true" class="checkmark-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg><h4 class="success-color text-center">'+$form.data('thankyoumessage')+'</h4>');
        }
      });
    }
    
  });
  
  $('.newsletter form').on('submit', function(e){
    if($(".newsletter form")[0].checkValidity()){
      e.preventDefault();

      var $form = $(this);
      $.ajax({
        url: $form.attr('action'),
        method: "POST",
        data: $form.serialize(),
        success: function(data){
          $form.replaceWith('<svg aria-hidden="true" class="checkmark-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg><h4 class="success-color text-center">'+$form.data('thankyoumessage')+'</h4>');
        }
      });
    }
  });
});

/*======================================
  #Video
======================================*/
$(function(){
  // Toggle video sound
  $(document).on("click", ".video-mute", function(e){
      e.preventDefault();
      $(this).toggleClass("sound-on");
      var video = $(this).prev(".hero__video").children(".hero__video-player");
      video.prop('muted', !video.prop('muted'));
  });
});

/*======================================
  #Search
======================================*/
$(function () {
   $(document).on("click", ".toggle-search a, .show-search", function (e) {
     e.preventDefault();
     $("body").addClass("search-visible");

     setTimeout(function () {
         $(".search__input").focus();
     }, 600);
    });

   $(document).on("click touchstart", ".search__close, .search-overlay", function(){
      $("body").removeClass("search-visible");
   });

   $(document).on("input", ".search__input", function (e) {
      if ($(this).val() == "") {
         $(this).next(".search__button").attr("disabled", "disabled");
      }
      else {
         $(this).next(".search__button").removeAttr("disabled");
      }
    });
    
    $(document).keyup(function(e){
        if(e.keyCode == 27){ 
            $("body").removeClass("search-visible"); 
        }
    });
   
});

/*======================================
  #Cookie Consent
======================================*/
$(function(){

  $(document).on("click", ".cookie-consent .button", function(e){
    e.preventDefault();
    $(".cookie-consent").remove();
    setCookie("cookie-consent", "true", 365);
  });

  if(getCookie("cookie-consent") == ""){
    $(".cookie-consent").removeClass("hide--important");
  }
});


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/*======================================
  #Tabs
======================================*/
$(function(){
    $(document).on("click", ".tabs__nav a:not(.active)", function(e){
        e.preventDefault();

        $(this).closest("ul").find("a").removeClass("active");
        $(this).addClass("active");
        var target = $(this).attr("href");

        $(this).closest(".tabs").find(".tab--active").slideUp(300).removeClass("tab--active");
        $(target).slideDown(300);

        setTimeout(function(){
            $(target).addClass("tab--active");
        },300);
    });
});

/*======================================
  #Page loaded
======================================*/
$(window).on("load", function(){
  $("body").addClass("page-loaded").removeClass("page-loading");
});
