function solution(operations) {
    let arr = [];
    operations.forEach(op => {
        const set = op.split(' ');
        switch(set[0]) {
            case "I":
                arr.push(parseInt(set[1]));
                break;
            case "D":
                arr.sort((a, b) => a - b);
                if (set[1] === '1') {
                    arr.pop();
                } else {
                    arr.shift();
                }
                break;
        }
    });
    arr.sort((a, b) => a - b);

    const min = arr[0] || 0;
    const max = arr.pop() || 0;
    
    return [max, min];
}

[
    {
        param: ["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"],
        expect: [0, 0]
    },
    {
        param: 	["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"],
        expect: [333, -45]
    },
].forEach(tc => {
    const result = solution(tc.param).join('');
    const expect = tc.expect.join('');
    if (result === expect) {
        console.log('pass');
    } else {
        console.error('fail');
    }
})