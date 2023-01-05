---
layout: post
title: "[구름IDE] Github 블로그 만들기(2)"
subtitle: "Github 블로그: 테마 적용 및 수정"
categories: Github 
tags: [jekyll, github,구름IDE]
banner:
  image: https://drive.google.com/uc?id=15b90gyux9tlTOZREL8IuLE9xpjNwKzbL
  opacity: 0.618
  background: "#000"
  height: "100vh"
  min_height: "38vh"
  heading_style: "font-size: 3.25em; font-weight: none; text-decoration: none"
  subheading_style: "color: #E6E6FA"
---

## 1.Jekyll 테마 설치

Jekyll 사이트 중에서 추천할만한 사이트 몇 개를 가져왔습니다.
- <a href="http://jekyllthemes.org/" target="_blank">http://jekyllthemes.org</a>
- <a href="https://jekyllthemes.io/free" target="_blank">https://jekyllthemes.io/free</a>

위 사이트에서 마음에 드는 테마를 하나 선택합니다. <span style="color:gray">(저는 http://jekyllthemes.org/ 에서 Yet Another Theme 로 선택했습니다.)</span>

![img](https://drive.google.com/uc?id=1RlXQK5plGdVUzQXOQOywiKvUPXFp72mf)

마음에 드는 테마를 하나 선택합니다.

![img](https://drive.google.com/uc?id=17x7cyeYe5ueugRSi8AFhNNBkRxSOlPRO)

HomePage로 들어갑니다.

![img](https://drive.google.com/uc?id=1QDHzUwot2ZPmuJd_18J1AQ0JYwg3X1aH)

오른 쪽 위 Code 버튼 누르고 Download Zip 선택합니다.

![img](https://drive.google.com/uc?id=1HZ4-96OuBq0XCkmrZZhh3rFX5ey1IJ25) 
다시 전에 만들었던 구름IDE컨테이너로 들어갑니다. 구름IDE 왼쪽 위 메뉴에서 '파일' → '가져오기' → '파일' 클릭 → 방금 받았던 JekyllTheme 를 가져옵니다.

![img](https://drive.google.com/uc?id=1eS-fr21-MZRvVk9DsnHH_aRwUq22Z03T) 
아래에 있는 '파일 선택' 클릭 후 방금 받았던 JekyllTheme 를 선택합니다.

방금 받았던 JekyllTheme 압축파일을 풀어줍니다.

![img](https://drive.google.com/uc?id=1InMPR4TY23m0DGaWyxOtiNRLVKag4MRn) 

이렇게 jekyll-theme-yat-master 폴더 안에 jekyll-theme-yat-master 폴더가 또 생깁니다. 여기서 빨간 사각형 안에 있는 jekyll-theme-yat-master 의 파일들을 복사하겠습니다.

빨간 사각형 안에 있는 jekyll-theme-yat-master의 파일 전부 선택하고 (Crtl 누르면서 마우스 클릭하면 됩니다.) 오른쪽 마우스 클릭 → 이동 → username.github.io 폴더 → 확인 

저는 sms7950.github.io에 파일들을 이동시킵니다. <span style="color:gray">(더 좋은 방법이 있으면 댓글 부탁드립니다.)</span>

## 2.Jekyll 설치 

![img](https://drive.google.com/uc?id=1FgkOKVnoSrcrDWPApVB1PlOmIj5aDPLw)

터미널에서 `cd username.github.io` 를 입력합니다. <span style="color:gray">(저는 `cd sms7950.github.io` 로 입력하겠습니다.)</span>


터미널에서 `gem install jekyll bundler`을 입력합니다. <br>

터미널에서 `bundle install`을 입력합니다. <br>
![img](https://drive.google.com/uc?id=1n6VDtQxEXL2M-83pXvqCI1_e_L93B7gC)
'프로젝트' → '실행 URL과 포트' 에서 포트번호 4000번으로 설정 후 등록합니다.

구름IDE 서버 실행 코드 : `bundle exec jekyll serve --host 0.0.0.0` <br>
<span style="color:gray">(앞으로 자주 쓰게 될 명령어이니 기억해두시기 바랍니다.)</span><br>

<span style="color:gray">host를 0.0.0.0으로 설정하는 이유는 구름IDE 에서는 local 호스트에서 서버 실행이 안되기 때문입니다.</span><br>

'프로젝트' → '실행 URL과 포트'에서 포트번호 4000번으로 설정헀던 주소를 복사 후 주소창에 붙여넣어 웹 페이지가 잘 만들어졌는지 확인합니다.<br>

### Github에 올리기

터미널에서 `git add .` 입력 <br>
터미널에서 `git commit -m"first commit"` 입력 <br>
터미널에서 `git push` 입력 <br>

![img](https://drive.google.com/uc?id=1mPEwSalRKJs9SNaj2m0J0GMPQVpY7wW0)

<span style="color:gray">입력하는 도중 이런 오류가 나올 수도 있는데 이러한 경우 아래 사진 처럼 터미널에 입력해주면 됩니다.</span>

![img](https://drive.google.com/uc?id=1cTCZBuJrxbSLhM7yCW_oJVFH13AIKFbN)

다시 터미널에서 `git commit -m"first commit"` 입력 후<br>
터미널에서 `git push` 입력 <br>

![img](https://drive.google.com/uc?id=1BxqXNyh0lRHHF_Pm8sxWcQXuwk3IHcra)

 username에 깃허브 계정 이름 입력합니다. 
 Password에 깃허브 토큰을 입력합니다.(깃허브 토큰을 입력하기 위해서는 깃허브 __토큰__ 을 먼저 생성해야 합니다.) 
 
※git push가 완료되면 주소창에 <span style="color:#9370DB">username.github.io</span>로 접속해서 깃허브 블로그가 완성이 되었는지 확인합니다.
## 3.jekyll 테마 수정

구름IDE 의 username.github.io 폴더 → config.yml 파일로 이동합니다.  <br>

![img](https://drive.google.com/uc?id=18Pdd1hWVLX1QZnmOcs2XiFp7lk43gVdW)
시간대를 위와같이 바꿉니다.<br>

깃허브 블로그는 주로 config.yml을 통해서 테마를 수정하기 때문에 config.yml에서 테마를 수정하면 됩니다.
