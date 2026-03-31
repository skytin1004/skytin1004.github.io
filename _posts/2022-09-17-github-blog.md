---
layout: post
title: "[Groom IDE] Github 블로그 만들기(1)"
subtitle: "Github 블로그: 컨테이너 및 클론 생성"
categories: KorArchive2022-2023
tags: [Jekyll,Github,Groom IDE]
banner:
  image: none
  opacity: 0.618
  background: "#7092BF"
  height: "100vh"
  min_height: "38vh"
  heading_style: "font-size: 2.5em; font-weight: none; text-decoration: none"
  subheading_style: "color:"
---

## 1. Github 페이지 생성

새로운 Github repository 를 생성합니다.

![img](https://drive.google.com/uc?id=1p7xVjScn5A-4qXMZGcIQWPbqz62yRIJ4)

Repository 이름은 username.github.i 로 합니다.

> 제 Github 계정이름은 sms7950이므로 sms7950.github.io로 정했습니다.

![img](https://drive.google.com/uc?id=1m_MGc_jbEvA6L3ZePXSAqne9ZSTxCBcj)

Public , Add a README file 선택 후 Create repository 선택.

![img](https://drive.google.com/uc?id=1cRf9UAc1Ehe8pQgBKxyvbdbuXaQRIsZz)

여기까지 되면 완성입니다.

## 2.구름IDE 컨테이너 생성

구름IDE에 들어갑니다.

![img](https://drive.google.com/uc?id=1hVto_OqdClffNy_3XWSlQsIsT6YE-Ig2)

+새 컨테이너 클릭(오른쪽 위 버튼

![img](https://drive.google.com/uc?id=1C890nfmwEUS6kP8CYLYovPQHiFj9X3--)

쭉 내려가서 탬플릿 → Github 선택 → Github 계정 연동
계정 연동 후 아까 만들었던 repository를 체크합니다.

![img](https://drive.google.com/uc?id=13ImQSICKw24SHv3QDbbz4NO4ErUZGPOT)

더 내려가서 소프트웨어 스택 부분에 Ruby를 체크합니다. 

이렇게 설정하고 나머지는 기본값으로 설정합니다.
맨 오른쪽 아래 생성하기 클릭.
만약 컨테이너 이름이 username.github.io로 설정되어있다면 오류가 뜰 겁니다.(컨테이너 이름에 '.' 이 들어가면 안되기 때문.)
오류가 생겼다면 위로 올라가서 컨테이너 이름을 수정합니다. (저는 sms7950으로 설정했습니다.

## 3.클론 만들기 

![img](https://drive.google.com/uc?id=1BGl0HM900z5QkswHbelIFVq7_0hY5koo)

본인의 깃허브에 들어가서 오른쪽 위 code 버튼을 눌러 주소를 복사합니다.

다시 구름 IDE 터미널로 가서  `git clone 복사한주소`를 입력합니다.

`git clone https://github.com/sms7950/sms7950.github.io.git`

![img](https://drive.google.com/uc?id=1_oI3BRkEawqd9MxuL_VNhE3L16_MudDv)
위 사진과 같이 'username.github.io 로 폴더가 만들어졌으면 성공입니다.
