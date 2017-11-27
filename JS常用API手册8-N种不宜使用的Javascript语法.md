1. 推荐使用===和!==
	不推荐==和!=[之间的转化会很复杂]
2. with[不推荐]
```javascript
with(obj) {
　　a = b;
　　c = d;
}
```
先判断obj.b和obj.d是否存在，如果不存在的话，再判断全局变量b和d是否存在[可能会出意外]
3. eval
有性能和安全性的问题，并且使得代码更难阅读。
```javascript
eval("myValue = myObject." + myKey + ";");
```
可以直接写成
```javascript
myValue = myObject[myKey];
```
至于ajax操作返回的json字符串，可以使用官方网站提供的解析器json_parse.js运行。
4. continue
适当的命令可以避免这种写法
5. 位运算符
运算符针对的是整数，所以对Javascript完全无用，因为Javascript内部，所有数字都保存为双精度浮点数
6. function语句
```javascript
function foo() {
}
var foo = function () {
}
```
建议定义函数时，全部采用后一种写法。
7. 基本数据类型的包装对象
```javascript
new String("Hello World");
new Number(2000);
new Boolean(false);
```
这样写完全没有必要，而且非常费解，因此建议不要使用。
```javascript
new Object ×
new Array ×
{} √
[] √
```
new Object和new Array也不建议使用，可以用{}和[]代替。
8. new对象
```javascript
//传统写法
var Cat = function (name) {
　　this.name = name;
　　this.saying = 'meow' ;
}
var myCat = new Cat('mimi');

//推荐写法
Object.beget = function (o) {
　　var F = function (o) {};
　　F.prototype = o ;
　　return new F;
};
var Cat = {
　　name:'',
　　saying:'meow'
};
var myCat = Object.beget(Cat);
myCat.name = 'mimi';
```
