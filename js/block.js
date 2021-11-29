<!--防调试-->

//禁止右键查看源代码
document.oncontextmenu = function(t) {
    window.event && (t = window.event);
    try {
        var e = t.srcElement;
        return "INPUT" == e.tagName && "text" == e.type.toLowerCase() || "TEXTAREA" == e.tagName ? !0 : !1
    } catch(n) {
        return ! 1
    }
},
document.onpaste = function(t) {
    window.event && (t = window.event);
    try {
        var e = t.srcElement;
        return "INPUT" == e.tagName && "text" == e.type.toLowerCase() || "TEXTAREA" == e.tagName ? !0 : !1
    } catch(n) {
        return ! 1
    }
},
document.oncopy = function(t) {
    window.event && (t = window.event);
    try {
        var e = t.srcElement;
        return "INPUT" == e.tagName && "text" == e.type.toLowerCase() || "TEXTAREA" == e.tagName ? !0 : !1
    } catch(n) {
        return ! 1
    }
},
document.oncut = function(t) {
    window.event && (t = window.event);
    try {
        var e = t.srcElement;
        return "INPUT" == e.tagName && "text" == e.type.toLowerCase() || "TEXTAREA" == e.tagName ? !0 : !1
    } catch(n) {
        return ! 1
    }
},
document.onselectstart = function(t) {
    window.event && (t = window.event);
    try {
        var e = t.srcElement;
        return "INPUT" == e.tagName && "text" == e.type.toLowerCase() || "TEXTAREA" == e.tagName ? !0 : !1
    } catch(n) {
        return ! 1
    }
};

//按键触发 
 document.onkeydown = function(){
            //禁止 ctrl+u
            if (event.ctrlKey && window.event.keyCode==85){
                return false;
            }
            //禁止 F12
            if (window.event && window.event.keyCode == 123) {
                event.keyCode = 0;
                event.returnValue = false;
            }
     }

//按F12时跳转页面
var element = new Image();
Object.defineProperty(element, 'id', {
    get: function() {
        window.location.href = "https://vicoeo.com/blog/"
    }
});
console.log(element);

// 反调试函数,参数：开关，执行代码
        function endebug(off, code) {
            if (!off) {
                ! function(e) {
                    function n(e) {
                        function n() {
                            return u;
                        }

                        function o() {
                            window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized ? t("on") : (a = "off", console.log(d), console.clear(), t(a));
                        }

                        function t(e) {
                            u !== e && (u = e, "function" == typeof c.onchange && c.onchange(e));
                        }

                        function r() {
                            l || (l = !0, window.removeEventListener("resize", o), clearInterval(f));
                        }
                        "function" == typeof e && (e = {
                            onchange: e
                        });
                        var i = (e = e || {}).delay || 500,
                            c = {};
                        c.onchange = e.onchange;
                        var a, d = new Image;
                        d.__defineGetter__("id", function() {
                            a = "on"
                        });
                        var u = "unknown";
                        c.getStatus = n;
                        var f = setInterval(o, i);
                        window.addEventListener("resize", o);
                        var l;
                        return c.free = r, c;
                    }
                    var o = o || {};
                    o.create = n, "function" == typeof define ? (define.amd || define.cmd) && define(function() {
                        return o
                    }) : "undefined" != typeof module && module.exports ? module.exports = o : window.jdetects = o
                }(), jdetects.create(function(e) {
                    var a = 0;
                    var n = setInterval(function() {
                        if ("on" == e) {
                            setTimeout(function() {
                                if (a == 0) {
                                    a = 1;
                                    setTimeout(code);
                                }
                            }, 200);
                        }
                    }, 100);
                })
            }
        }
    endebug(false, function() {
        // 非法调试执行的代码(不要使用控制台输出的提醒)
        document.write("检测到非法调试,请关闭后刷新重试!");
    });

//站点运行时间
function show_runtime(){window.setTimeout("show_runtime()",1000);X=new 
Date("2/22/2020 15:00:00"); //初始建站时间修改此处
 Y=new Date();T=(Y.getTime()-X.getTime());M=24*60*60*1000;
 a=T/M;A=Math.floor(a);b=(a-A)*24;
runtime_span.innerHTML="本站已运行"+A+"天"}show_runtime();





