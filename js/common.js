﻿//根据id获取dom对象
function $(id) {
    return document.getElementById(id);
}
//根据标签获取dom集合
function $$(tagname) {
    return document.getElementsByTagName(tagname);
}
function $$$(classname) {
    return document.getElementsByClassName(classname);
}
//根据id返回对应控件的value值，并转换为float值
function getFloat(id) {
    return parseFloat($(id).value);
}
//显示div层
function showDiv(id) {
    $(id).style.display = "block";
}
//隐藏div层
function hideDiv(id) {
    $(id).style.display = "none";
}

//获取下拉列表选中项文本值
function getDdlText(id) {
    var index = $(id).selectedIndex;
    var text = $(id).options[index].text;
    return text;
}

//获取下拉列表选中项的自定义属性值
function getDdlAttrText(id, name) {
    var index = $(id).selectedIndex;
    var text = $(id).options[index].getAttribute(name);
    return text;
}

//获取文本框的自定属性值，并转换为float数值
function getTxtAttrFloatNum(id, name) {
    var text = $(id).getAttribute(name);
    return parseFloat(text);
}

//获取文本框的自定属性值，并转换为整型数值
function getTxtAttrIntNum(id, name) {
    var text = $(id).getAttribute(name);
    return parseInt(text);
}

// 对数组的原型添加remove方法
Array.prototype.remove = function (from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};
//从大到小排序
function compare(property) {
    return function (a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value2 - value1;
    }
}

//根据关键词查询结果
var word = "";
function contains(servant) {
    return servant.keys.find(check);
}
function check(key) {
    if (word == "") {
        return true;
    }
    return new RegExp(word, "gi").test(key);//忽略大小写
    //return key.indexOf(word) != -1;
}


//父容器中，使其自适应内容高度
function resizeWindow() {
    //IE中：document.frames['iframe的name'].document.getElementById('元素的ID');
    //非IE中：window.frames["iContent"].contentWindow.document.getElementById('content')
    //iframe的id与name不能一样
    //var height = window.frames["iContent"].contentWindow ? window.frames["iContent"].contentWindow.document.getElementById('content').offsetHeight : document.frames['iContentN'].document.getElementById('content').offsetHeight;

    //通用方法：通过contentWindow获取到内容页面的高度
    var height = $('iContent').contentWindow.document.getElementById('content').offsetHeight;
    if (iContent) {
        $("iContent").style.height = (height + 300) + "px";
    }
}

//内容页中，使父窗口iContent自适应内容高度
function resizeParentWindow() {
    var height = $("content").offsetHeight;//获取body的高度
    //var iContent = window.parent.frames["iContent"] ;
    //if (iContent) {
    //    iContent.style.height = (height + 60) + "px";
    //}

    //获取到父容器iContent的dom对象
    var iContent = window.parent.document.getElementById('iContent');
    if (iContent) {
        iContent.style.height = (height + 300) + "px";
    }
}

//判断是否拥有某个类
function hasClass(elem, cls) {
    cls = cls || '';
    if (cls.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false
    return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
}

//添加类
function addClass(ele, cls) {
    if (!hasClass(ele, cls)) {
        ele.className = ele.className == '' ? cls : ele.className + ' ' + cls;
    }
}

//移除类
function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var newClass = ' ' + ele.className.replace(/[\t\r\n]/g, '') + ' ';
        while (newClass.indexOf(' ' + cls + ' ') >= 0) {
            newClass = newClass.replace(' ' + cls + ' ', ' ');
        }
        ele.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}

//过滤特殊符号（图片文件名）
function filterStr(str) {
    return str.replace(/\s+/gi, " ").replace(/[\s(〔（・&']/gi, "_").replace(/[〕)）]/gi, "");
}

//过滤特殊符号（搜索关键词）
function filterStr2(str) {
    return str.replace(/\s+/gi, "").replace(/[〔（・&'〕)）]/gi, "");
}

//返回配卡html字符串
function getCardsHtml(str) {
    str = str.replace(/([A])/gi, "!").replace(/[B]/gi, "@").replace(/[Q]/gi, "#");
    return str.replace(/([!])/gi, "<img src='images/Box/Arts.png'/>").replace(/[@]/gi, "<img src='images/Box/Buster.png'/>").replace(/[#]/gi, "<img src='images/Box/Quick.png'/>");
}

//下载文件
function downloadFile(src) {
    let $a = document.createElement('a');
    $a.setAttribute("href", src);
    $a.setAttribute("download", "");

    let evObj = document.createEvent('MouseEvents');
    evObj.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, true, false, 0, null);
    $a.dispatchEvent(evObj);
};