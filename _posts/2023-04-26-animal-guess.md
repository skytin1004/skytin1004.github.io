---
layout: post
title: "[Prompt] 동물사진 맞추기 프롬프트"
subtitle: "Chat gpt에서 동물사진 맞추기"
categories: Prompt 2023MicrosoftAzurethon
tags: [Prompt,Chatgpt,유아교육,2023MicrosoftAzurethon]
banner:
  image: https://drive.google.com/uc?id=1GUh94bgqNzZ8QYRp7jwflSV0FgDPONlQ
  opacity: 0.618
  background: "#000"
  height: "100vh"
  min_height: "38vh"
  heading_style: "font-size: 3.25em; font-weight: none; text-decoration: none"
  subheading_style: "color: #E6E6FA"
---


<span style="background-color:#E6E6FA"><span style="color:#454545">※해당 게시물은 2023 ChatGPT Microsoft Azurethon 출품작으로 제출했습니다. </span> </span>


|🛫<span style="color:#9370DB">**팀 이름:** </span>| <span style="color:#9370DB">**skytin1004**</span>|



## 목차

<span style="color:#9370DB">**1. 동물사진 맞추기 프롬프트 소개**</span>

<span style="color:#9370DB">**2. 동물사진 맞추기 프롬프트 설명**</span>

<span style="color:#9370DB">**3. ChatGPT 진행**</span>

<span style="color:#9370DB">**4. 정확성을 위한 프롬프트 개선**</span>

## 1.동물사진 맞추기 프롬프트 소개


유치원에서는 어린이들에게 다양한 프로그램을 체험시키기 위해 회사가 제공하는 유아교육 프로그램을 이용할 수 있습니다. 예를 들어 'A'라는 회사에서 
어린이들이 다양한 체험활동을 할 수 있도록 유치원에 '영어동요','영어놀이와 관련된 체험키트'를 제공하면 유치원에서 해당 체험키트를 이용해 어린이들에게 영어 교육을 제공할 수 있습니다.
이러한 배경을 바탕으로 6~7세 어린이들이 인공지능 기술과 관련된 체험을 할 수 있고,ChatGPT와 관련된 대규모 언어 모델(LLM)기술에 친숙해질 수 있도록 ChatGPT와 어린이 교육을 접목시킨 다양한 프롬프트를 
제공하는 서비스를 고안했습니다.이 프로젝트의 일환으로 ChatGPT를 이용한 어린이 교육 프로그램인 "동물사진 맞추기 프롬프트"를 제작했습니다.


동물사진 맞추기 프롬프트는 어린이들이 동물의 사진을 보고 이 동물이 어떤 동물인지 생각해보고 맞춰보는 프롬프트 입니다. 6~7세 어린이들을 대상으로 프롬프트를 제작했으며,
어린이가 보기에 적절한 동물 사진 13개를 선정해서 선정된 범위 안의 사진만 제시하도록 설정했습니다. 어린이들이 새로운 동물들을 많이 알아갈 수 있도록
유치원 선생님 또는 학부모님들의 지도 하에 교육을 실시할 수 있습니다.

### 프롬프트 작동과정
![img](https://drive.google.com/uc?id=1GUh94bgqNzZ8QYRp7jwflSV0FgDPONlQ)

동물사진 맞추기 프롬프트는 역할 지정 및 진행순서와 게임 규칙을 알려주는 <span style="color:#9370DB">지시문</span>, 게임의 진행방식을 보여주는 <span style="color:#9370DB">예시</span>,
동물사진 목록을 보여주는 <span style="color:#9370DB">지문</span>, ChatGpt가 동물 사진을
제시하도록 유도하는 <span style="color:#9370DB">답변유도</span>로 구성했습니다.
 
### 프롬프트 시연

결과 화면은 아래와 같습니다. 

![img](https://drive.google.com/uc?id=1P3O5GuuDoBO6qhZ53LxInyC4SwuhS6ZF)
[AnimalGuessPrompt]


### 입력 프롬프트
---

동물사진 맞추기 프롬프트 전문입니다.

```Prompt
Prompt:
As a professional who specializes in helping young children guess pictures accurately, I will guide you through a fun exercise! Imagine that you are a young child and I am the expert. 
I will randomly select one of 13 pictures from the list below and show it to you. 
For example, I might show you a picture of a rabbit and say, "which animal is in this picture?" 
Then, you will answer which animal in this picture and I will let you know if your answer matches the picture I selected.

To get started, please follow these steps:

1.I will randomly select one of the pictures from the list below and show you the picture I selected.
2.I will show you the picture I selected. The picture will be displayed as follows: $picture image$ "Please guess which animal is in this picture!"
3.You will guess which animal is in the picture.
4.As the expert, I will read your answer and kindly let you know if your answer matches the picture I selected.
5.I will draw empty 2x2 $markdown table$ without a code block
6.If your answer matches the picture I selected,I will add a cute animal emoji to the $markdown table$ below
and If your answer does not match the picture, we will continue playing until we get 4 correct guesses.
7.We will repeat steps 1-6 until we get 4 correct guesses. If there are 4 emojis in the 2x2 $markdown table$, I will give you a big compliment!

To display the $picture image$, please use the format ![{picture number}](https://drive.google.com/uc?id={picture link}).
 
Here is the list of pictures:
{picture number}, {picture name}, {picture link}
1, rabbit, 1mHNpUSMt6mUngJFSQCOfORup5yRXEtXL
2, giraffe,1nLvenq-rZZls4mg4CxpM2gxYibpuooAX
3, cat, 1c654EyK6nfBZfjtWRSyCcHggj6XclHR8
4, hamster, 1e1lUJwveC-jMCMKv62dm5CHLiTaUKIAD
5, dog, 1T_Ik7g2Sq4tX3Yh_GOMjHoPF30ByHedL
6, fox, 1LHGyqLR9W_B1GggH4j9HBMx-lhCgJFJw
7, horse, 14PdboZaOXQF51fH7__YpYTIIKGAlsQRY
8, zebra, 1JNuf5bgTwu7_dOi79ZnI6Q35U7KXH8ok
9, elephant, 1bVUjdzlP3uiw4Vrtbr4bJ9JW6EiSqT0Z
10, hedgehog, 1KnL16FL6yPNMBN0KufnpTai4DoTFautM
11, bird, 1UKWWSOM-eeMKrGGiMss644xO1eJ6aCUe
12, polarbear, 1irVVAJOTwNY_J_P0MhMP0iR7KNqA6m2v
13, duck, 1l_SxQos0FkYt7RKXZJOXnmDolgViEkuw

picture:
```

## 2.동물사진 맞추기 프롬프트 설명
동물사진 맞추기 프롬프트의 작동방식 및 구조에 대해서 설명하겠습니다.
```Prompt
As a professional who specializes in helping young children guess pictures accurately,
I will guide you through a fun exercise! Imagine that you are a young child and I am the expert.
```
프롬프트에서 ChatGPT는 어린아이들이 사진을 추측할 수 있도록 도와주는 전문가 역할을 맡고 있으며 여러분은 6~7세의 어린이라는 가정하에 대화를 진행합니다.

```Prompt
I will randomly select one of 13 pictures from the list below and show it to you. 
For example, I might show you a picture of a rabbit and say, "which animal is in this picture?" 
Then, you will answer which animal in this picture and I will let you know if your answer matches the picture I selected.
```
ChatGPT는 먼저 프롬프트 안에 있는 13개의 동물 사진 중에서 무작위로 하나를 선택해서 어린이에게 보여줍니다. (13개의 동물 사진은 구글 드라이브 링크와 연결되어있습니다.)
어린이는 ChatGPT가 제시한 사진을 보고 사진 속 동물이 어떤 동물인지 추측합니다.

```Prompt
To get started, please follow these steps:
1.I will randomly select one of the pictures from the list below and show you the picture I selected.
2.I will show you the picture I selected. The picture will be displayed as follows: $picture image$ "Please guess which animal is in this picture!"
3.You will guess which animal is in the picture.
4.As the expert, I will read your answer and kindly let you know if your answer matches the picture I selected.
5.I will draw empty 2x2 $markdown table$ without a code block
6.If your answer matches the picture I selected,I will add a cute animal emoji to the $markdown table$ below
and If your answer does not match the picture, we will continue playing until we get 4 correct guesses.
7.We will repeat steps 1-6 until we get 4 correct guesses. If there are 4 emojis in the 2x2 $markdown table$, I will give you a big compliment!
```

동물사진 맞추기 프롬프트의 진행 순서를 설명하는 부분입니다. 예를 들어 ChatGPT가 제시한 고양이 사진을 보고 "cat"이라고 답변을 했다면
ChatGPT는 어린이에게 칭찬과 함께 2x2 보드판을 만들어서 귀여운 동물 이모지를 하나 추가합니다.
만약 어린이가 "cat"이 아닌 다른 답변을 했다면 다시 추측해보라는 말을 합니다.(이모지는 추가하지 않습니다.)
어린이가 좋아할 만한 요소를 넣고자 2x2 점수 보드판을 프롬프트에서 생성하도록 설정했습니다. 이후 ChatGPT는 새로운 동물 사진을 보여줍니다.
이와 같은 방식으로 게임을 계속 진행하다 2x2 보드판에 귀여운 동물 이모지 4개가 채워지면 ChatGPT는 어린이에게 특급 칭찬을 해줍니다.
이후 게임이 종료됩니다.


```Prompt
To display the $picture image$, please use the format ![{picture number}](https://drive.google.com/uc?id={picture link}).
```

동물 사진의 이미지를 표시하기 위해 구글 드라이브에 있는 동물사진 이미지를 마크다운 형식으로 가져옵니다.

```Prompt
Here is the list of pictures:
{picture number}, {picture name}, {picture link}
1, rabbit, 1mHNpUSMt6mUngJFSQCOfORup5yRXEtXL
2, giraffe,1nLvenq-rZZls4mg4CxpM2gxYibpuooAX
.
.
.
13, duck, 1l_SxQos0FkYt7RKXZJOXnmDolgViEkuw

picture:
```
"picture:" 은 ChatGPT가 동물 사진 이미지를 제시하도록 하는 답변 지시 유도어입니다.


## 3.ChatGpt 진행
동물사진 맞추기 프롬프트 전문입니다.
![img](https://drive.google.com/uc?id=1rk05D3ynjtYWs9JhOak3WH0x8RQeE_Dn)
[AnimalGuessPrompt]

위의 프롬프트 전문을 복사해서 ChatGPT에 입력하면 동물 사진 맞추기 프롬프트가 실행됩니다.

![img](https://drive.google.com/uc?id=14u4fG6jOjXx_roIx2ExM5I3koqzs07zz)
[Chat1]

ChatGPT는 프롬프트 안에 있는 동물 사진 목록 중 하나를 선택해서 여러분에게 보여줍니다. 
이번에는 고양이 사진을 선택헀습니다.

![img](https://drive.google.com/uc?id=1-ja5O6EEjwUBjQgZKjikfGcZDgl4-kAS)
[Chat2]

ChatGPT가 사진을 보여주면 여러분은 사진을 보고 사진 속에 어떤 동물이 있는지 맞춰봅니다.
처음에는 답을 잘못 입력해서 "cat" 대신에 "ccat"을 입력했습니다.

ChatGPT는 사진 속에 어떤 동물이 있는지 정확히 맞출 때 마다 2x2테이블 안에 귀여운 동물 이모지를 하나 씩
추가하기로 설정되어있습니다. 하지만 답변이 틀렸을 경우에는 이모지를 추가하지 않습니다.

![img](https://drive.google.com/uc?id=1S3Y7wP8gJ4iUV09VuziDjCR4NvWuZSAQ)
[Chat3]

다시 "cat"을 입력해서 답변을 받은 모습입니다. 프롬프트에서 설정했던 대로 ChatGPT는 2x2테이블 안에 귀여운 고양이 이모지를 하나 줬습니다.
이후 ChatGPT는 2x2테이블이 이모지로 다 채워질 때 까지 계속해서 새로운 사진을 보여줍니다.
![img](https://drive.google.com/uc?id=1lxqGMr7VPjuRGDLSI03Yemeeo2DGY4Fa)
[Chat4]

이번에 ChatGPT가 제시한 사진은 강아지 사진입니다. 제시된 동물 사진을 보고 "dog"라고 입력합니다.

![img](https://drive.google.com/uc?id=1t0c7f711Hgrmx4AeguowTYcEiAeTP7mI)
[Chat5]

동물의 사진과 입력한 답변 "dog"가 일치했으므로 ChatGPT는 2x2테이블에 귀여운 강아지 이모지를 추가합니다.
그 다음 새로운 사진을 보여줍니다.
![img](https://drive.google.com/uc?id=1fVasp5ERZxob2lYMg4ekAyjFODFzNMQ8)
[Chat6]

이번에 ChatGPT가 제시한 사진은 햄스터 사진입니다. 제시된 동물 사진을 보고 "hamster"라고 입력합니다.
동물의 사진과 입력한 답변 "hamster"가 일치했으므로 ChatGPT는 2x2 테이블에 귀여운 햄스터 이모지를 추가합니다. 
그 다음 새로운 사진을 보여줍니다.
![img](https://drive.google.com/uc?id=1VcXhiU1DPaal7N4pOJdJpzLy6_knelIm)
[Chat7]

이번에 ChatGPT가 제시한 사진은 얼룩말 사진입니다. 제시된 동물 사진을 보고 "zebra"라고 입력합니다.
동물의 사진과 입력한 답변 "zebra"가 일치했으므로 ChatGPT는 2x2 테이블에 귀여운 얼룩말 이모지를 추가합니다. 
2x2테이블에 귀여운 동물 이모지 4개가 모였으므로 ChatGPT는 여러분에게 특급 칭찬을 해주며 대화를 마무리 합니다.


## 4.정확성을 위한 프롬프트 개선


### 1. 마크다운 테이블 초기화 문제 개선

기존의 프롬프트로 여러번 실행을 해본 결과 어린이가 동물의 정답을 맞추었을 때는
마크다운 표에 동물 이모지가 추가되지만 어린이가 오답을 했을 시 기존 마크다운 안에 들어있던 이모지들이 전부 초기화되고 새로운 마크다운 테이블을 
보여주는 문제가 발생했습니다. 

><span style="color:#9370DB">기존 프롬프트: "If your answer does not match the picture, we will keep the existing markdown table intact and show"</span>

기존 프롬프트를 작성했을 때 기존 마크다운 테이블을 그대로 유지하고 보여주도록 지시했습니다. 하지만 오답을 답한 경우 마크다운 테이블을 초기화한 후 보여주는 문제가 생겨 아래와 같이 프롬프트를 개선했습니다. 

><span style="color:#9370DB">수정된 프롬프트: "If your answer does not match the picture, we will continue playing until we get 4 correct guesses."</span>

<span style="color:#9370DB">"continue playing until we get 4 correct guesses"</span> 이라는 문장을 삽입해서 4개의 정답을 맞출 때 까지
(오답을 하더라도) 마크다운 테이블의 이모지를 유지할 수 있도록 프롬프트를 개선했습니다.


### 2.게임 종료 조건을 무시하는 문제 개선

><span style="color:#9370DB">기존 프롬프트: "7.We will repeat steps 1-6 until we get 4 emoji in 2x2 markdowntable."</span>

기존 프롬프트에서 게임을 끝내는 조건을 <span style="color:#9370DB">"get 4 emoji in 2x2 markdowntable"</span>로  설정 헀을 시 

ChatGPT가 해당 조건을 인지하지 못하고 무한히 게임을 반복하는 상황이 발생했습니다.

><span style="color:#9370DB">수정된 프롬프트: "7.We will repeat steps 1-6 until we get 4 correct guesses."</span>

해당 조건을 <span style="color:#9370DB">get 4 correct guesses</span>로 변경함으로써

정답을 4번 맞추게 되면 게임을 종료할 수 있도록 프롬프트를 개선했습니다.



### 3.ChatGPT가 사진링크의 사진을 인식하지 못하는 문제 개선

문제상황은 다음과 같았습니다.

게임 진행 도중 ChatGPT가 하얀색 강아지 사진을 제시해서 "dog"라는 답변을 입력했지만 ChatGPT는 해당 사진을 "snowman"으로 인식해서 오답처리하는 경우가 발생했습니다.

이에 대한 해결방법으로는 두 가지가 있었습니다. 

#### 1. 동물사진 개수 줄이기

처음에는 약 24가지의 동물사진을 바탕으로 프롬프트를 제작했습니다. 사진의 갯수가 많아질수록 ChatGPT가 동물사진 맞추기 프롬프트의 룰을 인지하지 못하고 맥락과 일치하지 않는 말을 하는 빈도가 늘었습니다.
그렇기 때문에 불필요한 동물사진의 갯수를 줄임으로써 ChatGPT 답변의 일관성을 높힐 수 있었습니다.

#### 2. 동물사진 링크의 동물과 해당 링크의 동물 이름 일치시키기

두번째 개선 방법으로는 사진 링크에 대응되는 사진 이름을 정확한 동물의 이름으로 대응시키는 것입니다.
ChatGPT가 제시한 사진은 하얀 강아지 사진인데 ChatGPT는 이를 "눈사람" 으로 인식하고 있었습니다. 이렇게 ChatGPT가 사진을 부정확하게 인지하는 경우를 방지하고자
아래 프롬프트처럼 {picture link}에서 보여주는 동물사진과 {picture name} 이 정확히 일치하도록 프롬프트를 수정했습니다.

```Prompt
Here is the list of pictures:
{picture number}, {picture name}, {picture link}
1, rabbit, 1mHNpUSMt6mUngJFSQCOfORup5yRXEtXL
2, giraffe,1nLvenq-rZZls4mg4CxpM2gxYibpuooAX
3, cat, 1c654EyK6nfBZfjtWRSyCcHggj6XclHR8
.
.
.
13, duck, 1l_SxQos0FkYt7RKXZJOXnmDolgViEkuw
```

위와 같이 프롬프트를 수정함으로써 ChatGPT의 사진 인식 문제를 해결할 수 있었습니다.