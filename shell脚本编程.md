## 变量的高级用法
### 变量替换
| 语法                  | 说明                                                      |
| ----------------------- | ----------------------------------------------------------- |
| ${变量名#匹配规则} | 从变量开头进行规则匹配，将符合最短的数据删除 |
| ${变量名##匹配规则} | 从变量开头进行规则匹配，将符合最长的数据删除 |
| ${变量名％匹配规则} | 从变量尾部进行规则匹配，将符合最短的数据删除 |
| ${变量名%%匹配规则} | 从变量尾部进行规则匹配，将符合最长的数据删除 |
| ${变量名/旧字符串/新字符串} | 变量内容符合旧字符串则，则第一个旧字符串会被 新字符串威代 |
| ${变量名//旧字符串/新字符串} | 变量内容符合旧字符串则，则全部的旧字符串会被 新字符串取代 ^ |
```
variable_1="I love you, Do you love me"
echo $variable_1
> I love you, Do you love me 

var1=${variable_1#*ov}
echo $var1
> e you, Do you love me

var2=${variable_1##*ov}
echo $var2
> e me

var3=${variable_1%ov*}
echo $var3
> I love you, Do you l

var4=${variable_1%%ov*}
echo $var4
> I l

echo $PATH
> /Users/haohailiang/.rvm/gems/ruby-2.3.3/bin:/Users/haohailiang/.rvm/gems/ruby-2.3.3@global/bin:/Users/haohailiang/.rvm/rubies/ruby-2.3.3/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/haohailiang/.rvm/bin
var5=${PATH/path/PATH}
echo $var5  
> /Users/haohailiang/.rvm/gems/ruby-2.3.3/BIN:/Users/haohailiang/.rvm/gems/ruby-2.3.3@global/bin:/Users/haohailiang/.rvm/rubies/ruby-2.3.3/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/haohailiang/.rvm/bin

var6=${PATH//bin/BIN}
echo $var6
> /Users/haohailiang/.rvm/gems/ruby-2.3.3/BIN:/Users/haohailiang/.rvm/gems/ruby-2.3.3@global/BIN:/Users/haohailiang/.rvm/rubies/ruby-2.3.3/BIN:/usr/local/BIN:/usr/BIN:/BIN:/usr/sBIN:/sBIN:/Users/haohailiang/.rvm/BIN
```
### 变量测试 [比较少用]
| 变量配置方式 | St頒有配置 | Str^j空字符串 | Str已配置且非空 |
| ------------ | ---------- | ------------- | --------------- |
| var=${str-expr} | var=expr | var= | var=$str |
| var=${str:-expr} | var=expr | var=expr | var=$str |
| var=${str+expr} | var= | var=expr | var=expr |
| var=${str:+expr} | var= | var= | var=expr |
| var=${str=expr} | var=expr | var= | var=$str |
| var={str:=expr} | var=expr | var=expr | var=$str |
### 计算字符串长度
|  | 语法 | 说明 |
| ------ | --------------------- | ---------------------------- |
| 方法一 | ${#string} | 无 |
| 方法二 | expr length "$string" | string有空格，则必须加双引号 |
```
var1="Hello World"
len=${#var1}
echo $len 
> 11

len2=`expr length "$var1"`
echo $len2
> 11
```
### 获取子串在字符串中的索引位置 [用的不多]
语法： expr index $string substr
`tps:`   
1. 长度是从1开始计算的  
2. 会把substr分成一个一个字符来查找，先找到哪个就返回哪个
```
var1="quickstart is a app"
ind=`expr index "$var1" start`
echo $ind
> 6

var1="quickstart is a app"
ind2=`expr index "$var1" uniq`
echo $ind2
> 1

ind3=`expr index "$var1" cnk`
echo $ind3
> 4
```
### 计算子串长度 [平时用的不多]
语法： expr match $string substr
`tps:` match必须从头开始匹配，从中间匹配都会找不到
```
var1="quickstart is a app"
ind=`expr match "$var1" app`
echo $ind
> 0

ind=`expr match "$var1" quick`
echo $ind
> 5

ind=`expr match "$var1" quick.*`
echo $ind
> 19
```
### 抽取子串
|        | 语法                                | 说明                           |
| ------ | ------------------------------------- | -------------------------------- |
| 方法一 | ${string:position} | 从string中的position开始 |
| 方法二 | ${string:position:length} | 从position开始，匹配长度为length |
| 方法三 | ${string: -position} | 从右边开始匹配 |
| 方法四 | ${string:(position)} | 从左边开始匹配 |
| 方法五 | expr substr $string $position $length | 从position开始，匹配长度为length |
`tps: `  
1. 使用expr索引计数是从1开始  
2. 使用${string:position}索引计数是从0开始
```
var1="kafka hadoop yarn mapreduce"
substr_1=${var1:10}
echo $substr_1
> op yarn mapreduce

substr_2=${var1:10:5}
echo $substr_2
> op ya

substr_3=${var1: -5}
echo $substr_3
> educe

substr_4=${var1:(-5)}
echo $substr_4
> educe

substr_5=${var1: -5:2}
echo $substr_5
> ed

substr_6=`expr substr "$var1" 10 5`
echo $substr_6
> oop y
```
### 字符串处理例子
需求描述：  
变量string="Bigdata process framework is Hadoop,Hadoop is an open source project"  
执行脚本后，打印输入字符串变量，并给出用户以下选项：
1. 打印string长度"  
2. 在整个字符串中删除Hadoop"  
3. 替换第一个Hadoop为Mapreduce"  
4. 替换全部Hadoop为Mapreduce"  
用户输入数字 1 | 2 | 3 | 4，可以执行对应项的功能；输出 q | Q 则退出交互模式  
思路分析：  
1. 将不同的模块划分，并编写函数  
```
tips_info
print_len
del_hadoop
rep_hadoop_mapreduce_first
rep_hadoop_mapreduce_all
```
2. 实现第1步定义的功能函数
3. 程序主流程设计
```
string="Bigdata process framework is Hadoop,Hadoop is an open source project"
function tips_info
{
	echo "******************************************"
	echo "***  (1) 打印string长度"
	echo "***  (2) 在整个字符串中删除Hadoop"
	echo "***  (3) 替换第一个Hadoop为Mapreduce"
	echo "***  (4) 替换全部Hadoop为Mapreduce"
	echo "******************************************"
}

function print_len
{
	echo "${#string}"
}

function del_hadoop
{
	echo "${string//Hadoop/}"
}

function rep_hadoop_mapreduce_first
{
	echo "${string/Hadoop/Mapreduce}"
}

function rep_hadoop_mapreduce_all
{
	echo "${string//Hadoop/Mapreduce}"
}

while true
do
    echo "【string=\"$string\"】"
    tips_info
    read -p "Please Switch a Choice: " choice
    
    case $choice in
	    1)
		print_len
		;;
	    2)
		del_hadoop
		;;
	    3)
		rep_hadoop_mapreduce_first
		;;
	    4)
		rep_hadoop_mapreduce_all
		;;
	    q|Q)
		exit
		;;
    esac
done
```
### 语法格式
|        | 语法格式 |
| ------ | ---------- |
| 方法一 | `command`  |
| 方法二 | $(command) |
```
# delimiter 分隔符
# fields 字段
# 选取分割后的第一个字段
cat /etc/passwd | cut -d ":" -f 1
```
脚本：
```
index=1

for user in `cat /etc/passwd | cut -d ":" -f 1`
do
	echo "This is $index user: $user"
	index=$(($index + 1))
done
```
### 根据系统时间计算今年或明年
```
echo "今年是$(date +%Y)年"
echo "明年是$(($(date +%Y)+1))年"
```
普通的计算
```
num1=10
num2=20
echo "num1 + num2 = $(($num1 + $num2))"
```
### 根据系统时间获取今年还剩多少星期，已经过了多少星期
`tps: `赋值的时候不能有空格
```
date_of_year=$(date +%j)
last_of_year=$((365 - $date_of_year))
echo "已经过了$(date +%j)天"
echo "已经过了$(($(date +%j) / 7))周"
echo
echo "已经过了$date_of_year天"
echo "已经过了$(($date_of_year / 7))周"
echo
echo "还剩$last_of_year天"
echo "还剩$(($last_of_year / 7))周"
echo
echo "还剩$((365 - $(date +%j)))天"
echo "还剩$(((365 - $(date +%j)) / 7))周"
echo
```
### 判断ngix进程是否存在，若不存在，自动拉起改程序
wc 统计命令行数
```
ps -ef | grep nginx | grep -v grep | wc -l
```
关闭服务
```
systemctl stop nginx
```
```
#!/bin/bash
#

nginx_process_num=$(ps -ef | grep nginx | grep -v grep | wc -l)

if [ $nginx_process_num -eq 0 ];then
	systemctl start nginx
fi

```
### declare和typeset命令
* declare命令和 typeset命令两者等价
* declare、typeset命令都是用来定义变量类型的
### declare命令参数表
| 参数 | 含义                             |
| ---- | ---------------------------------- |
| -r   | 将变量设为只读 |
| -i   | 将变量设为整数 |
| -a   | 将变量定义为数组 |
| -f   | 显示此脚本前定义过的所有函数及内容 |
| -F   | 仅显示此脚本前定义过的函数名 |
| -x   | 将变量声明为环境变量 |
```
# -f  列出系统中所有的函数和函数体
declare -f

# 定义一个数组
declare -a array
array=("aaa" "bbb" "ccc" "ddd")

# 输出全部内容
echo ${array[@]}
# 输出下标为1的内容
echo ${array[1]}

# 获取数组的长度
echo ${#array}
# 获取下标为2的元素长度
echo ${#array[2]}

# 给某个下标元素赋值
array[0]="hahahahhaah"

# 内容替换
echo ${array[1]/bbb/BBB}

# 数组遍历
declare -a array
array=("aaa" "bbb" "ccc" "ddd")

for v in ${array[@]}
do
    echo $v
done

# 声明环境变量
num5=100
declare -x num5
# 脚本中也可以访问到
echo $num5
```
### expr
|        | 语法                    |
| ------ | ------------------------- |
| 方法一 | expr $num1 operator $num2 |
| 方法一 | $(($num1 operator $num2)) |
### 操作符对照表一
| 操作符   | 含义 |
| ----------- | ---- |
| num1 + num2 | 求和 |
| num1 - num2 | 求差 |
| num1 * num2 | 求积 |
| num1 / num2 | 求商 |
| num1 % num2 | 求余 |
### 操作符对照表二
| 操作符   | 含义                                |
| ----------- | ------------------------------------- |
| num1 | num2 | num1不为空且非0,返回num1;否则返回num2 |
| num1 & num2 | num1不为空且非0,返回num1;否则返回0 |
| num1 < num2 | num1小于num2,返回1;否则返回0 |
| num1 <= num2 | num1小于等于num2,返回1;否则返回0 |
| num1 = num2 | num1等于num2,返回1;否则返回0 |
| num1 = num2 | num1不等于num2,返回1;否则返回0 |
| num1 > num2 | num1大于num2,返回1;否则返回0 |
| num1 >= num2 | num1大于等于num2,返回1;否则返回0 |
### 正整数求和小例子
提示用户输入一个正整数num,然后计算1+2+3+...+num的值，必须对num是否是正整数做判断，不符合应当允许再次输入。  
特性：  
1. expr只能进行整数进行运算，其他会报错
2. expr $? 结果不为0说明有错
```
#!/bin/bash
#

while true
do
	read -p "pls input a positive number: " num

	expr $num + 1 &> /dev/null

	if [ $? -eq 0 ];then
		if [ `expr $num \> 0` -eq 1 ];then
			for((i=1;i<=$num;i++))
			do
				sum=`expr $sum + $i`
			done	
			echo "1+2+3+....+$num = $sum"
			exit
		fi
	fi
	echo "error,input enlegal"
	continue
done
```
### bc
* bc是bash内置的运算器，支持浮点数计算
* 内置变量scale可以设置，默认为0
### bc操作符对照表
| 操作符   | 含义 |
| ----------- | ---- |
| num1 + num2 | 求和 |
| num1 - num2 | 求差 |
| num1 * num2 | 求积 |
| num1 / num2 | 求商 |
| num1 % num2 | 求余 |
| num1 ^ num2 | 指数 |
```
echo "23+50" | bc
echo "scale=4;23/7" | bc
```
bash脚本
```
#!/bin/bash
#

read -p "num1: " num1
read -p "num2: " num2

num3=`echo "scale=4;$num1/$num2" | bc`

echo "$num1 / $num2 = $num3"
```
### 函数定义和使用
* LinuⅹShel中的函数和大多数编程语言中的函数一样
* 将相似的任务或代码封装到函数中,供其他地方调用
```
# 语法1
name() 
{
    command1
    command2
    ......
    commandN
}

# 语法2
function name
{
    command1
    command2
    ......
    commandN
}
```
### 如何调用函数
* 直接使用函数名调用,可以将其想象成shell中的一条命令
* 函数内部可以直接使用参数$1、$2....$n
* 调用函数: function_name $1 $2
```
# 方法1
print_num()
{
    for((i=0; i<=10; i++))
    do
        echo "$i"
    done
}

print_num

# 方法2
function print_num
{
    for((i=0; i<=10; i++))
    do
        echo "$i"
    done
}

print_num
```
shell传参
```
function name
{
    echo "Hello $1"    
    echo "Hello $2"    
}

# 函数调用
name "shenteng" "mary"
```
守护进程
```
this_pid=$$
sleep 3
echo
echo "休息3S, 时间：$(date +%S)S pid号为$this_pid"
sleep 3
echo
echo "休息3S, 时间：$(date +%S)S pid号为$this_pid"
```
在后台运行进程
```
nohub sh bbc.sh &
```
### 使用return返回值
* 使用return返回值,只能返回1-255的整数
* 函数使用return返回值，通常只是用来供其他地方调用获取状态,因此通常仅返回0或1；0表示成功，1表示失败
* 直接return，就是return 0，可以简写成return
### 使用echo返回值
* 使用echo可以返回任何字符串结果
* 通常用于返回数据，比如一个字符串值或者列表值
判断nginx是否在运行
```
this_pid=$$

function is_nginx_running
{
	ps -ef | grep nginx | grep -v grep | grep -v $this_pid &> /dev/null
	if [ $? -eq 0 ];then
		return
	else
		return 1
	fi
}

is_nginx_running && echo "Nginx is running" || echo "Nginx is stoped"
```
获取系统的用户
```
# 以冒号为分隔符
# 第1个字段
get_users()
{
    users=`cat /etc/passwd | cut -d: -f1`
    echo "$users"
}
get_users
```
方法2
```
get_users()
{
    users=`cat /etc/passwd | cut -d: -f1`
    echo $users
}
user_list=`get_users`
index=1
for u in $user_list
do
    echo "The $index user is : $u"
    # index=$(($index + 1))
    index=`expr $index + 1`
done
```
### 全局变量
* 不做特殊声明，She中变量都是全局变量
* Tips：大型脚本程序中函数中慎用全局变量
### 局部变量
* 定义变量时，使用local关键字
* 函数内和外若存在同名变量，则函数内部变量覆盖外部变量
```
var1="Hello world"

function test
{
	local var2=87
    var3=100
}

echo "函数未调用[全局]：var1 = $var1"
echo "函数未调用[局部]：var2 = $var2"
echo "函数未调用[函数内部]：var3 = $var3"

test

echo "函数已经调用[全局]：var1 = $var1"
echo "函数已经调用[局部]：var2 = $var2"
echo "函数已经调用[函数内部]：var3 = $var3"
```
### 函数库例子
函数库:
定义一个函数库,该函数库实现以下几个函数:
1、加法函数add
2、减法函数reduce
3、乘法函数multip1e
4、除法函数divide
5、打印系统运行情况的函数sys_1oad,该数可以显示内存运行情况
```
# base_function.lib
function add
{
	echo "`expr $1 + $2`"
}

function reduce
{
	echo "`expr $1 - $2`"
}

function multiple
{
	echo "`expr $1 \* $2`"
}

function divide
{
	echo "`expr $1 / $2`"
}

function sys_load
{
	echo "Memory Info"
	echo
	free -m
	echo
	
	echo "Disk Usage"
	echo
	df -h
	echo
}
```
主函数文件
`tps: `引用路径使用绝对路径
```
. /root/shell_learn/base_function.lib
add 12 23
reduce 90 30
multiple 12 12
divide 12 2
```
### find
find [路径] [选项] [操作]
### 选项参数
| 选项 | 含义                     |
| ------ | -------------------------- |
| -name | 根据文件名查找 |
| -iname | 根据文件名查找，不区分大小写 |
| -perm | 根据文件权限查找 |
| -prune | 该选项可以排除某些查找目录 |
| -user | 根据文件属主查找 |
| -group | 根据文件属组查找 |
| -mtime -n / +n | 根据文件更改时间查找[n单位为天] |
| -nogroup | 查找无有效属组的文件 |
| -nouser | 查找无有效属主的文件 |
| -newer file1 ! file2 | 查找更改时间比file1新但比file2旧IDE文件 |
| -type | 按文件类型查找 |
| -size -n / +n | 按文件大小查找-n是大于n的文件 |
| -mindepth n | 从n级子目录开始搜索 |
| -maxdepth n | 最多搜索到n级子目录 |
`-name: ` find /etc -name .conf    
`-iname: ` find /etc -iname namespace  
`-perm: ` find -perm 664  
`-prune: ` 通常和-path一起使用，用于将特定目录排除在搜索条件之外  
```
# 查找当前目录下所有普通文件，但排除test目录
find . -path ./
```
`-user: ` find . -user root  
`-size: ` find /etc -size +1M  
`-nogroup:` 用户组解散了，删除了，这个就是无有效组事件  
### grep
* grep [option] [pattern] [file1, file2...]
* command | grep [option] [pattern]
| 选项 | 类型                                    |
| ---- | ----------------------------------------- |
| -v   | 不显示匹配行信息 |
| -i   | 搜索时忽略大小写 |
| -n   | 显示行号 |
| -r   | 递归搜索 |
| -E   | 支持扩展正则表达式 |
| -F   | 不按正则表达式匹配,按照字符串字面意思匹配 |
| -c   | 只显示匹配行总数 |
| -w   | 匹配整词 |
| -x   | 匹配整行 |
| -l   | 只显示文件名,不显示内容 |
| -s   | 不显示错误信息 |
```
# 查找bbc.sh文件中的add文本
grep add bbc.sh

# 反选，除了匹配的不显示，其他行都显示
grep -v add bbc.sh

# 忽略大小写匹配
grep -vi ADD bbc.sh 

# 显示行号
grep -n add bbc.sh 

# 使用正则表达式
grep -n "ad*" bbc.sh 

# 强悍的正则表达式
grep -nE "add|reduce" bbc.sh 

# 按文本字符串匹配，不按正则
grep -nF "add|reduce" bbc.sh 

# 多个文件进行查找
grep -n "add" base_function.lib bbc.sh 

# 递归搜索
grep -r add

# 只显示匹配行总数
grep -c reduce bbc.sh   

# 匹配整个单词
grep -nw reduce bbc.sh

# 匹配整行
grep -nw "reduce 12 23" bbc.sh
```
### sed 
stream editor, 流编辑器。对标准输出或文件逐行进行处理。
### 语法
* stdout | sed [option] "pattern command"
* sed [option] "pattern command" file
`tps: ` pattern对当前行模式的匹配
### sed选项
| 选项 | 类型                            |
| ---- | --------------------------------- |
| -n | 只打印模式匹配行 |
| -e | 直接在命令行进行sed编辑,默认选项 |
| -f | 编辑动作保存在文件中,指定文件执行 |
| -r | 支持扩展正则表达式 |
| -i | 直接修改文件内容 |
```
# 对每一行只打印输出
# 每行输出双份，原行信息会输出，匹配信息再输出一下
sed 'p' sed.txt 

# 只打印模式匹配行
sed -n 'p' sed.txt 

# 包含HADOOP模式的打印出来
sed -n '/HADOOP/p' sed.txt 

# 匹配2种模式
sed -n -e '/HADOOP/p' -e '/hadoop/p' sed.txt 
```
比较复杂的命令保存在文件中
```
# edit.sed 
/HADOOP/p

# command line
sed -n -f edit.sed sed.txt

# 支持扩展正则表达式
sed -n -r  '/hadoop|HADOOP/p' sed.txt

# 同时使用p就会把替换的内容输出出来，对源文件没有影响
sed -n 's/love/like/g;p' sed.txt

# 直接修改文件内容，匹配的会全部替换，都是全部替换
sed -i 's/love/like/' sed.txt
sed -i 's/love/like/g' sed.txt
```


