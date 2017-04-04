/**
 * Created by yao on 2017/3/5.
 */
/**
 *
 */
$(function () {
    /**
     * 窗口位置调整，图片重新排序
     */
    $(window).resize(function () {
        imgLocation();

    });
        imgLocation();
        var dataImg={"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"},{"src":"7.jpg"},{"src":"8.jpg"},{"src":"9.jpg"},{"src":"10.jpg"},{"src":"12.jpg"},{"src":"13.jpg"},{"src":"14.jpg"},{"src":"15.jpg"}]};
        $(window).scroll(function () {
            if(scrollside()){
                $.each(dataImg.data,function (index,value) {
                    var box=$("<div>").addClass("box").appendTo("#container");
                    var content=$("<div>").addClass("content").appendTo(box);
                    $("<img>").attr("src","./img/"+$(value).attr("src")).appendTo(content);
                });
                imgLocation();
            }
        });

});

/**
 *滚动触发图片加载
 * @returns {boolean}
 */
function scrollside() {
    var box=$(".box");
    var lastboxHeight=box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
    var windowHeight=$(window).height();
    var scrollHeight=$(window).scrollTop();
    return lastboxHeight<scrollHeight+windowHeight;
}


/**
 * 图片位置排序
 */
function imgLocation() {
    var box=$(".box");
    var boxWidth=box.eq(0).width();
    var num = Math.floor($(window).width()/boxWidth);
    var boxArr=[];
    box.each(function (index,value) {
        var boxHeight=box.eq(index).height();
        if(index<num){
            boxArr[index]=boxHeight;
            //窗口resize()要把定位改回来，不然会图片重叠
            $(value).css({
                "position":"",
                "top":"",
                "left":""

            });
        }else {
            var minboxHeight=Math.min.apply(null,boxArr);
            var minboxIndex=$.inArray(minboxHeight,boxArr);
            $(value).css({
                "position":"absolute",
                "top":minboxHeight,
                "left":box.eq(minboxIndex).position().left

            });
            boxArr[minboxIndex]+=box.eq(index).height();
        }

    });
}