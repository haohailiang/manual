| 选项 | 含义                     |备注                             |
| ------ | -------------------------- |--------------------------|
| yy | 复制当前行 |cop(y)|
| nyy | 复制N行,需要自己数 ||
| u | 撤回 |undo|
| ctrl + r | 重做撤回的操作 ||
| 0 | 跳转到行首 ||
| $ | 跳转到行尾 |
| O | 在上边新建一行 ||	
| o | 在下边新建一行 ||
| :set nu | 显示行号 ||
| dd | 删除当前行 ||
| b | 向左移动一个单词 ||
| w | 向右移动一个单词 ||
| yy | 复制当前行 ||
| yw | 在单词前复制一个单词 ||
| p | 粘贴一个单词 ||
| :n | 跳转到第 n 行 ||
| ggvG | 全部选中 ||
| dG | 全部删除 ||
| 2,3d | 2行到3行删除 ||
| 39:53> | 39行到53行批量缩进 ||
| ctrl - f | 向上滚动一屏 ||
| ctrl - b | 向下滚动一屏 ||
| ctrl - u | 向上滚动半屏 ||
| ctrl - d | 向下滚动半屏 ||
| zz | 让光标所在的行居屏幕中央 ||
| zt | 让光标所在的行居屏幕最上一行 ||
| zb | 让光标所在的行居屏幕最下一行 ||
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
## 创建双层目录
```
mkdir -p code/string
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
