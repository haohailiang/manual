安装指定名字的包会下载到当前目录下 node_modules/<projectname>
```
npm install <packagename>
npm install <packagename>@<version>     # 按版本号安装
npm install <packagename>@<tagname>     # 按发布tag
npm install <packagename>@">=<version>" # 按版本范围
npm install git://<gitdomain>           # 按git路径
```
将安装包保存到全局目录(/usr/local/lib/node_modules)下
```
npm install <packagename> -g
npm installl lodash
```
![image.png](http://upload-images.jianshu.io/upload_images/9008880-f6471f1f61bfd62e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

卸载包
```
npm uninstall lodash
npm list
```
![image.png](http://upload-images.jianshu.io/upload_images/9008880-05a3e6e1566afa31.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

会按目录package.json文件中 dependencies在本地下载相关包
```
npm install 
```
更新指定的包
```
npm <packagename>
```
查看所有的已安装的包
```
npm list
```
![image.png](http://upload-images.jianshu.io/upload_images/9008880-64e3f1bc9054ee9a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
查看当前包是否有新版本
```
npm outdated
```
![image.png](http://upload-images.jianshu.io/upload_images/9008880-43a803adf57d9035.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
到指定包的主页上去
```
npm home <packagename>
npm home jquery
npm home lodash
```
约几秒钟打开包的主页
