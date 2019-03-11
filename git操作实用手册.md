根据莫烦python笔记整理实用

## 设置用户名/Email
```
git config --global user.name "haohailiang"
git config --global user.email "646263409@qq.com"
```
## 查看设置
```
git config --list
```
## 查看用户名和邮箱地址
```
git config user.name
git config user.email
```
## 建立空的git库
```
git init
```
## 修改远程仓库的位置
```
git remote set-url origin xxx.git
```
### 修改本地分支和远程分支的名称
```
# Rename branch locally 
git branch -m old_branch new_branch 
# Delete the old branch
git push origin :old_branch  
# Push the new branch, set local branch to track the new remote
git push --set-upstream origin new_branch 
```
## 新建文件并查看文件的状态
```
touch git-sample.js
git status
git status -s
```
git当前并没有纳入git版本管理
## 添加所有文件到git的版本管理
```
git add git-sample.js
# or
git add .
```
## 提交改变
```
git commit -m "第一次提交"
```
## 查看日志
会显示自己的名字和修改时间
```
git log
git log --oneline
git log --oneline -10 [显示10条数据]
git log --author "haohailiang" [查看某个用户提交的日志]
```
## 查看当前的文档和之前提交文档的不同
```
git diff
```
## 文档提交到(git add .)暂存区后查看不同
```
git add .
git diff --cached
```
## 修改已 commit 的版本
* 新建一个文件1.md
* 提交
* 新建一个文件2.md
* git add 2.md
* 真正的合并, 提交注释没有改变, 但是版本号改变了
```
touch 1.md
git add .
git commit -m "第一次提交"
git log --oneline
touch 2.md
git add 2.md
git commit --amend --no-edit    # "--no-edit": 不编辑, 直接合并到上一个 commit
git log --oneline
```
## 修改最后一次提交的注释
```
git commit --amend
```
## reset到add之前(staged状态-->>unstaged状态)
```
git add 1.md
git status -s # 绿色的M
git reset 1.md
git status -s # 红色的M
```
## reset到commit之前(当前的修改会消失)
在版本库中历史未来往来自如  
`reset`针对的是一个版本库
```
git reset --hard HEAD
git reset --hard HEAD^
git reset --hard HEAD~1
git reset --hard 5c5730d
```
## 再会到现在记录查看
站在过去, 想回到现在, 记录的查看
```
git reflog
```
## 回到从前
checkout针对单个文件, 单个文件修改成过去某个版本的内容, 版本同时也增加了
```
git checkout 5c5730d -- 1.md
```
## 查看分支
```
git log --oneline --graph
```
## 新建 && 切换到分支
```
git checkout -b  dev
git branch    # 当前所处分支的查看
git checkout master # 切换到主分支
git checkout -b name-of-new-branch current-branch [current-branch 默认就是当前分支]
git checkout -b name-of-new-branch 169d2dc [从指定的分支名称获取分支]
git pull origin release/pc_v181210 # 从指定远程分支拉代码，默认情况拉代码会失效
```
## 查看分支的父分支
```
git reflog --date=local | grep branch_name
```
## 在分支上修改并提交
"-am": add 所有改变 并直接 commit
```
git commit -am "在分支上修改提交"
```
## 合并分支
* dev分支已经开发好
* 切换到主分支
* 将dev分支中的内容合并过来
注:没有冲突的话直接就合并过来了, 不需要添加合并注释
```
git checkout master
git merge dev
```
### 合并分支, 保留合并信息, 并有合并分支图
```
git checkout master
git merge --no-ff -m "保留dev和master分支的合并信息" dev
git log --oneline --graph
```
## 合并分支 cherry-pick
* dev分支已经开发好  
* 切换到主分支  
* 将dev分支中的指定的几次版本修改合并过来  
注:就是只合并有用的指定的几次提交  
```
git checkout master
git merge dev

# current branch master
git checkout -b branch_a
touch a.md
git add .
git commit -m 'add a.md file'
touch b.md
git add .
git commit -m 'add b.md file'
git log --pretty=oneline
0921ed0d2554fa36cee0261c4ccb76ac3965ba0c (HEAD -> branch_a) add b.md file
aa4d3a6c9a7e20a46b370b52fe81708241e35b91 add a.md file
12bd6df6b74a8b8273d2bb30c75d93794169124b (origin/master, origin/HEAD) Initial commit
git checkout master
# current branch branch_a
git cherry-pick aa4d3a6c9a7e20a46b370b52fe81708241e35b91
# 分支 branch_a 将只有提交的 a.md 文件, b.md 文件没有
```
## 分支冲突
2个分支同时修改相同的文件再合并会产生冲突  
去掉冲突信息重新提交下就可以了
```
git commit -am "解决冲突"
```
## rebase [在自己本地的修改中使用,在共享分支中比较危险]
场景:分支A和共享分支B, 在修改A的同时, 共享分支B也在修改, 现在想利用共享分支B修改的新东西, 就用到rebase
* 在master分支创建分支A和共享分支B
* 分支A修改了一个版本, 分支B修改了两个版本
* 分支A借用分支B修改的新内容
```
git branch -D bran_A   # 删除分支
git push origin --delete bran_A # 删除远程分支
```
## 临时修改 (stash)
```
# 当前工作空间为dev
git stash #保存当前工作空间的进度
git status -s
git checkout -b boss
git commit -am "job from boss"
git checkout master
git merge --no-ff -m "merged boss job" boss
git commit -am "solve conflict"
git log --oneline --graph
git checkout dev
git stash list
git stash pop
git status -s
```
### 可以添加一些注释
```
git stash save 'message...'
```
### 显示保存进度的列表。也就意味着，git stash命令可以多次执行
```
git stash list
```
### git stash pop [–index] [stash_id]
```
# 恢复最新的进度到工作区。git默认会把工作区和暂存区的改动都恢复到工作区
git stash pop
# 恢复最新的进度到工作区和暂存区。（尝试将原来暂存区的改动还恢复到暂存区）
git stash pop --index 
# 恢复指定的进度到工作区。stash_id是通过git stash list命令得到的, 通过git stash pop命令恢复进度后，会删除当前进度
git stash pop stash@{1}
```
### 除了不删除恢复的进度之外，其余和git stash pop 命令一样。
```
git stash apply [–index] [stash_id]
```
### 删除所有存储的进度
```
git stash clear
```
## 推送到github上
* 在github上创建一个git-demo项目
* 根据命令行中的提示命令进行相应操作
```
git remote rm origin
git remote add origin https://github.com/haohailiang/git-demo.git
git push -u origin master     # 推送本地 master 去 origin
git push -u origin dev        # 推送本地 dev  去 origin
# gitee
git push --set-upstream origin branch-a 远程没有这个分支,连带创建远程分支+推送
```
## 设置用户名-密码
```
cd .git/
atom config
# 打开文件内容如下
[core]
	repositoryformatversion = 0
	filemode = false
	bare = false
	logallrefupdates = true
	symlinks = false
	ignorecase = true
[remote "origin"]
	url = https://用户名:密码@github.com/haohailiang/git-demo.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
	remote = origin
	merge = refs/heads/master
```
## 查看远程仓库
```
git remote show origin
```
## 查看远程仓库的所有分支
```
git branch -a
```
## 清理本地-删除的远程分支的引用
远程仓库删除的分支，本地还保留着远程分支的引用，运行如下命令，本地保留的引用将会删除
```
git remote prune origin
```
## 切换到远程分支
```
git clone master分支
git branch 远程分支名称
git pull

# checkout远程的dev分支，在本地起名为dev分支，并切换到本地的dev分支(一步到位的方法)
git checkout -b dev origin/dev
```
## 重命名本地分支
```
git branch -m oldbranchname newbranchname
```
## 本地分支和远程分支的对应关系
```
git branch -vv
```
## 查看某个时间段内git日志
```
# 某个时间之后的日志
git log --since="Tue Nov 28 2017 00:00:00 GMT+0800"

# 某个时间之前的日志
git log --before="Sun Dec 03 2017 00:00:00 GMT+0800"

# 某个时间段内的日志
git log --since="Tue Nov 28 2017 00:00:00 GMT+0800" --before="Sun Dec 03 2017 00:00:00 GMT+0800"

# 查看某人在某个时间段内的所有提交日志，不分页全部输出
git  --no-pager log  --author="haohailiang"  --after="2019-01-01 00:00:00" --before="2019-02-01 23:59:59"
```
## 某次提交的内容
```
git show commit-hashid
git show 9b0ebe3c96bc2238ac84a6f322fbd64d2b169033
```
## 某个文件的提交历史
```
git log --pretty=oneline 文件名
git log --pretty=oneline cloudsun-center/src/main/webapp/WEB-INF/views/center/usercenter/home.jsp
```
## 快速学习git操作的网站
```
https://learngitbranching.js.org/?demo
https://learngitbranching.js.org/?NODEMO
```
## 搭建个人站点
htts://haohailiang.github.io
### 搭建步骤
1. 创建个人站点 --> 新建仓库 --> 仓库名必须是 haohailiang.github.io
2. 在仓库下新建index.html
