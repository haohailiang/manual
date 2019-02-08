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
```