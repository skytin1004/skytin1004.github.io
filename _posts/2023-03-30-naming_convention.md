---
layout: post
title: "네이밍 컨벤션(Naming Convention) 정리하기"
subtitle: "네이밍 컨벤션: Coding 이름 짓는 관례"
categories: Dev Python Java
tags: 
banner:
  image: https://drive.google.com/uc?id=1yxNfYKHwCzBN6d2U4mMOo_Aq-Cq3eNN5
  opacity: 0.618
  background: "#000"
  height: "100vh"
  min_height: "38vh"
  heading_style: "font-size: 3.25em; font-weight: none; text-decoration: none"
  subheading_style: "color: #E6E6FA"
---

## 네이밍 컨벤션(Naming Convention)이란?
네이밍 컨벤션(Naming Convention)은 변수,클래스,모듈과 같은 프로그래밍 구성 요소의 이름을 작성하는 방법입니다.<br>
네이밍 컨벤션을 이용하면 프로그래밍 구성요소들을 더 쉽게 사용할 수 있고 쉽게 찾을 수 있습니다.<br>
네이밍 컨벤션의 대표적인 예시로는 camelCase,PascalCase,snake_case가 있습니다.<br>

## 1.camelCase
camelCase는 소문자로 단어를 시작해서 중간에 단어가 바뀔 때 마다 단어의 첫 글자를 대문자로 바꾸는 방법입니다.<br>
### camelCase 예시
`numberOfStudent`
## 2.PascalCase
PascalCase은 대문자로 글자를 시작해서 단어가 바뀔 때 마다 단어의 첫 글자를 대문자로 바꾸는 방법입니다.<br>
### PascalCase 예시
`NumberOfStudent`
## 3.snake_case
snake_case는 소문자로 단어를 작성하고 단어와 단어 사이에 언더바(<span style="color:#9370DB">_</span>)를 넣어 적는 방법입니다.<br>
### snake_case예시
`number_of_student`

## 파이썬의 네이밍 컨벤션

### 1. Module(모듈)의 네이밍 컨벤션
모듈 이름은 전부 소문자로 작성합니다.

```Python
//skytin모듈을 불러옵니다.
import skytin
```

### 2. Calss(클래스)의 네이밍 컨벤션
클래스 이름은 PascalCase를 따릅니다.

```Python

import skytin

//클래스
class SkytinBlog:

    def __init__(self):
        self.case = "this_is_snake_case"

```

### 3. Function(함수)의 네이밍 컨벤션
함수의 이름은 snake_case를 따릅니다.

```Python

import skytin


class SkytinBlog:

    def __init__(self):
        self.case = "this_is_snake_case"
		
//함수(메서드)

    def print_skytin_blog(self):
        print(self.case)
```
### 4. Variable(변수)의 네이밍 컨벤션
변수의 이름은 snake_case를 따릅니다.

```Python

//변수

number_of_student = 1004
```

### 5. Constant(상수)의 네이밍 컨벤션
상수의 이름은 전부 대문자로 표기하며 단어와 단어 사이에 언더바(<span style="color:#9370DB">_</span>)를 넣어 적습니다.

```Python

//상수

NUMBER_OF_STUDENT = 1004
```

### 6. Private function,method,variable /Private 함수, 메서드, 변수의 네이밍 컨벤션
Private 함수, 메서드, 변수의 이름 앞에는 언더바(<span style="color:#9370DB">_</span>)를 작성하며 snake_case를 따릅니다.

```Python
class skytin:
//private 변수

    __private_number_of_student = 1004
	
//private 함수(메서드)

    def __private_student(self):
        __private_number_of_student = 1004
```

## 자바의 네이밍 컨밴션

### 1. Pakage(패키지)의 네이밍 컨벤션
패키지 이름은 전부 소문자로 작성합니다.


```Java
//패키지
package skytin
```

### 2. Class(클래스)의 네이밍 컨벤션
클래스 이름은 PascalCase를 따릅니다.

```Java
package skytin;

// 클래스
public class SkytinBlog { 
}
```
### 3. Methods(메서드)의 네이밍 컨벤션
메서드 이름은 camelCase를 따릅니다.

```Java
package skytin;

public class SkytinBlog {

// 메서드

    public void printSkytinBlog() { 
        System.out.println("thisIsCamelCase");
		
    }
}
```

### 4. Variable(변수)의 네이밍 컨벤션
변수의 이름은 camelCase를 따릅니다.

```Java
public class SkytinBlog {

    public void printSkytinBlog() {
        System.out.println("thisIsCamelCase");
		
    }
	
	//변수
    int numberOfStudent = 1004;
}
```
### 5. Constant(상수)의 네이밍 컨벤션
상수의 이름은 전부 대문자로 표기하며 단어와 단어 사이에 언더바(<span style="color:#9370DB">_</span>)를 넣어 적습니다.

```Java
//상수(final)

public static final int NUMBER_OF_STUDENT = 1004;
```
