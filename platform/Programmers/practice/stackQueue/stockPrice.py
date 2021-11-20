'''
주식가격
문제 설명
초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때, 
가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 solution 함수를 완성하세요.

제한사항
prices의 각 가격은 1 이상 10,000 이하인 자연수입니다.
prices의 길이는 2 이상 100,000 이하입니다.
입출력 예
prices	return
[1, 2, 3, 2, 3]	[4, 3, 1, 1, 0]
입출력 예 설명
1초 시점의 ₩1은 끝까지 가격이 떨어지지 않았습니다.
2초 시점의 ₩2은 끝까지 가격이 떨어지지 않았습니다.
3초 시점의 ₩3은 1초뒤에 가격이 떨어집니다. 따라서 1초간 가격이 떨어지지 않은 것으로 봅니다.
4초 시점의 ₩2은 1초간 가격이 떨어지지 않았습니다.
5초 시점의 ₩3은 0초간 가격이 떨어지지 않았습니다.
'''

def solution(prices):

    stack = [0] * len(prices)
    for i in range(len(prices)):
        for j in range(i + 1, len(stack)):
            stack[i] += 1
            if prices[i] > prices[j]:
                break
    ''' 성능 문제로 버린 코드
    # result = []
    # for i in range(len(prices)):
    #     tarList = prices[i + 1:]
    #     curval = prices[i]
    #     count = 0
    #     for j in range(len(tarList)):
    #         # 탐색하면서 현재 가격보다 내려가는지 확인
    #         count += 1
    #         if tarList[j] < curval:
    #             break
    #     result.append(count)

    # return result
    '''
    return stack

# assert solution([1, 2, 3, 2, 3]) == [4, 3, 1, 1, 0] 
# assert solution([1, 1, 1, 1, 1]) == [4, 3, 2, 1, 0]
assert solution([2, 1]) == [1, 0]
assert solution([1, 2, 3, 2, 1, 2, 3]) == [6, 3, 1, 1, 2, 1, 0]