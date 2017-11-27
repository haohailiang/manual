oDiv.style	//返回的是一个对象
返回的是设置的style样式
作用：用来设置值
```javascript
# 例如
style="width:100px;height:100px;border-color:#fff"
console.log(oDiv.style.width);	        //100px
console.log(oDiv.style.borderColor)	    //#fff
oDiv.style.borderLeftColor;
oDiv.style.border = '1px solid red';
oDiv.style.backgroundColor;		        //颜色值FF返回的始终是RGB
oDiv.style.cssText;	                    //返回浏览器设置的style[结果是浏览器渲染后的结果]
Div.style.cssText="width:20px;height:10px;display:bolck";		//把多个样式进行合并提高了浏览器渲染的效率
```
# 实际的样式
```javascript
# IE
oDiv.currentStyle
oDiv.currentStyle.width;
oDiv.currentStyle.height;

# W3C
getComputedStyle(oDiv, null);															//null没有实现
getComputedStyle(oDiv, null).width
getComputedStyle(oDiv, null).borderLeftColor;  //复合属性要写的详细些
getComputedStyle(oDiv, null).backgroundColor;
```
# document.styleSheets
说明:样式文件的伪数组
属性：
type:text/css
href:链接地址
cssText(IE):样式表中规则的文本形式
rules(IE),
cssRules(W3C):对应样式表里所有规则的集合[都是数组的形式]
Rule对象属性:
selectText:选择符
style,可以读取和设置CSS规则，并且由cssText属性和内联样式的方式一样
```javascript
rules[ruleIndex].style.width;
rules[ruleIndex].style.width = "500px";					//样式比较隐蔽，查看代码是看不出来的
```
# 修改样式表
```javascript
# FF:insertRule(cssText, cssIndex);
document.styleSheets[0].insertRule("body{color:blue;}", 1);

# IE:addRule(selector, cssText, cssIndex);
document.selector[0].addRule("body", "color:blue", 1);

# FF:deleteRule(cssIndex)
document.styleSheets[0].deleteRule(1);

# IE:removeRule(cssIndex)
document.styleSheets[0].removeRule(1);
```
# 特殊的属性值
```javascript
# float
element.style.cssFloat         //W3C
element.style.styleFloat       //IE
```
# 获取css样式
```javascript
// ie8
el.currentStyle[attrName]
// ie9+
window.getComputedStyle(el)[attrName]
// 伪类
window.getComputedStyle(el , ":after")[attrName];
```
