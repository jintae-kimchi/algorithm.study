/**
 * Write a function that 
 * when given a URL as a string, parses out just the domain name and returns it as a string. 
 * URL로 문자열이 주어졌을때 도메인 이름만 파싱하는 함수를 작성하라
 * 
 * For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
 */

/**
 * url 구조를 보면 scheme 에따라 선택적으로 사용함
 * 문제에서 조건같은걸 아무것도 설명하지 않아서 주어지는 케이스는 http 주소로 한정해야 할듯함
 * 근데 도메인 이름을 어떤걸 선택할지에 대한 기준을 잡을 수가 없음
 * 테스트 케이스 기반으로 조건 정리해서 풀었음
 *
 * MDN 기반으로 정리한 구조
 * <scheme(protocol)>://<domain>:<port>/<path>?<query>#<fragment>
 * @param {*} url
 */
function domainName(url) {
    const availableSchemes = [
        "",
        "http",
        "https",
        // "data",
        // "file",
        // "ftp",
        // "mailto",
        // "ssh",
        // "tel",
        // "ws",
        // "wss",
    ];

    // others: schemeless string
    const schemeSplitted = url.split("://");
    const [scheme, others] =
        schemeSplitted.length === 2
            ? [...schemeSplitted]
            : ["", ...schemeSplitted];
    if (!availableSchemes.includes(scheme)) {
        console.warn(`invalid scheme ${scheme}`);
        return "";
    }

    // A.B.C => B
    // www.aaa.bbb => aaa
    // developer.mozilla.org => mozilla
    // mail.google.com => google

    // A.B.C => A
    // google.co.jp => google

    // ??

    const wwwRemoved = others.replace("www.", "");
    [result] = wwwRemoved.split(".");
    return result;
}

/**
 * 문제에서 제시된 것만 생각해서 정리 시 나오는 코드
 * @param {*} url
 * @returns
 */
function domainName_refactored(url) {
    return url
        .replace("http://", "")
        .replace("https://", "")
        .replace("www.", "")
        .split(".")[0];
}

const assert = {
    equal: (result, expected) =>
        result === expected
            ? console.log("pass")
            : console.error("fail", result, expected),
};
assert.equal(domainName("http://google.com"), "google");
assert.equal(domainName("http://google.co.jp"), "google");
assert.equal(domainName("www.xakep.ru"), "xakep");
assert.equal(domainName("https://youtube.com"), "youtube");

assert.equal(domainName_refactored("http://google.com"), "google");
assert.equal(domainName_refactored("http://google.co.jp"), "google");
assert.equal(domainName_refactored("www.xakep.ru"), "xakep");
assert.equal(domainName_refactored("https://youtube.com"), "youtube");
