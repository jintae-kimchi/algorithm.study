/**
 * Write a function that will solve a 9x9 Sudoku puzzle. 
 * The function will take one argument consisting of the 2D puzzle array, with the value 0 representing an unknown square.
 * The Sudokus tested against your function will be "easy" 
 * (i.e. determinable; there will be no need to assume and test possibilities on unknowns) and can be solved with a brute-force approach.
 * For Sudoku rules, see the Wikipedia article.(https://en.wikipedia.org/wiki/Sudoku)
 */

/* 0인 값들 채워주면 됨

var puzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]];

sudoku(puzzle);

[[5,3,4,6,7,8,9,1,2],
[6,7,2,1,9,5,3,4,8],
[1,9,8,3,4,2,5,6,7],
[8,5,9,7,6,1,4,2,3],
[4,2,6,8,5,3,7,9,1],
[7,1,3,9,2,4,8,5,6],
[9,6,1,5,3,7,2,8,4],
[2,8,7,4,1,9,6,3,5],
[3,4,5,2,8,6,1,7,9]] 

*/

var puzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]];

const puzzleSize = 9;
function sudoku(puzzle) {
    // 9 * 9 size
    // 3 * 3 칸씩 1~9 하나씩 나와야 하고
    // 가로 새로 숫자가 1~9 하나씩 나와야 함        
    
    // 내 풀이 전략
    // 각 셀을 1~9 모두 담긴 상태로 초기화
    // 초기값 주어진 셀에 대해 나머지 숫자들 제거함
    // 반복하며 제외가능한 숫자 계산 후 제거

    // 풀이 전 초기상태 구성
    var cells = [];
    for(var ci=0; ci < puzzleSize; ci++) {
        var tmp = [];
        for(var cj=0; cj < puzzleSize; cj++) {
            tmp.push([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        }
        cells.push(tmp);
    }

    // 초기 puzzle 값 적용
    for(var pi=0; pi < puzzleSize; pi++) {
        for(var pj=0; pj < puzzleSize; pj++) {
            var containIdx = cells[pi][pj].indexOf(puzzle[pi][pj]);
            if (containIdx > -1) {
                cells[pi][pj] = [puzzle[pi][pj]];
            }
        }
    }

    // 반복하면서 요소 제거
    // 현재 셀 정보로 정답으로 가능한 숫자 추출
    var solution = function(cells, r, c) {
        if (cells[r][c].length === 1) return;
        
        // 가로줄
        for (var ci=0; ci < puzzleSize; ci++) {
            if (ci === c) continue;
            if (cells[r][ci].length === 1 && cells[r][c].length !== 1) {
                var rIdx = cells[r][c].indexOf(cells[r][ci][0]);
                if (rIdx === -1) continue;
                cells[r][c].splice(rIdx, 1);
            }
        }

        // 세로줄
        for (var ri=0; ri < puzzleSize; ri++) {
            if (ri === r) continue;
            if (cells[ri][c].length === 1 && cells[r][c].length !== 1) {
                var cIdx = cells[r][c].indexOf(cells[ri][c][0]);
                if (cIdx === -1) continue;
                cells[r][c].splice(cIdx, 1);
            }
        }

        // 사각형
        for (var sr = parseInt(r/3)*3; sr < parseInt(r/3)*3 + 3; sr++) {
            for (var sc = parseInt(c/3)*3; sc < parseInt(c/3)*3 + 3; sc++) {
                if (sr === r && sc === c) continue;
                if (cells[sr][sc].length === 1 && cells[r][c].length !== 1) {
                    var cIdx = cells[r][c].indexOf(cells[sr][sc][0]);
                    if (cIdx === -1) continue;
                    cells[r][c].splice(cIdx, 1);
                }
            }
        }

        return;
    }

    // 모두 풀었는지 검사
    var checker = function(cells) {
        for(var cr = 0; cr < puzzleSize; cr++) {
            for(var cc = 0; cc < puzzleSize; cc++) {
                if (cells[cr][cc].length > 1) {
                    return false;
                }
            }
        }
        return true;
    }

    // 출력값형태로 변경
    var convertToReturnType = function(cells) {
        var result = [];
        for (var ri = 0; ri < cells.length; ri++) {
            var tmp = [];
            for (var ci = 0; ci < cells[ri].length; ci++) {
                tmp.push(cells[ri][ci][0]);
            }
            result.push(tmp);
        }

        return result;
    }

    while(!checker(cells)){
        for(var i=0; i<puzzleSize; i++) {
            for(var j=0; j<puzzleSize; j++) {
                solution(cells, i, j);
            }
        }
    }

    return convertToReturnType(cells);
}

// 디버깅용
function print(table) {
    console.log('');
    table.forEach(function(row){
        var str = '';
        row.forEach(function(col) {
            if (col.length > 1) {
                str += ' L' + col.length;
            } else {
                str += '  ' + col[0];
            }
        });
        console.log(str);
    });
}

sudoku(puzzle);

//------------------------------------------------------------------
// Best Practices, Clever
// 나는 이해하는 것을 그만두었다
function sudoku(puzzle) {
    const valid = (x,y) => {
        var v = [];
        for(var i=0; i<3; i++) {
            for(var j=0; j<3; j++) {
                v.push(puzzle[x][i*3+j])
                v.push(puzzle[i*3+j][y])
                v.push(puzzle[3*Math.floor(x/3)+i][3*Math.floor(y/3)+j])
            }
        }
        return [1,2,3,4,5,6,7,8,9].filter(e => v.indexOf(e) == -1)
    }
    const rec = (x,y) => {
        if(y == 9) {
            return puzzle
        } else if (!puzzle[x][y]) {
            const correct = valid(x,y).some(i => {
                puzzle[x][y] = i;
                return rec((x+1)%9,y+(x==9?1:0))
            })
            if (correct)
                return puzzle;
            puzzle[x][y] = 0;
        } else {
            return rec((x+1)%9,y+(x==8?1:0))
        }
    }
    return rec(0,0)
}