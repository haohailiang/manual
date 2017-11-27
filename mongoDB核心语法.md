课程地址:[mongoDB入门篇](http://www.imooc.com/learn/295)  
# 几个重要的网站
* [MongoDB官网](https://www.mongodb.com/)
	* [全部版本的下载地址](https://www.mongodb.org/dl/win32/x86_64-2008plus-ssl?_ga=2.193424301.1206228263.1508574268-512954740.1507777617)
	* [当前稳定版本3.4.9](http://downloads.mongodb.org/win32/mongodb-win32-x86_64-2008plus-ssl-3.4.9.zip?_ga=2.224355995.1206228263.1508574268-512954740.1507777617)
* [MongoDB中文官网](http://www.mongoing.com/)
* [MongoDB的github](https://github.com/mongodb)
# mongoDB的特点
* NoSql数据库,不支持Sql语言的数据库
* 没有表结构的概念,每个表可以有完全不同的结构
```
{name:'小明', sex:'男'}
{name:'小红', address:'上海'}
{name:'小蓝', home:{'山东','江西'}}
```
# 完全的索引支持
* 单键索引
```{x:1}```
* 多键索引
```{x:1, y:1}```
* 数组索引
```["apple", "lemon"]```
* 全文索引
```"i am a little bird. "```
* 地理位置索引2D
# 常用命令
## 显示所有的数据库
```
show dbs
```
## 切换数据库[没有就新建数据库]
```
use imooc
```
## 删除数据库
```
use imooc
db.dropDatabase()
show dbs
```
## 删除集合
```
db.coll.drop()
show collections
show tables
```
## 数据库集合中插入数据
```
use imooc
db.coll.insert({x:1})
# 可以插入结构完全不同的记录
db.coll.insert({x:100, y:100, z:100})
```
## 循环插入100个值
```
for(var i=1; i<=100; i++){
    db.coll.insert({x:i})
}
```
## 计算集合记录的个数
```
db.coll.find().count()
```
## 分页查找（显示第4-5条）
默认排序是按照id进行排序的
```
# 升序
db.coll.find().skip(3).limit(2).sort({x:1})
# 降序
db.coll.find().skip(3).limit(2).sort({x:-1})
#自然排序是按照写入的时间进行排序
db.coll.find().sort({
    $natural:-1
}).limit(10)
```
## 删除所有符合指定条件的值
```
db.coll.remove({x:1})
```
## 删除嵌套文档中
```
//插入一条文档
db.profiles.insert({ votes: [ 3, 5, 6, 7, 7, 8 ] })
//移除数组中所有元素7
db.profiles.update( { votes: 3 }, { $pull: { votes: 7 } } )
//移除数组中所有大于6的元素
db.profiles.update( { votes: 3 }, { $pull: { votes: { $gt: 6 } } } )
```
例2
```
db.users.update({
    userId:'001'
},{
    $pull:{
        cartList:{
            productName:'香蕉'
        }
    }
})
```
## 显示所有的集合
```
show collections
```
## 查询集合中所有的记录
```
db.coll.find()
```
## 查询指定条件的记录
```
db.coll.find({x:1})
db.coll.find({x:100})
```
## 插入相同id报错
```
db.coll.insert({x:2, _id:1})
db.coll.insert({x:3, _id:1})
```
## 更新数据
```
db.coll.update({x:1}, {x:999})
db.coll.find().sort({x:-1})
#只改变y的值，其他的值不变
db.coll.update({z:100}, {$set:{y:99}})
#恢复
db.coll.update({z:100}, {$set:{y:100}})
#属性y以外的值会被删除掉
db.coll.update({z:100}, {y:99})
#恢复
db.coll.update({y:99}, {x:100, y:100, z:100})
```
### 嵌套数据结构的更新
```
db.users.insert({
    userId:'001',
    cartList:[
        {
            productName:'苹果',
            productNum:1,
            checked:false
        },
        {
            productName:'香蕉',
            productNum:2,
            checked:true
        }
    ]
})
db.users.find({
    cartList.productName:'苹果'
})
db.users.update({
    userId:'001', 
    'cartList.productName':'苹果'
},{
    $set:{
        'cartList.$.productNum':10
    }
})
```
### 默认只更新第一条数据
```
for(var i=1; i<4; i++){
    db.coll.insert({c:1})
}
db.coll.find({c:1}) //3 results
db.coll.update({c:1}, {c:2}) //1 result modify
db.coll.find({c:1})//2 results
db.coll.find({c:2})//1 result
```
### 修改所有的记录
```
db.coll.update({c:1}, {$set:{c:2}}, false, true)
db.coll.find({c:2})//3 result
```
## 查找的数据不存在自动创建一条
```
#不存在的数据
db.coll.find({y:101})
#更新不存在的数据
db.coll.update({y:101}, {y:999})
#没有数据被修改
db.coll.find({y:999})
#添加参数true
db.coll.update({y:101}, {y:999}, true)
#添加了一条数据
db.coll.find({y:999})
```
# 索引
1. _id索引(默认建立的索引)
2. 单键索引
3. 多键索引
4. 复合索引
    * 查询条件不只有一个时，就需要建立复合索引
    * 插入{x:1, y:2, z:3}记录
    * 按照x与y的值查询
    * 创建索引db.collection.ensureIndex({x1, y:1})
    * 使用{x:1, y:1}作为条件进行查询
5. 过期索引
    * 是在一段时间后会过期的索引
    * 在索引过期后，相应的数据会被删除
    * 适合存储一些在一段时间后会失效的数据，比如用户的登录信息、存储的日志
    * 创建方法：db.coll.ensureIndex({time:1}, {expireAfterSeconds:10})
    * 数据类型必须是ISODate或者ISODate数组，不能使用时间戳，否则不能被自动删除
    * 指定了ISODate数组，则按照最小的时间进行删除
    * 不能是符合索引
    * 删除时间不是精确
        * 删除过程是由后台程序每60s跑一次，而且删除也需要一些时间，所以存在误差
```
db.coll.ensureIndex({time:1}, {expireAfterSeconds:10})
db.coll.insert({time:new Date()})
db.coll.find()
```
6. 全文索引
    * 对字符串与字符串数组创建全文可搜索的索引
    * 适用情况：{author:"", title:"", article:""}
    * 建立方法：
        * db.coll.ensureIndex({"key_1":"text"})
        * db.coll.ensureIndex({"key_1":"text", key_2:"text"})
        * db.coll.ensureIndex({"$**":"text"})(集合中所有字段建立索引)
    * 全文索引查询
        * db.coll.find({$text:{$search:"rr"}})
        * db.coll.find({$text:{$search:"aa bb cc"}}) （包含aa或bb或cc）
        * db.coll.find({$text:{$search:"\"aa\" \"bb\" \"cc\""}}) （引号表示既包括aa又包括bb,cc是一种并的关系）
        * db.coll.find({$text:{$search:"aa bb -cc"}})  (不包括cc)
        * db.coll.find({$text:{$search:"\"aa\" bb cc"}})
    * 全文索引相似度
        * $meta操作符：{score:{$meta:"textScore"}}
        * 写在查询条件后面可以返回结果的相似度
        * 与sort一起使用，可以达到很好的实用效果
        * db.coll.insert({"article":"aa bb"})
        * db.coll.find({$text:{$search:"aa bb"}}, {score:{$meta:"textScore"}})
        * db.coll.find({$text:{$search:"aa bb"}}, {score:{$meta:"textScore"}}).sort({score:{$meta:"textScore"}})
    * 限制
        * 每次查询，只能指定一个$text查询
        * $text查询不能出现在$nor查询中
        * 查询中如果包含了$text,hint不再起作用
        * 全文索引不支持中文
```
db.coll.ensureIndex({"article":"text"})
db.coll.insert({"article":"aa bb cc dd ee"})
db.coll.insert({"article":"aa bb rr gg"})
db.coll.insert({"article":"aa bb cc hh dojiofjofjqjfq"})
db.coll.find({$text:{$search:"rr"}})
db.coll.find({$text:{$search:"aa bb cc"}})
db.coll.find({$text:{$search:"\"aa\" \"bb\" \"cc\""}}) 
db.coll.find({$text:{$search:"aa bb -cc"}})
db.coll.find({$text:{$search:"\"aa\" bb cc"}})
```
7. 地理位置索引
## 索引操作
```
db.coll.getIndexes()
db.coll.ensureIndex({c:1})
```
# 索引属性
## 创建格式
```
db.coll.ensureIndex({param}, {param})
```
第二个参数便是索引的属性
## 指定索引名字
```
db.coll.ensureIndex({x:1,y:1,m:1}, {name:"normal_index"})
db.coll.getIndexes()
```
## 删除指定的索引
```
db.coll.dropIndex("normal_index")
db.coll.getIndexes()
```
## 索引的唯一性
```
db.coll.ensureIndex({m:1, n:1},{unique:true})
db.coll.insert({m:1, n:2})
db.coll.insert({m:1, n:2})
```
这样报错，索引值相同了

## 稀疏性，sparse指定
对不存在的字段不创建索引，这就是稀疏性
```
db.coll.insert({m:1})
db.coll.insert({n:1})
```
只查找存在m字段的记录
```
db.coll.find({m:{$exists:true}})
```
建立稀疏索引
```
db.coll.ensureIndex({m:1},{spare:true})
```
有稀疏索引，false处于监控之外
```
db.coll.find({m:{$exists:false}})
```
强制使用索引(新版本似乎解决了这个问题)
```
db.coll.find({m:{$exists:false}}).hint("m_1")
```
## 地理位置索引
* 概念：将一些点的位置存储在MongoDB中，创建索引后，可以按照位置来查找其他点
    * 2d索引`[平面地理位置索引]`，用于存储和查找平面上的点
    * 位置表示方式：经纬度[经度， 维度]
    * 取值范围：经度[-180,180] 维度[-90, 90]
    * 2dsphere索引`[球面地理位置索引]`，用户存储和查找球面上的点
* 查找方式
    * 查找距离某个点一定距离内的点
    * 查找包含在某区域内的点
* 创建方式
```
db.location.ensureIndex({w:"2d"})
db.location.insert({w:[1, 1]})
db.location.insert({w:[1, 2]})
db.location.insert({w:[3, 2]})
db.location.insert({w:[100, 100]})
db.location.insert({w:[180, 80]})
db.location.insert({w:[200, 100]})
```
最后报错，超出了指定的范围
* 查询方式
    * $near查询：查询距离某个点最近的点
```
db.location.find({w:{$near:[1,1]}})
db.location.find({w:{$near:[1,1],$maxDistance:10}})
```
    * $geoWithin查询：查询某个形状内的点
```
db.location.find({
    w:{
        $geoWithin:{
            $box:[[0,0], [3,3]]
        }
    }
})
db.location.find({
    w:{
        $geoWithin:{
            $box:[[1,1], [2,3]]
        }
    }
})
db.location.find({
    w:{
        $geoWithin:{
            $center:[[0, 0], 5]
        }
    }
})
db.location.find({
    w:{
        $geoWithin:{
            $polygon:[[0, 0], [0,1], [2,5], [6,1]]
        }
    }
})
```
### 2d索引
形状的表示：  
1. $box:矩形使用 {$box:[[x1, y1], [x2,y2]]}
2. $center圆形使用 {$center:[[x1, y1], r]}
3. $polygon:多边形使用 {$polygon:[[x1,y1], [x2,y2], [x3,y3]]}
### runCommand命令
```
db.runCommand({
    geoNear:"location",
    near:[1,2],
    //minDistance:10,(对2d索引无效)
    maxDistance:10,
    num:1
})
```
### 2dsphere索引
* 概念：球面地理位置索引
```
db.collection.ensureIndex({
    w:"2dsphere"
})
```
* 位置表示  
    * GeoJSON:描述一个点，一条直线，多边形等形状
* 格式
    * {type:"", coordinates:[coordinates]}
# 创建用户
* 内置角色类型
    * read, readWrite, dbAdmin, dbOwner, userAdmin
* 创建用户
```
db.createUser({
    user:"admin",
    pwd:"123456",
    roles:[
        {
            role:"userAdmin",
            db:"imooc"
        }
    ]
})
```
退出重进需要密码[现在不需要密码]
