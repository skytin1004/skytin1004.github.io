---
layout: post
title: "[OpenSource]오픈소스 기여하는 방법"
subtitle: "오픈소스 컨트리뷰션"
categories: Contribution Iceberg
tags: [OpenSource,Iceberg]
banner:
  image: https://drive.google.com/uc?id=1-iLsCTOpKgfrSHaKPwzyTEicQVx1lc-x
  opacity: 0.618
  background: "#000"
  height: "100vh"
  min_height: "38vh"
  heading_style: "font-size: 3.25em; font-weight: none; text-decoration: none"
  subheading_style: "color: #E6E6FA"
---

2023년 05/15부터 현재까지 약 세달 간 Apache-Iceberg 라는 데이터 레이크 관리 프로그램 오픈소스 개발에 참여하고 있습니다. 주로 
Apache-Iceberg의 테스트 코드를 JUnit4애서 JUnit5로 마이그레이션 하는 업무를 맡았습니다.

[GitHub - apache/iceberg: Apache Iceberg](https://github.com/apache/iceberg)

PR 10회 약3200줄 추가, 약3000줄 삭제 (PR 하나는 현재 진행중)

오픈소스 업무를 맡으면서 생겼던 코드 문제를 공유해서 오픈소스 커미터랑 같이 문제를 해결했던 경험,
제가 작성해서 올린 코드를 오픈소스 커미터가 자세히 리뷰하고 불필요한 변수를 삭제하거나 메서드를 더 간결하게 바꿔서 코드를 리펙토링했던 경험,
제가 올린 PR에서 오픈소스 커미터가 제안한 아이디어를 바탕으로 새로 코드를 수정했던 경험들이 프로그래밍 실력 향상에 많은 도움을 주었던 것 같습니다.

전반적으로 Apache-Iceberg에서 오픈소스 개발에 참여했고 자기 전에 취미로 여러 오픈소스의 문서의 Readme.md 나 코드의 주석들을 보면서 오탈자를 잡고 수정하면서
Apache-druid, Apache-kibble, Apache-airflow, Apache-celeborn, flet, microsoft-lstbench … 등등의 오픈소스에 문서 오탈자 관련 내용으로 기여를 했습니다.

처음 오픈소스에 기여할 때 많이 어려웠던 부분, 고민이 많았던 부분을 정리해서 단계적으로 정리하고 공유하려고 합니다.

**※ 오픈소스 기여하기 전에 알아야 할 것!**

1. 기여하려는 오픈소스의 PullRequest 목록에 들어가서 PR이 어떻게 이뤄지고 있는지 확인하기! (오픈소스마다 PR을 올리는 유형이 다르니 기여하려는 오픈소스 문화를 알고 있어야 합니다.)

2. 오픈소스에 기여하기 전에 기여하려고 하는 오픈소스의 커뮤니티가 활발한지 확인하기!(커뮤니티가 활발하지 않으면 올린 PR이 무시되거나 PR이 받아들여지는데 한 달 이상이 걸릴 수 도 있습니다.)

3. 기여하려는 오픈소스의 [CONTRIBUTING.md](https://github.com/apache/iceberg/blob/master/CONTRIBUTING.md) 를 참고하면 기여하는 양식, 방법에 대해 자세히 알 수 있습니다.

4. 생각보다 PR이 받아들여지는 과정에서 영어로 채팅을 많이 해야합니다.

## 오픈소스 기여하는 방법

### 1. 깃허브에서 기여하려는 오픈소스를 fork

![iceberg fork.jpg](https://drive.google.com/uc?id=1TnP686NNSuHui7kMIQoIbdbxqshwcCEn)

기여하고자 하는 오픈소스 링크에 들어가서 본인의 레포지토리로 fork를 해옵니다.


### 2. fork한 오픈소스에서 깃허브 링크 복사

![copy_link.jpg](https://drive.google.com/uc?id=1mbgTC2OH-7GwOSa-7iUhOpB4BuEqlX6g)

본인의 레포지토리로 fork를 한 뒤에 오른쪽 위 "code<>"를 클릭해서 나오는 링크를 복사해줍니다.

### 3. 로컬환경에서 오픈소스를 설치할 폴더 생성

이제 로컬 환경에서 오픈소스를 설치할 폴더를 만듭니다. 

<span style="color:gray">참고: Apache-Iceberg는 리눅스/맥 환경만 지원하고 있습니다.
그래서 저는 윈도우 컴퓨터에서 리눅스 가상환경에서 폴더를 만들었습니다. 
(윈도우에서 리눅스 가상환경 만드는 부분은 다음에 자세히 설명하겠습니다.)</span>

### 4. 오픈소스 로컬환경으로 가져오기

![git_clone.jpg](https://drive.google.com/uc?id=1T75toA-skl-HBpte5K3CBvGpEzmGysxm)

터미널에서 오픈소스를 설치할 폴더로 이동해서 `git clone 복사한 링크` 입력합니다.

저는 터미널 기본 위치에서 "dev"라는 폴더를 만들었고 "dev"폴더로 이동해서 `git clone 복사한 링크`를 입력했습니다.

<span style="color:gray">(저도 오픈소스를 처음 기여했을 당시에는 터미널을 다루는게 서툴렀습니다. cd, mkdir, ls 같은 기본 터미널 명령어가 햇갈리신다면 정리해서 포스트 링크 달아두겠습니다.)</span>

링크예시: `git clone https://github.com/USER_NAME/REPO_NAME.git` 

### 5. fork한 레포지토리랑 설치한 오픈소스 연결

**1. 다운받은 오픈소스 폴더로 들어갑니다.**

터미널에서 `cd REPO_NAME` 입력

**2. 터미널에서 git init 입력 (처음 설치할 때 한 번만 해주면 됩니다.)**

터미널에서 `git init` 입력

**3. PR을 올릴 원격 저장소 연결**

오픈소스를 작업하다보면 작업하는 도중에도 다른 사람이 수정한 부분들이 오픈소스의 원본에 통합되어 오픈소스 파일이 변하는 경우가 생깁니다.
그럴때마다 터미널에 `git pull upstream master` 명령어를 입력해서 주기적으로 오픈소스를 원본이랑 같게 갱신하는데 
아룰 위해서 원본의 레포지토리를 먼저 지정해야 합니다.

터미널에 아래 명령어를 입력합니다.

```tml
git remote add upstream https://github.com/UPSTREAM_USER/UPSTREAM_REPO.git

```

예시: 
```tml
// PR을 올릴 원격 저장소 연결
git remote add upstream https://github.com/apache/iceberg.git
```

**4. 오픈소스 폴더 위치에서 Fork한 저장소랑 연결**

터미널에 아래 명령어를 입력합니다.
```tml
git remote add origin https://github.com/USER_NAME/REPO_NAME.git
```

예시: 
```tml
//Fork한 저장소랑 연결
git remote add origin https://github.com/skytin1004/iceberg.git
```

### 6. 오픈소스 실행

인텔리제이나 파이참 같은 툴을 이용해서 오픈소스가 있는 폴더를 엽니다.

### 7. 터미널에서 PR용 브렌치 생성

PR을 올릴 때는 항상 새로운 브렌치를 만들고 새로운 브렌치에서 수정을 하고 git push를 합니다. 그후 브렌치가 오픈소스 원본에 통합이 되면 브렌치를 삭제합니다.


먼저, 새로운 브렌치를 만드는 방법입니다.

터미널에서

`git checkout -b BRANCH_NAME` 를 입력합니다. 

<span style="color:gray">(새로운 브렌치를 만드는 동시에 새로 만든 브렌치로 이동하는 명령어입니다.)</span>

<span style="color:gray">(BRANCH_NAME에 원하는 브렌치 이름을 입력합니다.)</span>

이제 새로 만든 브렌치에서 코드를 수정합니다.
<span style="color:gray">(꼭 버그를 고치거나 새로운 기능을 만들 필요는 없습니다. 간단한 오탈자를 고치거나 주석 내용을 간결하게 하는 작업으로도 오픈소스에 기여할 수 있습니다.)</span>

### 8.원격 저장소에 Push 하기

코드 수정을 마쳤으면 오픈소스 터미널에서 아래와 같이 입력합니다.

1. `git add .`
2. `git commit -m"커밋 이름"`
3. `git push origin BRANCH_NAME`

### 9. PR을 올릴 오픈소스로 이동

apache-iceberg에 기여했다면 오픈소스의 원본이 있는 곳으로 이동합니다.

예시 링크: [GitHub - apache/iceberg: Apache Iceberg](https://github.com/apache/iceberg)

### 10. PR 올리기

git push가 제대로 이루어졌다면 오픈소스 깃허브로 갔을 때 

PR을 올리라는 알림이 새로 생깁니다. (PR을 올리기 전에 로컬환경에서 build가 잘 되는지 꼭 체크해줍시다!!)

오픈소스의 원본이 있는 깃허브로 이동 후 

Pull Request 버튼 클릭 → new Pull Request 버튼 클릭

Pull Request를 작성하는 곳에 코드 수정한 부분을 자세히 “영어로” 입력해주시면 됩니다. 

[Core: Switch tests to Junit5 in metrics,puffin,rest pakages by skytin1004 · Pull Request #7803 · apache/iceberg](https://github.com/apache/iceberg/pull/7803)

![PR.img](https://drive.google.com/uc?id=1ntZXMDf2-trTJWHv6Zd3Eh7wJ-OiJ1oV)

이런식으로 작성하면 됩니다. 위에는 제가 올렸던 PR 링크 입니다. 오픈소스 커미터랑 대화하는 내용을 참고해서 오픈소스 기여하면 될 것 같습니다. 이 과정에서 평균적으로 1~2주 소요됩니다.

### 11. 오픈소스 PR 이 Merge 되면?

PR이 성공적으로 오픈소스의 main 브렌치에 Merge되면 PR용으로 작업했던 브렌치를 삭제해야 합니다. 

로컬환경에서 main 혹은 master 브렌치로 이동 후 오픈소스의 터미널에서

1.  `git branch -D BRANCH_NAME` (로컬 브렌치 삭제)

2. `git push origin --delete BRANCH_NAME` (깃허브 브렌치 삭제)

입력해서 깔끔하게 브렌치를 삭제해야 합니다.

이렇게 성공적으로 Merge 되면 해당 오픈소스 Contributor 목록에 본인 이름이 추가됩니다.

예시: 오픈소스의 Contributer 목록에서 본인 이름을 확인할 수 있습니다.

![Success.img](https://drive.google.com/uc?id=1oIT23DTOTf36O-T4PT8jG_c0048UvRwJ)

참고:

[apache/iceberg Contributer 목록](https://github.com/apache/iceberg/graphs/contributors)

### 브렌치를 삭제해야 하는 이유?

PR이 Merge 된 후 기존의 브렌치에서 다시 수정해서 PR을 보내면 새로운 PR에 예전에 작성했던 커밋 목록이 그대로 남아있어서 PR이 난잡해집니다.

<span style="color:gray">(예전에 브런치 삭제 안하고 다시 작업 했다가 커미터의 요청으로 PR을 처음부터 다시 올린적이 있습니다..)</span>
gi