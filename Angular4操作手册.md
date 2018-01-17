# Angular-CLI
快速创建Angular2项目及组件
```
new generate
```
## 安装
```
npm install -g @angular/cli
```
## 检查版本号
```
sudo ng version
```
## 执行步骤1
```
sudo ng new my-app
cd my-app
ng serve
```
## 执行步骤2[推荐]
```
sudo ng new my-app --skip-install
cd my-app
sudo cnpm install
ng serve --open
```
`--skip-install`只是模拟一下创建的过程,但不安装  
打开[http://localhost:4200](http://localhost:4200)查看项目
## ng new简介
开发辅助,模拟项目创建一遍,不创建任何文件(--dry-run)  
修改项目默认值(--prefix)  
```
# 查看ng的所有命令
ng
ng new demo01 --dry-run
```
## ng serve简介
在某个端口启动
```
ng serve --port 8080
```
# ng generate简介
生成某个组件
```
sudo ng g component test
```
* 生成的component默认注册到模块中  
* 生成的service默认不注册
* component注册到declarations中  
* service注册到providers中
生成某个服务记得修改成`"@angular/cli": "1.2.6",`就是降级处理,不然创建服务失败
```
sudo ng g service test -m app.module
```
## 创建路由
```
sudo ng new router --routing  --skip-install
```
## 运行测试用例
```
sudo ng test
```
## 构建项目
```
sudo ng build
```
## 查看占用磁盘情况
```
du -h dist
```
## 压缩
```
sudo ng build -prod
```
## 更改文件夹权限
```
sudo chown -R haohailiang stock/
```
