| 参数类型  |  false | true |
|-----------|:------:|:----:|
| Undefined |    √   |      |
| Number    | ±0,NaN |   √  |
| String    |   ""   |   √  |
| Object    |  null  |   √  |
# 双等号等价判断
| Type(x)          | Type(y)          | Result              |
|------------------|------------------|---------------------|
| null             | Undefined        | true                |
| Undefined        | null             | true                |
| Number           | String           | x == toNumber(y)    |
| String           | Number           | toNumber(x) == y    |
| Boolean          | any              | toNumber(x) == y    |
| any              | Boolean          | x == toNumber(y)    |
| String or Number | Object           | x == toPrimitive(y) |
| Object           | String or Number | toPrimitive(x) == y |
| 其他             | 其他             | false               |
# ToNumber[转化为数字
| 参数类型  | 结果                                                 |
|-----------|------------------------------------------------------|
| Undefined | NaN                                                  |
| Null      | 0                                                    |
| Boolean   | 参数是true结果为1                                    |
|           | 参数是false结果为0                                   |
| Number    | 不用转化                                             |
| String    | 效果等价于Number(string) |
|     | "abc" --> NaN  |
|     | "123" --> 123 |
# Object转换数字的步骤
通过以下2个步骤进行转换
```
1.toPrimitive(inputParam, preferredType)转化为原始值
preferredType[Number|String]:代表了转换的偏好
if(Number){
  1>如果输入的值已经是个原始值,则直接返回它
  2>否则,如果输入的值是一个对象.则调用该对象的valueOf()方法.如果valueOf()方法的返回值是一个原始值,则返回这个原始值.
  3>否则,调用这个对象的toString()方法.如果toString()方法的返回值是一个原始值,则返回这个原始值.
  4>否则,抛出TypeError异常.
}else if(String){
        1>调用这个对象的toString()方法.如果toString()方法的返回值是一个原始值,则返回这个原始值.
        2>否则,如果输入的值是一个对象.则调用该对象的valueOf()方法.如果valueOf()
}else{
        Date类型的对象会被设置为String,其它类型的值会被设置为Number
}
2.toNumber()将这个原始值转化为数字
```
# ToPrimitive()[转化为原始值]
| 参数类型 | 结果                    |
|----------|-------------------------|
| Object   | 通过以下3个步骤进行转换 |
|          | 1.valueOf()             |
|          | 2.toString()            |
|          | 3.an error              |
| 其他情况 | 不用转换                |
# ToString()[转化为字符串]
| 参数类型  | 结果                                   |
|-----------|----------------------------------------|
| Undefined | "undefined"                            |
| Null      | "null"                                 |
| Boolean   | "true" | "false"                       |
| Number    | 转化为字符串                           |
| String    | 不用转换                               |
| Object    | 通过以下2个步骤进行转换                |
|           | 1.toPrimitive(obj, String)转化为原始值 |
|           | 2.toString()将这个原始值转化为字符串   |

有下面这样的一个加法操作.
```
value1 + value2
```
在计算这个表达式时,内部的操作步骤是这样的
将两个操作数转换为原始值
```
prim1 := ToPrimitive(value1)
prim2 := ToPrimitive(value2)
```
PreferredType被省略,因此Date类型的值采用String,其他类型的值采用Number.
如果prim1或者prim2中的任意一个为字符串,则将另外一个也转换成字符串,然后返回两个字符串连接操作后的结果.
否则,将prim1和prim2都转换为数字类型,返回他们的和.
**总结：先转数字再转字符串**
# 严格相等
| 类型      | 值              |  结果 |
|-----------|-----------------|:-----:|
| Undefined |                 |  true |
| Null      |                 |  true |
| Number    | NaN             | false |
| String    | 相同的字符串    |  true |
| Boolean   | 同为true或false |  true |
| Object    | 引用相同时      |  true |
| 其他情况  |                 | false |
# 双等号的比较[3-5-7-相等操作符]
## 1. 布尔值 == 任意类型  
布尔值转化为数字 false -> 0 | true -> 1
```
false == 0  // true
true == 1 // true
true == 2 // false
```
## 2. 字符串 == 数值  
字符串转化为数字
```
5 == '5' // true
```
## 3. 对象 == 非对象  
调用对象的valueOf方法, 用得到的基本类型使用前边的规则进行比较
```
```
## 4. null === undefined[约定]  
```
null === undefined // true
```
## 5. 要比较相等性之前,不能将null和undefined转化成其他任何值  
```
0    === undefined // flase
0    === null      // flase
```
## 6. NaN与任何数比较结果都是false,包括NaN自身比较, 不等全为true
```
"NaN" == NaN  // false
5     == NaN  // false
NaN   == NaN  // false
NaN   == undefined  // false

"NaN" !== NaN  // true
5     !== NaN  // true
NaN   !== NaN  // true
NaN   !== undefined  // true
```
## 7. 2个对象比较看看是不是同一个对象, 都指向同一个对象才是true, 否则都是false
```
console.log( {} == {} ); // false

let a = {};
let b = a;
console.log( a == b ); // true
```
# 操作符类型转换
```
console.group('-------------- 乘法 start --------------');
console.dir(5 * 5); // 25
console.dir(1 / 0); // Infinity
console.dir(-1 / 0); // -Infinity
console.dir(5 * NaN); // NaN
console.dir(0 * Infinity);  // NaN
console.dir(5 * "5"); // Number("5") -> 5 -> 25
console.dir(5 * "a"); // Number("a") -> NaN -> NaN
console.dir(5 * null); // Number(null) -> 0 -> 0
console.dir(5 * undefined); // Number(undefined) -> NaN -> NaN
console.groupEnd();
```
隐性转换原则:  
1. 2个都是数字,进行正常计算, 超过数字表示范围,返回Infinity[正无穷大]和-Infinity[负无穷大]
2. 如果一个数是NaN,那么结果就是NaN
3. 如果Infinity与0相乘，结果是NaN
4. 数字 * 非数字 -> 数字 * Number(非数字) 如果转换出NaN, 结果就是NaN
```
console.group('-------------- 除法 start --------------');
console.dir(5 / "5"); // Number("5") -> 5 -> 1
console.dir(5 / "a"); // Number("a") -> NaN -> NaN
console.dir(5 / NaN); // NaN
console.dir(5 / null); // Number(null) -> 0 -> Infinity
console.dir(null / 5); // Number(null) -> 0 -> 0
console.dir(5 / undefined); // Number(undefined) -> NaN -> NaN
console.dir(5 / 5); // 1
console.dir(5 / 0); // Infinity
console.dir(0 / 5); // 0
console.dir(0 / 0); // NaN[0和Infinity混成了一个NaN]
console.groupEnd();
```
隐形转换原则[同乘法]:
5. 唯一多的一条就是0/0结果是NaN
```
console.group('-------------- 取模 start --------------');
console.dir(Infinity % 10); // [余数必须是0到10之间的一个值,这个值不好说就是NaN]
console.dir(16 % "5"); // Number("5") -> 5 -> 1
console.dir(5 % "a"); // Number("a") -> NaN -> NaN
console.dir(5 % NaN); // NaN
console.dir(5 % null); // Number(null) -> 0 -> NaN[没有对0求模这一说]
console.dir(null % 5); // Number(null) -> 0 -> 0
console.dir(5 % undefined); // Number(undefined) -> NaN -> NaN
console.dir(5 % 5); // 0
console.dir(5 % 0); // NaN[没有对0求模这一说]
console.dir(0 % 5); // 0
console.dir(0 % 0); // NaN[没有对0求模这一说]
console.dir(Infinity % Infinity); // NaN
console.dir(2 % Infinity); // 2
console.groupEnd();
```
隐形转换原则[同乘法]:
1. 被除数是Infinity，除数是有限大的值，那么结果是NaN[余数必须是0到除数之间的一个值,这个值不好说就是NaN]
2. 被除数是有限大的值，除数是0，那么结果是NaN
3. Infinity % Infinity结果是NaN
4. 被除数是有限大的值，除数是无穷大的值，结果是被除数
5. 被除数是0，结果是0
```
console.group('-------------- 减法 start --------------');
console.dir(Infinity - Infinity); // NaN
console.dir(Infinity - Infinity); // -Infinity
console.dir(5 - Infinity); // -Infinity
console.dir(16 - "5"); // Number("5") -> 5 -> 11
console.dir(5 - "a"); // Number("a") -> NaN -> NaN
console.dir(5 - NaN); // NaN
console.dir(5 - null); // Number(null) -> 0 -> 5
console.dir(5 - undefined); // Number(undefined) -> NaN -> NaN
console.dir(5 - 5); // 0
console.dir(5 - true); // Number(true) -> 1 -> 4
console.dir(5 - "true"); // Number("true") -> NaN -> NaN
console.dir(5 - ""); // Number("") -> 0 -> 5
console.dir("两个数的差是" + 5 - 5); // "两个数的差是" + 5 -> Number("两个数的差是5") -> NaN -> NaN
console.dir("两个数的差是" + (5 - 5)); // 两个数的差是0

// 对象的比较
let a = {
	name: 'a',
	valueOf:function() {
		console.log( "a - valueOf[only] - 2" );
		return 2;
	}
};
let b = {
	name: 'b',
	toString: function() {
		console.log( "b - toString[only] - 3" );
		return 3;
	}
};
let c = {
	name: 'c',
	valueOf:function() {
		console.log( "c - valueOf[only] - '22'" );
		return '22';
	}
};
let d = {
	name: 'd',
	toString: function() {
		console.log( "d - toString[only] - '33'" );
		return '33';
	}
};
let e = {
	name: 'e',
	valueOf:function() {
		console.log( "e - valueOf[all] - '44'" );
		return '44';
	},
	toString: function() {
		console.log( "e - toString[all]- 'bb'" );
		return 'bb';
	}
};
let f = {
	name: 'f',
	valueOf:function() {
		console.log( "f - valueOf[all] - 'cc'" );
		return 'cc';
	},
	toString: function() {
		console.log( "f - toString[all] - '55'" );
		return '55';
	}
};

let arr = [a, b, c, d, e, f];
for(let i=0,len=arr.length; i<len; i++) {
	for(let j=i; j<len; j++) {
		console.group('--------------  start --------------');
		console.log( arr[i]['name'], arr[j]['name'] );
		console.log( arr[i] - arr[j] );
		console.groupEnd();
	}
}

console.groupEnd();
```
隐形转换原则[同乘法]:  
1. Infinity - Infinity结果是NaN
2. -Infinity-Infinity结果是-Infinity
3. 一个数字减Infinity结果是-Infinity
4. Infinity-（-Infinity）结果是Infinity
5. 如果操作数是对象，则调用对象valueOf方法，如果结果是NaN那么结果就是NaN。如果没有valueOf方法，那么调用toString()方法，并将得到的字符串转换为数值。
```
console.group('-------------- 关系操作符 start --------------');
console.dir(16 > "5"); // Number("5") -> 0 -> true
console.dir("16" > "5"); // false
console.dir(5 < "a"); // Number("a") -> NaN -> false
console.dir(5 >= NaN); // false
console.dir(5 < NaN); // false
console.dir(NaN >= NaN); // false
console.dir(5 >= null); // Number(null) -> 0 -> true
console.dir(5 >= undefined); // Number(undefined) -> NaN -> false
console.dir(5 >= 5); // true
console.dir(5 >= true); // Number(true) -> 1 -> true
console.dir(5 >= "true"); // Number("true") -> NaN -> false
console.dir(5 >= ""); // Number("") -> 0 -> true
console.dir("Brick" > "alphabet"); // false
console.dir("brick" > "alphabet"); // true
console.groupEnd();

```
隐形转换原则[同乘法]:
如果比较的两个数都是字符串，那么会比较字符串对应的字符串编码值。
'0' < 'A' < 'a'
```
console.group('-------------- 加法 start[很少转化] --------------');
console.dir(16 + "5"); // 165
console.dir(5 + "a"); //5a
console.dir(5 + NaN); // NaN
console.dir(5 + null); // Number(null) -> 0 -> 5
console.dir(5 + undefined); // Number(undefined) -> NaN -> NaN
console.dir('5' + null); // String(null) -> 'null' -> 5null
console.dir('5' + undefined); // String(undefined) -> 'undefined' -> 5undefined
console.dir(5 + 5); // 10
console.dir("两个数的和是" + 5 + 5); // 两个数的和是55
console.dir("两个数的和是" + (5 + 5)); // 两个数的和是10
console.groupEnd();
```
隐形转换原则[同乘法]:  
1. 之前的所有的运算符号，只要一个是数字，另一个也默认使用Number（）进行数字转换  
2. 加法运算只要其中一个是字符串，那么另外一个也会转换为字符串，然后进行字符串的拼接  
3. 字符串比较时用String() -> null -> String(null) -> null
3. 数字比较时还用Number() -> null -> Number(null) -> 0
4. undefined -> String(undefined)
