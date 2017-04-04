/**
 * Created by yao on 2017/2/23.
 */
var result;//保存点击运算符之前输入框中的数值
var operator;//保存运算符
var isPressEqualsKey = false;//记录是否按下"="号
//数字事件
function calculate_num(control) {
    var out = document.getElementById("out");//获取屏幕输出
    if (isPressEqualsKey) {
        out.value = "";//已经计算过，清空输入框重新开始
        isPressEqualsKey = false;
    }
    if (out.value.indexOf(".") > -1 && control.value == ".") {
        return false;
    }
    out.value += control.value;
}
//+ - * / 事件
function calculation(control) {
    var out = document.getElementById("out");//获取屏幕输出
    //将运算符保存到全局变量
    operator = control.value;
    if (out.value == "") {
        return false;//数值输入框中没有数字，则不能输入运算符
    } else {
        result = out.value;
        //清空输入框，以输入操作值
        out.value = "";
    }

}
//计算结果事件
function getResult() {
    var out = document.getElementById("out");//获取屏幕输出
    var opValue;
    var sourseValue = parseFloat(result);
    var second = parseFloat(out.value);
    if (operator == "*") {
        opValue = sourseValue * second;
    } else if (operator == "/" && second == 0
    ) {
        isPressEqualsKey = true;
        result = "";
        opValue = "";
        return out.value = "除数不能为0";

    } else if (operator == "/" && second != 0) {
        opValue = sourseValue / second;
    } else if (operator == "+") {
        opValue = sourseValue + second;
    } else if (operator == "-") {
        opValue = sourseValue - second;
    }
    out.value = parseFloat(opValue.toFixed(8));
    isPressEqualsKey = true;
    result = "";
    opValue = "";

}

//正负号事件
function minus() {
    var out = document.getElementById("out");//获取屏幕输出
    if (isPressEqualsKey) {
        return false;
    } else {


        out.value = 0 - out.value;
    }
}

//清屏事件
function clearAll() {
    var out = document.getElementById("out");//获取屏幕输出
    result = "";
    operator = "";
    out.value = "";
}
//退格按键事件
function Back() {
    if (isPressEqualsKey) {
        return false;
    } else {
        var out = document.getElementById("out");
        out.value = out.value.slice(0, -1);
    }
}
//重新输入事件
function clear_again() {
    if (isPressEqualsKey) {
        return false;
    } else {
        var out = document.getElementById("out");
        out.value = "";
    }
}
//sin()事件
function sin_num() {
    var out=document.getElementById("out");
    var opValue;
    if(out.value==""){
        return false;
    }else {
        opValue=Math.sin(out.value);
        out.value=parseFloat(opValue.toFixed(8));
        isPressEqualsKey = true;
        result="";
    }
}

//cos（）事件
function cos_num() {
    var out=document.getElementById("out");
    var opValue;
    if(out.value==""){
        return false;
    }else {
        opValue=Math.cos(out.value);
        out.value=parseFloat(opValue.toFixed(8));
        isPressEqualsKey = true;
        result="";
    }
}

//tan()事件
function tan_num() {
    var out=document.getElementById("out");
    var opValue;
    if(out.value==""){
        return false;
    }else {
        opValue=Math.tan(out.value);
        out.value=parseFloat(opValue.toFixed(8));
        isPressEqualsKey = true;
        result="";
    }
}
//x平方事件
function square() {
    var out=document.getElementById("out");
    var opValue;
    if(out.value==""){
        return false;
    }else {
        opValue=Math.pow(out.value,2);
        out.value=parseFloat(opValue.toFixed(8));
        isPressEqualsKey = true;
        result="";
    }
}
