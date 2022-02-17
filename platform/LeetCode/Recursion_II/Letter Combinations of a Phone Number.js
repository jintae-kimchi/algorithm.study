/**
     * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



 

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].


입력한 번호에 대한 순서로 조합하면 되는거라 같은 숫자 눌렀을때에 대한 중복처리 같은건 고려 안해도 될 듯
     */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const answer = [];
    const dict = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    };
    const fn = (nums, bag) => {
        if (!nums.length) {
            bag.length && answer.push(bag.join(""));
            return;
        }
        const num = nums[0];
        dict[num].forEach((ch) => {
            bag.push(ch);
            fn(
                nums.filter((_, i) => i !== 0),
                bag
            );
            bag.pop();
        });
    };

    fn(digits.split(""), []);

    return answer;
};

// 57퍼로 풀고 솔루션들을 참고하여 리펙토링 필요한 부분을 찾았다.
// 배열을 넘겨줄때 필터하였는데 생각해보니 인덱스로도 충분히 가능한 부분이었다.
// 그리고 0개, 1개일때 경계값 처리도 의미가 있어서 추가하기로 했다

const letterCombinations_refactored = (digits) => {
    const answer = [];
    if (!digits.length) return answer;
    const dict = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    };
    if (digits.length === 1) return dict[digits];

    const fn = (nums, idx, bag) => {
        if (nums.length === idx) {
            bag.length && answer.push(bag.join(""));
            return;
        }
        const num = nums[idx];
        dict[num].forEach((ch) => {
            bag.push(ch);
            fn(nums, idx + 1, bag);
            bag.pop();
        });
    };

    fn(digits.split(""), 0, []);

    return answer;
};

// 그 결과 더 안좋아졌다(이건 릿코드를 맹신하면 안됨..)
// 근데 더 개선해볼 요소로 nums, bag 파라미터를 굳이 배열로 쓸 필요는 없다는 점이 있어서 개선하였다.

const letterCombinations_refactored_again = (digits) => {
    const answer = [];
    if (!digits.length) return answer;
    const dict = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    };
    if (digits.length === 1) return dict[digits];

    const fn = (nums, idx, bag) => {
        if (nums.length === idx) {
            bag.length && answer.push(bag);
            return;
        }
        dict[nums[idx]].forEach((ch) => {
            fn(nums, idx + 1, bag + ch);
        });
    };

    fn(digits, 0, "");

    return answer;
};

// 91퍼로 올라가서 뿌듯했는데 메모리 사용이 높게 나왔다
// 근데 너무 들쭉날쭉하고 다른 코드랑 비교해도 크게 잘못된게 안보여서 -종료-

const tcList = [
    ["23", ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]],
    ["", []],
    ["2", ["a", "b", "c"]],
];

tcList.forEach((tc) => {
    //     const result = letterCombinations(tc[0]);
    //     const result = letterCombinations_refactored(tc[0]);
    const result = letterCombinations_refactored_again(tc[0]);
    console.log(result);
});
