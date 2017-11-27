# 删除[数组,对象]的属性-变量
```javascript
delete arr[index]
```
# i的y次方
```javascript
Math.pow(i, y)
```
# 去掉数组的第一个元素
```javascript
arr.shift()
```
# dom对象
每个标签都是一个对象
```javascript
{id:"bbc", title:"title", onClick:function(){..}}
```
<h1>todo</h1>
```javascript
{
	tagName:"h1",
	innerHTML:"todo"
}
```
# undefined有可能像变量一样
```javascript
var undefined = 123;
var b = undefined;
alert(b);	//output  undefined or 123
```
# Number数据边界
```javascript
# 正无穷大
Number.POSITIVE_INFINITY

# 负无穷大
Number.NEGATIVE_INFINITY
```
# 是不是有穷值
```javascript
isFinite()
```
# 是非数字吗
```javascript
isNaN()
```
# 换行转义符号,可以写多行
```javascript
var str = "bbc\
           ddb\
           ddb";
```
# 基模式[默认基10]
```javascript
(255).toString(16);		//FF
(0xFF).toString();		//255
```
# parseInt
```javascript
parseInt(number, [2,10,16])

------代码分割线------
0189  --->  01
parseInt(12bc)   ---> 12
```
# 强制true和false的转化
| true       | false           |
|------------|-----------------|
| !null      | !" "            |
| !0         | !true           |
| !undefined | !(new Object()) |
| !""        | !-1             |
| 所有的对象 |                 |
注：所有的对象转化为boolean时都是true, 包括new Boolean(false), new Boolean();
# 终止整个循环
```javascript
var iNum = 0;
outermost:
for(var i=0; i<10; i++){
	for(var j=0; j<10; j++){
		if(i == 5 && j == 5){
			break outermost;
		}
		iNum++;
	}
}
console.log(iNum++);//55
```
# 引用类型
1. 创建对象的时候如果没有参数可以省略括号
```javascript
var obj = new Object;
var date = new Date;
```
2. 属性
* constructor,对象的引用(指针)，指向原始的Object()函数
* prototype,默认返回Object对象的一个实例
* hasOwnProperty(property),判断对象是否含有某个特定的属性，属性名必须为string类型
* isPrototype(object),判断该对象是否为另一个对象的原型
* propertyIsEnumerable(property),判断给定的属性是否可以用for...in语句进行枚举
* toString(),返回对象的原始字符串表示。
* valueOf(),返回最适合该对象的原始值。大部分与toString()返回值相同。
3. 数字
```javascript
var n = 68,
n.toFixed(2);	//保留2位小数
var n = 68.0000000000000000000000000009;
n.toPrecision(3);	//只保留3位数
```
# 函数
```javascript
(a = Math).sqrt(2);
```
()作用，将括号中的表达式求值返回给上下文

* arguments
类似数组，有length属性，可以用下标访问arguments[index]
arguments.callee调用的是函数本身
```javascript
function fn(){
	alert(arguments.callee);
}
function add(n){
	return n>1?n +  arguments.callee(n-1):1;
}
```
* length,就是函数参数的个数
* fn.caller，调用这个函数的函数
# 闭包
返回给外部一个函数的引用
# 继承
```javascript
function Demo(){
	this.toString = 123;
}
Demo.prototype={//139
	name:"CJ",
	getName:function(){
		return this.name;
	}
}/**把一个对象改变为另外一个对象**/
Demo.prototype.name="CJ";/**为对象添加属性**/146
var d=new Demo();
console.log(d.getName());
```
注：
1. 2种赋值方式意义不一样！！！
2. 创建对象和添加属性的没有顺序要求，只要在调用之间就可以
比如：把139和146换行，效果依然一样
3. 添加属性后，所有的实例都会继承这个属性[在类上添加]
4. 指向另一个对象后，所有的实例并不会继承这个属性[在对象上添加]
5. 对象之间的继承不能传参数[如果传，1.只会别执行一次2.必须在调用之前],比如：
```javascript
function DemoA(name){
	this.name = name;
}
function DemoB(){
}
DemoB.prototype = new DemoA("CJ");//只能执行一次[就是传入的值是固定的值]
var d = new DemoB();
console.log(d.name);
console.log(d.name);
# 注：就是不能添加参数
```
6. 有参数的继承是这样子的[二]
```javascript
function DemoA(name, age){
	this.name = name;
	this.age = age;
};
function DemoB(name, age){
	this.DemoA = DemoA;
	this.DemoA(name, age);
}
var d = new DemoB('CJ', 18);
console.log(d.name);
```
7. 有参数的继承还可以是这样子的[三]
function DemoA(name, age){
	this.name = name;
	this.age = age;
}
var obj = {};
DemoA.call(obj, 'CJ', 18);//DemoA的控制权交给obj
DemoA.apply(obj, ['CJ', 18]);//传递的参数是个数组
console.log(obj.name);

Math.min.apply(null, [2,1,6,8,9]);//借用Math的方法
8. 继承方法
```javascript
[].join.call(arguments, '\n');
ClassName.isPrototypeof(instantce)
```
9. 继承已有属性
```javascript
function DemoA(){
	this.name = "CJ";
}
function DemoB(){
}
子类.prototype = new 父类;//不能传参数
```
# Form
```javascript
form.onreset = function(){}  //此方法被废弃
checkboxRadio[0].checked;  //radio,checkbox是否被选中
checkboxRadio[0].defaultChecked;	//是否是默认选中
textInput.select();	//选中单选框中的文字
textInput.onSelect() = function(){}		//选中事件
select.selectedIndex;		//被选中的option的下标
```
# cookie
```javascript
document.cookie
//name1=value1;name2=value2;name3=value3

typeof document.cookie
//string

// 一次只能赋一个值
document.cookie = "cookieName=cookieValue";
document.cookie = "cookieName2=cookieValue2";

//expires
document.cookie = "cookieName2 = cookieName2;expires=" + d.toGMTString();
```
* 只能存储url中的字符类型[用encodeURI, encodeURIComponent编码]
* cookie是用网站来区分的
# H5本地存储
可以存储[数组，json数据，图片，脚本，样式文件]
# localstorage API介绍
```javascript
//getItem
localStorage.getItem('key1')

//setItem
localStorage.setItem('key1','value1')

//removeItem
//key
localStorage.key(0)

//clear
localStorage.clear()
  ```
# 错误处理
```javascript
try{
	
}catch(e){
	e.message	//错误信息
}finaly{
	
}
```
# Ajax
"url?" + Math.random();
问题:前进，后退会失效
* XMLHttpRequest对象
```javascript
new XMLHttpRequest();																					//>= IE7
new ActiveXObject("Msxml3.XMLHTTP");					//IE6
new ActiveXObject("Msxml2.XMLHTTP");					//IE6
new ActiveXObject("Microsoft.XMLHTTP");				//IE6
```
* XMLHttpRequest对象参考
onreadystatechange*:	指定当readyState属性改变时的事件处理句柄。只写	*表示是W3C文档对象模型的扩展
```javascript
//这是一个监听函数啊
xhr.onreadystatechange = function(){
	//your code
}
```
* readyState:		返回当前请求的状态，只读
```
0(未初始化)：对象已建立，但是尚未初始化[尚未调用open方法]
1(初始化)：  对象已建立，尚未调用send方法
2(发送数据)：send方法以调用，当时当前的状态及http头未知
3(数据发送中)：以接受部分数据，因为响应及http头不全，这时通过responseBody和responseText获取部分数据会出错
4(完成):	 数据接收完毕，此时可以通过responseBody和responseText获取完整的回应数据
```
* responseBody:	以unsigned byted数组形式返回，只读
* responseStream:	以Ado Stream对象的形式返回相应信息，只读
* responseText:	以字符串形式返回，只读
* responseXML:	以XML Document对象形式返回，只读
* status:			返回当前请求的http状态码，只读
```
100: Continue
101: Switching protocols
200: OK
201: Created
202: Accepted
203: Non-Authoritative Information
204: No Cotent
205: Reset Content
206: Partial Content
300: Multiple Choices
301: Moved Permanently
302: Found
303:See Other
304: Not Modified
305: Use Proxy
307: Temporay Redirect
400: Bad Request
401: Unauthorized
402: Payment Required
403: Forbidden
404：Not Fount
405: Method Not Allowed
406: Not Acceptable
407: Proxy Authentication Required
408: Request Timeout
409: Conflict
410: Gone
411: Length Required
412: Precondition Failed
413: Request Entity Too Large
414: Request-URI Too Long
415: Unsupported Media Type
416: Requested Range Not Suitable
417: Expectation Failed
500: Internal Server Error
501: Not Implemented
502: Bad Gateway
503: Service Unavailable
504: Gateway Timeout
505: HTTP Version Not Supported
```
* statusText:		放回当前请求的相应行状态，只读
* 方法：
```
abort:取消当前请求
getAllResponseHeaders:获取相应的所有http头
getResponseHeader:从响应信息中获得指定的http头
		xhr.getResponseHeader("Content-header");
open:创建一个新的http请求，并指定此请求的方法、URL以及验证信息(用户名/密码)
		xhr.open(get/post, url, isAsync, username, password);
send:发送请求到http服务器并接受回应
setRequestHeader:单独指定请求的某个http头
```
POST发送请求时参数设置
```javascript
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
```
数据放在send当中		
```javascript
xhr.send(key=value&key2=value2);
```
# console
```javascript
console.log();
console.warn();
console.debug();
console.info();
console.dir();//遍历对象属性

// 信息分组[开始的地方]
console.group('任务一');
console.groupEnd();

// 占位符
console.log("%d年%d月%d日",2011,3,26);

//查看对象的信息
console.dir(info);

//显示某个节点的内容
console.dirxml(info);

//判断变量是否是真
console.assert(year == 2018 );

//打印函数的调用轨迹
function add(a,b){
 console.trace();
　return a+b;
}
var x = add3(1,1);
function add3(a,b){return add2(a,b);}
function add2(a,b){return add1(a,b);}
function add1(a,b){return add(a,b);}
```
# 面向对象创建对象的方法
```javascript
var Cat = {
　　createNew: function(){
　　　　var cat = {};
　　　　cat.name = "大毛";
　　　　cat.makeSound = function(){ alert("喵喵喵"); };
　　　　return cat;
　　}
};

var cat1 = Cat.createNew();
cat1.makeSound(); // 喵喵喵
```
# 工具-字符串操作
*	.toUpperCase()
*	.toLowerCase()
