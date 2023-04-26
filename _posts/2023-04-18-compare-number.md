---
layout: post
title: "[Prompt] 숫자 비교하기 프롬프트"
subtitle: "Chat gpt에서 숫자 비교하기"
categories: Prompt 2023MicrosoftAzurethon
tags: [Prompt,Chatgpt,2023MicrosoftAzurethon,유아교육]
banner:
  image: https://drive.google.com/uc?id=152gysplq3cZxy8zJovxibtMLYYMTljJC
  opacity: 0.618
  background: "#000"
  height: "100vh"
  min_height: "38vh"
  heading_style: "font-size: 3.25em; font-weight: none; text-decoration: none"
  subheading_style: "color: #E6E6FA"
---
<span style="background-color:#E6E6FA"><span style="color:#454545">※해당 게시물은 2023 ChatGPT Microsoft Azurethon 출품작으로 제출했습니다. </span> </span>


|:🛫<span style="color:#9370DB">**팀 이름:** </span>:|: <span style="color:#9370DB">**skytin1004**</span>:|
|:🛫<span style="color:#9370DB">**팀장 아이디:** </span>:|: <span style="color:#9370DB">**sms7950@gmail.com**</span>:|



## 목차

<span style="color:#9370DB">**1. 숫자 비교하기 프롬프트 소개**</span>

<span style="color:#9370DB">**2. 숫자 비교하기 프롬프트 설명**</span>

<span style="color:#9370DB">**3. ChatGPT 진행**</span>

## 1.숫자 비교하기 프롬프트 소개

유치원에서는 어린이들에게 다양한 프로그램을 체험시키기 위해 회사가 제공하는 유아교육 프로그램을 이용할 수 있습니다. 예를 들어 'A'라는 회사에서 
어린이들이 다양한 체험활동을 할 수 있도록 유치원에 '영어동요','영어놀이와 관련된 체험키트'를 제공하면 유치원에서 해당 체험키트를 이용해 어린이들에게 영어 교육을 제공할 수 있습니다.
이러한 배경을 바탕으로 6~7세 어린이들이 인공지능 기술과 관련된 체험을 할 수 있고,ChatGPT와 관련된 대규모 언어 모델(LLM)기술에 친숙해질 수 있도록 ChatGPT와 어린이 교육을 접목시킨 다양한 프롬프트를 
제공하는 서비스를 고안했습니다.이 프로젝트의 일환으로 ChatGPT를 이용한 어린이 교육 프로그램인 "숫자 비교하기 프롬프트"를 제작했습니다.


숫자 비교하기 프롬프트는 어린이들이 여러 개의 숫자를 보고 어떤 숫자가 더 큰지 생각해보고 나열해보는 프롬프트 입니다. 6~7세 어린이들을 대상으로 프롬프트를 제작했으며,
어린이가 보기에 적절한 수준의 숫자 범위를 선정해서 선정된 범위 안의 숫자를 제시할 수 있습니다. 어린이들의 숫자 비교 능력을 함양할 수 있도록
유치원 선생님 또는 학부모의 지도 하에 교육을 실시할 수 있습니다.

### 프롬프트 작동과정
![img](https://drive.google.com/uc?id=152gysplq3cZxy8zJovxibtMLYYMTljJC)

숫자 비교하기 프롬프트는 역할 지정 및 진행순서와 게임 규칙을 알려주는 <span style="color:#9370DB">지시문</span>, 게임의 진행방식을 보여주는 <span style="color:#9370DB">예시</span>,
숫자 비교하기 프롬프트의 조건을 입력할 수 있는 <span style="color:#9370DB">조건입력</span>이 있습니다.
 
### 프롬프트 시연

결과 화면은 아래와 같습니다. 

![img](https://drive.google.com/uc?id=1FrIe1MHjHc8UJSiwlnpiClZoncX7a3XU)
[CompareNumberPrompt]


### 입력 프롬프트
---

숫자 비교하기 프롬프트 전문입니다.

```Prompt
As a math expert who teaches 6-7 year olds, I have a fun activity to help you practice comparing and ordering numbers. Imagine that you're a little kid and I'm the expert guiding you through the activity.

To start, please provide me with a range of numbers and the number of values you'd like to compare. You can do this by entering the information in the below format.

For example, you could enter:

INPUT ("Enter a range of numbers"): 1-20
INPUT ("Enter the number of values to compare"): 3

Once you've provided the range and number of values, I'll randomly generate a set of numbers within that range. Your task is to compare those numbers and list them in order from largest to smallest.

For instance, I might say something like, "For example, if the range is 1-20 and you're comparing 3 numbers, please order the following numbers from largest to smallest."

Then, you would look at the numbers and list them in order of magnitude. After you've completed the task, If you didn't list the numbers in large order, I'll answer "I'm sorry, that's not the correct order." and list the correct order. I'll verify that you listed the numbers in the correct order, and offer some additional explanations that will help you understand the concept of comparing and ordering numbers.

Are you ready to get started? If so, please provide me with your chosen range of numbers and the number of values you'd like to compare in the following format.

INPUT ("Enter a range of numbers" ex. 1-20):
INPUT ("Enter the number of values to compare" ex. 3):
```

## 2.숫자 비교하기 프롬프트 설명
숫자 비교하기 프롬프트의 작동방식 및 구조에 대해서 설명하겠습니다.
```Prompt
As a math expert who teaches 6-7 year olds, I have a fun activity to help you practice comparing and ordering numbers.
Imagine that you're a little kid and I'm the expert guiding you through the activity.

```
프롬프트에서 ChatGPT는 6~7세의 어린아이를 가르치는 수학 전문가이며, 여러분은 수학 전문가에게 재미있는 수학 활동을 배우고있는 어린이라고 가정합니다.

```Prompt
To start, please provide me with a range of numbers and the number of values you'd like to compare. You can do this by entering the information in the below format.

For example, you could enter:

INPUT ("Enter a range of numbers"): 1-20
INPUT ("Enter the number of values to compare"): 3
```

ChatGPT에 조건을 입력하는 예시를 보여주는 부분입니다. 

<span style="color:#9370DB">**1. INPUT ("Enter a range of numbers"):1-20**</span> 

첫번째 INPUT에는 비교를 할 수 있는 수의 범위를 입력합니다. 예시에서 ChatGPT는 1부터 20까지의 숫자 범위 내에서 숫자를 고를 수 있습니다.

<span style="color:#9370DB">**2. INPUT ("Enter the number of values to compare"): 3** </span>

두번째 INPUT에는 비교할 숫자 개수를 입력합니다. 예시에서 ChatGPT는 정해진 숫자 범위 내에서 비교할 3가지의 숫자를 보여줍니다.

```Prompt
Once you've provided the range and number of values, I'll randomly generate a set of numbers within that range. Your task is to compare those numbers and list them in order from largest to smallest.

For instance, I might say something like, "For example, if the range is 1-20 and you're comparing 3 numbers, please order the following numbers from largest to smallest."

Then, you would look at the numbers and list them in order of magnitude. After you've completed the task, If you didn't list the numbers in large order, I'll answer "I'm sorry, that's not the correct order." and list the correct order. I'll verify that you listed the numbers in the correct order, and offer some additional explanations that will help you understand the concept of comparing and ordering numbers.

Are you ready to get started? If so, please provide me with your chosen range of numbers and the number of values you'd like to compare in the following format.

```

ChatGPT에 조건이 입력된 이후 ChatGPT의 진행 방식을 설명하는 부분입니다.

ChatGPT는 INPUT에 입력된 조건을 바탕으로 게임을 진행합니다. 

예를 들어 위의 예시처럼 입력을 했다면,  ChatGPT는 1에서 20까지의 숫자 중에서 3개의 숫자를 무작위로 보여줍니다.

어린이는 ChatGPT가 무작위로 보여준 숫자 3개를 크기가 큰 순서대로 비교합니다.

ChatGPT는 어린이가 한 답변을 토대로 어린이의 답변이 정확한지 알려주고 숫자 비교에 대한 자세한 설명과 함께 수학적인 조언을 해줍니다.


```Prompt
Are you ready to get started? If so, please provide me with your chosen range of numbers and the number of values you'd like to compare in the following format.

INPUT ("Enter a range of numbers" ex. 1-20):
INPUT ("Enter the number of values to compare" ex. 3):
```

실제로 ChatGPT에게 정보를 입력하는 부분입니다. ChatGPT는 INPUT에 입력된 조건을 바탕으로 숫자 비교하기 프롬프트를 진행합니다.

## 3.ChatGpt 진행
숫자 비교하기 프롬프트 전문입니다.
![img](https://drive.google.com/uc?id=1pV6yzUlfN-AEfn23MTBPnXdK75716WF6)
[CompareNumberPrompt]

<span style="color:#9370DB">**1. INPUT ("Enter a range of numbers"):1-30**</span> 

<span style="color:#9370DB">**2. INPUT ("Enter the number of values to compare"): 5** </span>

INPUT에 위와 같이 입력 후 프롬프트를 실행하면 숫자 비교하기 게임이 시작됩니다.

![img](https://drive.google.com/uc?id=1KWTc60Z-Oh_uJPRLG4xgF7ofez1Q89nr)
[Chat1]

INPUT에 입력한 조건들을 토대로 ChatGPT는 게임을 진행합니다.

사진에서는 ChatGPT가 <span style="color:#9370DB">(15,3,27,8,20)</span> 숫자들을 제시했고 답변을 통해 ChatGPT가 제시한 숫자들을 
위 사진처럼 큰 순서대로 나열합니다. <span style="color:#9370DB">(27,20,15,8,3)</span>

ChatGPT는 나열된 숫자가 큰 순서대로 나열됐는지 확인 후 어린이에게 수학적인 조언을 해줍니다.

