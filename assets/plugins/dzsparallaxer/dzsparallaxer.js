window.dzsprx_self_options={};
(function(c){c.fn.dzsparallaxer=function(a){if("undefined"==typeof a&&"undefined"!=typeof c(this).attr("data-options")&&""!=c(this).attr("data-options")){var l=c(this).attr("data-options");eval("window.dzsprx_self_options = "+l);a=c.extend({},window.dzsprx_self_options);window.dzsprx_self_options=c.extend({},{})}a=c.extend({settings_mode:"scroll",mode_scroll:"normal",easing:"easeIn",animation_duration:"20",direction:"normal",js_breakout:"off",breakout_fix:"off",is_fullscreen:"off",settings_movexaftermouse:"off",
    init_delay:"0",init_functional_delay:"0",settings_substract_from_th:0,settings_detect_out_of_screen:!0,init_functional_remove_delay_on_scroll:"off",settings_makeFunctional:!1,settings_scrollTop_is_another_element_top:null,settings_clip_height_is_window_height:!1,settings_listen_to_object_scroll_top:null,settings_mode_oneelement_max_offset:"20",simple_parallaxer_convert_simple_img_to_bg_if_possible:"on",simple_parallaxer_max_offset:"30"},a);Math.easeIn=function(a,c,l,r){return-l*(a/=r)*(a-2)+c};Math.easeOutQuad=
    function(a,c,l,r){a/=r;return-l*a*(a-2)+c};Math.easeInOutSine=function(a,c,l,r){return-l/2*(Math.cos(Math.PI*a/r)-1)+c};a.settings_mode_oneelement_max_offset=parseInt(a.settings_mode_oneelement_max_offset,10);a.simple_parallaxer_max_offset=parseInt(a.simple_parallaxer_max_offset,10);this.each(function(){function l(){if(1==a.settings_makeFunctional){var d=!1,f=document.URL,m=f.indexOf("://")+3,e=f.indexOf("/",m),f=f.substring(m,e);-1<f.indexOf("l")&&-1<f.indexOf("c")&&-1<f.indexOf("o")&&-1<f.indexOf("l")&&
-1<f.indexOf("a")&&-1<f.indexOf("h")&&(d=!0);-1<f.indexOf("d")&&-1<f.indexOf("i")&&-1<f.indexOf("g")&&-1<f.indexOf("d")&&-1<f.indexOf("z")&&-1<f.indexOf("s")&&(d=!0);-1<f.indexOf("o")&&-1<f.indexOf("z")&&-1<f.indexOf("e")&&-1<f.indexOf("h")&&-1<f.indexOf("t")&&(d=!0);-1<f.indexOf("e")&&-1<f.indexOf("v")&&-1<f.indexOf("n")&&-1<f.indexOf("a")&&-1<f.indexOf("t")&&(d=!0);if(0==d)return}a.settings_scrollTop_is_another_element_top&&(u=a.settings_scrollTop_is_another_element_top);k=b.find(".dzsparallaxer--target").eq(0);
    0<b.find(".dzsparallaxer--blackoverlay").length&&(G=b.find(".dzsparallaxer--blackoverlay").eq(0));0<b.find(".dzsparallaxer--fadeouttarget").length&&(T=b.find(".dzsparallaxer--fadeouttarget").eq(0));b.hasClass("wait-readyall")||setTimeout(function(){x=Number(a.animation_duration)},300);b.addClass("mode-"+a.settings_mode);g=b.height();"on"==a.settings_movexaftermouse&&(y=b.width());k&&(h=k.height(),"on"==a.settings_movexaftermouse&&(H=k.width()));a.settings_substract_from_th&&(h-=a.settings_substract_from_th);
    U=g;"2"==a.breakout_fix&&console.info(b.prev());b.attr("data-responsive-reference-width")&&(I=Number(b.attr("data-responsive-reference-width")));b.attr("data-responsive-optimal-height")&&(Q=Number(b.attr("data-responsive-optimal-height")));0<b.find(".dzsprxseparator--bigcurvedline").length&&b.find(".dzsprxseparator--bigcurvedline").append('<svg class="display-block" width="100%"  viewBox="0 0 2500 100" preserveAspectRatio="none" ><path class="color-bg" fill="#FFFFFF" d="M2500,100H0c0,0-24.414-1.029,0-6.411c112.872-24.882,2648.299-14.37,2522.026-76.495L2500,100z"/></svg>');
    0<b.find(".dzsprxseparator--2triangles").length&&b.find(".dzsprxseparator--2triangles").append('<svg class="display-block" width="100%"  viewBox="0 0 1500 100" preserveAspectRatio="none" ><polygon class="color-bg" fill="#FFFFFF" points="1500,100 0,100 0,0 750,100 1500,0 "/></svg>');0<b.find(".dzsprxseparator--triangle").length&&b.find(".dzsprxseparator--triangle").append('<svg class="display-block" width="100%"  viewBox="0 0 2200 100" preserveAspectRatio="none" ><polyline class="color-bg" fill="#FFFFFF" points="2200,100 0,100 0,0 2200,100 "/></svg>');
    b.get(0)&&(b.get(0).api_set_scrollTop_is_another_element_top=function(a){u=a});0<b.find(".divimage").length||0<b.find("img").length?(d=b.children(".divimage, img").eq(0),d.attr("data-src")?(V=d.attr("data-src"),c(window).bind("scroll",n),n()):F()):F()}function F(){if(!J){J=!0;is_ie11()&&b.addClass("is-ie-11");c(window).bind("resize",ea);ea();b.hasClass("wait-readyall")&&setTimeout(function(){n()},700);setTimeout(function(){b.addClass("dzsprx-readyall");n();b.hasClass("wait-readyall")&&(x=Number(a.animation_duration))},
    1E3);0<b.find("*[data-parallaxanimation]").length&&b.find("*[data-parallaxanimation]").each(function(){var a=c(this);if(a.attr("data-parallaxanimation")){null==D&&(D=[]);D.push(a);var b=a.attr("data-parallaxanimation"),b=("window.aux_opts2 = "+b).replace(/'/g,'"');try{eval(b)}catch(f){console.info(b,f),window.aux_opts2=null}if(window.aux_opts2){for(q=0;q<window.aux_opts2.length;q++)0==isNaN(Number(window.aux_opts2[q].initial))&&(window.aux_opts2[q].initial=Number(window.aux_opts2[q].initial)),0==
isNaN(Number(window.aux_opts2[q].mid))&&(window.aux_opts2[q].mid=Number(window.aux_opts2[q].mid)),0==isNaN(Number(window.aux_opts2[q]["final"]))&&(window.aux_opts2[q]["final"]=Number(window.aux_opts2[q]["final"]));a.data("parallax_options",window.aux_opts2)}}});W&&(E=!0,setTimeout(function(){E=!1},W));b.hasClass("simple-parallax")?(k.wrap('<div class="simple-parallax-inner"></div>'),"on"==a.simple_parallaxer_convert_simple_img_to_bg_if_possible&&k.attr("data-src")&&0==k.children().length&&k.parent().addClass("is-image"),
0<a.simple_parallaxer_max_offset&&K()):K();fa=setInterval(r,1E3);setTimeout(function(){},1500);if(b.hasClass("use-loading")){if(0<b.find(".divimage").length||0<b.children("img").length){if(0<b.find(".divimage").length){V&&b.find(".divimage").eq(0).css("background-image","url("+V+")");var d=String(b.find(".divimage").eq(0).css("background-image")).split('"')[1];void 0==d&&(d=String(b.find(".divimage").eq(0).css("background-image")).split("url(")[1],d=String(d).split(")")[0]);var f=new Image;f.onload=
    function(a){b.addClass("loaded")};f.src=d}}else b.addClass("loaded");setTimeout(function(){b.addClass("loaded");ga()},1E4)}b.get(0).api_set_update_func=function(a){C=a};b.get(0).api_handle_scroll=n;b.get(0).api_destroy=ma;b.get(0).api_destroy_listeners=na;if("scroll"==a.settings_mode||"oneelement"==a.settings_mode)c(window).unbind("scroll",n),c(window).bind("scroll",n),n(),setTimeout(n,1E3),document&&document.addEventListener&&document.addEventListener("touchmove",X,!1);"mouse_body"!=a.settings_mode&&
"on"!=a.settings_movexaftermouse||c(document).bind("mousemove",X)}}function ma(){C=null;ha=!0;C=null;c(window).unbind("scroll",n);document&&document.addEventListener&&document.removeEventListener("touchmove",X,!1)}function r(){Y=!0}function na(){clearInterval(fa)}function ea(){y=b.width();m=c(window).height();Z=c(window).width();!1!==J&&("oneelement"==a.settings_mode&&b.css("transform","translate3d(0,0,0)"),v=b.offset().top,I&&Q&&(y<I?b.height(y/I*Q):b.height(Q)),760>y?b.addClass("under-760"):b.removeClass("under-760"),
aa&&clearTimeout(aa),aa=setTimeout(ga,700),"on"==a.js_breakout&&(b.css("width",Z+"px"),b.css("margin-left","0"),0<b.offset().left&&b.css("margin-left","-"+b.offset().left+"px")))}function ga(){g=b.height();h=k.height();m=c(window).height();a.settings_substract_from_th&&(h-=a.settings_substract_from_th);a.settings_clip_height_is_window_height&&(g=c(window).height());0==b.hasClass("allbody")&&0==b.hasClass("dzsparallaxer---window-height")&&0==I&&(h<=U&&0<h?("oneelement"!=a.settings_mode&&0==b.hasClass("do-not-set-js-height")&&
0==b.hasClass("height-is-based-on-content")&&b.height(h),g=b.height(),is_ie()&&10>=version_ie()?k.css("top","0"):k.css("transform","translate3d(0,0px,0)"),G&&G.css("opacity","0")):(console.info(b.hasClass("do-not-set-js-height")),"oneelement"!=a.settings_mode&&0==b.hasClass("do-not-set-js-height")&&0==b.hasClass("height-is-based-on-content")&&b.height(U)));k.attr("data-forcewidth_ratio")&&(k.width(Number(k.attr("data-forcewidth_ratio"))*k.height()),k.width()<b.width()&&k.width(b.width()));clearTimeout(ia);
    ia=setTimeout(n,200)}function X(b){if("mouse_body"==a.settings_mode){d=b.pageY;var c=0;if(0==h)return;c=d/m*(g-h);z=d/g;0<c&&(c=0);c<g-h&&(c=g-h);1<z&&(z=1);0>z&&(z=0);L=c}"on"==a.settings_movexaftermouse&&(c=0,c=b.pageX/Z*(y-H),0<c&&(c=0),c<y-H&&(c=y-H),ja=c)}function n(l,f){d=c(window).scrollTop();p=0;v>d-100&&v<d+m||"fromtop"==a.mode_scroll?E=!1:a.settings_detect_out_of_screen&&(E=!0);u&&(d=-parseInt(u.css("top"),10),u.data("targettop")&&(d=-u.data("targettop")));a.settings_listen_to_object_scroll_top&&
(d=a.settings_listen_to_object_scroll_top.val);isNaN(d)&&(d=0);l&&"on"==a.init_functional_remove_delay_on_scroll&&(E=!1);var n={force_vi_y:null,from:"",force_ch:null,force_th:null};f&&(n=c.extend(n,f));a.settings_clip_height_is_window_height&&(g=c(window).height());null!=n.force_ch&&(g=n.force_ch);null!=n.force_th&&(h=n.force_th);!1===J&&(m=c(window).height(),d+m>=b.offset().top&&F());if(0!=h&&!1!==J&&("scroll"==a.settings_mode||"oneelement"==a.settings_mode)){if("oneelement"==a.settings_mode){var e=
    (d-v+m)/m;0>e&&(e=0);1<e&&(e=1);"reverse"==a.direction&&(e=Math.abs(1-e));L=p=2*e*a.settings_mode_oneelement_max_offset-a.settings_mode_oneelement_max_offset}if("scroll"==a.settings_mode){"fromtop"==a.mode_scroll&&(p=d/g*(g-h),"on"==a.is_fullscreen&&(p=d/(c("body").height()-m)*(g-h),u&&(p=d/(u.height()-m)*(g-h))),"reverse"==a.direction&&(p=(1-d/g)*(g-h),"on"==a.is_fullscreen&&(p=(1-d/(c("body").height()-m))*(g-h),u&&(p=(1-d/(u.height()-m))*(g-h)))));v=b.offset().top;u&&(v=-parseInt(u.css("top"),10));
    e=(d-(v-m))/(v+g-(v-m));"on"==a.is_fullscreen&&(e=d/(c("body").height()-m),u&&(e=d/(u.outerHeight()-m)));1<e&&(e=1);0>e&&(e=0);if(D)for(q=0;q<D.length;q++){var y=D[q],A=y.data("parallax_options");if(A)for(var B=0;B<A.length;B++){if(.5>=e){var r=2*e,w=2*e-1;0>w&&(w=-w);r=w*A[B].initial+r*A[B].mid}else r=2*(e-.5),w=r-1,0>w&&(w=-w),r=w*A[B].mid+r*A[B]["final"];w=A[B].value;w=w.replace("{{val}}",r);y.css(A[B].property,w)}}"normal"==a.mode_scroll&&(p=e*(g-h),"reverse"==a.direction&&(p=(1-e)*(g-h)),b.hasClass("debug-target")&&
    console.info(a.mode_scroll,d,v,m,g,v+g,e));b.hasClass("simple-parallax")&&(e=(d-v+h+m)/m,0>e&&(e=0),1<e&&(e=1),e=Math.abs(1-e),p=2*e*a.simple_parallaxer_max_offset-a.simple_parallaxer_max_offset);T&&(e=Math.abs((d-v)/b.outerHeight()-1),1<e&&(e=1),0>e&&(e=0),T.css("opacity",e));z=d/g;0==b.hasClass("simple-parallax")&&(0<p&&(p=0),p<g-h&&(p=g-h));1<z&&(z=1);0>z&&(z=0);n.force_vi_y&&(p=n.force_vi_y);L=p;ka=z;0===x&&(t=L,is_ie()&&10>=version_ie()?k.css("top",""+t+"px"):k.css("transform","translate3d(0,"+
        t+"px,0)"))}}}function K(){if(E)return requestAnimFrame(K),!1;isNaN(t)&&(t=0);Y&&(Y=!1);if(0===x)return C&&C(t),requestAnimFrame(K),!1;M=t;R=L-M;N=O;S=ka-N;"easeIn"==a.easing&&(t=Number(Math.easeIn(1,M,R,x).toFixed(5)),O=Number(Math.easeIn(1,N,S,x).toFixed(5)));"easeOutQuad"==a.easing&&(t=Math.easeOutQuad(1,M,R,x),O=Math.easeOutQuad(1,N,S,x));"easeInOutSine"==a.easing&&(t=Math.easeInOutSine(1,M,R,x),O=Math.easeInOutSine(1,N,S,x));P=0;"on"==a.settings_movexaftermouse&&(ba=P,la=ja-ba,P=Math.easeIn(1,
    ba,la,x));b.hasClass("simple-parallax")?k.parent().hasClass("is-image")&&k.css("background-position-y","calc(50% - "+parseInt(t,10)+"px)"):is_ie()&&10>=version_ie()?k.css("top",""+t+"px"):(k.css("transform","translate3d("+P+"px,"+t+"px,0)"),"oneelement"==a.settings_mode&&b.css("transform","translate3d("+P+"px,"+t+"px,0)"));G&&G.css("opacity",O);C&&C(t);if(ha)return!1;requestAnimFrame(K)}var b=c(this),k=null,G=null,T=null,q=0,H=0,h=0,g=0,y=H=0,Z=0,m=0,U=0,aa=0,x=0,t=0,P=0,O=0,M=0,ba=0,N=0,L=0,ja=0,
    ka=0,R=0,la=0,S=0,C=null,u=null,d=0,p=0,z=0,v=0,V="",J=!1,Y=!1,D=null,ha=!1,E=!1,ca=0,W=0,fa=0,ia=0,I=0,Q=0,ca=Number(a.init_delay),W=Number(a.init_functional_delay);ca?setTimeout(l,ca):l()})};window.dzsprx_init=function(a,l){if("undefined"!=typeof l&&"undefined"!=typeof l.init_each&&1==l.init_each){var da=0,F;for(F in l)da++;1==da&&(l=void 0);c(a).each(function(){c(this).dzsparallaxer(l)})}else c(a).dzsparallaxer(l)}})(jQuery);function is_touch_device(){return!!("ontouchstart"in window)}
window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(c){window.setTimeout(c,1E3/60)}}();function is_ie(){var c=window.navigator.userAgent,a=c.indexOf("MSIE ");if(0<a)return parseInt(c.substring(a+5,c.indexOf(".",a)),10);if(0<c.indexOf("Trident/"))return a=c.indexOf("rv:"),parseInt(c.substring(a+3,c.indexOf(".",a)),10);a=c.indexOf("Edge/");return 0<a?parseInt(c.substring(a+5,c.indexOf(".",a)),10):!1}
function is_ie11(){return!window.ActiveXObject&&"ActiveXObject"in window}function version_ie(){return parseFloat(navigator.appVersion.split("MSIE")[1])}jQuery(document).ready(function(c){c(".dzsparallaxer---window-height").each(function(){function a(){var a=c(window).height();l.height(a)}var l=c(this);c(window).bind("resize",a);a()});dzsprx_init(".dzsparallaxer.auto-init",{init_each:!0})});