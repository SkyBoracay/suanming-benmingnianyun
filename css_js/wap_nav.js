// 隐藏指定的div元素
$('.result-bottomfix__fixed').hide();
// 获取当前URL  
var currentUrl = new URL(window.location.href);  
// 解析URL中的search参数，找到dhid的值  
var dhidParam = new URLSearchParams(currentUrl.search).get('dhid') || '';  // 如果没有dhid参数，设置默认值

$('header').hide();
var item = '[{"name":"首页","cid":"index","url":"/"},{"name":"本命年运","cid":"bmny","url":"/product/bmny.html"},{"name":"缘份测试","cid":"aiqingddp","url":"/product/aiqingddp.html"},{"name":"生肖运程","cid":"shengxiao2025","url":"/product/shengxiao2025.html"},{"name":"六道轮回","cid":"liudaolunhui","url":"/product/liudaolunhui.html"},{"name":"十年大运","cid":"shiniandy","url":"/product/shiniandy.html"},{"name":"紫微斗数","cid":"ziweidoushu","url":"/product/ziweidoushu.html"},{"name":"八字财运","cid":"bazicy","url":"/product/bazicy.html"},{"name":"姻缘分析","cid":"yunyincs","url":"/product/yunyincs.html"},{"name":"八字精批","cid":"bazijingpi","url":"/product/bazijingpi.html"},{"name":"命中贵人","cid":"mzgr","url":"/product/mzgr.html"},{"name":"五行缺什么","cid":"wxqs","url":"/product/wxqs.html"},{"name":"流年运势","cid":"liunian2025","url":"/product/liunian2025.html"},{"name":"八字起名","cid":"bzqm","url":"/product/bzqm.html"},{"name":"宝宝起名","cid":"baobaoqm","url":"/product/baobaoqm.html"},{"name":"姓名祥批","cid":"jieming","url":"/product/jieming.html"},{"name":"八字改名","cid":"xmgm","url":"/product/xmgm.html"},{"name":"星座配对","cid":"xingzuopeidui","url":"/product/xingzuopeidui.html"},{"name":"旺夫女人","cid":"wangfunvren","url":"/product/wangfunvren.html"},{"name":"姓名配对","cid":"xmpeidui","url":"/product/xmpeidui.html"},{"name":"爱情塔罗牌","cid":"aiqingtl","url":"/product/aiqingtl.html"},{"name":"月老姻缘","cid":"hongxian","url":"/product/hongxian.html"},{"name":"测桃花运","cid":"taohua","url":"/product/taohua.html"},{"name":"订婚吉日","cid":"dinghunjiri","url":"/product/dinghunjiri.html"},{"name":"结婚吉日","cid":"jiehunjiri","url":"/product/jiehunjiri.html"},{"name":"八字合婚","cid":"bazihehun","url":"/product/bazihehun.html"},{"name":"婚姻走势","cid":"huanxiyuanjia","url":"/product/huanxiyuanjia.html"},{"name":"安门吉日","cid":"anmenjiri","url":"/product/anmenjiri.html"},{"name":"车牌吉凶","cid":"chepaijixiong","url":"/product/chepaijixiong.html"},{"name":"提车吉日","cid":"tiche","url":"/product/tiche.html"},{"name":"出行吉日","cid":"chuxingjiri","url":"/product/chuxingjiri.html"},{"name":"动土吉日","cid":"dongtujiri","url":"/product/dongtujiri.html"},{"name":"搬家吉日","cid":"banjiajiri","url":"/product/banjiajiri.html"},{"name":"入宅吉日","cid":"ruzhai","url":"/product/ruzhai.html"},{"name":"手机号吉凶","cid":"haomajixiong","url":"/product/haomajixiong.html"},{"name":"公司起名","cid":"gongsi","url":"/product/gongsi.html"},{"name":"店铺起名","cid":"dianpuqm","url":"/product/dianpuqm.html"},{"name":"开业吉日","cid":"kaiyejiri","url":"/product/kaiyejiri.html"},{"name":"事业运势","cid":"bazisyy","url":"/product/bazisyy.html"},{"name":"终生运势","cid":"bzzsy","url":"/product/bzzsy.html"}]';
$('body').prepend('<link href="https://jsv.youxuancdn.com/static/wap_nav.css"rel="stylesheet"/>');
setTimeout(function(){
    $('body').prepend('<div class="main-title"><div class="menu-cat"><span id="navname"></span></div></div><div class="main-title-bg"></div><div class="icon_nav_tab tav_load nine_nav_tab"ui-nav-swiper data-item="" data-active="2"><div class=" swiper-container nav"><div class="swiper-wrapper"></div></div></div><div class="ovh"></div>');
    var tname = document.title; 
    tname = tname.replace(/-国学网/, "");
    if(tname=='在线测试'){
        tname = "国学网";	
    }
    $('#navname').html(tname);
}, 100);			

var type;
type = 'index';
if(window.location.href.indexOf("product") > -1) {
    var url = window.location.href;	
    type = url.match(/\/product\/([^/]+)/)[1];	
    type = type.replace(/.html/, "");
} else {
    var url = window.location.pathname;	
    type = url.replace(new RegExp("/","gm"),"");	
    type = type.replace(/.html/, "");	
    console.log(type);
}	

setTimeout(function(){
    $('.nine_nav_tab').attr('data-item',item);
    $('.nine_nav_tab').attr('data-active',type);
}, 200);

// 新增代码，在文档加载完成后隐藏.gxeafa-box
document.addEventListener('DOMContentLoaded', function() {
    // 直接移除元素，而不是隐藏
    var gxeafaBox = document.querySelector('.gxeafa-box');
    if (gxeafaBox) {
        gxeafaBox.remove(); // 彻底删除，防止后续代码恢复显示
    }

    // 额外监听动态加载的情况（如AJAX或延迟加载）
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === 1) {
                    var boxes = node.querySelectorAll ? node.querySelectorAll('.gxeafa-box') : [];
                    boxes.forEach(function(box) {
                        box.remove(); // 直接删除新出现的元素
                    });
                }
            });
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

setTimeout(function(){	
    require(['ccwk-swiperJS', 'css!ccwk-swiperCSS'],      
        function(Swiper) {
            var navSwiper = $("div[ui-nav-swiper]");
            if (0 == navSwiper.length) return !1;
            var api = {		
                config: {
                    slidesPerView: "auto",
                    initialSlide: 0
                },
                getActiveItem: function(t, a) {		
                    var n = "";						
                    t.data;
                    return $.each(t.data, function(t, c) {				
                        this.cid == a && (api.config.initialSlide = t < 3 ? 0 : t - 2), n = n + "<div class='swiper-slide " + (this.cid == a ? "active" : "") + "'><a href='" + c.url + '?channel=tui&dhid=' + encodeURIComponent(dhidParam)+ "' data-cid='" + this.cid + "' data-name='" + this.name + "'>" + this.name + "</a></div>"
                    }),  [n]
                },
            },
            getGoodsNav = function() {
                var active = navSwiper.data("active"),						
                    itemNav = navSwiper.data("item") || !1,
                    _this = this,
                    getNavDone = function(t) {
                        _this.item = t;
                        var a = active || [t.data[0].cid];								
                        t = api.getActiveItem(t, a), navSwiper.removeClass("tav_load").find(".swiper-wrapper").html(t[0]), showGoodsNav(_this.item)
                    };		
                return (getNavDone({
                    data: itemNav
                }), !1)
            },
            showGoodsNav = function(t) {
                var i = new Swiper(navSwiper.find(".swiper-container.nav"), api.config);
                navSwiper.find(".swiper-slide a").on("click", function() {				
                    if ($(this).attr("href")) return !0;				
                    navSwiper.find(".swiper-slide").removeClass("active"), $(this).parent().addClass("active"), i.slideTo(function(t) {
                        return t < 3 ? 0 : t - 2
                    }($(this).parent().index(), $(navSwiper.find(".swiper-slide")).lenght), 600, !1)
                })
            };		
            getGoodsNav();		
        }
    );
}, 300);
// 在文档加载完成后插入订单查询元素
document.addEventListener('DOMContentLoaded', function() {
    var html = '<div style="position: fixed;top:18%;right: 0;z-index: 999; width:28px;"><a href="https://vip.ffeshi.cn/select.html" target="_blank" style="display: inline-block;box-sizing: border-box;color: #fff;padding: 28px 5px 8px 6px;-webkit-border-top-left-radius: 5px;-moz-border-radius-topleft: 5px;border-top-left-radius: 5px;-webkit-border-bottom-left-radius: 5px;-moz-border-radius-bottomleft: 5px;border-bottom-left-radius: 5px;line-height: 16px;font-size: 14px;background: #000 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAY1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+aRQ2gAAAAIHRSTlMADPZFxvCuWktmBuK6tKWXMSLq5n9sURvMhHpzYDooGHZ4aRMAAADNSURBVCjPbc5ZjsMgEADRBgMG73vWydT9T5kIOxa28r5QF7SQlZrrEayZekkVk+arucjucgV01bZuAGy2z0sYg4rnzAB+23MFp+TrAfoVT3dwkghg4n8so5KUA79eCHLQrytqtJKjCl2IlFRy8oBOBNpzWCD7GXwMFncOIa4yDOfQgBKZ4ruUspj11+YYbvDcHt7T+R+UhXz8DzAnc7vvzgDXb/tvALlsRYOuZ+9DYyEtL8Ou9EtSZKmIzLMQydMiqvNZp+QjFi0/5bp+A7VGE8kkFY15AAAAAElFTkSuQmCC) no-repeat center 8px;-moz-background-size: 56%;-o-background-size: 56%;background-size: 56%;">订单查询</a></div>';
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    document.body.appendChild(tempDiv.firstChild);
});