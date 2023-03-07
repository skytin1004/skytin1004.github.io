---
layout: post
title: "[Python] 파이썬 개발환경 설정1"
subtitle: "Python 설치하기"
categories: Python
tags: [Python,개발환경]
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

## Windows 에서 파이썬 설치하기
### 1.운영체제 bit 확인
먼저 컴퓨터의 운영체제가 64-bit 인지 32-bit 인지 확인해야 합니다.<br><span style="color:gray">(대부분 오래된 컴퓨터가 아니라면 64비트 입니다.)</span><br>

아래 링크 들어가서 운영체제 bit를 확인합니다.<br>

<a href="https://support.microsoft.com/en-au/windows/32-bit-and-64-bit-windows-frequently-asked-questions-c6ca9541-8dce-4d48-0415-94a3faa2e13d" target="_blank">
<span style="color:#9370DB">※링크: 운영체제 비트 확인하기</span></a><br>

### 2. 파이썬 설치

아래 링크로 들어가서 파이썬 최신 버전을 다운로드 합니다.<br>

<a href="https://www.python.org/downloads/windows/" target="_blank"><span style="color:#9370DB">https://www.python.org/downloads/windows/</span></a><br>

![img](https://drive.google.com/uc?id=1F5YIhelbAeLAI4ajZ8BvkN5SM-acR_fU)

사진에 노란색 형광펜으로 표시했습니다. 버전에 맞게 Windows installer 를 설치합니다.<br>
<span style="color:gray">(저는 당시 최신 버전인  3.11.2 설치했습니다. )</span><br>

![img](https://drive.google.com/uc?id=1_XL8y6asT7HV2tFD7rRLgyDlmEwi4h5T)

설치했으면 다운로드한 파일을 실행합니다. 저는 Add python.exe to PATH 체크했습니다.<span style="color:gray">(권장합니다.)</span><br>
Add python.exe to PATH 를 체크하지 않았다면 환경변수를 직접 설정해줘야 합니다.<br>
<span style="color:gray">(기존에 잘 아시는 분들은 원래 하는 방법대로 하면 됩니다.)</span>

### 3.파이썬 설치 확인하기

![img](https://drive.google.com/uc?id=1OKaYx7om2qIdcKx8Z7aXNkmnz0-GC8hX)

윈도우 검색창에 터미널을 검색합니다.<br>
<span style="color:gray">(윈도우 터미널이 없으면 윈도우 스토어에서 설치를 하거나 "cmd"를 검색해서 명령 프롬프트를 실행합니다. )</span><br>
<a href="https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=ko-kr&gl=kr" target="_blank">
<span style="color:#9370DB">※링크: 윈도우 터미널 설치</span></a><br>

터미널에서 `python`을 입력했을 때 아래처럼 파이썬 버전이 보이면 됩니다.<br>

![img](https://drive.google.com/uc?id=1F7Fo2sY56Sm4ci71Hz9wHtfGgpO6ZOHB)



