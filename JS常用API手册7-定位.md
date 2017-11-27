
# oDiv.clientWidth,	oDiv.clientHeight
兼容性:全兼容
内容区域的宽度、高度，不包括边框[裸的宽度和高度]
content_width+padding_left+padding_right, content_height+padding_top+padding_bottom
注：
* 返回的宽度和高度[此值比较准确, CSS中给定值后才有效]
* 返回的是屏幕上可以看到的大小，有滚动条比实际值小
# oDiv.scrollWidth, oDiv.scrollHeight
兼容性:IE8+，Opera11+
返回的是实际的宽度和高度[包括隐藏的部分]
滚动的高度+可视区域的高度
注：
* 没有隐藏部分，等价于clientWidth, clientHeight
* 有滚动条时，scrollHeight = scrollTop + clientHeight
# oDiv.offsetWidth, oDiv.offsetHeight
兼容性:全兼容
所占实际的大小(不受内部子元素大小的影响，只和本身元素大小的设定有关)
width + padding + border
悟：可以计算滚动条的宽度offsetWidth - border*2 - clientWidth
```javascript
# 获取滚动条的宽度
function getScrollbarWidth(){
	var el = document.createElement('p');
	styles = {
		width:'100px',
		height:'100px',
		overflowY:'scroll'
	};
	for(var i in styles){
		el.style[i] = styles[i];
	}
	document.body.appendChild(el);
	var scrollbarWidth = el.offsetWidth - el.clientWidth;
	el.remove();
	return scrollbarWidth;
}
```
# 窗口视口的大小
获取window窗体的内部宽度，不包括用户界面元素，比如窗框
W3C:window.innerWidth, window.innerHeight[IE9+][只读]
注：不包括地址栏等，只是显示内容的视口的高度
# 可视区域的高度
```javascript
window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
```
# clientWidth/clientHeight
[不包括滚动条][在页面中所占的宽度除去滚动条的宽度]
包括padding+content
```javascript
# IE
document.documentElement.clientWidth
document.documentElement.clientHeight

# IE7之前的版本
document.body.clientWidth,document.body.clientHeight
```
# oDiv.clientLeft/oDiv.clientTop
兼容性:全兼容
左边框的宽度，上边框的宽度
`注：`只能是左边和上边的宽度
内容区域相对于元素左上角的位置，即border_left_width,	border_top_width
# oDiv.offsetLeft/oDiv.offsetTop
兼容性:全兼容
* 表示相对于最近的祖先定位元素（CSS position 属性被设置为 relative、absolute 或 fixed 的元素）的左右偏移值
* position不是static的元素
说明:
1. 返回距离父元素左边和高度的距离
2. 必须设置了定位才能计算[即offsetParent]
3. 包括margin + 父元素的padding + 父元素的borderWidth[完全属于自己的部分距离完全属于父元素的部分]
**注:**offsetParent取最近的那个父级元素
* 在IE6/7中
offsetLeft = (offsetParent的padding-left) + (当前元素的margin-left)
* 在IE8/9/10及Chrome中
X offsetLeft = (offsetParent的margin-left) + (offsetParent的border宽度) + (offsetParent的padding-left) + (当前元素的margin-left)X就是距离offsetParent边框的 距离
# oDiv.scrollLeft/oDiv.scrollTop
兼容性:[全兼容][可读可写]
释义:当元素其中的内容超出其宽高的时候，元素被卷起的高度和宽度[指的是拥有滚动条的元素而非子元素]
注：有滚动条的元素的滚动距离
eg:	outer, inner，只有outer的这个属性才有意义
# jQuery部分
.position()
相对于offsetParent的当前坐标值
```javascript
{
	left:相对于offsetParent元素左侧的距离，
	top :相对于offsetParent元素顶部的距离
}
```
# .scrollLeft() || .scrollTop()
释义1:相对于水平滚动条左边的距离，滚动条居左或元素不能滚动，值为0
释义2:相对于垂直滚动条顶部的距离，滚动条居顶或元素不能滚动，值为0
# clientX, clientY
兼容性:全兼容
释义:相对于浏览器(可视区域左上角0,0)的坐标
返回发生时鼠标在视口中的坐标
鼠标相对于window的偏移
IOS上=pageX，pageY
# ayerX, layerY/offsetX, offsetY
兼容性:很糟糕
返回发生时鼠标相对于目标对象的坐标
Opera支持addEventListener,但不支持layerX, layerY
bug解释：
在IE7以及以下浏览器下，只有当当前目标元素为offsetParent是才计算坐标值，否则，它就会拿当前目标元素的offsetParent来计算。还有，当发现元素应用了position: relative后，IE会去寻找下一个offsetParent来计算offsetY，但又不是offsetX。是的，读两次，很蛋疼吧！
# pageX/pageY(W3C)
兼容性:IE9+
返回的是相对于页面的坐标
鼠标相对于document的坐标
```javascript
# 拖动实例思路
# 元素必须有定位属性
mousedown

#记录元素左上角位置
var startLeft = layerX/offsetX
var startTop = layerY/offsetY
# mousemove
# mouseup
```
`注：`
* 可能会出现禁止光标,可以禁止默认事件
* 拖动的情况比较复杂，建议用第三方脚本
# 跳转到可见区域内
```javascript
$("#logo_bbc")[0].scrollIntoView();
window.scrollTo(0, 0);
```
# pageXOffset,pageYOffset
兼容性:IE9+
表示整个页面滚动的像素值（水平方向的和垂直方向的）
```javascript
window.pageXOffset
window.pageYOffset
```
# CSS-位置
*	element.offsetParent	返回元素的偏移容器[元素的第一个祖先定位元素，用来计算offsetLeft，offsetTop(不一定与parentNode相等)]。
**注：在IE和Opera浏览器下，position: fixed的元素没有offsetParent**
*	element.offsetLeft	返回元素的水平偏移位置。
*	element.offsetTop	返回元素的垂直偏移位置。
*	element.scrollTop	返回元素上边缘与视图之间的距离。[元素被隐藏的上方的距离]
*	element.scrollLeft	返回元素左边缘与视图之间的距离。
*	document.documentElement.scrollTop 垂直方向滚动的值
# CSS-尺寸
*	element.scrollWidth	返回元素的实际宽度。[元素内容 + 内边距(包括滚动条)]
*	element.scrollHeight	返回元素的实际高度。
```javascript
document.body.scrollWidth　　　document.body.scrollHeight
//给定宽高小于浏览器窗口
scrollWidth和scrollHeight通常是此浏览器窗口的宽高

//给定宽高大于浏览器窗口，且子元素小于给定宽高
宽高为设定的宽高+padding*2+border*2

//给定宽高大于浏览器窗口，且内容大于给定宽高
宽高为子元素的宽高 +body的padding[1个]+margin[1个]+border[1个]

//[无滚动轴时]
scrollWidth = clientWidth = style.width + style.padding * 2

//[有滚动轴时]
scrollWidth = 实际内容的宽度 + padding * 2
scrollHeight = 实际内容的高度 + padding * 2
```
*	element.clientWidth	返回元素的可见宽度。[元素内容 + 内边距(不包括滚动条)]
*	element.clientHeight	返回元素的可见高度。
*	element.offsetHeight	返回元素的高度。[元素内容 + 内边距 + 边框(不包括外边距)]
*	element.offsetWidth	返回元素的宽度。
*	element.innerWidth	返回元素内部的宽高，包括padding，不包括border
*	element.outerWidth	返回元素集合中第1个元素当前计算宽高度值，包括padding，border，选择性的margin
**window.outerWidth表示整个浏览器窗体的大小，包括任务栏等[IE9+]**
*	element.outerHeight
**window.outerHeight表示整个浏览器窗体的大小，包括地址栏，收藏栏，标签栏，任务栏等[IE9+]**
# jQuery相关部分
**.width() || .height()**
只包含content的净宽高，不包括margin,border,padding

**.width()与.css('width')区别**
.width()返回结果无单位
.css('width')的结果有单位

**.innerWidth() || .innerHeight()**
释义:content + padding

**.outerWidth() || .outerHeight()**
释义:content + padding + border

**.outerWidth(true) || .outerHeight(true)**
释义:content + padding + border + margin
# getBoundingClientRect
返回一个对象，包含top,left,right,bottom,width,height
* width、height 元素自身宽高
* top 元素上外边界距窗口最上面的距离
* right 元素右外边界距窗口最上面的距离
* bottom 元素下外边界距窗口最上面的距离
* left 元素左外边界距窗口最上面的距离
* width 元素自身宽(包含border,padding)
* height 元素自身高(包含border,padding)
---
**通常认为 <html> 元素是在 Web 浏览器的视口中滚动的元素（IE6 之前版本运行在混杂模式下时是 <body> 元素）因此，带有垂直滚动条的页面总高度就是** document.documentElement.scrollHeight
```
// 在没有滚动条的情况下，元素内容的总高度
scrollHeight

// 在没有滚动条的情况下，元素内容的总宽度
scrollWidth

// 被隐藏在内容区域左侧的像素数。通过设置这个属性可以改变元素的滚动位置
scrollLeft

// 被隐藏在内容区域上方的像素数。通过设置这个属性可以改变元素的滚动位置
scrollTop
```
