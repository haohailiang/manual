| 选项 | 含义                     |备注                             |
| ------ | -------------------------- |--------------------------|
| yy | 复制当前行 |cop(y)|
| nyy | 复制多行,需要自己数 ||
| u | 撤回 |undo|
| ctrl + r | 重做撤回的操作 |redo|
| :x | 保存 ||
| :wq | 保存 ||
| :20 | 跳转到第20行 ||
| dd | 删除当前行 |(d)elete|
| 5dd | 删除从当前开始连续的5行 ||
| 0 | 跳转到行首 ||
| d0 | 删除到行首 |delete 0|
| $ | 跳转到行尾 ||
| d$ | 删除到行尾 |delete $|
| O | 在上边新建一行 ||	
| o | 在下边新建一行 ||
| gg | 跳转到文件顶部 ||
| G | 跳转到文件尾部 ||
| dG | 全部删除 ||
| % | 括号匹配及切换 |()[]{}|
| v | 精确选择 ||
| V | 整行选择 ||
| :set nu | 显示行号 ||
| b | 向左移动一个单词 ||
| w | 向右移动一个单词 ||
| yy | 复制当前行 ||
| yw | 在单词前复制一个单词 ||
| /hello | 查找hello |n: 下一个 N: 上一个|
| %s///g ||
| :%s/old/new/gc | 全局替换 |(g)lobal, (c)onfirm|
| p | 粘贴一个单词 |(p)aste|
| :sp | 横向分屏 |(sp)lite|
| :vsp | 纵向分屏 |(v)ertical (sp)lite|
| ctrl + w, w | 切换窗口 ||
| ctrl + w, c | 关闭窗口 |(c)lose|
| ctrl + w, o | 关闭其他窗口 |(o)thers|
| ctrl + l | 清屏 |c(l)ear|
| ctrl + c | 退出insert模式 ||
| ESC | 退出insert模式 ||
| ggvG | 全部选中 ||
| 2,3d | 2行到3行删除 ||
| 39:53> | 39行到53行批量缩进 ||
| ctrl - b | ↑ Page |  backward|
| ctrl - f | ↓ Page | forward |
| ctrl - y | 向上滚屏 ||
| ctrl - e | 向下滚屏 ||
| ctrl - u | 向上滚动半屏 ||
| ctrl - d | 向下滚动半屏 ||
| H | 屏幕顶部 |head|
| M | 屏幕中部 |middle|
| L | 屏幕底部 |low|
| zz | 让光标所在的行居屏幕中央 ||
| zt | 让光标所在的行居屏幕最上一行 ||
| zb | 让光标所在的行居屏幕最下一行 ||
## vi
vi file.name 文件行首  
vi file.name + 文件行尾
vi file.name + 12 定位到第12行
## 创建双层目录
```
mkdir -p code/string
```
## 简单查找
```
find . -name "xxx"
```
## 在文件中查找
```
grep liangxu /etc/passwd
```
## 打zip包
```
zip -r dir.zip dir/
```
## 解zip包
```
unzip files.zip
```

## 当前目录及子目录查找name为node_modules并删除
```
find . -name node_modules |xargs rm -rf
```
## 查找某个目录下包含class的字符串
```
find .| xargs grep -ri "class" 
```
## 文件按时间排序
```
# 时间最近的在前面[lt: list time]
ls -lt
# 时间从前到后[ltr: list time reverse]
ls -ltr 
```
## 除什么外全部删除
```
rm -rf !(file1|file2) 
```
## 查看前2行
```
head -n 2 package.json 
```
## 查看末尾2行
```
tail -n 2 package.json
```
## 端口占用情况
```
lsof -i tcp:3000
```
## 杀死进程
```
sudo kill -9 PID号
```
## 搜索某个关键字
```
set hlsearch
命令行
	/字符串
	查找下一个 n
```
