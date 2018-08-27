// function zhao(x,y) {
//     this.x = x
//     this.y = y;
// }
// zhao.prototype.zhaos = function () {
//     return '(' + this.x + ', ' + this.y + ')';
// };
// var p = new zhao(1,2)
var myCanvas = document.getElementById('myCanvas');
var cenImg = document.getElementById('cenImg');

class Canvas {
    constructor(x, y) {
        this.myCanvas = x;
        this.cenImg = y;
        this.set = 123123;
        this.w = 310; // canvas宽度
        this.h = 155; // canvas高度
        this.qw = 50; // 切图宽
        this.qh = 30; // 切图高
        this.x = ''; // 坐标
        this.y = ''; // 坐标
    };

    created() {
        //页面加载调用的函数
        this.toString();
    };

    toString() {
        // return '(' + this.x + ', ' + this.y + ')';
    };

    methods() {
        //事件处理函数区
        return {
            getRandomNumberByRange(start, end) {
                //获取随机数
                return Math.round(Math.random() * (end - start) + start)
            },
            CanYan(){

            }
        }
    };

    distroy() {
        clearInterval(this.set);
    }
}

var b = new Canvas(myCanvas, cenImg);


b.created();
window.onfocus = function () {
    // 切换到页面执行事件
    b.created();
}
window.onbeforeunload = function () {
    //切出页面执行销毁
    //没确定是否好用待定阶段
    b.distroy();
}



