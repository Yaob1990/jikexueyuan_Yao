/**
 * Created by yao on 2017/2/25.
 */
var bg_red = document.getElementById("bg_red");
var bg_green = document.getElementById("bg_green");
var bg_orange = document.getElementById("bg_orange");
var bg_blue = document.getElementById("bg_blue");
var body = document.getElementsByTagName("body");
var change_border = document.querySelector(".changecolor_border");
var change_color = document.querySelectorAll(".changecolor_color");
var change_bg = document.querySelectorAll(".changecolor_bg");
bg_red.onclick = function () {
    body[0].style.background = "url('./img/bg/bg_red.jpg') no-repeat center top";
    change_bg[0].style.background = "red";
    change_bg[1].style.background = "red";
    change_border.style.borderTopColor = "red";
    for (var i = 0; i < change_color.length; i++) {
        change_color[i].style.color = "red";
    }
    // document.cookie="color="+"red";
    Cookie.set('color','red',30);
}
bg_green.onclick = function () {
    body[0].style.background = "url('./img/bg/bg_green.jpg') no-repeat center top";
    change_bg[0].style.background = "green";
    change_bg[1].style.background = "green";
    change_border.style.borderTopColor = "green";
    for (var i = 0; i < change_color.length; i++) {
        change_color[i].style.color = "green";
    }
    Cookie.set('color', 'green',30);
}
bg_orange.onclick = function () {
    body[0].style.background = "url('./img/bg/bg_orange.jpg') no-repeat center top";
    change_bg[0].style.background = "orange";
    change_bg[1].style.background = "orange";
    change_border.style.borderTopColor = "orange";
    for (var i = 0; i < change_color.length; i++) {
        change_color[i].style.color = "orange";
    }
    Cookie.set('color', 'orange',30);
}
bg_blue.onclick = function () {
    body[0].style.background = "url('./img/bg/bg_blue.jpg') no-repeat center top";
    change_bg[0].style.background = "blue";
    change_bg[1].style.background = "blue";
    change_border.style.borderTopColor = "blue";
    for (var i = 0; i < change_color.length; i++) {
        change_color[i].style.color = "blue";
    }
    Cookie.set('color', 'blue',30);
}
//cookie 设置
// var skin=cookie.GetCookie("color");
// if(skin="red"){
//     body[0].style.background = "url('./img/bg/bg_red.jpg') no-repeat center top";
//     change_bg[0].style.background="red";
//     change_bg[1].style.background="red";
//     change_border.style.borderTopColor="red";
//     for(var i=0;i<change_color.length;i++){
//         change_color[i].style.color="red";
//     }
// }

/*cookie管理*/
var Cookie = {
    getExpiresDate: function (days, hours, minutes) {
        var ExpiresDate = new Date();
        if (typeof days == "number" && typeof hours == "number" &&
            typeof hours == "number") {
            ExpiresDate.setDate(ExpiresDate.getDate() + parseInt(days));
            ExpiresDate.setHours(ExpiresDate.getHours() + parseInt(hours));
            ExpiresDate.setMinutes(ExpiresDate.getMinutes() + parseInt(minutes));
            return ExpiresDate.toGMTString();
        }
    },
    _getValue: function (offset) {
        var endstr = document.cookie.indexOf(";", offset);
        if (endstr == -1) {
            endstr = document.cookie.length;
        }
        return unescape(document.cookie.substring(offset, endstr));
    },
    get: function (name) {
        var arg = name + "=";
        var alen = arg.length;
        var clen = document.cookie.length;
        var i = 0;
        while (i < clen) {
            var j = i + alen;
            if (document.cookie.substring(i, j) == arg) {
                return this._getValue(j);
            }
            i = document.cookie.indexOf(" ", i) + 1;
            if (i == 0) break;
        }
        return "";
    },
    set: function (name, value, expires, path, domain, secure) {
        document.cookie = name + "=" + escape(value) +
            ((expires) ? "; expires=" + expires : "") +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            ((secure) ? "; secure" : "");
    },
    remove: function (name, path, domain) {
        if (this.get(name)) {
            document.cookie = name + "=" +
                ((path) ? "; path=" + path : "") +
                ((domain) ? "; domain=" + domain : "") +
                "; expires=Thu, 01-Jan-70 00:00:01 GMT";
        }
    },
    clear: function () {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++)
             var cookieName = cookies[i].split('=')[0];
        if (cookieName == 'ProductListIds') {
            this.remove(cookieName);
        }
    }
};
var skin = Cookie.get('color');
if (skin == "red") {
    body[0].style.background = "url('./img/bg/bg_red.jpg') no-repeat center top";
    change_bg[0].style.background = "red";
    change_bg[1].style.background = "red";
    change_border.style.borderTopColor = "red";
    for (var i = 0; i < change_color.length; i++) {
        change_color[i].style.color = "red";
    }}else if (skin == "green") {
        body[0].style.background = "url('./img/bg/bg_green.jpg') no-repeat center top";
        change_bg[0].style.background = "green";
        change_bg[1].style.background = "green";
        change_border.style.borderTopColor = "green";
        for (var i = 0; i < change_color.length; i++) {
            change_color[i].style.color = "green";
        }
    } else if (skin == "orange") {
        body[0].style.background = "url('./img/bg/bg_orange.jpg') no-repeat center top";
        change_bg[0].style.background = "orange";
        change_bg[1].style.background = "orange";
        change_border.style.borderTopColor = "orange";
        for (var i = 0; i < change_color.length; i++) {
            change_color[i].style.color = "orange";
        }
    } else if (skin == "blue") {
        body[0].style.background = "url('./img/bg/bg_blue.jpg') no-repeat center top";
        change_bg[0].style.background = "blue";
        change_bg[1].style.background = "blue";
        change_border.style.borderTopColor = "blue";
        for (var i = 0; i < change_color.length; i++) {
            change_color[i].style.color = "blue";
        }
    }

