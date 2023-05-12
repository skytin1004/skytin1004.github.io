---
layout: post
title: "[airflow]첫 오픈소스 컨트리뷰션"
subtitle: "간단한 내용으로 오픈소스 기여하기"
categories: Contribution Airflow
tags: [Contribution,OpenSource,Airflow]
banner:
  image: https://drive.google.com/uc?id=1-iLsCTOpKgfrSHaKPwzyTEicQVx1lc-x
  opacity: 0.618
  background: "#000"
  height: "100vh"
  min_height: "38vh"
  heading_style: "font-size: 3.25em; font-weight: none; text-decoration: none"
  subheading_style: "color: #E6E6FA"
---

## 오픈소스 컨트리뷰션 하게 된 이유

데이터 수집을 담당하는 apache-airflow의 원리과 구조를 공부해보고 싶어서 airflow에 기여를 하게 되었습니다. 
처음 오픈소스에 기여하기 때문에 주요 내용을 수정하기 보다는 airflow의 문서에서 오탈자를 찾아 고치는 방식으로 진행했습니다. 
오픈소스에 기여하는 방법은 정말 다양합니다. 오픈소스의 핵심 기능을 추가하거나 주요 버그를 수정 하는 것 뿐만 아니라 문서를 변역하거나 오탈자를 수정함으로써 오픈소스에 기여할 수 있습니다. 

airflow에 대한 공부를 많이 해서 시스템 내부를 손 보거나 버그를 고치고 새로운 기능을 추가해
보는 것이 목표입니다.


## apache-airflow 란?

apache-airflow는 데이터 처리 및 워크플로우를 자동화해주는 오픈소스 플랫폼입니다.

## 오픈소스 컨트리뷰트 방법

저 같은 경우는 airflow 문서의 오탈자를 잡아내거나 주석에서 문법적으로 잘못된 부분을 찾아 <span style="color:#9370DB">Pull request</span> 를 해서 apache-airflow에
컨트리부트 하게 되었습니다.

### 오픈소스 컨트리뷰션의 과정
오픈소스에 기여하는 것을 오픈소스 컨트리뷰션이라고 하는데 오픈소스 컨트리뷰션은 <span style="color:#9370DB">Fork → Pull Request → Merge</span>
과정으로 이루어집니다. 오픈소스가 존재하는 메인 레포지토리(저장소)에서 본인의 레포지토리로 가져오는 것을 <span style="color:#9370DB">"Fork"</span>, 본인의 레포지토리에서 오픈소스를 수정하고 메인 레포지토리에 변경 요청을 하는 것을
<span style="color:#9370DB">"Pull request"</span>, 오픈소스 커미터가 변경 내용을 승인해서 메인 레포지토리에 통합하는 것을 <span style="color:#9370DB">"Merge"</span>라고 합니다.

### 1. Fork

![img](https://drive.google.com/uc?id=1r5Yxc2G8HHawBQs_wIvM-zcN_u0oCVBS)

apache/airflow 레포지토리에 들어가서 오른쪽 위에 <span style="color:#9370DB">Fork → + Create a new fork</span>를 눌러 본인 레포지토리로 가져옵니다.


![img](https://drive.google.com/uc?id=1NH0q-iScN2XRtBhrOIC8sOXdjtaZGis8)

apache/airflow에서 airflow를 제 레포지토리로 가져온 모습입니다. apache/airflow 대신에 skytin1004/airflow가 있습니다. 

여기서 파일을 수정해 apache의 airflow 레포지토리에 <span style="color:#9370DB">Pull request</span>를 올리면 됩니다.

![img](https://drive.google.com/uc?id=1-iLsCTOpKgfrSHaKPwzyTEicQVx1lc-x)

이렇게 문서나, 코드의 주석에서 문법적인 오류나 오탈자를 수정해 apache/airflow 에 <span style="color:#9370DB">Pull request</span>를 했습니다. 

### 2. Pull request

![img](https://drive.google.com/uc?id=15DYFz10kLovdP5fq0K8AR70jyDv4ez89)

파일 수정을 해서 본인의 레포지토리에 커밋을 했다면 이제 <span style="color:#9370DB">Pull request</span>를 해야 합니다. <span style="color:#9370DB">Contribute → Open Pull Request</span> 클릭합니다.

![img](https://drive.google.com/uc?id=11KYJyqllkdJDDrh1L2Kn2gR7xquc9wvO)

<span style="color:#9370DB">Pull request</span>를 할 때는 제목과 내용을 영어로 상세하게 적어줍니다. 

저는 오탈자 수정 위주의 커밋을 했기 때문에 <span style="color:#9370DB">"Fix Typos and Polish ~"</span> 라는 제목으로 <span style="color:#9370DB">Pull request</span> 했습니다.

### 3. Merge

이제 apache/airflow의 커미터가 커밋할 때 까지 기다립니다. 바로 되는 경우도 있지만 여러명의 커미터 또는 컨트리뷰터와 계속 문제를 조정하거나 개선해야 하기도 합니다.

![img](https://drive.google.com/uc?id=1hwNzgZxOqAFsSExM0D5o8IssCnwpy75R)
![img](https://drive.google.com/uc?id=1fxFn4-D8YJJF8hVBO4IcR6H-DdakoYEc)

이렇게 apache/airflow에 첫 컨트리뷰션을 마무리 했습니다. 

## 컨트리뷰션

![img](https://drive.google.com/uc?id=1TBiuOcFEBf8YVFaqRlU_NAEx7yZg1vER)

컨트리뷰션이 완료되면 메인 브렌치에 <span style="color:#9370DB">Pull request</span>한 내용이 나옵니다.

![img](https://drive.google.com/uc?id=1un7MG8lP_ngiklIWUalbCjvW2ce_JnSf)

apache-airflow의 Contributer 목록에서 제 깃허브 이름이 나오는 것을 확인할 수 있습니다. 

