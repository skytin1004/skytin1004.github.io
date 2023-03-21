---
layout: post
title: "[Python] 파이썬 개발환경 설정3"
subtitle: "가상환경에서 버전 관리하기"
categories: Python
tags: [Python,개발환경,버전관리,virtual env,venv,가상환경]
banner:
  video: 
  volume: 0.0
  start_at: 0.0
  image: https://drive.google.com/uc?id=1y0n65Urwh3F-Ua9cYUKyv1hzoPLGAefE
  opacity: 0.618
  background: "#000"
  height: "100vh"
  min_height: "38vh"
  heading_style: "font-size: 3.25em; font-weight: none; text-decoration: none"
  subheading_style: "color: #E6E6FA"
---

## 가상환경을 만드는 이유
프로젝트를 진행하다보면 프로젝트에 사용되는 파이썬 버전이랑 최신 파이썬 버전이 달라지게 됩니다.<br>
이러한 경우 기존에 프로젝트에 사용되던 파이썬 버전을 업그레이드 하게 되면 파이썬 버전이 바뀌면서
기존에 사용되던 명령어가 새로운 버전에서 작동하지 않을 수도 있습니다. 뿐만 아니라 파이썬 모듈 및 패키지도 특정 버전에서만 지원되는 경우가
있기 때문에 프로젝트 별로 가상환경을 만들어서 파이썬 버전을 관리하는 것이 좋습니다.<br>


## 파이썬 가상환경의 종류
파이썬 가상환경 종류에는 다양한 가상환경 모듈 및 패키지가 존재합니다. <br>
그 중 많이 사용되는 대표적인 두 개의 가상환경에 대해서 설명하겠습니다.<br>
1. venv:
파이썬 표준 라이브러리에 속해있는 venv는 Python 3.3 버전부터 사용가능합니다. venv는 파이썬 표준
 라이브러리에 속해있기 때문에 따로 설치할 필요가 없습니다.<br>
2. virtual env:
파이썬 비표준 가상환경 라이브러리에 속해있는 virtual env는 venv와는 다르게 파이썬 설치 후 virtual env를 따로 설치해야 합니다.<br>
virtualenv의 장점은 3.3이상 버전부터 지원되는 venv와 다르게 Python 2 버전부터 지원이 가능해서
 Python2 , Python3 버전을 동시에 가상환경에서 관리하기 용이합니다.<br>

이번 포스트에서는 venv 나 virtual env를 이용해 가상환경에서 파이썬 프로젝트를 실행시키는 방법을 알아보겠습니다.
## 프로젝트 관리 폴더 생성

### 1. 윈도우 터미널(cmd)를 실행합니다.<br>
![img](https://drive.google.com/uc?id=1wbUfCASfL3aDEwthunf8lJKjQI4rhHQr)
노란 형광펜으로 표시한 부분  <span style="color:gray">[내 PC > 로컬 디스크 (C:) > 사용자 > 계정이름]</span>이 윈도우 터미널의 기본경로 입니다.<br>

### 2. 기본경로 안에 하위폴더 생설
윈도우 터미널 기본경로 안에 여러 프로젝트를 관리할 "proj"라는 폴더를 생성하겠습니다.
![img](https://drive.google.com/uc?id=1SKK9Dyn6ZMm5B1i-YZ4S1ccUbGmVv9nu)
터미널에 `mkdir proj`를 입력합니다.<br>
<span style="color:gray">mkdir 은 make directory의 줄임말이며 디렉토리(폴더)를 생성하는 명령어입니다.</span><br>

![img](https://drive.google.com/uc?id=1zYZMleNlSuOru0DZQu5xDUSYq8vt9qHd)
실제로 [내 PC > 로컬 디스크 (C:) > 사용자 > 계정이름] 으로 들어가면 "proj"폴더가 생성된것을 확인할 수 있습니다.

## venv로 가상환경 설정하기


위에서 proj폴더 까지만든 후

### 1. proj폴더로 들어가기
![img](https://drive.google.com/uc?id=1Z0mcPSitIn6T_sfk_tZT0x90MVv9Dm7v)

터미널에서 `cd proj` 입력합니다.<br>
<span style="color:gray">(`cd A` 해당 경로에서 하위에 존재하는 'A'라는 폴더로 들어가는 명령어입니다.)</span><br>


### 2. 파이썬 프로젝트 폴더 만들기
터미널에서 `mkdir pythonProject` 입력합니다.<br>
"pythonProject"라는 이름의 폴더를 "proj"폴더 안에 생성했습니다.<br>
<span style="color:gray">("pythonProject"는 가상환경에서 실행 할 프로젝트 이름이며 이름이 겹치면 변경해도 상관없습니다.)</span><br>

### 3. "pythonProject"폴더 안에 가상환경 만들기
![img](https://drive.google.com/uc?id=1Mdc4UKIQG2XA10TMqPEwwY5KeeT1ghGJ)
터미널에서 `cd pythonProject` 입력합니다.<br>
터미널에서 `python -m venv .venv` 입력합니다.<br>

python -m venv <span style="color:#9370DB">.venv</span>  에서 <span style="color:#9370DB">.venv</span> 는 가상환경의 이름이며
변경할 수 있습니다.<br>

![img](https://drive.google.com/uc?id=1t_uUBFX_acO5DnWpDSE4iIIXQO-mzU_q)
조금 기다리면 'pythonProject' 안에 '.venv'라는 가상환경이 만들어진 것을 확인 할 수 있습니다.<br>

### 4. 가상환경 실행하기
![img](https://drive.google.com/uc?id=1KHb79UHSV2VYtLJPOoV85bnDNcZh0_um)
터미널에서 `cd .venv` 입력합니다. <span style="color:#9370DB">.venv</span> 폴더가 어떻게 구성되어있는지 확인하겠습니다.<br>

![img](https://drive.google.com/uc?id=1jcLx81CSp-a9qH5oNp-CZ7R47YxkdHln)
터미널에서 `dir` 입력합니다. .venv폴더가 어떻게 구성되어있는지 확인하는 명령어입니다.<br>
<span style="color:gray">(리눅스,맥은 ls를 입력합니다.)</span><br>
윈도우는 "Scripts"라는 폴더가 있고 리눅스,맥은 "bin"이라는 폴더가 있을겁니다.<br>
"Scripts", "bin" 폴더 안에는 "activate"라는 파일이 존재합니다. "activate"파일을 실행하면 가상환경이 실행됩니다.

![img](https://drive.google.com/uc?id=1dmO-QjSVSXsUc0L8cMbFyQgyL0n08iYo)
터미널에서 `cd ..` 입력합니다. <br>

![img](https://drive.google.com/uc?id=1N2ml662DTplk9BsP5xdk-ybGCHv2bKOf)
윈도우: 터미널에서 `.\.venv\Scripts\activate` 입력합니다<br>
리눅스,맥: 터미널에서 `source .venv\bin\activate` 입력합니다<br>
<span style="color:gray">(/이 슬래시를 써도 같은 결과 나옵니다.)</span><br>
위 사진처럼 되면 성공입니다.

### 5. Pycharm에서 확인
![img](https://drive.google.com/uc?id=1eMTnY38QUNf_mSO8jwS2h5PUPkwt0BFk)
Pycharm을 실행해서 <span style="color:#9370DB">'New Project'</span> 클릭합니다.<br>
맨 위에 'Location'은 방금 전에 만들었던 'pythonProject'의 파일 경로로 설정합니다.<br>
<span style="color:#9370DB">[내 PC > 로컬 디스크 (C:) > 사용자 > 계정이름 > proj > pythonProject]</span><br>
아래로 내려가서 <span style="color:#9370DB">'Previously configured interpreter'</span> 에 체크합니다.<br>
그 후 오른쪽에 <span style="color:#9370DB">'Add interpreter'</span>클릭 후 <span style="color:#9370DB">'Add local interpreter'</span> 클릭합니다.<br>

![img](https://drive.google.com/uc?id=1rD6rurbgEqBv-WpKKmbPqOphaXw7JnhG)

맨 위에 <span style="color:#9370DB">'Environment:'</span>에 <span style="color:#9370DB">'Existing'</span>체크합니다. <br>
<span style="color:#9370DB">'Interpreter:   No interpreter'</span> 이 있는 줄 맨 오른쪽  <span style="color:#9370DB">`...` </span> 네모 박스 클릭합니다. <br>
열리는 창에서 'pythonProject' > '.venv' > 'Scripts'<span style="color:gray">(맥,리눅스는 'bin')</span> 
 'python.exe' 를 클릭 후 <span style="color:#9370DB">'OK'</span>버튼 누릅니다.<br>

![img](https://drive.google.com/uc?id=1Y7k6tl_oL8FdmbSiUuhDlbi4N8slJryF)

<span style="color:#9370DB">'OK'</span>버튼 누릅니다.<br>

![img](https://drive.google.com/uc?id=12tQSVamDPgxlfuxBB-TJOb0SHNDIDz9S)
위 사진처럼 설정이 되었는지 확인 후<br>
오른쪽 아래 <span style="color:#9370DB">'Create'</span> 클릭합니다.<br>

![img](https://drive.google.com/uc?id=1Rhn49vHkMQ_Fl_pZiBGdd4gjBEq67OZB)
<span style="color:#9370DB">'Create from Existing Sources'</span> 클릭합니다.<br>

![img](https://drive.google.com/uc?id=1HP1eLLlj453Kq4QTbuFIx6UPfP99mMxK)

왼쪽에 <span style="color:#9370DB">'External Libraries'</span> 클릭하면 아래  <span style="color:#9370DB">Python 3.11 (.venv)</span>
가 보일 겁니다.<br>
Python 3.11 뒤에 (.venv) 표시가 있으면 가상환경에서 프로젝트가 정상적으로 실행되고 있는 겁니다.<br>
<span style="color:gray">(혹시 <span style="color:#9370DB">'External Libraries'</span> 하위에 폴더가 안보이면 Pycharm을 재실행 하면 됩니다. )</span><br>
### 6.패키지 관리

![img](https://drive.google.com/uc?id=1knEMfpbHwCKogG06nF-wzm2Gfy6k2q5y)

<span style="color:#9370DB">Python 3.11 (.venv)</span> 하위에 있는 <span style="color:#9370DB">'site-pakages'</span>에서
가상환경에 설치되는 패키지가 관리됩니다. 가상환경에 패키지를 설치하면 <span style="color:#9370DB">'site-pakages'</span> 폴더에 설치됩니다.

### 7.파이썬 버전 확인
![img](https://drive.google.com/uc?id=1IMOFGkzc5YfJT-ZVrrv9Pup4XlQp7oW2)


터미널에 `python`입력하면<span style="color:gray">(맥,리눅스는 `python -v`)</span> 현재 가상환경에 설치되어있는 파이썬 버전이 나오게 됩니다.

이렇게 설정이 마무리되면 앞으로 이 프로젝트를 실행할 때 마다 
파이참에서 자동으로 가상환경에서 실행시켜 줍니다. <br>


## virtualenv로 가상환경 설정하기

위에서 proj폴더 까지 만든 후 <br>

### 1. proj폴더로 들어가기
![img](https://drive.google.com/uc?id=1Z0mcPSitIn6T_sfk_tZT0x90MVv9Dm7v)

터미널에서 `cd proj` 입력합니다.<br>
<span style="color:gray">(`cd A` 해당 경로에서 하위에 존재하는 'A'라는 폴더로 들어가는 명령어입니다.)</span><br>

### 2. virtual env 설치하기
![img](https://drive.google.com/uc?id=1Wea_v1X8We8uBMUFBhHP4NSBsge7F5sd)
터미널에서 `pip install virtualenv` 입력합니다.<br>

### 3. 파이썬 프로젝트 폴더 만들기
터미널에서 `mkdir pythonProject` 입력합니다.<br>
"pythonProject"라는 이름의 폴더를 "proj"폴더 안에 생성했습니다.<br>
<span style="color:gray">("pythonProject"는 가상환경에서 실행 할 프로젝트 이름이며 이름이 겹치면 변경해도 상관없습니다.)</span><br>
### 4. "pythonProject"폴더 안에 가상환경 생성하기
![img](https://drive.google.com/uc?id=1hd04SiFbY04LQkOgqoU2nwoou_OECZOb)
터미널에서 `cd pythonProject` 입력합니다.<br>
터미널에서 `virtualenv env` 입력합니다.<br>
<span style="color:gray">(리눅스,맥은 `Python3 -m virtualenv env` 를 입력합니다.)</span><br>
virtualenv <span style="color:#9370DB">env</span>  에서 <span style="color:#9370DB">env</span> 는 가상환경의 이름이며
변경할 수 있습니다.<br>

### 5. 가상환경 실행하기
![img](https://drive.google.com/uc?id=1gzdksvvtVlCA8AmVsaNsxpLGb5njG9qg)
터미널에서 `cd env` 입력합니다. env폴더가 어떻게 구성되어있는지 확인하겠습니다.<br>

![img](https://drive.google.com/uc?id=1QRGqmegVT-ugpezFLi1IPaYjebOYEAwW)
터미널에서 `dir` 입력합니다. env폴더가 어떻게 구성되어있는지 확인하는 명령어입니다.<br>
<span style="color:gray">(리눅스,맥은 ls를 입력합니다.)</span><br>
윈도우는 "Scripts"라는 폴더가 있고 리눅스,맥은 "bin"이라는 폴더가 있을겁니다.<br>
"Scripts", "bin" 폴더 안에는 "activate"라는 파일이 존재합니다. "activate"파일을 실행하면 가상환경이 실행됩니다.

![img](https://drive.google.com/uc?id=1NN23f7ARnXfutYj0IsSr2QFDc9GRx28I)
터미널에서 `cd ..` 입력합니다. <br>

![img](https://drive.google.com/uc?id=1FJRSm37P8vPTB3xpmQQQ2P945LnlEfqa)
윈도우: 터미널에서 `.\env\Scripts\activate` 입력합니다<br>
리눅스,맥: 터미널에서 `source env\bin\activate` 입력합니다<br>
<span style="color:gray">(/이 슬래시를 써도 같은 결과 나옵니다.)</span><br>
위 사진처럼 되면 성공입니다.

### 6. Pycharm에서 확인
![img](https://drive.google.com/uc?id=1eMTnY38QUNf_mSO8jwS2h5PUPkwt0BFk)
Pycharm을 실행해서 <span style="color:#9370DB">'New Project'</span> 클릭합니다.<br>
맨 위에 'Location'은 방금 전에 만들었던 'pythonProject'의 파일 경로로 설정합니다.<br>
<span style="color:#9370DB">[내 PC > 로컬 디스크 (C:) > 사용자 > 계정이름 > proj > pythonProject]</span><br>
아래로 내려가서 <span style="color:#9370DB">'Previously configured interpreter'</span> 에 체크합니다.<br>
그 후 오른쪽에 <span style="color:#9370DB">'Add interpreter'</span>클릭 후 <span style="color:#9370DB">'Add local interpreter'</span> 클릭합니다.<br>

![img](https://drive.google.com/uc?id=1ozuPDhGUYoMWrS7lDw3NbRC4cAjJLYyM)

맨 위에 <span style="color:#9370DB">'Environment:'</span>에 <span style="color:#9370DB">'Existing'</span>체크합니다. <br>
<span style="color:#9370DB">'Interpreter:   No interpreter'</span> 이 있는 줄 맨 오른쪽 <span style="color:#9370DB">`...` </span> 네모 박스 클릭합니다. <br>
열리는 창에서 'pythonProject' > 'env' > 'Scripts'<span style="color:gray">(맥,리눅스는 'bin')</span> 
 'python.exe' 를 클릭 후 <span style="color:#9370DB">'OK'</span>버튼 누릅니다.<br>

![img](https://drive.google.com/uc?id=1pxsIWnb8e6K_2TvfVOWoVJK3EgljM9lg)

<span style="color:#9370DB">'OK'</span>버튼 누릅니다.<br>

![img](https://drive.google.com/uc?id=1izLqiEZnU1Z5P7Kzajl_kE1Hk9wwxQaw)
위 사진처럼 설정이 되었는지 확인 후<br>
오른쪽 아래 <span style="color:#9370DB">'Create'</span> 클릭합니다.<br>

![img](https://drive.google.com/uc?id=1Rhn49vHkMQ_Fl_pZiBGdd4gjBEq67OZB)
<span style="color:#9370DB">'Create from Existing Sources'</span> 클릭합니다.<br>

![img](https://drive.google.com/uc?id=1aLX0D1G9WRT9VFR_0SeAnuYM-ze7CHo2)

왼쪽에 <span style="color:#9370DB">'External Libraries'</span> 클릭하면 아래  <span style="color:#9370DB">Python 3.11 (env)</span>
가 보일 겁니다.<br>
Python 3.11 뒤에 (env) 표시가 있으면 가상환경에서 프로젝트가 정상적으로 실행되고 있는 겁니다.<br>
<span style="color:gray">(혹시 <span style="color:#9370DB">'External Libraries'</span> 하위에 폴더가 안보이면 Pycharm을 재실행 하면 됩니다. )</span><br>

### 7.패키지 관리

![img](https://drive.google.com/uc?id=1mHADM9X9Go6VHx26oX1Cd96HBadQFw20)

<span style="color:#9370DB">Python 3.11 (env)</span> 하위에 있는 <span style="color:#9370DB">'site-pakages'</span>에서
가상환경에 설치되는 패키지가 관리됩니다. 가상환경에 패키지를 설치하면 <span style="color:#9370DB">'site-pakages'</span> 폴더에 설치됩니다.

### 8.파이썬 버전 확인
![img](https://drive.google.com/uc?id=15ykyK-P6WrX_3svzGXcbilxoIGUSxAxq)


터미널에 `python`입력하면<span style="color:gray">(맥,리눅스는 `python -v`)</span> 현재 가상환경에 설치되어있는 파이썬 버전이 나오게 됩니다.

이렇게 설정이 마무리되면 앞으로 이 프로젝트를 실행할 때 마다 
파이참에서 자동으로 가상환경에서 실행시켜 줍니다. <br>






