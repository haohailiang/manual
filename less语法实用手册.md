less实用语法、less常用工具方法和API快速查询手册
## 内联样式和外联样式　
```
<style type="text/less">
  // less 代码
</style>
<link rel="stylesheet/less" type="text/css" href="文件.less"/>
```
## 在浏览器中调试的方法
```
http://c7sky.com/chrome-devtools-workspace.html
```
## 变量
```less
@test_width:300px;
.bod{
    width:@test_width;
}
```
## 混合
```less
.box{
    width:100px;
    .border;
}
.border{
    border:5px solid red;
}
.border2{
    .border;
}
```
### 不输出的混合
```less
.my-mixin {
  color: black;
}
.my-other-mixin() {/*加个括号就可以*/
  background: white;
}
.class {
  .my-mixin;
  .my-other-mixin;
}
```
输出为：  
```css
.my-mixin {  
  color: black;  
}  
.class {  
  color: black;  
  background: white;  
}  
```
eg3:
```less
.my-hover-mixin() {
  &:hover {
    border: 1px solid red;
  }
}
button {
  .my-hover-mixin();
}
```
输出为： 
```css 
button:hover {
  border: 1px solid red;
}
```
## 带参数[函数]
```less
.border(@border_width){
    border:@border_width solid red;
}

.test_border{
    .border(10px);
}
```
## 带参数[带默认值]
```less
.border(@border_width:5px){
    border:@border_width solid red;
}

.test_border{
    .border(10px);
}
```
## 匹配模式[条件判断语句]
```less
.triangel(top, @w:5px, @c:#ccc){
    border-width: @w;
    border-color:@c transparent transparent transparent;
    border-style: solid;
}
.triangel(right, @w:5px, @c#ccc){
    border-width: @w;
    border-color:transparent @c transparent transparent;
    border-style: solid;
}
.triangel(bottom, @w:5px, @c:#ccc){
    border-width: @w;
    border-color:transparent transparent @c transparent;
    border-style: solid;
}
.triangel(left, @w:5px, @c:#ccc){
    border-width: @w;
    border-color:transparent transparent transparent @c;
    border-style: solid;
}
```
eg2:
```less
.mixin(dark; @color) {
  color: darken(@color, 10%);
}
.mixin(light; @color) {
  color: lighten(@color, 10%);
}
.mixin(@_; @color) {//@_匹配任何值
  display: block;
}
```
代码:
```less
@switch: light;

.class {
  .mixin(@switch; #888);
}
```
输出为:  
```css
.class {
  color: #a2a2a2;
  display: block;
}
```
### 模式匹配[重载]
```less
.mixin(@a) {    //一个参数执行这个
  color: @a;
}
.mixin(@a; @b) {    //2个参数执行这个
  color: fade(@a; @b);
}
```
## 运算
less中的运算  
-任何数字、颜色或者变量都可以参与运算，运算应该被包裹在括号中
```less
@test_width:100px;
@test_height:100px;
.box{
    border:1px solid green;
    width:@test_width;
    height:@test_height + @test_width;
}
.box2{
    border:1px solid green;
    width:@test_width;
    height:@test_height + 200;
}
```
## 函数运算
```less
floor(@number); // 向下取整
abs(@number); //绝对值
lighten(@color, 10%); // 亮度增加 10%
```
## 嵌套规则
&表示为父选择器  
&对伪类使用  
&emsp;&emsp;-hover或focus  
对连结的使用  
&emsp;&emsp;-&-item
```less
a{
    color: blue;
    &:hover{
        color:red;
    }
    &_span:{
        color: yellow;
    }
}
```
代码:
```less
.button {
  &-ok {
    background-image: url("ok.png");
  }
  &-cancel {
    background-image: url("cancel.png");
  }

  &-custom {
    background-image: url("custom.png");
  }
}
```
输出为:
```css
.button-ok {
  background-image: url("ok.png");
}
.button-cancel {
  background-image: url("cancel.png");
}
.button-custom {
  background-image: url("custom.png");
}
```
## arguments变量
@arguments包含了所有传递进来的参数  
如果不想单独处理每一个参数的话就可以这样写：  
```less
.border_arg(@w:30px, @c:red, @s:solid){
    border:@arguments;
}
```
## 避免编译
```less
.box{
    width:~'calc(300px-30px)';
}
```
## !important关键字
-会为所有混合所带来的样式，添加上!important
```less
.border(){
    border:1px solid red;
}
.box{
    .border() !important;
}
```
## 注释
```less
/*可以使用这样的注释[代码中会显示]*/
//这样的注释[代码中会自动过滤掉]
```
## 引入库文件-导入指令
文件会被嵌入到最终的文件当中，有先后顺序
```less
#table.less
#a.css
@import 'table';
@import (less) 'css/a.css'; //无论扩展名是什么，都必须导入
```
## 媒体查询
```less
.screen-color {
  @media screen {
    color: green;
    @media (min-width: 768px) {
      color: red;
    }
  }
  @media tv {
    color: black;
  }
}

@media screen {
  .screen-color {
    color: green;
  }
}
@media screen and (min-width: 768px) {
  .screen-color {
    color: red;
  }
}
@media tv {
  .screen-color {
    color: black;
  }
}
```
## 常用函数
### 百分比转换
```less
@width: 0.5;
.class {
  width: percentage(@width); // returns `50%`
}
```
### 合并同类项
```less
.my-inline-block {
  display: inline-block;
  font-size: 0;
}
.thing1 {
  &:extend(.my-inline-block);
}
.thing2 {
  &:extend(.my-inline-block);
}
```
输出:
```css
.my-inline-block,
.thing1,
.thing2 {
  display: inline-block;
  font-size: 0;
}
```
### 相通属性名称的合并
```less
.mixin() {
  transform+_: scale(2);
}
.myclass {
  .mixin();
  transform+_: rotate(15deg);
}
```
输出
```css
.myclass {
  transform: scale(2) rotate(15deg);
}
```
## 循环
```less
.loop(@counter) when (@counter > 0) {
  .loop((@counter - 1));    // next iteration
  width: (10px * @counter); // code for each iteration
}

div {
  .loop(5); // launch the loop
}
```
输出
```css
div {
  width: 10px;
  width: 20px;
  width: 30px;
  width: 40px;
  width: 50px;
}
```
****
```less
.generate-columns(4);

.generate-columns(@n, @i: 1) when (@i =< @n) {
  .column-@{i} {
    width: (@i * 100% / @n);
  }
  .generate-columns(@n, (@i + 1));
}
```
输出
```css
.column-1 {
  width: 25%;
}
.column-2 {
  width: 50%;
}
.column-3 {
  width: 75%;
}
.column-4 {
  width: 100%;
}
```
## SVG渐变梯度gradient
http://lesscss.cn/functions/  
方向：  
to bottom，  
to right，  
to bottom right，  
to top right  

参数列表  
color [percentage] 对：第一个颜色和它的相对位置（位置可选）  
color percent 对：（可选）第二颜色和它的相对位置  
...  
color percent 对：（可选）第n个颜色和它的相对位置  
color [percentage] 对：最后的颜色和它的相对位置（位置可选）  
```less
div {
  @list: red, green 30%, blue;
  background-image: svg-gradient(to right, @list);
}
```
等价于
```less
div {
  background-image: svg-gradient(to right, red, green 30%, blue);
}
```
