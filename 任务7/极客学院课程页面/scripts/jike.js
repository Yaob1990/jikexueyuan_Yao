/**
 * Created by yao on 2017/3/6.
 */


$(function () {
    var $li = $("nav ul li");
    var $div = $("nav ul li div");
    $li.eq(0).hover(function () {
        $("nav ul li a").css("color", "#4DC36F");
    }, function () {
        $("nav ul li a").css("color", "#000");
    });

//    主体内容切换按钮
//     $(".kuai-icon").bind("click",function () {
//         $("#mainLesson").removeClass(".lesson-list2").addClass(".lessonList")
//     });
//     console.log($(".kuai-icon"));
//     $(".list-icon").bind("click",function () {
//         $("#mainLesson").removeClass(".lessonList").addClass(".lesson-list2")
//     });
    $("#lessonContent li.kuai-icon").click(function () {
            $("#mainLesson").removeClass("lesson-list2").addClass("lessonList");
        }
    );
    $("#lessonContent li.list-icon").click(function () {
            $("#mainLesson").removeClass("lessonList").addClass("lesson-list2");
        }
    );
    /**
     * =========================
     *          顶部搜索部分
     * =========================
     */
        $("#searchButton").click(function () {
           $(".searchbox").animate({width:"850px"},500);
           $(".searchbox input").focus();
        });
    $(".close-icon").click(function () {
        $(".searchbox").animate({width:"0px"},500);
    });
    /**
     * =========================
     *          向上按钮
     *          包含两部分：
     *          1、按钮显示隐藏
     *          2、按钮的向上滚动定义
     * =========================
     */
    // $(".gototop .top").show(100).css("display","block");
    // ($('html,body').scrollTop>0)?($(".gototop .top").show(100).css("display","block")):($(".gototop .top").hide(100).css("display","none"));
    // console.log($(document).scrollTop());
    $(window).scroll(function () {
        if ($(document).scrollTop() > 0) {
            $(".gototop .top").fadeIn(300).css("display", "block");
        } else {
            $(".gototop .top").fadeOut(300).css("display", "none");
        }
    });
    $(".gototop .top").bind("click",function () {
        $("body,html").animate({scrollTop:0},1000)
    });



    navHover();
});
/**
 * 职业学院/会员课程、极客社区
 * hover效果/二级菜单出现
 */

function navHover() {
    var $li = $("nav ul li");
    var $div = $("nav ul li div");
    for (var i = 0; i < $li.length; i++) {
        $li.eq(i).hover(function () {
            $(this).css("color", "#4DC36F");
            $(this).find("div").show();
            // console.log($div.eq(1));
        }, function () {
            $(this).css("color", "#000");
            $(this).find("div").hide();
        });

    }
}