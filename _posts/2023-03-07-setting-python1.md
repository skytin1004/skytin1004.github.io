---
layout: post
title: "[Python] 파이썬 개발환경 설정1"
subtitle: "Python 설치하기"
categories: KorArchive2022-2023
tags: [Python,Virtual env,Env]
banner:
  image: none
  opacity: 0.618
  background: "#7092BF"
  height: "100vh"
  min_height: "38vh"
  heading_style: "font-size: 2.5em; font-weight: none; text-decoration: none"
  subheading_style: "color:"
---

## Windows 에서 파이썬 설치하기

### 1.운영체제 bit 확인

먼저 컴퓨터의 운영체제가 64-bit 인지 32-bit 인지 확인해야 합니다.(대부분 오래된 컴퓨터가 아니라면 64비트 입니다.)</span>

아래 링크 들어가서 운영체제 bit를 확인합니다.

※링크: 운영체제 비트 확인하기

### 2. 파이썬 설치

아래 링크로 들어가서 파이썬 최신 버전을 다운로드 합니다.

<https://www.python.org/downloads/windows/>

![img](https://drive.google.com/uc?id=1F5YIhelbAeLAI4ajZ8BvkN5SM-acR_fU)

사진에 노란색 형광펜으로 표시했습니다. 버전에 맞게 Windows installer 를 설치합니다.
(저는 당시 최신 버전인  3.11.2 설치했습니다. )</span>

![img](https://drive.google.com/uc?id=1_XL8y6asT7HV2tFD7rRLgyDlmEwi4h5T)

설치했으면 다운로드한 파일을 실행합니다. 저는 Add python.exe to PATH 체크했습니다.(권장합니다.)</span>
Add python.exe to PATH 를 체크하지 않았다면 환경변수를 직접 설정해줘야 합니다.
(기존에 잘 아시는 분들은 원래 하는 방법대로 하면 됩니다.)</span>

### 3.파이썬 설치 확인하기

![img](https://drive.google.com/uc?id=1OKaYx7om2qIdcKx8Z7aXNkmnz0-GC8hX)

윈도우 검색창에 터미널을 검색합니다.
>윈도우 터미널이 없으면 윈도우 스토어에서 설치를 하거나 "cmd"를 검색해서 명령 프롬프트를 실행합니다.

※링크: 윈도우 터미널 설치

터미널에서 `python`을 입력했을 때 아래처럼 파이썬 버전이 보이면 됩니다.

![img](https://drive.google.com/uc?id=1F7Fo2sY56Sm4ci71Hz9wHtfGgpO6ZOHB)
