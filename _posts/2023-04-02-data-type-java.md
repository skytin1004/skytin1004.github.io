---
layout: post
title: "[Java] 자바의 자료형"
subtitle: " Java의 정수 자료형과 실수 자료형"
categories: KorArchive2022-2023
tags: [Java,DataStructure]
banner:
  image: none
  opacity: 0.618
  background: "#7092BF"
  height: "100vh"
  min_height: "38vh"
  heading_style: "font-size: 2.5em; font-weight: none; text-decoration: none"
  subheading_style: "color:"
---

## 1. 정수 자료형

Java의 정수 자료형에는 byte, short, int, long 이 있습니다.

| 자료형 | 크기 | 범위 |
| --- | --- | --- |
| byte | 1byte | -2^7 ~ (2^7 -1) |
| short | 2byte | -2^15 ~ (2^15 -1) |
| int | 4byte | -2^31 ~ (2^31 -1) |
| long | 8byte | -2^63 ~ (2^63 -1) |

```정리
byte: 1byte로 정수를 표현하는 정수형

short: 2byte로 정수를 표현하는 정수형

int: 4byte로 정수를 표현하는 정수형

long: 8byte로 정수를 표현하는 정수형
```

각각의 자료형마다 해당되는 수의 범위가 정해져 있습니다.

자료형의 범위를 넘어가는 숫자를 대입하면 오류가 발생합니다.

예시

```java
byte number = 1234;
//Data overflow
```

Date overflow로 인한 오류 발생 

## 2. 실수 자료형

Java의 실수 자료형은 float, double이 있습니다.

| 자료형 | 크기 | 범위 |
| --- | --- | --- |
| float | 4byte | 소숫점 이하 6자리 |
| double | 8byte | 소숫점 이하 15자리 |

## 숫자의 기본 저장소

정수는 int형 저장소에, 실수는double형 저장소에 저장되어있습니다.

예시

```java
byte number;
number = 12;
```

`number = 12;`를 보면 왼쪽 number은 byte 형이며 오른쪽의 12(정수)는 int형입니다. 
그렇기 때문에 아래와 같은 경우가 발생하게 됩니다.

### 1. 자료형의 연산

```java
byte num1 = 2;
byte num2 =3;
System.out.println(num1 + num2);
```

Java의 정수 연산에서 두 byte 값(또는 int보다 작은 기본 유형) 간의 산술 연산 결과는 int 값으로 승격됩니다.

이를 "정수 승격(Integral Promotion)"이라고 하며, 정수 승격은 데이터 손실을 방지하고 결과값이 데이터 유형의 범위 내에 들어갈 수 있도록 보장하기 위해 발생합니다.

> byte num1 = 126, byte num2 = 127인경우 num1 + num2 를 하면 byte형의 범위를 벗어남.

위 예시에서 num1과 num2는 모두 byte형 입니다. '+' 를 사용하여 num1과 num2를 더하면 추가 작업이 수행되기 전에 int 값으로 데이터 타입이 승격됩니다.

따라서 num1 + num2의 결과는 int 유형입니다. 이 값을 바이트 변수에 할당하려면 다음과 같이 int 값을 바이트로 다시 선언해줘야 합니다.

해결방법(예시)

```java
byte sum = (byte)(num1+num2);//byte로 강제 형변환
System.out.println(sum);
```

### 2. Long type 

```java
long num = 10000000000;//error
long num = 10000000000L;
```

long타입 변수에 숫자를 대입할 때는 뒤에 ‘L’을 붙여줘야 합니다.

이유: 정수는 기본적으로 int자료형에 저장되어있는데 10000000000은 int형의 숫자범위를 넘어간 값입니다.

‘L’을 생략해서 사용하면 컴파일러는 기본적으로 10000000000을  int형으로 인식하게 되면서 컴파일러 오류가 발생하게 됩니다.

### 3. Float type

```java
float num = 3.14;//erreor
float num = 3.14f;

```

float타입 변수에 숫자를 대입할 때는 뒤에 ‘f’을 붙여줘야 합니다.

이유: 실수는 기본적으로 double자료형에 저장되어있는데

‘f’을 생략해서 사용하면 컴파일러는 기본적으로 3.14를 double형으로 인식하게 되면서 컴파일러 오류가 발생하게 됩니다.

### 왜 long,float 만 따로 ‘L’,’f’표시를 하는가?

JAVA에서 `byte num =3;`을 했을 때 오른쪽의 숫자 3은 컴파일러에서 int형으로 인식되었다가 컴파일러가 왼쪽 타입에 맞게 자동 형변환을 해서 3을 byte형으로 바꾼것입니다.
하지만 long은 애초에 int 범위를 넘어선 값을 가지고 있기 때문에 컴파일러가 오른쪽 수를 int로 인식할 때 부터 에러가 생기기 때문에 처음부터 컴파일러가 long 타입으로 인식할 수 있게끔 미리 L을 붙이는 것입니다.

반면 실수는 기본적으로 double 데이터 유형에 저장됩니다. 그렇기 때문에 오른쪽 숫자 3.14에 f를 붙이지 않으면 컴파일러는 3.14를 double형으로 인식하기 때문에 오류가 발생합니다. 
그렇기 때문에 컴파일러가 처음부터 float 타입으로 인식할 수 있게끔 미리 f를 붙이는 것입니다.

### 정리

C와 자바를 포함한 대부분의 프로그래밍 언어에서 정수는 int(4byte) 데이터 유형의 변수에 저장되는 반면, 실수는 일반적으로 double(8byte) 데이터 유형의 변수에 저장됩니다.
