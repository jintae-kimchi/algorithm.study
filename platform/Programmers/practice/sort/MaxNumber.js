/**

0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

제한 사항
numbers의 길이는 1 이상 100,000 이하입니다.
numbers의 원소는 0 이상 1,000 이하입니다.
정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.

---------------------

sorter 마개조하면서 tc 목록 다 통과시켯지만 훨씬 많은 반례가 있었고...
질문글 뒤지면서 떠먹여주는 원리 찾아서 한줄짜리 조건으로 바꿈..

 */

 /**
  * solution
  * @param {Array<Number>} numbers [(0 <= 1000)].length === (1<=100000)
  * @returns {String}
  */
function solution(numbers) {
    const sorter = (a, b) => {
        return (parseInt(b + a) - parseInt(a + b));
    }
    let result = numbers.map(n => n + "").sort(sorter).join('');
    return result[0] === "0" ? "0" : result;
}

var tcList = [
    {
        param: [6, 10, 2],
        expect: "6210"
    },
    {
        param: [3, 30, 34, 5, 9],
        expect: "9534330"
    },
    {
        param: [9, 99, 999, 1000, 100, 10, 1, 3, 4, 6],
        expect: "9999996431101001000"
    },
    {
        param: [1, 111, 1111, 11111, 112, 1112, 11112],
        expect: "112 1112 11112 1 111 1111 11111".replace(/ /gi, '')
    },
    {
        param: [30, 3],
        expect: "330"
    },
    {
        param: [2, 1],
        expect: "21"
    },
    {
        param: [6, 10, 2],
        expect: "6210"
    },
    {
        param: [3, 30, 34, 5, 9],
        expect: "9534330"
    },
    {
        param: [40,400], 
        expect: "40400"
    },
    {
        param: [40,404], 
        expect: "40440"
    },
    {
        param: [12,121], 
        expect: "12121"
    },
    {
        param: [3054,305], 
        expect: "3054305"
    },
    {
        param: [3044,304], 
        expect: "3044304"
    },
    {
        param: [340,3403], 
        expect: "3403403"
    },
    {
        param: [340,3402], 
        expect: "3403402"
    },
    {
        param: [340,3405], 
        expect: "3405340"
    },
    {
        param: [40,405], 
        expect: "40540"
    },
    {
        param: [40,404], 
        expect: "40440"
    },
    {
        param: [40,403], 
        expect: "40403"
    },
    {
        param: [40,405], 
        expect: "40540"
    },
    {
        param: [40,404], 
        expect: "40440"
    },
    {
        param: [50,403], 
        expect: "50403"
    },
    {
        param: [50,405], 
        expect: "50405"
    },
    {
        param: [50,404], 
        expect: "50404"
    },
    {
        param: [30,403], 
        expect: "40330"
    },
    {
        param: [30,405], 
        expect: "40530"
    },
    {
        param: [30,404], 
        expect: "40430"
    },
    {
        param: [12,121], 
        expect: "12121"
    },
    {
        param: [2,22,223], 
        expect: "223222"
    },
    {
        param: [41,415], 
        expect: "41541"
    },
    {
        param: [2,22 ], 
        expect: "222"
    },
    {
        param: [70,0,0,0], 
        expect: "70000"
    },
    {
        param: [0,0,0,1000], 
        expect: "1000000"
    },
    {
        param: [0,0,0,0],
        expect: "0"
    },
    {
        param: [0,0,70],
        expect: "7000"
    },
    {
        param: [12,1213], 
        expect: "121312"
    },
    {
        param: [3, 30, 34, 5, 91],
        expect: "91534330"
    },
    {
        param: [3, 30, 34, 5, 191],
        expect: "534330191"
    },
    {
        param: [3, 30, 34, 5, 191, 432789],
        expect: "543278934330191"
    },
    {
        param: [1,2,3,4,5,44],
        expect: "5444321"
    },
    {
        param: [1,2,3,4,5,66],
        expect: "6654321"
    },
    {
        param: [3, 30, 31, 5, 9],
        expect: "9533130"
    },
    {
        param: [3, 30, 31, 34, 5, 9],
        expect: "953433130"
    },
    {
        param: [3, 30, 31, 34, 33, 5, 9],
        expect: "95343333130"
    },
    {
        param: [10, 101],
        expect: "10110"
    },
    {
        param: [1, 11, 111, 1111],
        expect: "1111111111"
    },
    {
        param: [0, 0, 0, 0, 0, 0],
        expect: "0"
    },
    {
        param: [3, 30, 34, 5, 9, 4, 40, 42],
        expect: "954424034330"
    },
]

tcList.forEach(tc => {
    const result = solution(tc.param);
    const expect = tc.expect;
    if (result === expect) {
        console.log('pass');
    } else {
        console.error('fail', `${result} is not equal to ${expect}`);
    }
});
