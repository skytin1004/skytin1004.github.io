---
layout: post
title: "[Python] split(),split(' ')차이"
subtitle: "문자열 나누는 함수: split(),split(' ')비교하기"
categories: Python
tags: [Python,여러가지함수,문자열]
banner:
  image: https://drive.google.com/uc?id=1-066lrD53EhS9Ty4OaObRca8CmhhFlsG
  opacity: 0.618
  background: "#000"
  height: "100vh"
  min_height: "38vh"
  heading_style: "font-size: 3.25em; font-weight: none; text-decoration: none"
  subheading_style: "color: #E6E6FA"
---

## split(), split(" ")
split 함수는 문자열을 쪼개서 리스트로 만드는 함수입니다.<br>
split() , split(" ") 둘 다 띄어쓰기를 기준으로 문자열을 나눈다는 공통점이 있습니다.<br> 하지만 
두 함수 사이에는 차이점이 있습니다.<br>이번 포스트에서는 split() , split(" ")의 차이점과 두 함수
가 각각 어떤 방식으로 작동하는지 알아보겠습니다.<br>

<span style="color:gray">※ split 함수에 대해 알고 싶다면 아래 "split 함수 정리하기" 링크를 클릭하세요.</span><br>
<a href="https://skytin1004.github.io/python/2023/01/25/split.html" target="_blank"><span style="color:#9370DB">split 함수 정리하기</span></a><br>

## split(), split(' ')함수의 작동방식
앞서 설명한 것 처럼 split(), split(" ") 은 띄어쓰기를 기준으로 문자열을 나누는 기능을 가지고 있습니다.<br>
<span style="color:#9370DB">"apple banana  lemon   orange    "</span> 라는 예시를 통해서  split(), split(" ")의 차이점을 알아보겠습니다.<br>
apple뒤에 띄어쓰기 한 번, banana뒤에 띄어쓰기 두 번 lemon뒤에 띄어쓰기 세 번 orange뒤에 띄어쓰기 네 번 하겠습니다.

### split() 함수의 작동방식
```python
fruits = "apple banana  lemon   orange    "
fruits = fruits.split()
print(fruits)
```
실행결과
```python
['apple', 'banana', 'lemon', 'orange']
```
split()을 사용하면 띄어쓰기가 여러번 되어있더라도 띄어 쓴 모든 부분을 한 번에 처리합니다.<br>
split()은 banana,lemon,orange 뒤에 띄어쓰기가 여러번 들어가도 한 번에 처리하기 때문에
"apple banana lemon orange"에 split()을 적용했을 때랑 같은 결과가 나오게 됩니다.

### split(' ')함수의 작동방식
```python
fruits = "apple banana  lemon   orange    "
fruits = fruits.split(" ")
print(fruits)
```
실행결과
```python
['apple', 'banana', '', 'lemon', '', '', 'orange', '', '', '', '']
```
split(" ")을 사용하면 구분자인 " "<span style="color:gray">(띄어쓰기 한 번)</span>을 기준으로 문자열이 나뉘기 때문에 여러번 띄어쓰기를 하게 되면 
문자 뒤에 바로 오는 띄어쓰기를 제외한 나머지 띄어쓰기가 각각 리스트의 원소로 들어갑니다. 뿐만 아니라 문자열 가장 앞,뒤에 입력된 띄어쓰기는 전부 
리스트의 원소로 각각 들어갑니다. 위 예시의 실행결과 <span style="color:#9370DB">'orange', '', '', '', ''</span>를 보면 문자열 가장 뒤인 <span style="color:#9370DB">'orange'</span>
뒤에 나온 총 네 번의 띄어쓰기들이 모두 리스트의 원소로 들어갔다는 것을 알 수 있습니다.<br>
또 다른 예를 들어 apple 앞에 띄어쓰기가 네 번 입력되었다면 위의 경우랑 마찬가지로  띄어쓰기 네 번이 각각 리스트 원소에 들어갑니다.<span style="color:gray">(아래 예시 참고)</span>
```python
fruits = "    apple"
fruits = fruits.split(" ")
print(fruits)
```
실행결과
```python
['', '', '', '', 'apple']
```
## split() split(" ")함수의 차이점
split()과 split(" ")의 실행결과를 보면 두번 이상 연속으로 띄어쓰기를 했던 <span style="color:#9370DB">"banana"</span> 뒤 부터 차이가 발생합니다.<br>
split()을 사용하면 banana 뒤에 띄어쓰기가 여러번 들어가도 한 번에 처리하여 띄어쓰기가 리스트의 원소로 들어가지 않는 반면에
split(" ")을 사용하면 banana뒤의 첫 번째 띄어쓰기만 처리하고 나머지 띄어쓰기들은 리스트의 원소로 들어갑니다.

