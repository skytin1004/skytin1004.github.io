---
layout: post
title: "[Python] 파이썬 개발환경 설정2"
subtitle: "[Pycharm] 파이참 설치하기"
categories: KorArchive2022-2023
tags: [Python,Virtual env,Pycharm,env]
banner:
  image: none
  opacity: 0.618
  background: "#7092BF"
  height: "100vh"
  min_height: "38vh"
  heading_style: "font-size: 2.5em; font-weight: none; text-decoration: none"
  subheading_style: "color:"
---

## 1. 사이트 접속

![img](https://drive.google.com/uc?id=1nzkTzYlwLwoIbX6LaQiB97b33njNyzOT)

https://www.jetbrains.com/ko-kr/pycharm/download
Pycharm 사이트에 접속해서 오른쪽에 있는 community버전을 다운로드 합니다.

## 2. Pycharm 설치

다운로드한 Pycharm-community.exe파일을 실행합니다.

![img](https://drive.google.com/uc?id=14Vi_JUewXIMJ10FYs6nBqXUQjYgMt2Wg)

"Next" 클릭합니다.

![img](https://drive.google.com/uc?id=1_G6GVvGknmCIPsC2L0oSqFP2MxX_bpi9)

"Next" 클릭합니다.

![img](https://drive.google.com/uc?id=1Xq2jTurVvYURx-Ez-dmnFYN-I3evNqac)

이 부분은 선택사항입니다.

> 다 도움이 되는 옵션이라 저는 전부 선택하겠습니다.

내용을 간단히 설명하겠습니다.

- Create Desktop Shortcut
: 바탕화면에 파이참 바로가기 만들기
- Update PATH Variable(restart needed)
: cmd(명령프롬프트)에서 파이참에 접근할 수 있게 해주는 옵션
- Update Context Menu
: 컴퓨터에 있는 폴더를 오른쪽 마우스로 클릭해서 파이참 프로젝트로 실행하는 옵션
- Create Associations
: 파이참IDE에서 .py 형식의 파일을 열 수 있게 하는 옵션

옵션을 다 선택했으면

"Next" 클릭합니다.

![img](https://drive.google.com/uc?id=10QneNogK-aryQsO-5XPx7EhHNNjEQRE5)

"Install" 클릭합니다.
"Install" 클릭하면 Pycharm 설치가 진행됩니다.

![img](https://drive.google.com/uc?id=1f69RYXnx7SlehtD2RpJWS0V3w0a2XuuZ)

파이참 설치가 끝나면 지금 컴퓨터 재시작을 하는지 물어봅니다.
나중에 재시작하는 부분에 체크 후 "Finish" 클릭합니다.

## Pycharm 실행

이렇게 파이참 설치가 완료되었습니다. 바탕화면에 설치된 파이참을 실행합니다.

![img](https://drive.google.com/uc?id=1x8gxHOuc31RoykbxnZdVFmTtlD6r1hek)

이렇게 창이 하나 뜨는데 기존 파이참 설정을 불러오는지 물어보는 내용입니다.
파이참을 처음 설치하시는 분이라면 "Do not import setting" 클릭 후 "OK" 클릭합니다.

![img](https://drive.google.com/uc?id=1YAu6VECOzKShDpBxgWhRM1-VuAwGGpP4)

이렇게 파이참이 잘 실행되는 것을 확인할 수 있습니다.

다음은 파이썬 프로젝트를 가상환경에서 실행하고 파이참에서 확인하는 내용에 대해서 다루겠습니다.
