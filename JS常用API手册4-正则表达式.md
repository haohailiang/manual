[图形化检测工具](https://regexper.com/)
# 表示方式
```javascript
var rule = new RegExp("模式字符串"， "标志");
var rule = /模式字符串/标志;
```
# test
```javascript
rule.test("被检测的字符串");
"被检测的字符串".indexOf(searchString);
"被检测的字符串".indexOf(searchString, position)
"被检测的字符串".search(/正则表达式/);	    //g是没有用的，都是返回的第一个适配的
```
等价表达式
```javascript
var rule = /[a-z]/i
var rule = /[a-zA-Z]/

# 字母、数字、下划线
var rule2 = /\w/
var rule2 = /a-zA-Z0-9_/
```
# exec
返回一个符合的数组
```javascript
rule.exec("被检测的字符串");
```
说明：
1.没有g时，循环次数没有限制，每次结果都一样
2.有g时，每次结果可能不一样
3.没有匹配的文本则返回null,否则返回一个结果数组
4.index	声明匹配文本的第一个字符的位置
5.input	存放被检索的字符串string(就是被匹配的字符串)
```javascript
var reg3 = /\d(\w)\d/;
var reg4 = /\d(\w)\d/g;
var ts = '1a2b3c4d5e';

//var ret = reg3.exec(ts);

while(ret = reg4.exec(ts)){
	console.log(reg4.lastIndex + '\t' + ret.index + '\t' + ret.toString());
}
//3	0	1a2,a
//7	4	3c4,c
```
# match
match与exec方向相反
```javascript
"被检测的字符串".match(rule);
```
* match()方法将检索字符串，以找到一个或多个regexp匹配的文本
* regexp是否具有标志g对结果影响很大
# replace
```javascript
"被检测的字符串".replace(/正则表达式/g, replaceFun)
"被检测的字符串".replace(/正则表达式/g, '#');
```
replaceFun参数含义
replaceFun会在每次匹配替换的时候调用，有四个参数
1.匹配字符串
2.正则表达式分组内容，没有分组则没有该参数
3.匹配钉在字符串中的index
4.原字符串
```javascript
'a1b2c3d4e5'.replace(/(\d)(\w)(\d)/g, function(match, group1, group2, group3, index, origin){
	console.log("match:   " + match);
	console.log("group1:" + group1);
	console.log("group2:" + group2);
	console.log("group3:" + group3);
	console.log("index:" + index);
	console.log("origin:" + origin);
});
```
# trim
```javascript
"    fdasfsaas  ".replace(/^\s+/,"").replace(/\s+$/,"");
"    fdasfsaas  ".replace(/(^\s+)|(\s+$)/g,"")
"    fdasfsaas  ".replace(/^\s*(.+?)\s*$/, '$1');
/^\s*(.+?)\s*$/.exec("    fdasfsaas  ")[1]
```
# 分组交换
```javascript
var rule = /(\d+)-(\d+)/;
"23-45".replace(rule,'$2-$1');
```
# 匹配模式
默认是贪婪模式
非贪婪模式在量词后边加```**?**```
```javascript
# 非贪婪
var rule = /(\d+?)/;
```
# 忽略分组
不希望捕获某些分组，在分组内加上?:
`(?:Byron).(ok)`
`var rule = /(\d+)(?:[a-z])/;`
# 反向引用
`var rule = /(\d{3})-\1/`
# 正向前瞻(条件过滤器)
* [捕获特定字符之前的字符][后边为前的方向，没有反向后顾(可以模拟出来)]
* 正则表达式从文本头部向尾部开始解析，文本尾部方向，成为"前"
* 前瞻就是在正则表达式匹配到规则的时候，向前检查是否符合断言
* 正向前瞻		exp(?=assert)
* 负向前瞻		exp(?!assert)
```javascript
var s = "Ubuntu 8.10 is a good OS. Ubuntu 9.10 xxx";
var rule = /([a-z]+)(?=\s+8\.10)/i;
s.replace(rule, 'Debian');
var rule = /[a-z]+(\s+8\.10)/gi;
s.replace(rule, 'Debian$1');    //Debian 8.10 is a good OS. Ubuntu 9.10 xxx
```
# 对象属性[只读]
* global:是否是全文搜索，默认false
* ingore case:是否大小写敏感，默认是false
* multiline:多行搜索，默认值是false
* lastIndex:是当前表达式匹配内容的最后一个字符的下一个位置[有全局属性g时才有效，其他情况默认为0]
* source:正则表达式的文本字符串
* index匹配字符串的开始位置
# 边界匹配字符
\b   单词边界
\B   非单词边界
