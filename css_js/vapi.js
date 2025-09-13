function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}
var ref = window.location.href;
if (document.referrer.length > 0) {
    ref = document.referrer;
}
try {
    if (ref.length == 0 && opener.location.href.length > 0) {
        ref = opener.location.href;
    }
} catch(e) {}
var url = window.location.href;
var order, type, channel = "tui", dhid = 0, pass = 0;
if (url.indexOf("orders") > -1) {
    order = getQueryVariable("order_sn");
    type = url.match(/\/product\/(\S*)\/orders/)[1];
}
if (url.indexOf("dhid") > -1) {
    dhid = getQueryVariable("dhid");
}
if (url.indexOf("channel") > -1) {
    channel = getQueryVariable("channel");
}
var s = 0;
if (order) {
	!function t() {
    $.ajax({
        type: "GET",
        url: "https://tg.ffceshi.com/paystatus.html?order_sn="+order+"&t=123",
        success: function(a) {			
			if(a.code && a.data.status){
				pass=a.data.status
			} else{
				if(s<0){
				setTimeout(function() {
                t();
                },1000)
				}
			}			
            s++;           
        }
    })
	}();
//付款界面延时5秒发送数据	
setTimeout(function() {
            //创建异步对象
            var xhr = new XMLHttpRequest();
            //设置请求的类型及url
            //post请求一定要添加请求头才行不然会报错
            xhr.open('post', '//douhao.com/?m=ajax&a=getorder');
            //发送请求
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            xhr.send('order=' + order + '&type=' + type + '&dhid=' + dhid + '&channel=' + channel + '&from=' + ref + '&pass=' + pass);
            xhr.onreadystatechange = function() {
                // 这步为判断服务器是否正确响应
                if (xhr.status == 200) {
                    //console.log(xhr);
                }
            };
},1000);
}	
	


			