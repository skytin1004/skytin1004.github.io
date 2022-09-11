---
layout: post
title: "Github 블로그 만들기(구름IDE,리눅스)"
subtitle: "Github 블로그를 만들어 테마를 입히고 수정하는 내용입니다."
categories: Github 
tags: [jekyll, github]
banner:
  image: https://drive.google.com/uc?id=15b90gyux9tlTOZREL8IuLE9xpjNwKzbL
  opacity: 0.618
  background: "#000"
  height: "100vh"
  min_height: "38vh"
  heading_style: "font-size: 4.25em; font-weight: bold; text-decoration: underline"
  subheading_style: "color: gold"
---

## 내용 작성 중입니다 ...(예상게시일: 09/10)
## 0.Github페이지를 만들게 된 이유
Django를 이용해서 페이지를 직접 많들어보려 했지만 유지보수에 너무 많은 시간이 쓰이게 되었습니다.
티스토리 블로그랑 고민하던 중 더 자유도가 높은 깃허브 블로그로 결정!
## 1.Github 페이지 만들기
새로운 Github repository 를 생성합니다.

![img](https://drive.google.com/uc?id=1p7xVjScn5A-4qXMZGcIQWPbqz62yRIJ4)

Repository 이름은 username.github.io 로 만들어줍니다.
(제 Github 계정이름은 sms7950이니 sms7950.github.io로 했습니다)

![img](https://drive.google.com/uc?id=1m_MGc_jbEvA6L3ZePXSAqne9ZSTxCBcj)

Public , Add a README file 선택 후 Create repository 눌러줍시다.

![img](https://drive.google.com/uc?id=1cRf9UAc1Ehe8pQgBKxyvbdbuXaQRIsZz)

여기까지 되면 완성!
## 2.구름IDE 컨테이너 생성
구름IDE에 들어갑니다.

![img](https://drive.google.com/uc?id=1hVto_OqdClffNy_3XWSlQsIsT6YE-Ig2)

오른쪽 위 +새 컨테이너 클릭!

![img](https://drive.google.com/uc?id=1C890nfmwEUS6kP8CYLYovPQHiFj9X3--)

쭉 내려가서 탬플릿-Github 선택 후 Github 계정을 연동해서 아까 만들었던 repository를 체크합니다.

![img](https://drive.google.com/uc?id=13ImQSICKw24SHv3QDbbz4NO4ErUZGPOT)

더 내려가서 소프트웨어 스택 부분에 Ruby를 체크합니다. 

이렇게 설정하고 나머지는 기본값으로 두면 됩니다. 맨 오른쪽 아래 내려가서 생성하기를 클릭!!
아마 오류가 뜰 겁니다.(컨테이너 이름에 '.' 이 들어가면 안되기 때문입니다.)
위로 올라가서 컨테이너 이름을 수정해줍시다. (저는 sms7950으로 정했습니다.)


## 3.Jekyll 테마 적용


추천할만한 Jekyll 사이트 목록 
- http://jekyllthemes.org/
- https://jekyllthemes.io/free

등등 사이트에서 마음에 드는 테마를 찾으면 됩니다. 저는 http://jekyllthemes.org/ 에서 Another Yat Theme 로 선택할게요.

![img](https://drive.google.com/uc?id=1RlXQK5plGdVUzQXOQOywiKvUPXFp72mf)

원하는 테마 선택 !

![img](https://drive.google.com/uc?id=17x7cyeYe5ueugRSi8AFhNNBkRxSOlPRO)

여기서 HomePage로 들어갑니다.

![img](https://drive.google.com/uc?id=1QDHzUwot2ZPmuJd_18J1AQ0JYwg3X1aH)

오른 쪽 위 초록색 버튼으로 되어있는 Code 부분 누르시고 Download Zip 선택!

![img](https://drive.google.com/uc?id=1HZ4-96OuBq0XCkmrZZhh3rFX5ey1IJ25) 
다시 전에 만들었던 구름IDE컨테이너로 들어갑시다.  왼쪽 위 메뉴에서 '파일' → '가져오기' → '파일' 클릭해서 전에 받았던 JekyllTheme 를 가져옵니다.

![img](https://drive.google.com/uc?id=1eS-fr21-MZRvVk9DsnHH_aRwUq22Z03T) 
아래에 있는 '파일 선택' 클릭 후 전에 받았던 JekyllTheme 를 선택합니다.






## 4.repository을 구름IDE에 복제하기



## 5.Jekyll 테마 수정
