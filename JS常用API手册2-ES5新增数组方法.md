# 遍历数组元素
```javascript
arr.forEach((item, index, arr) => {
	//todo
})
[1, 2 ,3, 4].forEach(console.log)
```
![image.png](http://upload-images.jianshu.io/upload_images/9008880-8ef2ab61475a687e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
IE6-IE8
```javascript
if (typeof Array.prototype.forEach != "function") {
	Array.prototype.forEach = function (fn, context) {
		for (var k = 0, length = this.length; k < length; k++) {
			if (typeof fn === "function" && Object.prototype.hasOwnProperty.call(this, k)) {
				fn.call(context, this[k], k, this);
			}
		}
	};
}
```
# 判断对象是不是数组
```javascript
Array.isArray("NO U")
// false

Array.isArray(["NO", "U"])
// true
```
IE6-IE8
```javascript
Object.prototype.toString.apply(value) === '[object Array]'
```
# map
```javascript
arr.map((value, index, array) =>{
	//todo
});

------代码分割线------
let arr = [1,2,3,4];
let arr2 = arr.map((item, index, array) => {
	console.log(item, index, array);
	return item * item;
});
//arr = [1,2,3,4]
//arr2 = [1,4,9,16];
```
IE6-IE8
```javascript
if (typeof Array.prototype.map != "function") {
	Array.prototype.map = function (fn, context) {
		var arr = [];
		if (typeof fn === "function") {
			for (var k = 0, length = this.length; k < length; k++) {
				arr.push(fn.call(context, this[k], k, this));
			}
		}
		return arr;
	};
}
```
# filter
过滤一个数组，符合的留下，不符合的剔除掉
```javascript
arr. filter((value, index, array) =>{
	//todo
});


------代码分割线------
let users = [
	{name: "张含韵", "email": "zhang@email.com"},
	{name: "江一燕",   "email": "jiang@email.com"},
	{name: "李小璐",  "email": "li@email.com"}
];

let zhangEmail = users.map( user => user.email ).filter( email => /^zhang/.test(email) );
console.log(zhangEmail.join(", "));

//zhang@email.com
```
IE6-IE8
```javascript
if (typeof Array.prototype.filter != "function") {
	Array.prototype.filter = function (fn, context) {
		var arr = [];
		if (typeof fn === "function") {
			for (var k = 0, length = this.length; k < length; k++) {
				fn.call(context, this[k], k, this) && arr.push(this[k]);
			}
		}
		return arr;
	};
}
```
# some
只要有一个数返回为true，就返回true
```javascript
arr. some((value, index, array) =>{
	//todo
});

------代码分割线------
let scores = [5, 8, 3, 10];
let current = 7;

function higherThanCurrent(score) {
	return score > current;
}

if (scores.some(higherThanCurrent)) {
	console.log("数组中有比7大的数！");
}
//数组中有比7大的数！
```
IE6-IE8
```javascript
if (typeof Array.prototype.some != "function") {
	Array.prototype.some = function (fn, context) {
		var passed = false;
		if (typeof fn === "function") {
			for (var k = 0, length = this.length; k < length; k++) {
				if (passed === true) break;
				passed = !!fn.call(context, this[k], k, this);
			}
		}
		return passed;
	};
}
```
# every
全部为true， 才返回true
```javascript
arr. every((value, index, array) =>{
	//todo
});
------代码分割线------
let scores = [5, 8, 3, 10];
let current = 7;

function higherThanCurrent(score) {
	return score > current;
}

if (scores.every(higherThanCurrent)) {
	console.log('数组中的数全部大于7！')
} else {
	console.log("数组中的数有一个小于等于7！");
}
```
IE6-IE8
```javascript
if (typeof Array.prototype.every != "function") {
	Array.prototype.every = function (fn, context) {
		var passed = true;
		if (typeof fn === "function") {
			for (var k = 0, length = this.length; k < length; k++) {
				if (passed === false) break;
				passed = !!fn.call(context, this[k], k, this);
			}
		}
		return passed;
	};
}
```
# indexOf
返回整数索引值，如果没有匹配（严格匹配），返回-1. fromIndex可选，表示从这个位置开始搜索，若缺省或格式不合要求，使用默认值0
```javascript
array.indexOf(searchElement[, fromIndex])

------代码分割线------
var data = [2, 5, 7, 3, 5];

console.log(data.indexOf(5, "x"));		 // 1 ("x"被忽略)
console.log(data.indexOf(5, "3")); 	   	// 4 (从3号位开始搜索)
console.log(data.indexOf(4));			 // -1 (未找到)
console.log(data.indexOf("5"));			 // -1 (未找到，因为5 !== "5")
```
IE6-IE8
```javascript
if (typeof Array.prototype.indexOf != "function") {
	Array.prototype.indexOf = function (searchElement, fromIndex) {
		var index = -1;
		fromIndex = fromIndex * 1 || 0;

		for (var k = 0, length = this.length; k < length; k++) {
			if (k >= fromIndex && this[k] === searchElement) {
				index = k;
				break;
			}
		}
		return index;
	};
}
```
# lastIndexOf
lastIndexOf方法与indexOf方法类似, 只是lastIndexOf是从字符串的末尾开始查找，而不是从开头。还有一个不同就是fromIndex的默认值是array.length - 1而不是0
```javascript
array.lastIndexOf(searchElement[, fromIndex])

------代码分割线------
var data = [2, 5, 7, 3, 5];
console.log(data.lastIndexOf(5)); 			// 4
console.log(data.lastIndexOf(5, 3)); 		// 1 (从后往前，索引值小于3的开始搜索)
console.log(data.lastIndexOf(4)); 			// -1 (未找到)
```
IE6-IE8
```javascript
if (typeof Array.prototype.lastIndexOf != "function") {
	Array.prototype.lastIndexOf = function (searchElement, fromIndex) {
		var index = -1, length = this.length;
		fromIndex = fromIndex * 1 || length - 1;

		for (var k = length - 1; k > -1; k-=1) {
			if (k <= fromIndex && this[k] === searchElement) {
				index = k;
				break;
			}
		}
		return index;
	};
}
```
# reduce
* 迭代，递归
* callback函数接受4个参数：之前值、当前值、索引值以及数组本身
* initialValue参数可选，表示初始值。
* 指定，则当作最初使用的previous值；
* 缺省，则使用数组的第一个元素作为previous初始值，同时current往后排一位，相比有initialValue值少一次迭代。
```javascript
array.reduce(function (previous, current, index, array){}[, initialValue])

------代码分割线------
var sum = [1, 2, 3, 4].reduce(function (previous, current, index, array) {
	return previous + current;
});

console.log(sum); // 10
```
注：因为initialValue不存在，因此一开始的previous值等于数组的第一个元素。从而current值在第一次调用的时候就是2。最后两个参数为索引值index以及数组本身array.
```
# 以下为循环执行过程：
# 初始设置
previous = initialValue = 1, current = 2

# 第一次迭代
previous = (1 + 2) =  3, current = 3

# 第二次迭代
previous = (3 + 3) =  6, current = 4

# 第三次迭代
previous = (6 + 4) =  10, current = undefined (退出)
```
轻松实现二维数组的扁平化
```javascript
var matrix = [
	[1, 2],
	[3, 4],
	[5, 6]
];

// 二维数组扁平化
var flatten = matrix.reduce(function (previous, current) {
	return previous.concat(current);
});

console.log(flatten); // [1, 2, 3, 4, 5, 6]
```
IE6-IE8
```javascript
if (typeof Array.prototype.reduce != "function") {
	Array.prototype.reduce = function (callback, initialValue ) {
		var previous = initialValue, k = 0, length = this.length;
		if (typeof initialValue === "undefined") {
			previous = this[0];
			k = 1;
		}

		if (typeof callback === "function") {
			for (k; k < length; k++) {
				this.hasOwnProperty(k) && (previous = callback(previous, this[k], k, this));
			}
		}
		return previous;
	};
}
```
# reduceRight
reduceRight跟reduce相比，用法类似。差异在于reduceRight是从数组的末尾开始实现
```javascript
array.reduceRight(function (previous, current, index, array){}[, initialValue])

------代码分割线------
var data = [1, 2, 3, 4];

var specialDiff = data.reduceRight(function (previous, current, index) {
	if (index == 0) {
		return previous + current;
	}
	return previous - current;
});

console.log(specialDiff); // 0
```
循环步骤
```
// 初始设置
index = 3, previous = initialValue = 4, current = 3

// 第一次迭代
index = 2, previous = (4- 3) = 1, current = 2

// 第二次迭代
index = 1, previous = (1 - 2) = -1, current = 1

// 第三次迭代
index = 0, previous = (-1 + 1) = 0, current = undefined (退出)
```
IE6-IE8
```javascript
if (typeof Array.prototype.reduceRight != "function") {
	Array.prototype.reduceRight = function (callback, initialValue ) {
		var length = this.length, k = length - 1, previous = initialValue;
		if (typeof initialValue === "undefined") {
			previous = this[length - 1];
			k--;
		}
		if (typeof callback === "function") {
			for (k; k > -1; k-=1) {
				this.hasOwnProperty(k) && (previous = callback(previous, this[k], k, this));
			}
		}
		return previous;
	};
}
```
