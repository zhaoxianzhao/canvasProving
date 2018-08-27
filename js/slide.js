var c1 = document.getElementById('myCanvas');
var d1 = document.getElementById('myCanvas2');
var cenImg = document.getElementById("cenImg");
function getRandomImg() {
    //动态的获取图片
    return 'https://picsum.photos/300/150/?image=' + getRandomNumberByRange(0, 100)
}
function createImg() {
    cenImg.crossOrigin = "Anonymous"
    cenImg.onerror = () => {
        cenImg.src = getRandomImg()
    }
    cenImg.src = getRandomImg()
    return cenImg
}
var w = 310, // canvas宽度
    h = 155, // canvas高度
    qw = 50, // 切图宽
    qh = 30, // 切图高
    x = '', // 坐标
    y = ''; // 坐标
function getRandomNumberByRange(start, end) {
    return Math.round(Math.random() * (end - start) + start)
}

var zhaoxian = false; //用于判断是否添加事件
var Left = ''; //记录距离左边的位置
var tuodongBox = $('.tuodong_box'); //点击事件源
var myCanvas2 = $('#myCanvas2'); //复制的canvas
var clientX = ''
function zhaoxianchao() {
     x = getRandomNumberByRange(w - qw, 0), // 坐标
     y = getRandomNumberByRange(h - qh, 0); // 坐标
    function f(zhao) {
        zhao.width = w;
        zhao.height = h;
        let canvas = zhao.getContext('2d');
        canvas.drawImage(cenImg, 0, 0, w, h);
        createImg()
        fa(d1, zhao);
        canvas.fillStyle = '#fff';
        canvas.fillRect(x, y, qw, qh);
        canvas.stroke();
        return canvas
    }

    f(c1);

    function fa(xian, zhao) {
        let canvas = xian.getContext('2d');
        canvas.clearRect(0,0,w,h)
        canvas.drawImage(zhao, x, y, qw, qh, 0, y, qw, qh);
    }


    tuodongBox.mousedown(function (ev) {
        myCanvas2.show();
        clientX = ev.clientX - $(this).position().left;
        zhaoxian = true;

    });
    $(document).on('mousemove', function (e) {
        if (!zhaoxian) {
            return false
        }
        Left = e.clientX - clientX;
        if (Left >= 260) {
            Left = 260
        } else if (Left <= 0) {
            Left = 0
        }
        tuodongBox.css({left: Left});
        myCanvas2.css({left: Left});
        return Left;
    })
}

zhaoxianchao()
$(document).on('mouseup', function (e) {
    if (!zhaoxian) {
        return false
    }
    let Num = Left - x;
    if (Num >= -9 && Num <= 9) {

    } else {
        zhaoxianchao();
        alert('no');
        tuodongBox.css({left: 0});
        myCanvas2.css({left: 0});
    }
    zhaoxian = false
});