# 2부 | 파이썬

## 파이썬 문법 메모

타입스크립트로 풀거지만, 코드리딩을 위해 정리

- 인덴트
  - 공백4칸 원칙(권장)
  - 블록 단위로 사용
- 네이밍컨벤션
  - 스테이크_케이스가 기본
- 타입힌트
  - 타입스크립트랑 비슷하기도 하고..
  ```python
    def fn(a: int) -> bool:
        #....
  ```
- 리스트컴프리헨션(List Comprehension)
  - 기존 리스트로 새로운 리스트 만들어냄
  ```python
    list(map(lambda x: x + 10, [1, 2, 3]))
    # [11, 12, 13]

    # 1) 홀수만 뽑아서 값 2배한 결과
    [n * 2 for n in range(1, 10 + 1) if n % 2 == 1]
    # => [2, 6, 10, 14, 18]
    # 2) 위 코드를 풀어 쓰면 이럼
    a = []
    for n in range(1, 10 + 1):
        if n % 2 == 1:
            # 1, 3, 5, 7, 9
            a.append(n * 2)
    # a is [2, 6, 10, 14, 18]
    # 내 입장에선 전자 읽기가 빡셈
  ```
- 제너레이터
  ```python
    def myGenerator():
        n = 0
        while True:
            n += 1
            yield n

    myg = myGenerator()
    myg.next() # 1
    myg.next() # 2
  ```
  - range: 제너레이터 방식 활용하는 함수임 (^3)
  ```python
    list(range(5))
    # [0, 1, 2, 3, 4]

    range(5)
    # range(0, 5)

    type(range(5))
    # <class 'range'>

    for i in range(5):
        print(i, end=' ')
    # 0 1 2 3 4

    arrLen = 1000000
    a = [n for n in range(arrLen)]
    b = range(arrLen)
    # len(a) == len(b)
    # sys.getsizeof(a) > sys.getsizeof(b)
    # 메모리에 할당하여 가져오는것과 가져오는 조건만 가지고 있냐의 차이
    
    # 인덱스 접근도 가능
    b[999]
    # 999
  ```
- enumerate
  ```python
    a = [5, 4, 3, 2, 1]
    enumData = enumerate(a)
    list(enumData)
    # [(0, 5), (1, 4), (2, 3), (3, 2), (4, 1)]
    # 예시
    for i, v in enumerate(a):
        print(i, v)
  ```
- 나눗셈
  ```python
    5 / 3 # 1.66666... (float)
    5 // 3 # 1 (int)
    int(5 / 3) # 1 (int)
    divmod(5, 3) # (1, 2) 몫과 나머지 동시에
  ```
- print
  ```python
    print('A', 'B') # A B
    print('A', 'B', sep=',') # A,B
    print('aa', end=' ')
    print('bb') # aa bb
    a = ['a', 'b']
    print(' '.join(a)) # a b
    idx = 1
    fruit = 'apple'
    print('{0}: {1}'.format(idx + 1, fruit)) # 2: apple
    # 인덱스 생략하면 순서대로임
    # 결론적으로 자바스크립트 템플릿과 유사하게 사용하는걸 추천(^3.6)
    print(f'{idx + 1}: {fruit}') # 2: apple
  ```
- pass
  - 구조잡아놓고 세부 구현 전에 실행할 수 있도록함
  - c#의 `NotImplementedException` 과 유사한듯
  ```python
    class MyClass(p):
        def method_A(self):
            pass
  ```
- locals
  - 로컬에 선언된 모든 변수 조회가능
  - 디버깅에 활용

## 빅오
- 굳이 정리할건 없고 책에 있는거 한번 쭉 따라가면 됨

## 자료형
- is , ==
  is: id()를 비교
  ==: 값을 비교
  ```python
    a = [1, 2, 3]
    a == a # True
    a is a # True
    a is list(a) # False
    a == copy.deepcopy(a) # True
    a is copy.deepcopy(a) # False
  ```
## 리스트, 딕셔너리
- 리스트
  ```python
    a = [1, 2, 3]
    a.append(4) # [1, 2, 3, 4]
    a[1:2] # [2, 3]
    a.append(5) # [1, 2, 3, 4, 5]
    a[1:4:2] # [2, 4] 두칸씩 건너뜀
    a.remove(3) # [1, 2, 3, 5]
    del a[0] # [2, 3, 5]
    aa = a.pop(1) # [2, 5]
  ```
- 딕셔너리
  ```python
    a = dict() # or a = {}
    a = { 'k1': 'v1', 'k2': 'v2' }
    a['k3'] = 'v3'
    del a['k3']
    'noKey' in a # False
    for k, v in a.items():
        print(k, v)

    b = collections.defaultdict(int)
    b['a'] = 1 # 오류 안나도 새로 등록
    
    c = collections.Counter(a) # array to dict

    collections.OrderedDict({'a': 1, 'b': 2}) # 입력순서 유지
  ```