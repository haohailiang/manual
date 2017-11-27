根据Harry Han视频教程编写，[Node入门教程](https://www.youtube.com/watch?v=mnbKcmB2puc&list=PL3rfV4zNE8CAjHF6uP_hlJA7bXFBuXYmM&index=1)
# node windows平台版本管理工具nvm-windows
#### 下载与安装
[nvm-windows下载](https://github.com/coreybutler/nvm-windows/releases)  
安装前，这里有一点需要注意，如果以前安装过node，需要先卸载，并且要把目录清理干净。
#### nvm常用命令查看
```
nvm
```
![image.png](http://upload-images.jianshu.io/upload_images/9008880-b53a57ce59f6b78c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 查看当前已经安装的nodejs版本
```
nvm list
```
![image.png](http://upload-images.jianshu.io/upload_images/9008880-ce532fde588385e1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 查看可以安装的nodejs版本
```
nvm list available
# https://nodejs.org/download/release
```
![image.png](http://upload-images.jianshu.io/upload_images/9008880-0b859bc6a036b5fe.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 安装指定版本的node
```
nvm install 9.0.0 64-bit
# 安装最新版本
nvm install latest 64-bit
```
#### 使用指定版本的node
```
nvm use 9.0.0
nvm list
```
![image.png](http://upload-images.jianshu.io/upload_images/9008880-d3d0d718f08d18f4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 删除指定版本的node
```
nvm uninstall 0.10.34
```
# node命令
```
# 当前node版本号
node -v
# 直接执行一个eval语句
node -e "console.log(123)"
# 进入编译模式
node
```
![image.png](http://upload-images.jianshu.io/upload_images/9008880-97d04e408288634e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 创建一个服务器
```javascript
# server.js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

→ node server.js
```
![image.png](http://upload-images.jianshu.io/upload_images/9008880-fad8bfedc906f8db.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
点击图片中的链接就可以在默认浏览器中打开
#### 证明node是单线程
一个线程阻塞，其他的就不能再访问了
```javascript
# server.js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(1)
  while(1){}
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


→ node server.js
```
![image.png](http://upload-images.jianshu.io/upload_images/9008880-dd72295de6c31c34.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 边写边改
```
npm install -g supervisor
supervisor server.js
```
#### 回调函数
1.异步式读取文件
```javascript
# file.js
let fs = require('fs');
fs.readFile('./file.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
});
console.log('end.')

→ node file.js
```
![image.png](http://upload-images.jianshu.io/upload_images/9008880-1dadacfa457300dd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
2. 同步式读取文件
```javascript
# fileSyn.js
let fs=require('fs'); 
let data=fs.readFileSync('file.txt','utf-8');
console.log(data)
console.log('end.')

→ node fileSyn.js
```
![image.png](http://upload-images.jianshu.io/upload_images/9008880-d9fe0e7fd61c97ba.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 事件
```javascript
# event.js
//声明事件对象
let EventEmitter=require('events').EventEmitter;
let event=new EventEmitter();
//注册事件
event.on('some_event',function(){
	console.log('这是一个自定义的事件');
});
//触发事件
setTimeout(function(){
	event.emit('some_event');
},1000);

→ node event.js
```
![image.png](http://upload-images.jianshu.io/upload_images/9008880-4a6b5cdea601541e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 模块
require不会重复加载模块
```javascript
# moduleB.js
console.log('我被调用了！');
exports.add = (param1=0, param2=3) => {
	return param1 + param2;
}

# moduleB.js
let moduleA = require('./moduleA');
let moduleA2 = require('./moduleA');
console.log(moduleA.add());
console.log(moduleA2.add(3, 4));

→ node moduleB.js
```
![image.png](http://upload-images.jianshu.io/upload_images/9008880-41aee68ef4a5b471.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
注：重复引用时，后边的引用赋值会覆盖前面的
```javascript
# person.js
let name;
exports.setName = thyName => {
	name = thyName;
}
exports.sayHello = () => {
	console.log('hello '+name);
}

# personMain.js
let person = require('./person');
let person2 = require('./person');

person.setName('LiLei');
person.sayHello();

person2.setName('HanMeimei');
person2.sayHello();
person.sayHello();

→ node personMain.js
```
![image.png](http://upload-images.jianshu.io/upload_images/9008880-c8e3a1d4db44af10.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 不同方法暴露方法
[推荐] module.exports = 接口名称  
```javascript
# exportMethod.js
let sayHello = name => {
	console.log(name + ' ，你好！');
}

// exports.sayHello = sayHello;
module.exports = sayHello;

# exportMethodMain.js
// let sayHelloNode = require('./exportMethod');
// sayHelloNode.sayHello('小丽');

let sayHello = require('./exportMethod');
sayHello('小丽');

→ node exportMethodMain.js
```
![image.png](http://upload-images.jianshu.io/upload_images/9008880-9dbfe5939f6ace5e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### process
---
描述当前Node.js进程状态的对象。提供了一个与操作系统的简单接口，通常写本地命令行程序的时候，会用到它
process.argv是命令行参数数组
* 第一个元素是node
* 第二个元素是脚本文件名
* 第三个元素开始每个元素是一个运行参数
```javascript
# argv.js
console.log(process.argv);

→ node argv.js "haha" "huhu" "piupiu"
```
![image.png](http://upload-images.jianshu.io/upload_images/9008880-5e8c66e3d2f75b46.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### process.nextTick(callback)方法
耗时的操作拆分为两个事件，减少每个事件的执行时间，提高事件响应速度
```javascript
# nextick.js
const len = 1e9;

function fun1(param = '默认参数'){
	for(let i=0; i<len; i++){}
	console.log('传入的参数： ', param);
}

function fun2(){
	for(let i=0; i<len; i++){}
	console.log('计算方法2');
}

// function fun3(param, callback){
// 	fun1(param);
// 	callback();
// }

function fun3(param, callback){
	fun1(param);
	process.nextTick(callback);
}

fun3(123,fun2);

→ node nextick.js
```
![image.png](http://upload-images.jianshu.io/upload_images/9008880-64bedb484b35c5ac.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### util全局变量
1.util.inherits(constructor,superConstructor)
实现对象间原型继承的函数
注：只能继承原型链的方法，不能继承对象的方法
```javascript
# demo.js
let util = require('util');

function Pather(){
	this.name = '老爸';
	this.age = 40;
	this.showName = function() {
		console.log('father name: ' + this.name);
	}
}
Pather.prototype.showAge = function() {
	console.log(this.name + ' ' + this.age);
}
function Child(){
	this.name = '儿子';
}
util.inherits(Child, Pather);
let child = new Child();
// child.showName();
child.showAge();

→ node demo.js
```
![image.png](http://upload-images.jianshu.io/upload_images/9008880-3c46e05a57f179aa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
2.传统的原型链继承
注：原型链和对象的方法都可以继承
```javascript
# demo.js
function Pather(){
	this.name = '老爸';
	this.age = 40;
	this.showName = function() {
		console.log('father name: ' + this.name);
	}
}
Pather.prototype.showAge = function() {
	console.log(this.name + ' ' + this.age);
}

function Child(){
	this.name = '儿子';
}
Child.prototype = new Pather();

let child = new Child();
child.showName();
child.showAge();

→ node demo.js
```
![image.png](http://upload-images.jianshu.io/upload_images/9008880-93f5d83fa3d250ba.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### util.inspect(object,[showHidden],[depth],[colors])
此方法是一个将任意对象转换为字符串的方法，通常用于调试和错误输出，它至少接受一个参数object。
            参数：
* object，即要转换的对象.
* showHidden 是一个可选参数，如果值为true，将会输出更多隐藏信息.
* depth   标识最大的递归的层数，如果对象很复杂，你可以指定层数以控制输出信息的多少。默认为2层，指定为null打印出来全部
* 如果color为true，输出格式将会以ANSI颜色编码，通常用于在终端显示更漂亮的效果。
```javascript
# demo.js
let util=require('util');

function Person(){
	this.name='猫咪';
	this.toString=function(){
		return this.name;
	}
}
let obj=new Person();

console.log(util.inspect(obj));
console.log(util.inspect(obj,true,2,true));

→ node demo.js
```
![image.png](http://upload-images.jianshu.io/upload_images/9008880-e9b0103477ac2d22.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 事件
常用API的方法介绍：
1. EventEmitter.on(event,listener)为指定事件注册一个监听器，接受一个字符串event和一个回调函数listener
2. EventEmitter.emit(event,[arg1],[arg2]....) 发射event事件，传递若干可选参数到事件监听器的参数表
3. EventEmitter.once(event,listener) 为指定事件注册一个单次监听器，即监听器最多只会触发一次，触发后立刻解除该监听器。
4. EventEmitter.removeListener(event,listener)移除指定事件的某个监听器，listener必须是该事件已经注册过的监听器。
5. EventEmitter.removeAllListeners([event]) 移除所有事件的所有监听器，如果指定event，则移除指定事件的所有监听器。
```javascript
# demo.js
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('hungry', (food) => {
  console.log('饿了我给你做个' + food + '!');
});
myEmitter.once('hungry', () => {
  console.log('不用干活了，去看电视吧！');
});

myEmitter.emit('hungry', '鸡蛋');
myEmitter.emit('hungry', '鸡蛋');

→ node demo.js
```
![image.png](http://upload-images.jianshu.io/upload_images/9008880-1195293ae4b1a352.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### error
error是特殊的事件
普通事件不捕获不会抛异常，error需要捕获
```javascript
# demo.js
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('hungry', (food) => {
  console.log('饿了我给你做个' + food + '!');
});

myEmitter.emit('hungry', '鸡蛋');
myEmitter.emit('happy', '鸡蛋');
myEmitter.emit('error');


→ node demo.js
```
![image.png](http://upload-images.jianshu.io/upload_images/9008880-458dbafc5ee4b475.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
异常捕获的情况
```javascript
# demo.js
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('error', () => {
  console.log('乖，妈妈抱抱！');
});

myEmitter.emit('error');


→ node demo.js
```
![image.png](http://upload-images.jianshu.io/upload_images/9008880-743fb57d7fa12c1e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### fs
文件系统
```javascript
# demo.js
const fs = require('fs');

fs.readFile('content.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

let data = fs.readFileSync('content.txt', 'utf8');
console.log(data);

→ node demo.js
```
![image.png](http://upload-images.jianshu.io/upload_images/9008880-52e55c4ae85d307e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### http服务器
```javascript
# demo.js
const http = require('http');
const urls=require('url');
const util=require('util');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  let reqUrl = req.url;
  let urlParse = urls.parse(reqUrl,true);
  let utilInspect = util.inspect(urlParse)
  console.log(reqUrl)
  console.log(urlParse)
  console.log(utilInspect)

  res.end(utilInspect);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

→ node demo.js
http://127.0.0.1:3000/abc?param1=1&param2=2
```
![image.png](http://upload-images.jianshu.io/upload_images/9008880-19c4ed1aa6b2f338.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
