---
layout: post
title: "[Python]'NoneType' object is not iterable"
subtitle: "메소드의 리턴"
categories: Error
tags: [Python,Error,deque]
banner:
  image: https://drive.google.com/uc?id=1G0HBYhONrIz8Io_0SFvOtWRkS3e8gfkS
  opacity: 0.618
  background: "#000"
  height: "100vh"
  min_height: "38vh"
  heading_style: "font-size: 3.25em; font-weight: none; text-decoration: none"
  subheading_style: "color: #E6E6FA"
---

코딩테스트 연습문제를 풀던 도중에 아래와 같은 문제가 발생했습니다.

```Python
'NoneType' object is not iterable
```

코드 어디에 문제가 있었는지 확인해봤는데 다음과 같은 문제가 있었습니다.<br>
의심스러운 부분 U-list와 nU_list의 타입을 출력했습니다.

```Python
from collections import deque
U_list =deque("ABCDEFGHIJKLMNOPQRSTUVWXYZ") # U_list는 대문자 알파벳으로 이루어진 deque 리스트이다.
nU_list=U_list.rotate(-4) #nU_list는 U_list를 4번 왼쪽으로 회전시킨 deque 리스트를 대입한 것이다.(착각)
print(type(U_list))
print(type(nU_list))
```
실행결과
```Python
<class 'collections.deque'>
<class 'NoneType'>
```

U_list의 타입은  <span style="color:#9370DB">'deque'</span>가 맞는데 nU_list의 타입이  <span style="color:#9370DB">'NoneType'</span>이 나왔습니다.<br>

nU_list의 타입도 <span style="color:#9370DB">'deque'</span> 가 되어야 맞을 것 같은데 왜 <span style="color:#9370DB">'NoneType'</span>이 나왔을까요?<br>

결과적으로 deque에서 rotate 메소드의 원리를 착각했습니다. `nU_list = U_list.rotate(-4)` 를 했을 때 rotate 메소드를 이용하면 nU_list가 U_list에서 왼쪽으로 4번 회전한 값이 될 거라고 착각했습니다.<br>

※ rotate는 기존의 deque리스트 값을 변경하는 메서드이지 회전한 deque리스트를 리턴하는 메서드가 아닙니다.<br>

정리하면 rotate 메서드는 리턴값이 없는 함수이며,
<span style="color:#9370DB">U_list.rotate(-4)</span>는 U_list에서 왼쪽으로 4번 회전한 새로운 deque리스트를 의미하는 것이 아니라 U_list의 값을 왼쪽으로 4번 회전시킨다는 의미입니다.<br>

예시
```Python
from collections import deque
U_list =deque("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
U_list.rotate(-4)
print(U_list)
```

실행 결과
```Python
deque(['E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D'])
```

실행 결과 U_list의 값이 왼쪽으로 4번 회전된 것을 알 수 있습니다.<br>

<a href="https://skytin1004.github.io/python/2023/02/06/deque.html" target="_blank"><span style="color:#9370DB">※참고: deque 정리하기</span></a><br>

결국엔 아래처럼 코드를 작성해서 문제를 해결했습니다.<br>


해결 
```Python
#deque의 rotate이용
from collections import deque
def solution(s, n):
    s_list = deque(s)
    U_list =deque("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    u_list =deque("abcdefghijklmnopqrstuvwxyz")
    nU_list=U_list.rotate(-n)
    nu_list=u_list.rotate(-n)
    #deque로 전환해서 n번 반대방향으로 회전한 값을 반환
    for i,j in enumerate(s_list):
        #알파벳이 대문자라면
        if j in U_list:
            U_index=U_list.index(j)
            U_list.rotate(-n)
            s_list[i]=U_list[U_index]
            U_list.rotate(n)
        #알파벳이 소문자라면
        elif j in u_list:
            u_index=u_list.index(j)
            u_list.rotate(-n)
            s_list[i]=u_list[u_index]
            u_list.rotate(n)
    answer = ''.join(s_list)
    return answer
```