# 判断数据类型
```javascript
function isType(param){
	//1.判断是不是字符串对象
	if(typeof param === 'string' && param.constructor == String){
		return "String";
	}

	//2.判断是不是数字对象
	if(typeof param === 'number' && param.constructor == Number){
		return "Number";
	}

	//3.判断是否为数组类型
	if(typeof param === 'object' && param.constructor == Array){
		return "Array";
	}

	//4.判断是否是日期类型
	if(typeof param === 'object' && param.constructor == Date){
		return "Date";
	}

	//5.判断是否为函数
	if(typeof param === 'function' && param.constructor == Function){
		return "Function";
	}

	//6.判断是否为普通的对象
	if(typeof param === 'object' && param.constructor == Object){
		return "Object";
	}
}
```
# 百度自动选择效果
```javascript
$("#libfiles").off("mouseenter", "li");
$("#libfiles").on("mouseenter", "li", function(e){
	var text = $(this),
		range,
		selection;

	if(!text.length) return;
	text = text[0];

	if (document.body.createTextRange) {
		range = document.body.createTextRange();
		range.moveToElementText(text);
		range.select();
	} else if (window.getSelection) {
		selection = window.getSelection();
		range = document.createRange();
		range.selectNodeContents(text);
		selection.removeAllRanges();
		selection.addRange(range);
	}
});
```

# 清除文本选中状态
```javascript
if(document.selection && document.selection.empty){
	document.selection.empty();	//IE
}else if(window.getSelection){
	window.getSelection().removeAllRanges();	//FF
}
```
# IE当鼠标移除窗口之后仍能捕获事件
```javascript
if(curObj.setCapture){
	curObj.setCapture(true);
}
```
# IE释放捕获
```javascript
if(curObj.releaseCapture){
	curObj.releaseCapture(true);
}
```
# 浏览器检测
```javascript
//Opera
window.opera+"" == [window opera]

//IE
window.ActiveXObject
navigator.userAgent.indexOf("msie");

//Firefox
typeof document.mozHidden != 'undefined'
```
# 加载IE6-IE8中的脚本文件
```javascript
if (!document.addEventListener) {
  // IE6~IE8
  document.write('<script src="ieBetter.js"><\/script>');
}
```
# 元素在页面上的偏移量
```javascript
var rect = el.getBoundingClientRect()
return {
  top: rect.top + document.body.scrollTop,
  left: rect.left + document.body.scrollLeft
}
```
# 视口大小
```javascript
// ie9+
var pageWidth = window.innerWidth,
    pageHeight = window.innerHeight;
if (typeof pageWidth != "number"){
  // ie8
  if (document.compatMode == "CSS1Compat"){
    pageWidth = document.documentElement.clientWidth;
    pageHeight = document.documentElement.clientHeight;
  } else {
    // ie6混杂模式
    pageWidth = document.body.clientWidth;
    pageHeight = document.body.clientHeight;
  }
}
```
# 判断是不是IE浏览器
```javascript
function isIE(){
	if(!!window.ActiveXObject || "ActiveXObject" in window){
		return true;
	}else{
		return false;
	}
};
```
# 判断是PC端还是mobile端
```javascript
function IsPC() {
	var userAgentInfo = navigator.userAgent;
	var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
	var flag = true;
	for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break
		}
	}
	return flag
}
```
# 手机页面缩放工具
```javascript
var phoneWidth =  parseInt(window.screen.width);
var phoneScale = phoneWidth/origionWidth;
var ua = navigator.userAgent;

if(/Android (\d+\.\d+)/.test(ua)){
	document.write('<meta name="viewport" content="width=' + origionWidth + ', minimum-scale = '+phoneScale+', maximum-scale = '+phoneScale+', target-densitydpi=device-dpi">');
}else{
	document.write('<meta name="viewport" content="width=' + origionWidth + ', user-scalable=no">');
}
```
# 判断手机横竖屏状态
```javascript
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
	if (window.orientation === 180 || window.orientation === 0) { 
		alert('竖屏状态！');
	} 
	if (window.orientation === 90 || window.orientation === -90 ){ 
		alert('横屏状态！');
	}  
}, false); 
```
