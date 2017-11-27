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
