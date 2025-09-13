;(function(){
    if (Object.prototype.toString.call(window._visitjsx) === '[object Array]') {
        var _visitjsx_queue = window._visitjsx || [];
    }
    window._visitjsx = {
        // 获取src参数
        getSrcParam: function(name) {
            var src = document.getElementById('_visitjsx').attributes['src'].value;
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = src.substr(src.indexOf('?') + 1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        },
        // 获取url域名
        getJsOrigin: function() {
            var src = document.getElementById('_visitjsx').attributes['src'].value;
            var arr = /^\/\/[\w-.]+(:\d+)?/i.exec(src);
            return arr ? arr[0] : 'https://visitjsx.juqianwh.com';
        },
        //默认必要参数
        originalData: function(){
            return {
                si : this.getSrcParam('si') || '',
                puid: this.getSrcParam('puid') || '',
                ip: this.getSrcParam('ip') || '',
                ed: this.getSrcParam('ed') || '',
                url: location.href,
                up: location.search,
                so: document.referrer,
                osl: navigator.language,//zh-CN|en-US
                ost: navigator.platform,//Win32|Linux x86_64|Linux armv8l|iPhone|MacIntel
                bres: screen.width +'*'+screen.height,
                bua: navigator.userAgent,
                action: {action: 'open'}
            }
        },
        sendData: function(action){
            var _params = this.originalData(),params = '';
            if(action) _params.action = action;
            _params.action = JSON.stringify(_params.action);
            Object.keys(_params).forEach(function(item,index){
                if(_params[item]){
                    params += item +'='+encodeURIComponent(_params[item]) + '&';
                }
            })
            params += 'timer='+ parseInt(new Date().getTime()/1000);
            //伪装请求
            var reqImg = new Image();
            reqImg.src = this.getJsOrigin() +'/hm.gif?'+ params;
        },
        push: function(data){
            this.sendData(data)
        }
    }
    _visitjsx.sendData();
    //遗留事件处理
    while (_visitjsx_queue.length > 0) {
        window._visitjsx.push(_visitjsx_queue.shift());
    }
}())
