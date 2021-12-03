/**
 * 전화번호를 암호화하는 솔루션
 * 마지막 네자리만 노출한다 나머지는 *로 표시
 * 전화번호 길이는 4~20
 * @param {*} phone_number
 * @returns
 */
function solution(phone_number) {
    const len = phone_number.length - 4;
    return "*".repeat(len) + phone_number.slice(len);
}
