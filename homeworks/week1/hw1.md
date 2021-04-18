## 交作業流程

### 設定繳交作業地點
1. 將課程資料的 [GitHub](https://github.com/Lidemy/mentor-program-5th) ，Fork一份 repository 到自己的 GitHub上。
2. 將課程資料 clone 到本地端，打開 terminal 輸入 `git clone https://github.com/taiwan78619/mentor-program-5th.git`

### 新增分支來紀錄寫作業的過程
1. cd 到 clone 下來的 repository 目錄，在 terminal 輸入
    - `cd mentor-program-5th/`
2. 為了這禮拜的作業紀錄，新增分支，在 terminal 輸入
    - `git branch Week01`
    - 使用 git branch 確認一下是否有新的分支 Week01
3. 跑到新分支上，在 terminal 輸入
    - `git checkout Week01`
    - 使用 `git branch` 確認是否在新的分支上
4. 完成作業後
    - 在提交前透過 git add 指令把想要的修改結果加入到暫存區，如果是想全加則輸入 `git add .` 
    - 請使用 `git status` 確認一下
5. 提交暫存區的資料到本地端的 repository ，在 terminal 輸入 
    - `git commit` 進入同 Vim 的編輯模式後，第一行填寫 commit 的標題，如果想補充說明請先空一行後再填寫
    - 填寫完離開請使用 `git log` 確認一下

### 上傳作業
1. 上傳到遠端自己的 GitHub ， 在 terminal 輸入
    - `git remote -v` 檢查遠端節點設定（假設有節點設定且名為 origin）
    - `git push origin Week01`
    - `git log` 確認一下
2. 通知作業已繳交，在自己的 GitHub 發送 Pull Request
3. 等作業改完，更新自己的 GitHub ，看看分支 master 看看改了什麼
    - `git pull origin master`
    - `git checkout master`
4. 如果作業沒有想修改的，可以刪除作業分支
    - `git branch` 確認目前在哪
    - `git branch -d Week01`
