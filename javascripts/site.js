$(".nav-button").on("click",function(){$(this).toggleClass("close"),$(this).parent().toggleClass("dark"),$(".nav").toggleClass("visible")}),$(".nav li").on("click",function(){$(".nav").removeClass("visible"),$(".nav-button").removeClass("close"),$(".nav-button").parent().removeClass("dark")}),$(".close-button").on("click",function(){$(".darkOverlay").hide()}),$(".contact-trigger").on("click",function(a){a.preventDefault(),$(".darkOverlay").show()}),$(".anchor").on("click",function(a){a.preventDefault();var t;return t=$(this.hash),$("html,body").animate({scrollTop:t.offset().top},500)}),/*
 * CSS3 Animate it
 * Copyright (c) 2014 Jack McCourt
 * https://github.com/kriegar/css3-animate-it
 * Version: 0.1.0
 *
 * I utilise the jQuery.appear plugin within this javascript file so here is a link to that too
 * https://github.com/morr/jquery.appear
 *
 * I also utilise the jQuery.doTimeout plugin for the data-sequence functionality so here is a link back to them.
 * http://benalman.com/projects/jquery-dotimeout-plugin/
 */
function(a){function t(){o=!1;for(var t=0;t<n.length;t++){var i=a(n[t]).filter(function(){return a(this).is(":appeared")});if(i.trigger("appear",[i]),e){var r=e.not(i);r.trigger("disappear",[r])}e=i}}var e,n=[],i=!1,o=!1,r={interval:250,force_process:!1},s=a(window);a.expr[":"].appeared=function(t){var e=a(t);if(!e.is(":visible"))return!1;var n=s.scrollLeft(),i=s.scrollTop(),o=e.offset(),r=o.left,d=o.top;return d+e.height()>=i&&d-(e.data("appear-top-offset")||0)<=i+s.height()&&r+e.width()>=n&&r-(e.data("appear-left-offset")||0)<=n+s.width()?!0:!1},a.fn.extend({appear:function(e){var s=a.extend({},r,e||{}),d=this.selector||this;if(!i){var l=function(){o||(o=!0,setTimeout(t,s.interval))};a(window).scroll(l).resize(l),i=!0}return s.force_process&&setTimeout(t,s.interval),n.push(d),a(d)}}),a.extend({force_appear:function(){return i?(t(),!0):!1}})}(jQuery),/*!
 * jQuery doTimeout: Like setTimeout, but better! - v1.0 - 3/3/2010
 * http://benalman.com/projects/jquery-dotimeout-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
// Copyright (c) 2010 "Cowboy" Ben Alman,
function(a){"$:nomunge";function t(t){function n(){t?r.removeData(t):u&&delete e[u]}function o(){d.id=setTimeout(function(){d.fn()},$)}var r,s=this,d={},l=t?a.fn:a,c=arguments,f=4,u=c[1],$=c[2],p=c[3];if("string"!=typeof u&&(f--,u=t=0,$=c[1],p=c[2]),t?(r=s.eq(0),r.data(t,d=r.data(t)||{})):u&&(d=e[u]||(e[u]={})),d.id&&clearTimeout(d.id),delete d.id,p)d.fn=function(a){"string"==typeof p&&(p=l[p]),p.apply(s,i.call(c,f))!==!0||a?n():o()},o();else{if(d.fn)return void 0===$?n():d.fn($===!1),!0;n()}}var e={},n="doTimeout",i=Array.prototype.slice;a[n]=function(){return t.apply(window,[0].concat(i.call(arguments)))},a.fn[n]=function(){var a=i.call(arguments),e=t.apply(this,[n+a[0]].concat(a));return"number"==typeof a[0]||"number"==typeof a[1]?this:e}}(jQuery),$(".animatedParent").appear(),$(".animatedClick").click(function(){var a=$(this).attr("data-target");if(void 0!=$(this).attr("data-sequence")){var t=$("."+a+":first").attr("data-id"),e=$("."+a+":last").attr("data-id"),n=t;$("."+a+"[data-id="+n+"]").hasClass("go")?($("."+a+"[data-id="+n+"]").addClass("goAway"),$("."+a+"[data-id="+n+"]").removeClass("go")):($("."+a+"[data-id="+n+"]").addClass("go"),$("."+a+"[data-id="+n+"]").removeClass("goAway")),n++,delay=Number($(this).attr("data-sequence")),$.doTimeout(delay,function(){return console.log(e),$("."+a+"[data-id="+n+"]").hasClass("go")?($("."+a+"[data-id="+n+"]").addClass("goAway"),$("."+a+"[data-id="+n+"]").removeClass("go")):($("."+a+"[data-id="+n+"]").addClass("go"),$("."+a+"[data-id="+n+"]").removeClass("goAway")),++n,e>=n?!0:void 0})}else $("."+a).hasClass("go")?($("."+a).addClass("goAway"),$("."+a).removeClass("go")):($("."+a).addClass("go"),$("."+a).removeClass("goAway"))}),$(document.body).on("appear",".animatedParent",function(){var a=$(this).find(".animated"),t=$(this);if(void 0!=t.attr("data-sequence")){var e=$(this).find(".animated:first").attr("data-id"),n=e,i=$(this).find(".animated:last").attr("data-id");$(t).find(".animated[data-id="+n+"]").addClass("go"),n++,delay=Number(t.attr("data-sequence")),$.doTimeout(delay,function(){return $(t).find(".animated[data-id="+n+"]").addClass("go"),++n,i>=n?!0:void 0})}else a.addClass("go")}),$(document.body).on("disappear",".animatedParent",function(){$(this).hasClass("animateOnce")||$(this).find(".animated").removeClass("go")}),$(window).load(function(){$.force_appear()});