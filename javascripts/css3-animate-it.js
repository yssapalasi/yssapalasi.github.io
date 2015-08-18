/*
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
!function(a){function t(){d=!1;for(var t=0;t<i.length;t++){var n=a(i[t]).filter(function(){return a(this).is(":appeared")});if(n.trigger("appear",[n]),e){var r=e.not(n);r.trigger("disappear",[r])}e=n}}var e,i=[],n=!1,d=!1,r={interval:250,force_process:!1},o=a(window);a.expr[":"].appeared=function(t){var e=a(t);if(!e.is(":visible"))return!1;var i=o.scrollLeft(),n=o.scrollTop(),d=e.offset(),r=d.left,s=d.top;return s+e.height()>=n&&s-(e.data("appear-top-offset")||0)<=n+o.height()&&r+e.width()>=i&&r-(e.data("appear-left-offset")||0)<=i+o.width()?!0:!1},a.fn.extend({appear:function(e){var o=a.extend({},r,e||{}),s=this.selector||this;if(!n){var f=function(){d||(d=!0,setTimeout(t,o.interval))};a(window).scroll(f).resize(f),n=!0}return o.force_process&&setTimeout(t,o.interval),i.push(s),a(s)}}),a.extend({force_appear:function(){return n?(t(),!0):!1}})}(jQuery),/*!
 * jQuery doTimeout: Like setTimeout, but better! - v1.0 - 3/3/2010
 * http://benalman.com/projects/jquery-dotimeout-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
// Copyright (c) 2010 "Cowboy" Ben Alman,
function(a){"$:nomunge";function t(t){function i(){t?r.removeData(t):c&&delete e[c]}function d(){s.id=setTimeout(function(){s.fn()},p)}var r,o=this,s={},f=t?a.fn:a,l=arguments,u=4,c=l[1],p=l[2],$=l[3];if("string"!=typeof c&&(u--,c=t=0,p=l[1],$=l[2]),t?(r=o.eq(0),r.data(t,s=r.data(t)||{})):c&&(s=e[c]||(e[c]={})),s.id&&clearTimeout(s.id),delete s.id,$)s.fn=function(a){"string"==typeof $&&($=f[$]),$.apply(o,n.call(l,u))!==!0||a?i():d()},d();else{if(s.fn)return void 0===p?i():s.fn(p===!1),!0;i()}}var e={},i="doTimeout",n=Array.prototype.slice;a[i]=function(){return t.apply(window,[0].concat(n.call(arguments)))},a.fn[i]=function(){var a=n.call(arguments),e=t.apply(this,[i+a[0]].concat(a));return"number"==typeof a[0]||"number"==typeof a[1]?this:e}}(jQuery),$(".animatedParent").appear(),$(".animatedClick").click(function(){var a=$(this).attr("data-target");if(void 0!=$(this).attr("data-sequence")){var t=$("."+a+":first").attr("data-id"),e=$("."+a+":last").attr("data-id"),i=t;$("."+a+"[data-id="+i+"]").hasClass("go")?($("."+a+"[data-id="+i+"]").addClass("goAway"),$("."+a+"[data-id="+i+"]").removeClass("go")):($("."+a+"[data-id="+i+"]").addClass("go"),$("."+a+"[data-id="+i+"]").removeClass("goAway")),i++,delay=Number($(this).attr("data-sequence")),$.doTimeout(delay,function(){return console.log(e),$("."+a+"[data-id="+i+"]").hasClass("go")?($("."+a+"[data-id="+i+"]").addClass("goAway"),$("."+a+"[data-id="+i+"]").removeClass("go")):($("."+a+"[data-id="+i+"]").addClass("go"),$("."+a+"[data-id="+i+"]").removeClass("goAway")),++i,e>=i?!0:void 0})}else $("."+a).hasClass("go")?($("."+a).addClass("goAway"),$("."+a).removeClass("go")):($("."+a).addClass("go"),$("."+a).removeClass("goAway"))}),$(document.body).on("appear",".animatedParent",function(){var a=$(this).find(".animated"),t=$(this);if(void 0!=t.attr("data-sequence")){var e=$(this).find(".animated:first").attr("data-id"),i=e,n=$(this).find(".animated:last").attr("data-id");$(t).find(".animated[data-id="+i+"]").addClass("go"),i++,delay=Number(t.attr("data-sequence")),$.doTimeout(delay,function(){return $(t).find(".animated[data-id="+i+"]").addClass("go"),++i,n>=i?!0:void 0})}else a.addClass("go")}),$(document.body).on("disappear",".animatedParent",function(){$(this).hasClass("animateOnce")||$(this).find(".animated").removeClass("go")}),$(window).load(function(){$.force_appear()});