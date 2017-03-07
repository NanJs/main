var sul = $("#slider-ul");
var sli = $("#slider-ul li");
var l=$("#bn-img").width();
//初始化
function init() {
    var str = '<li class="active"></li>';
    for (var i = 1; i < sli.length; i++) {
        str += '<li></li>';
    }
}
init();


//获取下一个索引值
var index = 0;


var timer = setInterval(function () {

    mainRun();
    index++;
}, 1500)


function mainRun() {
    //轮播切换效
    index = index % sli.length;
    sul.animate({
        'margin-left': -index*l+'px'
    }, 500, function () {
        if (index == sli.length) {
            sul.css({
                'margin-left': 0 + 'px'
            });
            //设置成第一张的位置   ++表示跳过第一张
            index++;
        }
    });
    dianRun();
}


function dianRun() {

    $("#slider-dian li.active").removeClass("active");
    $("#slider-dian li").eq(index).addClass("active");
}


//鼠标放点上
$("#slider-dian li").on("mouseover", function () {
    index = $(this).index();
    mainRun();
})

//鼠标移上去停止轮播
$("#banner").hover(function () {
    clearInterval(timer);
}, function () {
    timer = setInterval(function () {

        mainRun();
        index++;
    }, 2000)
});