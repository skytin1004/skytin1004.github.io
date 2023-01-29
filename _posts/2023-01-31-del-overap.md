---
layout: post
title: "[Python] 파이썬 리스트 중복 제거하는 방법"
subtitle: "파이썬: 중복되는 원소 제거하기"
categories: Python
tags: [Python,리스트,방법]
banner:
  video: https://drive.google.com/uc?id=15v2reMqS5qHM1J9OUX11TJfOEIJ88XmZ
  volume: 0.0
  start_at: 0.0
  image: 
  opacity: 0.618
  background: "#000"
  height: "100vh"
  min_height: "38vh"
  heading_style: "font-size: 3.25em; font-weight: none; text-decoration: none"
  subheading_style: "color: #E6E6FA"
---

## 파이썬 중복 제거하는 방법<br>

파이썬에서 중복을 제거하는 방법은 크게 세가지가 있습니다.

1. 집합(set)을 이용해서 중복 제거하기
2. for문 이용해서 중복 제거하기
3. dict.fromkeys() 이용해서 중복 제거하기


#### 예시1: 집합(set)을 이용해서 중복 제거하기

```python
ex1 = "hello!"
ex2 =[1,0,0,4]

print(list(set(ex1)))
print(list(set(ex2)))
```
실행결과
```python
['h', 'l', 'e', '!', 'o']
[0, 1, 4]
```

집합을 이용해서 중복된 원소를 제거하면 리스트의 순서가 뒤섞이는 것을 알 수 있습니다.<br>

기존 리스트의 순서를 보존하면서 리스트의 중복을 제거하는 방법은 예시2,3번에서 설명하겠습니다.

#### 예시2: for문 이용해서 중복 제거하기 

```python
ex1 = "hello!"
ex2 =[1,0,0,4]
list1 =[]
list2 =[]

for i in ex1:
	if i not in list1: 
		list1.append(i)
for i in ex2:
	if i not in list2:
		list2.append(i)		
		
print(list1)
print(list2)
```
실행결과
```python
['h', 'e', 'l', 'o', '!']
[1, 0, 4]
```
#### 예시3: dict.fromkeys() 이용해서 중복 제거하기
```python
ex1 = "hello!"
ex2 =[1,0,0,4]

list1 = list(dict.fromkeys(ex1))
list2 = list(dict.fromkeys(ex2))

print(list1)
print(list2)
```
실행결과
```python
['h', 'e', 'l', 'o', '!']
[1, 0, 4]
```

※참고: dict.fromkeys() 정리하기<br>

dict.fromkeys()는 리스트의 원소를 'key' 값으로 인식해 리스트를 딕셔너리로 만드는 함수입니다.<br>
```python
ex1 = "hello!"

print(dict.fromkeys(ex1))
```
실행결과
```python
{'h': None, 'e': None, 'l': None, 'o': None, '!': None}
```
이렇게 dict.fromkeys(ex1)을 하면 ex1의 원소들이 'key'값이 되는 딕셔너리가 만들어지게 됩니다.<br>
이때 'value'값은 기본적으로 None 값이 주어지며 dict.fromkeys(ex1,100)을 입력하면 'value'값이 100이 됩니다.
```python
ex1 = "hello!"

print(dict.fromkeys(ex1,100))
```
실행결과
```python
{'h': 100, 'e': 100, 'l': 100, 'o': 100, '!': 100}
```

dict.fromkeys() 사용법<br>

dict.fromkeys(<span style="color:#9370DB">리스트</span>,<span style="color:#6B8E23">'value'</span>)<br>