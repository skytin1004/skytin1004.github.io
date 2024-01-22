---
layout: post
title: "[Python] 파이썬 enumerate 함수 정리하기"
subtitle: "enumerate: 원소와 번호 나열하기"
categories: Dev
tags: [Python,Function]
banner:
  image: none
  opacity: 0.618
  background: "#7092BF"
  height: "100vh"
  min_height: "38vh"
  heading_style: "font-size: 2.5em; font-weight: none; text-decoration: none"
  subheading_style: "color:"
---

## enumerate 함수 정의
enumerate 는 리스트의 원소와 번호를 차례대로 나열하는 함수입니다.<br>

<span style="color:gray">※enumerate 는 '나열하다' 라는 뜻입니다.</span><br>
<span style="color:gray">※enumerate 는 리스트 뿐만 아니라 반복가능한 객체인 [list,tuple,set,dictionary,string]에 적용할 수 있습니다.</span>

## enumerate 함수 용도
enumerate함수는 리스트 원소들에 번호를 매길 때 사용합니다.<br>

## enumerate 함수 사용법
: enumerate(<span style="color:#9370DB">리스트</span>,	<span style="color:#6B8E23">start = 시작번호</span>)<br>
enumerate 의 첫번 째 인자에는 번호를 매길 리스트가 들어가고 두 번째 인자에는 원소에 번호가 매겨지는 시작번호가 들어갑니다.<br>
<span style="color:gray">(시작번호의 기본값은 '0' 이며,
두번째 인자에 적은게 없다면 '0'부터 번호가 나열됩니다.)</span><br>
enumerate 함수는 주로 for 문이랑 같이 사용합니다. 아래 예시를 통해서 자세히 설명하겠습니다.<br>
## enumerate 함수 예시 
#### 예시0: enumerate 함수의 형태(참고)
enumerate는 리스트의 원소와 번호 한 쌍을 튜플로 묶는 함수입니다.<br>
enumerate를 사용할 때는 주로 for문이랑 같이 사용합니다.(예시 1,2 참고)
```python
alphabet=['a','b','c','d','e','f','g']

result1 = list(enumerate(alphabet))
result2 = dict(enumerate(alphabet))
result3 = tuple(enumerate(alphabet))
print(result1)
print(result2)
print(result3)
```
실행결과
```python
[(0, 'a'), (1, 'b'), (2, 'c'), (3, 'd'), (4, 'e'), (5, 'f'), (6, 'g')]
{0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', 6: 'g'}
((0, 'a'), (1, 'b'), (2, 'c'), (3, 'd'), (4, 'e'), (5, 'f'), (6, 'g'))
```
#### 예시1: enumerate 함수의 사용
```python
alphabet=['a','b','c','d','e','f','g']

for i,j in enumerate(alphabet):
    print(i,":",j)
	
```
실행결과
```python
0 : a
1 : b
2 : c
3 : d
4 : e
5 : f
6 : g
```
이렇게 enumerate를 사용하면 리스트 원소들에 0부터 번호가 매겨집니다. <br>
#### 예시2: enumerate 함수 시작번호 변경

이번에는 두번째 인자에 처음 시작하는 번호를 입력하겠습니다.
```python
alphabet=['a','b','c','d','e','f','g']

for i,j in enumerate(alphabet,start=1):
    print(i,":",j)
	
```
실행결과
```python
1 : a
2 : b
3 : c
4 : d
5 : e
6 : f
7 : g
```
