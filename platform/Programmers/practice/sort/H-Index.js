/**
 * H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 
 * 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 
 * 위키백과1에 따르면, H-Index는 다음과 같이 구합니다.
 * 
 * 어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.
 * 어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.
 * 
 * 제한사항
 * 과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
 * 논문별 인용 횟수는 0회 이상 10,000회 이하입니다.
 * 
 * 입출력 예
 * citations	    return
 * [3, 0, 6, 1, 5]	3
 * 
 * 입출력 예 설명
 * 이 과학자가 발표한 논문의 수는 5편이고, 그중 3편의 논문은 3회 이상 인용되었습니다. 
 * 그리고 나머지 2편의 논문은 3회 이하 인용되었기 때문에 이 과학자의 H-Index는 3입니다.
 */



function solution(citations) {
    let hIndex = 0;
    citations.sort((a, b) => b - a).forEach((v) => {
        if (v <= hIndex) return;
        if (v > 0) hIndex += 1;
    });
    
    return hIndex;
}

[
    {
        /**
         * 6    1
         * 5    2
         * 3    3 <-
         * 1    4
         * 0    5
         */
        param: [3, 0, 6, 1, 5],
        expect: 3
    },
    {
        /**
         * 0    0 <-
         */
        param: [0],
        expect: 0
    },
    {
        /**
         * 1    1 <-
         */
        param: [1],
        expect: 1
    },
    {
        /**
         * 0    0
         * 0    0 <-
         */
        param: [0, 0],
        expect: 0
    },
    {
        /**
         * 4    1
         * 3    2 <-
         * 2    3
         * 1    4
         * 0    4
         */
        param: [0, 1, 2, 3, 4],
        expect: 2
    },
    {
        /**
         * 4    1
         * 3    2
         * 3    3 <-
         * 2    4
         * 0    4
         */
        param: [0, 3, 2, 3, 4],
        expect: 3
    },
    {
        /**
         * 12   1
         * 11   2
         * 10   3
         * 9    4
         * 8    5 <-
         * 1    6 
         */
        param: [12,11,10,9,8,1],
        expect: 5
    },
    {
        /**
         * 6    1
         * 6    2
         * 6    3
         * 6    4
         * 6    5 <-
         * 1    6
         */
        param: [6,6,6,6,6,1],
        expect: 5
    },
    {
        /**
         * 4    1
         * 4    2
         * 4    3 <-
         */
        param: [4,4,4],
        expect: 3
    },
    {
        /**
         * 5    1
         * 4    2
         * 4    3
         * 4    4 <-
         * 3    5
         * 2    6
         * 1    7
         * 0    7
         */
        param: [4, 4, 4, 5, 0, 1, 2, 3],
        expect: 4
    },
    {
        /**
         * 13   1
         * 12   2
         * 11   3
         * 10   4 <-
         */
        param: [10, 11, 12, 13],
        expect: 4
    },
    {
        /**
         * 6    1
         * 5    2
         * 3    3 <-
         * 1    4
         * 0    4
         */
        param: [3, 0, 6, 1, 5],
        expect: 3
    },
    {
        /**
         * 1    1 <-
         * 1    2
         * 0    2
         * 0    2
         */
        param: [0, 0, 1, 1],
        expect: 1
    },
    {
        /**
         * 1    1 <-
         * 0    1
         */
        param: [0, 1],
        expect: 1
    },
    {
        /**
         * 10   1
         * 9    2
         * 4    3 <-
         * 1    4
         * 1    5
         */
        param: [10, 9, 4, 1, 1],
        expect: 3
    }
].forEach(tc => {
    const result = solution(tc.param);
    const expect = tc.expect;
    console.log(tc.param, tc.expect);
    if (result === expect) {
        console.log('pass');
    } else {
        console.error('fail');
    }
    console.log('');
});