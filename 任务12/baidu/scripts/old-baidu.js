/**
 * Created by yao on 2017/3/13.
 */
$("#input_search").focus(function () {
    $(".input_content").css("border", "1px solid #6C8BB5")
});
$("#input_search").blur(function () {
    $(".input_content").css("border", "1px solid #C0C0C0")
});

/*
 右侧更多产品
 */

$("#li_more,.aside").hover(function () {
    $(".aside").show();
}, function () {
    $(".aside").hide();
});

//我的关注中的"我的导航"
var $navcontent = $(".navcontent");
$("#mynav").click(function () {
        if ($navcontent.css("display") == "none") {
            $("#mynav i").removeClass("arrow-right").addClass("arrow-bottom");
            $navcontent.css("display", "block");
        } else {
            $("#mynav i").removeClass("arrow-bottom").addClass("arrow-right");
            $navcontent.css("display", "none");
        }


    }
)

//导航菜单
$(".mainContent ul li").each(
    function (index) {
        var liNode = $(this);
        $(this).click(function () {
            $(".mainContent ul li.nav_color").removeClass("nav_color");
            liNode.addClass("nav_color");
            $(".mainContent div.main_block").removeClass("main_block");
            $(".mainContent .nav").nextAll().eq(index).addClass("main_block");

        })
    });

//返回顶部，直接使用极客学院作业中内容
$(window).scroll(function () {
    if ($(document).scrollTop() > 0) {
        $(".gototop").fadeIn(300).css("display", "block");
    } else {
        $(".gototop").fadeOut(300).css("display", "none");
    }
});
$(".gototop").bind("click", function () {
    $("body,html").animate({scrollTop: 0}, 1000)
});

//换肤
$(".bg ul li").eq(0).click(function () {
    $(".allbg").removeClass("bg1 bg2 bg3");
    $(".allbg").addClass("bg1");
    setCookie("bg", "bg1", 1800);

});
$(".bg ul li").eq(1).click(function () {
    $(".allbg").removeClass("bg1 bg2 bg3");
    $(".allbg").addClass("bg2");
    setCookie("bg", "bg2", 1800);

});
$(".bg ul li").eq(2).click(function () {
    $(".allbg").removeClass("bg1 bg2 bg3");
    $(".allbg").addClass("bg3");
    setCookie("bg", "bg3", 1800);

});
$("#no_skin").click(function () {
    $(".allbg").removeClass("bg1 bg2 bg3");
    setCookie("bg", "no_skin", 1800);
});
$("#up").click(function () {
    $(".bg").animate({height: 0}, 1000);
});
$("#changeSkin").click(function () {
    $(".bg").animate({height: "230px"}, 1000);
    return false;
});


if (getCookie("bg") == "bg1") {
    $(".allbg").removeClass("bg1 bg2 bg3");
    $(".allbg").addClass("bg1");
} else if (getCookie("bg") == "bg2") {
    $(".allbg").removeClass("bg1 bg2 bg3");
    $(".allbg").addClass("bg2");
} else if (getCookie("bg") == "bg3") {
    $(".allbg").removeClass("bg1 bg2 bg3");
    $(".allbg").addClass("bg3");
} else if (getCookie("bg") == "no_skin") {
    $(".allbg").removeClass("bg1 bg2 bg3");
}

/**
 * 设置cookie
 * @param {string} name  键名
 * @param {string} value 键值
 * @param {integer} days cookie周期
 */
function setCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

// 获取cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// 删除cookie
function deleteCookie(name) {
    setCookie(name, "", -1);
}