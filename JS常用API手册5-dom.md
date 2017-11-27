* window.history.go(-1)
* window.history.forward()
* window.history.back()
* JS弹出的窗口可以用JS关闭，而没有提示
* window.status="123"
* window.location.reload()
* setTimeout一般是用匿名函数
* window.location === document.location[他们引用的是同一个对象]
console.dir(location);//遍历location对象的所有属性
```
"http://image.baidu.com/channel?c=宠物#宠物"
hash	1.#最后的内容		eg:"#宠物"
host    2.主机名			eg:"image.baidu.com"
hostName   3.主机名			eg:"image.baidu.com"
port       4.端口			eg:""
pathName   5.除去host之外的名字		eg:"/channel"
protocol	"http:"
search     eg:"?c=宠物"
href       eg:"http://image.baidu.com/channel?c=宠物#宠物"
```
常用：
```javascript
window.location.href="your url";	//有历史记录
window.location.reload(true);//强制刷新
window.location.reload();//缓存刷新
window.location.replace("you url");		//没有历史记录
```
* Navigator
# frame
* contentWindow	返回内嵌的网页窗口对象
* window.parent返回父窗口
# 浏览器检测
主要以下2种：
* userAgent字符串检测
* 对象检测
# DOM
* label for属性 document.getElementsByTagName("label")[0].htmlFor
* 文档根节点
```javascript
document.documentElement //就是html标签
```
# table
```javascript
table.caption	//获取caption节点[唯一]
table.tHead		//获取head节点[唯一]
table.tFoot		//获取foot节点[唯一]
table.tBodies		//获取全部的body

//行和单元格的操作
table.rows	//返回所有的行
table.rows[rowIndex].cells	//返回所有的行
oneRow.rowIndex	//获取下标
oneRow.sectionRowIndex	//当前tbody中的下标，不是全局的
oneCell.cellIndex	//获取单元下标
//表头的操作
table.createCaption();	//没有的创建新表头，有的返回已有的表头
table.createTHead();
table.createTFoot();

table.deleteCaption();
table.deleteTHead();
table.deleteTFoot();

table.insertRow(rowIndex);
row.insertCell(cellIndex);

table.deleteRow(rowIndex);
row.deleteCell(cellIndex);
```
# document属性
| 属性         | 描述                                  |
|--------------|---------------------------------------|
| cookie       | 设置或返回与当前文档有关的所有 cookie |
| domain       | 返回当前文档的域名                    |
| lastModified | 返回文档被最后修改的日期和时间        |
| referrer     | 返回载入当前文档的文档的 URL          |
| title        | 返回当前文档的标题                    |
| URL          | 返回当前文档的 URL                    |
# nodelist
* nodelist.item()	返回 NodeList 中位于指定下标的节点。
* nodelist.length	返回 NodeList 中的节点数。
# 元素节点属性
* 	element.id	设置或返回元素的 id。
* 	element.attributes	返回元素属性的 NamedNodeMap，包含一个NamedNodeMap，与NodeList类似[太麻烦，主要是遍历属性的时候使用]
```javascript
element.attributes[attName].nodeValue
element.attributes[attName].nodeValue = '自定义数值'
```
* 	element.className	设置或返回元素的 class 属性
* 	element.classList.add(className);
* 	element.classList.remove(className);
* 	element.setAttribute()	把指定属性设置或更改为指定值。
* 	element.getAttribute(attName)	返回元素节点的指定属性值
* 	element.removeAttribute()	从元素中移除指定属性。
* 	element.setAttributeNode(attName, attVal)	设置或更改指定属性节点。
* 	element.getAttributeNode(attName)	返回指定的属性节点
* 	element.removeAttributeNode()	移除指定的属性节点，并返回被移除的节点。
* 	element.nodeName	返回元素的名称。
* 	element.tagName	返回元素的标签名。
* 	element.nodeType	返回元素的节点类型。
*	element.nodeValue	设置或返回元素值。
*	element.title	设置或返回元素的 title 属性。
# 节点类型
| 节点类型          | 数值常量 | 字符常量       |
|-------------------|:--------:|----------------|
| Element(元素节点) |     1    | ELEMENT_NODE   |
| Attr(属性节点)    |     2    | ATTRIBUTE_NODE |
| Text(文本节点)    |     3    | TEXT_NODE      |
| Comment(注释节点) |     8    | COMMENT_NODE   |
# 属性判定
* attr.isId	如果属性是 id 类型，则返回 true，否则返回 false。
* attr.name	返回属性的名称。
* attr.value	设置或返回属性的值。
* nodemap.item()	返回 NamedNodeMap 中位于指定下标的节点。
* nodemap.length	返回 NamedNodeMap 中的节点数。
* nodemap.removeNamedItem()	移除指定的属性节点。
* nodemap.setNamedItem()	设置指定的属性节点（通过名称）。
# 属性-CSS类
*	element.style	设置或返回元素的 style 属性。
# 属性-HTML代码/文本/值
*	element.innerHTML	设置或返回元素的内容。
*	element.innerText[IE下会解析标签]
*	element.textContent[FF下忽略标签，但是按照代码的编写样式进行显示]
*	element.outerHTML  获取元素内容(包含元素自身)
*	element.outerText
# 创建元素节点
*	document.crateAttribute(name)：　　　　　 　　用指定名称name创建特性节点
*	document.createComment(text)：　　　　　　　创建带文本text的注释节点
*	document.createDocumentFragment()：　　　　创建文档碎片节点[防止页面多次刷新]
*	document.createElement(tagname)：　　　　　  创建标签名为tagname的节点
*	document.createTextNode(text)：　　　　　　   创建包含文本text的文本节点
# 选择器-基本
*	element.getElementById()	返回对拥有指定 id 的第一个对象的引用。
*	element.getElementsByClassName()	返回对拥有指定class数组。
*	element.getElementsByTagName()	返回拥有指定标签名的所有子元素的集合[HTMLCollection与NodeList非常相似]。
* document.getElementsByTagNameNS(namespace, name) // document.getElementsByTagNameNS('http://www.w3.org/1999/xhtml', 'div')
`htmlCollection.nameItem(nameVal);可以获得指定元素的对象`
`htmlCollection[nameVal]		同上边等价`
*	element.getElementsByName()	返回带有指定名称的对象集合[HTMLCollection与NodeList非常相似]。
*	document.forms == document.getElementsByTagName('form')		返回带有指定名称的对象集合[HTMLCollection与NodeList非常相似]
```javascript
document.forms[0]		取得第一个表单元素的内容
document.froms[formName]
document.froms[formName].elements[表单中所有元素的集合][推荐的使用方法]
document.froms[formName].elements[0]
document.froms[formName].elements[elementName]		名字相同的控件radio会返回一个NodeList
```
* document.images
* document.links
* element.querySelector();
* element.querySelectorAll();
# 文档处理-内部插入
```javascript
//向元素添加新的子节点，作为最后一个子节点[返回新增的子节点(如果该节点在文档中已经存在，就把改节点移动到现在的位置)]。
element.appendChild(newNode)
```
# 文档处理-外部插入
```javascript
//在指定的已有的子节点之前插入新节点。
element.insertBefore(newNode, refNode)
```
# 文档处理-替换
```javascript
//替换元素中的子节点。
element.replaceChild(newChild, oldChild)		
```
# 文档处理-删除
```javascript
//从元素中移除子节点[返回被删除的节点oldNode]。
element.removeChild(oldNode)
```
# 文档处理-复制
```javascript
//克隆元素[是否进行深复制(这个节点就是个孤儿节点)]。
element.cloneNode(booleanFlag)
```
# insertAdjacentHTML方法
* el.insertAdjacentHTML(where, htmlString);
* el.insertAdjacentHTML('beforeBegin', htmlString); // 在该元素前插入
* el.insertAdjacentHTML('afterBegin', htmlString); // 在该元素第一个子元素前插入
* el.insertAdjacentHTML('beforeEnd', htmlString); // 在该元素最后一个子元素后面插入
* el.insertAdjacentHTML('afterEnd', htmlString); // 在该元素后插入
# 筛选-过滤
```javascript
//如果元素拥有指定属性，则返回true，否则返回 false。
element.hasAttribute()	
//如果元素拥有属性，则返回 true，否则返回 false。
element.hasAttributes()	
//如果元素拥有子节点，则返回 true，否则 false。
element.hasChildNodes()	
```
# 筛选-查找
* element.childNodes	返回元素子节点的 NodeList[类数组对象]。
* element.parentNode	返回元素的父节点。
* element.firstChild	返回元素的首个子。
* element.lastChild	返回元素的最后一个子元素。
* element.previousSibling	返回位于相同节点树层级的前一个元素[同胞节点]。
* element.nextSibling	返回位于相同节点树层级的下一个节点[同胞节点]。
* element.ownerDocument	文档根节点[比较直接，省去层层的麻烦]
* document.doctype	获得对<!DOCTYPE>的引用
* document.head
* document.title
* document.body
