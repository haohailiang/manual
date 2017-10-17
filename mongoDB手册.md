# mongoDB使用方法
参考网址： [http://www.imooc.com/article/18438](http://www.imooc.com/article/18438)
* 下载安装包或者解压包
	1. 所有版本的下载地址
		https://www.mongodb.org/dl/win32/x86_64-2008plus-ssl?_ga=2.151895739.305488091.1507777819-1102516224.1507777819
	2. 目标版本的下载地址
		http://downloads.mongodb.org/win32/mongodb-win32-x86_64-2008plus-ssl-3.2.3-signed.msi?_ga=2.151895739.305488091.1507777819-1102516224.1507777819
	3. 客户端工具下载
		[mongovue](https://pan.baidu.com/s/1mhPejwO)
* 添加DB存储和日子存储文件
```
1. mkdir mongoDB
2. cd mongoDB
3. mkdir data etc logs
4. cd etc
5. vim mongo.conf
6. 
```
* 添加服务,配置环境变量,启动mongoDB
```
C:\Program Files\MongoDB\Server\3.2\bin>mongod --dbpath c:\MongoDB\data --journal --storageEngine=mmapv1
```
* 在浏览器上浏览
```
http://localhost:27017
```
* 利用配置文件进行启动
```
#mongo.conf

#数据库路径
dbpath=c:\MongoDB\data\
#日志输出文件路径
logpath=c:\MongoDB\logs\mongodb.log
#错误日志采用追加模式，配置这个选项后mongodb的日志会追加到现有的日志文件，而不是从新创建一个新文件
logappend=true
#启用日志文件，默认启用
journal=true
#这个选项可以过滤掉一些无用的日志信息，若需要调试使用请设置为false
quiet=false
#端口号 默认为27017
port=27017
#指定存储引擎（默认先不加此引擎，如果报错了，大家在加进去）
storageEngine=mmapv1
```
启动命令如下
```
C:\Program Files\MongoDB\Server\3.2\bin>mongod --config C:\MongoDB\etc\mongo.conf
```
启动日志都纪录到日志文件当中了[原先在控制台上]
# 安装mongoVUE
windows mongoVUE  
mac	   mongoHUB
# MongoDB创建用户
* 创建管理员
* 授权认证
* 给使用的数据库添加用户