# canvas使用方法
canvas手册
## 手册地址
[手册地址](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D)
## canvas API比较简单
```javascript
var canvas = document.getElementById("jCanvas");
canvas.width = 1024;	//设置宽高比较好的方法[尽量不要再CSS中设置]
canvas.height = 768;
```
## context是主要的操作对象
```javascript
var context = canvas.getContext('2d');
```
## 划线操作
```javascript
context.beginPath();//开启一个封闭的画图环境与closePath配对使用(这里边使用的画笔都是局部变量)
context.moveTo(x1,y1);//画笔移动到一个点
context.lineTo(x2, y2);//画笔与前一个点的连线
context.fillStyle = "#60ADC2";//填充颜色
context.strokeStyle = "#60ADC2";//笔触颜色
context.lineWidth = 10;//笔触粗细
context.closePath();
context.fill();//涂鸦[这样的顺序可以体现出真正的图形宽度]
context.stroke();//描边
```
# 画圆弧
```javascript
/**
 * centerX:圆心坐标
 * centerY:
 * radius:半径
 * startAngle:开始弧度[Math.PI弧度]
 * endAngle:结束弧度
 * anticlockwise:顺时针-逆时针[默认顺时针方向为正方向]
 */
context.arc(centerX, centerY, radius, startAngle, endAngle, anticlockwise);
//eg
context.arc(centerX, centerY, radius, startAngle, 2 * Math.PI * (i + 1)/6, anticlockwise);
```
## 画矩形的接口[仅画路径]
```javascript
context.rect(x, y, width, height);
```
## 画矩形[包括路径笔触]
```javascript
context.strokeRect(x, y, width, height);
```
## 画矩形[填充矩形]
```javascript
context.fillRect(x, y, width, height);
```
## 线段端点处样式
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>lineCap</title>
    <link rel="stylesheet" href="lineCap.css">
</head>
<body>
    <canvas id="jCanvas" width="1024" height="768" class="canvas"></canvas>
    <script src="lineCap.js"></script>
</body>
</html>
```
```css
#lineCap.css
.canvas{display: block;margin: 100px auto;border: 1px solid #aaa;}
```
```javascript
#lineCap.js
/*
 * 属性：lineCap
 * 属性值：butt(default)//一条平滑的边在线段的两边
 * 属性值：round	//两端是圆滑的接口
 * 属性值：square	//突出一块，记得要有参考线
 */
var canvas = document.getElementById("jCanvas");
var context = canvas.getContext('2d');

//参考线
context.beginPath();
context.strokeStyle = "#AAAAAA";
context.lineWidth = 1;
context.moveTo(200, 50);
context.lineTo(200, 800);
context.stroke();

context.moveTo(800, 50);
context.lineTo(800, 800);
context.stroke();
context.closePath();

context.lineWidth = 10;
context.strokeStyle = "teal";
context.beginPath();
context.moveTo(200, 100);
context.lineTo(800, 100);
context.lineCap = "butt";
context.stroke();
context.closePath();

context.beginPath();
context.moveTo(200, 400);
context.lineTo(800, 400);
context.lineCap = "round";
context.stroke();
context.closePath();

context.beginPath();
context.moveTo(200, 600);
context.lineTo(800, 600);
context.lineCap = "square";
context.stroke();
context.closePath();
```









