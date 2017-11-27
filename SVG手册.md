# 使用方式
* 浏览器直接打开
* 在HTML中使用<img>标签引用
* 直接在HTML中使用SVG标签
* 作为CSS背景
# 基本图形和属性
* 基本图形
```
<rect>
<circle>
<ellipse>
<line>
<polyline>
<polygon>
```
* 基本属性
```
fill
stroke
stroke-width
transform
```
# 基本操作API
* 创建图形
```javascript
document.createElementNS(ns, tagName)
```
* 添加图形
```javascript
element.appendChild(childElement)
```
* 设置/获取属性
```javascript
element.setAttribute(name, value)
element.getAttribute(name)
```
# SVG的世界、视野、视窗
* SVG代码-定义世界[世界是无限大的，无穷无尽]
* width,height-控制视窗[看世界的一扇窗户]，浏览器开辟出来用于渲染SVG内容的一个区域
* viewBox,preserveAspectRatio-控制视野[我们能看到世界大小的一种能力]
视野越广阔，看到的内容越丰富，单个物体的内容越小，跟屏幕分辨率一个道理  
理想情况下，视野和视窗有一样的尺寸  
不一样的情况，就需要填充策略preserveAspectRatio
```
<svg xmlns="..."
width="800" height="600"
viewBox="0 0 400 300"
preserveAspectRatio="xMidYMid meet">
<!--SVG Content-->
</svg>
```
# SVG中的图形分组
* <g>标签来创建分组
* 属性继承
* transform属性定义坐标变换
* 可以嵌套使用
# 线性变换
* 线性变换方程
```
X' = aX + cY + e
Y' = bX + dY + f
```
* 变换矩阵，记为M
```
a c e
b d f
0 0 1
```
# 旋转
使用极坐标变换矩阵  
极坐标方程：
```
X = r•cos(α)
Y = r•sin(α)
```
旋转θ度后
```
X' = r•cos(α+θ)
Y' = r•sin(α+θ)
```
矩阵：
```
cos(θ)	-sin(θ)	0
sin(θ)   cos(θ)	0
    0		 0	1
```
展开后：
```
X' = r•cos(α)cos(θ)-r•sin(α)sin(θ)=X•cos(θ) - Y•sin(θ) + 0
Y' = r•sin(α)cos(θ)+r•cos(α)sin(θ)=X•sin(θ) + Y•cos(θ) + 0
```
# 线性变换列表
* 表示一系列的变换，结果为变换的矩阵的乘积
* 后面的变换乘在前面
```
M=Mn•Mn-1•...•M2•M1•M0
1 0 10		cos(30deg) -sin(30deg)	0
0 1 10  • 	sin(30deg)  cos(30deg)	0
0 0 1				0			0	1
Mtranslate•Mrotate
```
# transform属性
* 前驱坐标系：父容器坐标系
* transform属性：定义前驱坐标系到自身坐标系的线性变换
* 语法：
```
rotate(<deg>)
translate(<x>,<y>)
scale(<sx>,<sy>)
matrix(<a>,<b>,<c>,<d>,<e>,<f>)
```
# 在SVG中应用颜色
```
<rect fill="rgb(255,0,0)" opacity="0.5" />
<rect stroke="hsla(0,50%,60%,0.5) />"
```

# 线性渐变
* <linearGradient>和<stop>
* 定义方向
* 关键点位置及颜色
* gradientUnits

# 径向渐变
* <radialGradient>和<stop>
* 定义方向
* 关键点位置及颜色
* gradientUnits
* 焦点位置
# 坐标观察
* getBBox()  
获得当前元素所占的矩形区域

* getCTM()  
获得视窗坐标系到当前元素⾃⾝坐标系的变换矩阵

* getScreenCTM()  
获得浏览器坐标系到当前元素⾃⾝坐标系的变换矩阵

* getTransformToElement()  
获得从指定元素的⾃⾝坐标系到当前元素的⾃⾝坐标系的变换矩阵
# HSL
格式：HSL(H,S%,L%)-颜色、饱和度、亮度  
取值范围：H:[0,359]			hue  
	   S,L:[0,100]		saturation		lightness  
优势：符合人类描述颜色的习惯
# 笔刷
* 绘制纹理
* <pattern>标签
* patternUnits和patternContentUnits
# Path
```
<path d="M0,0L10,20C30-10,40,20,100,100" stroke="red">
L10,20		命令 参数
#参数之间可以用空格或逗号隔开，有一种情况例外，就是下一个数值是负数。

<path d="M0,0L10,20C30-10,40,20,100,100" stroke="red">
<path d="M 0 0 L 10 20 C 30 -10 40 20 100 100" stroke="red">
<path d="M 0 0, L 10 20, C 30 -10 40 20 100 100" stroke="red">
#以上三种表示方式效果是一致的
```
# Path命令汇总
M = moveto(M X,Y) ：将画笔移动到指定的坐标位置  
L = lineto(L X,Y) ：画直线到指定的坐标位置  
H = horizontal lineto(H X)：画水平线到指定的X坐标位置  
V = vertical lineto(V Y)：画垂直线到指定的Y坐标位置  
A = elliptical Arc(A RX,RY,XROTATION,FLAG1,FLAG2,X,Y)：弧线  
A = (rx, ry, xr, laf, sf, x, y) - 绘制弧线  
Z = closepath()：关闭路径  
C = curveto(C X1,Y1,X2,Y2,ENDX,ENDY)：三次贝赛曲线  
S = smooth curveto(S X2,Y2,ENDX,ENDY)  
Q = quadratic Belzier curve(Q X,Y,ENDX,ENDY)：二次贝赛曲线  
T = smooth quadratic Belzier curveto(T ENDX,ENDY)：映射  
备注：  
坐标轴为以(0,0)为中心，X轴水平向右，Y轴水平向下。  
所有指令大小写均可。大写绝对定位，参照全局坐标系；小写相对定位，参照父容器坐标系  
M　起点X，起点Y　L（直线）终点X，终点Y　H（水平线）终点X　V（垂直线）终点Y  
A指令  
允许不闭合。可以想像成是椭圆的某一段，共七个参数：  
A RX,RY,XROTATION,FLAG1,FLAG2,X,Y  
RX,RY指所在椭圆的半轴大小  
XROTATION指椭圆的X轴与水平方向顺时针方向夹角，可以想像成一个水平的椭圆绕中心点顺时针旋转XROTATION的角度。  
FLAG1只有两个值，1表示大角度弧线，0为小角度弧线。  
FLAG2只有两个值，确定从起点至终点的方向，1为顺时针，0为逆时针  
X,Y为终点坐标  
# 弧线命令
* A (rx, ry, xr, laf, sf, x, y) - 绘制弧线
* 最复杂的命令
* rx -(radius-x)弧线所在椭圆的 x 半轴长
* ry -(radius-y)弧线所在椭圆的 y 半轴长
* xr -(xAxis-rotation)弧线所在椭圆的长轴角度
* laf -(large-arc-flag)是否选择弧长较长的那一段弧[1表示大角度弧线，0为小角度弧线。]
* sf -(sweep-flag)是否选择逆时针方向的那一段弧[1为顺时针，0为逆时针]
* x, y - 弧的终点位置
# SVG文本
* <text>和<tspan>创建文本
* 垂直居中问题
* <textPath>让文本在指定路径上排列
* <a>插入超链接
# <text>和<tspan>标签
* x和y属性 - 定位标准
* dx和dy属性 - 字形偏移
* style属性 - 设置样式
# SVG计时器
```javascript
·requestAnimationFrame(frame)	//类似于setTimeout
function frame(){
	t += 0.01;
	update(t);
	requestAnimationFrame(frame);
}
frame();
```
