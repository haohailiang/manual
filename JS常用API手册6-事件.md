# mouse
|   button  | 左键 | 滚轮 | 右键 |
|:---:|:----:|:----:|:----:|
| W3C |   0  |   1  |   2  |
|  IE |   1  |   4  |   2  |
----
| 参考标准 | 可视页面                          |
|:--------:|-----------------------------------|
|  clientX | 客户端[参照点page]可视区域的X坐标 |
|  clientY | 客户端可视区域的Y坐标             |
---
| pc(全兼容) |                         | iphone |
|:----------:|-------------------------|:------:|
|   screenX  | 相对于显示器屏幕的X坐标 |  pageX |
|   screenY  | 相对于显示器屏幕的Y坐标 |  pageY |
---
| IE |                     |         jQuery         |
|:--:|:-------------------:|:----------------------:|
|  x | 相对于父元素的X坐标 | jQuery.position().left |
|  y | 相对于父元素的Y坐标 | jQuery.position().top |
---
|    IE   |   W3C  |        jQuery        | 描述(参照点：绑定事件的对象原点) |
|:-------:|:------:|:--------------------:|:--------------------------------:|
| offsetX | layerX | jQuery:offset().left |        绑定事件对象的X坐标       |
| offsetY | layerY |  jQuery:offset().top |        绑定事件对象的Y坐标       |
注：offset更好用一些，高级浏览器也支持
layer只有对象有定位信息时才好用，比如:position:absolute
---
|  W3C  |          描述         |
|:-----:|:---------------------:|
| pageX | 鼠标相对于页面的X坐标 |
| pageY | 鼠标相对于页面的Y坐标 |

注:相对于是整个的页面, IE下边需要自己计算

---
```javascript
obj.offsetParent.offsetLeft
obj.offsetParent.offsetTop
```
---
|     |    属性    |      描述      |
|:---:|:----------:|:--------------:|
|  IE | srcElement | 引起事件的元素 |
| W3C |   target   |                |
---
|     |      属性     |        事件        |       描述       |
|:---:|:-------------:|:------------------:|:----------------:|
|  IE |  fromElement  |      mouseover     | 鼠标所离开的元素 |
|  IE |   toElement   |      mouseout      | 鼠标所进入的元素 |
| W3C | relatedTarget | mouseover/mouseout |                  |
---
|    |  属性  |   事件  |  取值  |         描述        |
|:--:|:------:|:-------:|:------:|:-------------------:|
| IE | repeat | keydown | 布尔值 | 不断触发keydown事件 |
---
|     |    属性-方法   |               描述              |
|:---:|:--------------:|:-------------------------------:|
|  IE |   returnValue  | 设为false表示取消事件的默认动作 |
| W3C | preventDefault |                                 |
---

type:事件名称,不带on前缀

|     |    属性    |          描述          |    取消方法    |
|:---:|:----------:|:----------------------:|:--------------:|
| W3C | cancelable | true表示默认动作可取消 | preventDefault |

---
# key
|   属性   | 取值1 | 取值2 |
|--------:|:-----:|:-----:|
|  altKey  |  true | false |
|  ctrlKey |  true | false |
| shiftKey |  true | false |
---
|   keyCode   |                   描述                   |   |
|-----------:|:----------------------------------------:|:-:|
| kepress事件 | 按钮的unicode编码，不是字符键，属性值为0 |   |
|   keydown事件   |                 按键的数                 |   |
|    keyup事件    |                   ----                   |   |
---
|    W3C   | 描述                                                |
|:--------:|-----------------------------------------------------|
| charCode | 按钮的unicode编码，不是字符键，属性值为0,区分大小写 |
可能不兼容用keyCode内容代替
String.fromCharCode();将其转换成实际的字符串
# 其他属性
---
冒泡
* cancelBubble(IE):设置为true取消冒泡事件
* stopPropagation(W3C):取消事件冒泡
* bubbles(W3C):返回true表示事件是冒泡类型
---
eventPhase(W3C):
* Event.CAPTURING_PHASE(捕获阶段)	值为1
* Event.AT_TARGET(在目标对象上) 值为2
* Event.BUBBLING_PHASE(冒泡阶段)	值为3
---
* timeStamp(W3C):返回一个时间戳
---
绑定事件
```javascript
//W3C
addEventListener(evtType, fn, isCapture);
removeEventListener(evtType, fn, isCapture);

//IE8
attachEvent("on" + evtType, fn);
detachEvent("on" + evtType, fn);
```
注：
* IE中fn的this默认指向的是window[this对象冒充]
* IE中同一个函数注册到同一个对象上可以多次[自己编写处理]
* IE中存在内存泄露问题
# 浏览器原生的事件对象
```javascript
evt.originalEvent
```
# this指针的传递
```javascript
fn.call(this, evt, nodes);
```
# 句柄
| 事件名称    | 描述                               |
|-------------|------------------------------------|
| onblur      | 元素失去焦点                       |
| onchange    | 域的内容被改变                     |
| onclick     | 当用户点击某个对象时调用的事件句柄 |
| ondblclick  | 当用户双击某个对象时调用的事件句柄 |
| onerror     | 在加载文档或图像时发生错误         |
| onfocus     | 元素获得焦点                       |
| onkeydown   | 某个键盘按键被按下                 |
| onkeypress  | 某个键盘按键被按下并松开           |
| onkeyup     | 某个键盘按键被松开                 |
| onload      | 一张页面或一幅图像完成加载         |
| onmousedown | 鼠标按钮被按下                     |
| onmousemove | 鼠标被移动                         |
| onmouseout  | 鼠标从某元素移开                   |
| onmouseover | 鼠标移到某元素之上                 |
| onmouseup   | 鼠标按键被松开                     |
| onreset     | 重置按钮被点击                     |
| onresize    | 窗口或框架被重新调整大小           |
| onselect    | 文本被选中                         |
| onsubmit    | 确认按钮被点击                     |
| onunload    | 用户退出页面                       |
