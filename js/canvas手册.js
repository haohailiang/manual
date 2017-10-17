手册地址:
https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D

//canvas API比较简单
var canvas = document.getElementById("jCanvas");
canvas.width = 1024;	//设置宽高比较好的方法[尽量不要再CSS中设置]
canvas.height = 768;

//context是主要的操作对象
var context = canvas.getContext('2d');

//划线操作
context.beginPath();//开启一个封闭的画图环境与closePath配对使用(这里边使用的画笔都是局部变量)
context.moveTo(x1,y1);//画笔移动到一个点
context.lineTo(x2, y2);//画笔与前一个点的连线
context.fillStyle = "#60ADC2";//填充颜色
context.strokeStyle = "#60ADC2";//笔触颜色
context.lineWidth = 10;//笔触粗细
context.closePath();
context.fill();//涂鸦[这样的顺序可以体现出真正的图形宽度]
context.stroke();//描边

/**
 * desc:画圆弧
 * centerX:圆心坐标
 * centerY:
 * radius:半径
 * startAngle:开始弧度[Math.PI弧度]
 * endAngle:结束弧度
 * anticlockwise:顺时针-逆时针[默认顺时针方向为正方向]
 */
context.arc(centerX, centerY, radius, startAngle, endAngle, anticlockwise);
	eg:
		context.arc(centerX, centerY, radius, startAngle, 2 * Math.PI * (i + 1)/6, anticlockwise);

//画矩形的接口[仅画路径]
context.rect(x, y, width, height);

//画矩形[包括路径笔触]
context.strokeRect(x, y, width, height);

//画矩形[填充矩形]
context.fillRect(x, y, width, height);

/* 描述：线段端点处样式
 * 属性：lineCap
 * 属性值：butt(default)//一条平滑的边在线段的两边
 * 属性值：round	//两端是圆滑的接口
 * 属性值：square	//突出一块，记得要有参考线
 * eg:参见[九阳神功]demo
 */

/**
 * 描述：线段连接处样式
 * 属性：lineJoin
 * 属性值：miter(default)		直愣愣的有直角
 * 属性值：bevel				拦腰把直角切断
 * 属性值：round				柔柔的小圆角
 * 关联属性：miterLimit			当2条线比较靠近时，把该值调大可以得到很尖的角
 * eg:参见[九阳神功]lineJoin.demo
 * eg:参见[九阳神功]miterLimit.demo
 */

/**
 * 描述：图形变换
 * 位移translate(x, y)
 * 旋转rotate(deg)
 * 缩放scale(sx, sy)
 * eg:
 * context.translate(x, y)					注意：前后2个画笔之间的效果会叠加
 * context.rotate(Math.PI * 90/180);		所采取的值为90度
 * context.scale(3.0, 2.0);					放大必须在beginPath和closePath当中，不然会全局放大
 * 要点：移动必须在落笔之前
 * eg:
 */
context.translate(100, 100);//位置靠前是可以的
context.moveTo(0, 0);
context.lineTo(100, 100);
context.stroke();

/**
 * 描述：图形重合部分的处理
 * 属性：globalCompositeOperation
 * 属性值：source-over后边的图像覆盖前边的图像[两者都会保留]
 * 		source-atop后边的图像和前边的图像重合的部分和前边图像的全部保留
 * 		source-in保留交集[覆盖部分为后边的部分]
 * 		source-out保留后边独有的部分
 * 		destination-over
 * 		destination-atop
 * 		destination-in
 * 		destination-out
 * 		lighter
 * 		copy
 * 		xor
 * 注意要在2个图形之间
 */
context.globalCompositeOperation = "lighter";

context.fillStyle = "teal";
context.fillRect(50,50,300,300);

context.globalCompositeOperation = aText;

context.fillStyle = "pink";
context.fillRect(100,100,300,300);

/**
 * 描述：字体属性
 * 属性：textBaseline
 * 属性值：
 * 		top:顶部对齐
 * 		middle：居中对齐
 * 		bottom：底部对齐
 * 		alphabetic：英文字母表格的对齐
 * 		ideographic：底部对齐  中文的对齐方式
 * 		hanging：顶部紧贴对齐
 */
context.fillStyle = "#058";
context.font = "bold 40px Microsoft Yahei";
context.textBaseline = "top";
context.fillText("top_abcdefghigklmnopqrstuvwxyz", 40, 100);

/**
 * 描述：保存画板的默认设置
 * context.save
 * context.restore就是一个画板绘图空间
 */
context.save();
context.fillStyle = "teal";
context.translate(100,100);
context.fillRect(0,0,300,185);
context.restore();

context.save();
context.fillStyle = "pink";
context.fillRect(200, 200 ,300, 185);
context.restore();

/**
 * 变换矩阵
 * a c e
 * b d f
 * 0 0 1
 * a[水平缩放]1
 * b[水平倾斜]0
 * c[垂直倾斜]0
 * d[垂直缩放]1
 * e[水平位移]0
 * f[垂直位移]0
 * 操作：transform(a,b,c,d,e,f)
 * 	   setTransform(a,b,c,d,e,f)
 */

/**
 * 线性渐变
 * 
 */
var grd = context.createLinearGradient(xstart, ystart, xend, yend);
grd.addColorStop(stop, color);

var grd = context.createLinearGradient(0, 10, 60, 100);
grd.addColorStop(0, "teal");
grd.addColorStop(0.25, "#058");
grd.addColorStop(0.5, "pink");
grd.addColorStop(0.75, "blue");
grd.addColorStop(1, "purple");
context.fillStyle = grd;
context.fillRect(100,100,500,600);
context.stroke();

/**
 * 镜像渐变
 */
var grd = context.createRadialGradient(x0,y0,r0,x1,y1,r1);
grd.addColorStop(stop,color);

var grd = context.createRadialGradient(200,200,0,200,200,100);
grd.addColorStop(0,"#053");
grd.addColorStop(1,"teal");
context.fillStyle = grd;
context.arc(200,200,100,0,2*Math.PI);
context.fill();

/**
 * 创建背景
 * createPattern
 * createPattern(img, repeat-style)
 * createPattern(canvas, repeat-style)
 * createPattern(video, repeat-style)
 * repeat-style:no-repeat
 * 				repeat-x
 * 				repeat-y
 * 				repeat
 * 注意：必须在图片加载完成后才能使用该方法
 */
var bg = new Image();//背景图片
bg.src = "1.jpg";
bg.onload = function(){
	var pattern = context.createPattern(bg, "repeat");
	context.fillStyle = pattern;
	context.fillRect(0,0,300,300);
	context.stroke();
}

var newCanvas = document.createElement("canvas");//canvas
newCanvas.width = 100;
newCanvas.height = 100;
var newContext = newCanvas.getContext("2d");
newContext.arc(50,50,50,0,2*Math.PI);
newContext.fillStyle = "pink";
newContext.fill();

var pattern = context.createPattern(newCanvas, "repeat");
context.fillStyle = pattern;
context.fillRect(0,0,canvas.width,canvas.height);

/**
 * fillStyle = color|gradient|image|canvas|video
 */

/**
 * 画弧：与2条直线相切的圆弧
 * context.arcTo(x1,y1,x2,y2,radius);
 * 注意：是3个点一个半径确定一个弧，单独的一个这是不显示任何图形的
 */
context.moveTo(150,150);
context.arcTo(650,150,650,650,100);
context.stroke();

/**
 * 二次曲线
 * context.moveTo(x0,y0);
 * context.quadraticCurveTo(x1,y1,x2,y2)
 * http://tinyurl.com/html5quadratic
 * 扩充：可以学习下canvas和鼠标交互的功能
 */

/**
 * 贝塞尔曲线
 * context.moveTo(x0,y0);
 * context.bezierCurveTo(x1,y1,x2,y2,x3,y3);
 * 
 */
context.moveTo(50,50);
context.bezierCurveTo(100,150,500,250,300,350);
context.stroke();

/**
 * 文字渲染
 * context.fillText(string, x, y,[maxlen])
 * context.strokeText(string, x, y,[maxlen])
 * 坐标位置：渲染文字的左下角为坐标基点
 * maxlen像素宽度，文字会被压扁在里边
 * fillStyle可以是图片做成的pattern，制作成花色文字
 */
context.font = "bold 140px simsun";
context.fillStyle = "#058";
context.fillText("欢迎学习Canvas", 40,150);

/**
 * font
 * 默认值："20px sans-serif"
 * context.font = font-style|font-variant|font-weight|font-size|font-family
 * font-style = normal | italic(斜体字) | oblique(倾斜字体)
 * font-variant = normal | small-caps[都是大写字母，第一个大写字母正常，后边的比第一个小一号]
 * font-weight = lighter|normal|bold|bolder|100,200,300,400(normal)|500,600,700(bold)|800,900
 * font-family = 支持@font-face | web安全字体
 */

/**
 * 文字居中形式
 * context.textAlign = left | center | right
 * 参考点：x坐标为坐标原点
 */

context.textAlign = "center";
context.fillText("欢迎学习Canvas", 300,280);

/**
 * 文本上下对齐方式
 * context.textBaseline = top | middle | bottom | alphabetic | ideographic | hanging
 * 参考点：y坐标为坐标原点
 */

/**
 * 文本的度量[文字的像素宽度]
 * context.measureText(string).width
 */

/**
 * 阴影
 * context.shadowColor = "pink";
 * context.shadowOffsetX = 8;
 * context.shadowOffsetY = 8;
 * context.shadowBlur = 8;
 * 注意：可文字，可矩形[放在绘制图形之前]
 */
context.font = "bold 40px simsun";
context.fillStyle = "#058";
context.shadowColor = "red";
context.shadowOffsetX = 8;
context.shadowOffsetY = 8;
context.shadowBlur = 8;
context.fillText("慕道班学员进修中...", 280, 280);

/**
 * 透明度
 * context.globalAlpha = .5;
 */

/**
 * 剪辑区域
 * context.clip()
 * 路径在下边，上边的路径是剪辑的路径
 */
var img = new Image();
img.src = "1.jpg";
img.onload = function(){
	context.arc(canvas.width/2,canvas.height/2,100,0,2*Math.PI,false);
	context.clip();
	context.fillStyle = context.createPattern(img, "repeat");
	context.fillRect(0,0,canvas.width,canvas.height);
}

/**
 * 非零环绕原则
 * 从一点向外发射直线，如果方向的正反方向为0，则为图形的外边，非零则为图形的里边
 */

/**
 * isPointInPath(x, y)
 * 判断是否在绘制的路径里边
 */
context.isPointInPath(100,100);

/**
 * 绘制图片
 * drawImage
 * context.drawImage(image, dx, dy)
 * context.drawImage(image, dx, dy, dw, dh)
 * context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
 * sx:图片自身坐标的横坐标
 * sy:图片自身坐标的纵坐标
 * sw:图片自身的宽度
 * sh:图片自身的高度
 * dx:在目标区域(画布)上的横坐标
 * dy:在目标区域(画布)上的纵坐标
 * dw:在目标区域(画布)上的宽度
 * dh:在目标区域(画布)上的高度
 */

/**
 * 离屏canvas就是把canvas画到另一个canvas当中
 */

/**
 * canvas坐标转换
 * event.clientX - canvas.getBoundingClientRect().left
 * event.clientY - canvas.getBoundingClientRect().top
 */

/**
 * 获取图像像素
 * imageData = context.getImageData(sx,sy,sw,sh);
 * 属性值：width | height | data
 */
var imageData = context.getImageData(sx,sy,sw,sh);

/**
 * 设置元素像素
 * dx,dy:目标绘图板的横纵坐标
 * dirtyX,dirtyY,dirtyWidth,dirtyHeight都是指的是原图片的参数
 */
context.putImageData(image_data,dx,dy,dirtyX,dirtyY,dirtyWidth,dirtyHeight);

var canvas = document.getElementById("jCanvas");
var canvas2 = document.getElementById("jCanvas2");
var context = canvas.getContext('2d');
var context2 = canvas2.getContext('2d');

var image = new Image();
image.src = "1.jpg";
image.onload = function(){
	context.drawImage(image,0,0,image.width,image.height);
	var imageData2 = context.getImageData(0,0,canvas.width,canvas.height);
	context2.putImageData(imageData2,100,100,0,0,canvas2.width-100,canvas2.height-100);
}

/**
 * 元素像素
 * imageData.data该变量为引用变量不是基础变量
 * 一个像素包括4个节点:分别为r,g,b,a
 * 计算：pixelData[4*i+0]
 *     pixelData[4*i+1]
 *     pixelData[4*i+2]
 *     pixelData[4*i+3]
 */
var image = new Image();
image.src = "1.jpg";
image.onload = function(){
	context.drawImage(image,0,0,image.width,image.height);
	var imageData2 = context.getImageData(0,0,image.width,image.height);
	var pixelData = imageData2.data;
	for(var i=0;i<canvas2.width*canvas2.height;i++){
//		pixelData[4*i+0]=0;
//		pixelData[4*i+1]=0;
//		pixelData[4*i+2]=0;
//		pixelData[4*i+3]=200;
	}
	context2.putImageData(imageData2,0,0,0,0,canvas2.width,canvas2.height);
}

/**
 * 创建imageData
 * imageData = context.getImageData(x,y,w,h)
 * imageData = context.createImageData(w,h)
 */





















































