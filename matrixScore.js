/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
    let rowsLen = A.length;
    let colsLen = A[0].length;
    let rowNumberOne = [];
    let col0Number = [];
    let result = 0;

    for(let i=0; i<rowsLen; i++){
        if(!A[i][0]){
            col0Number.push(i)
        }
    }
    // console.log(col0Number)
    if(col0Number.length){
        if(col0Number.length === rowsLen){
            for(let i=0; i<rowsLen; i++){
                A[i][0] = 1;
            }
        }else{
            for(let i=0; i<col0Number.length; i++){
                for(let j=0; j<colsLen; j++){
                    A[col0Number[i]][j] = (A[col0Number[i]][j]+1)%2;
                }
            }
        }
    }
    rowNumberOne.push(rowsLen)

    for(let i=1; i<colsLen; i++){
        let numberOne = 0;
        for(let j=0; j<rowsLen; j++){
            if(A[j][i]){
                numberOne++;
            }
        }
        rowNumberOne.push(numberOne)
    }
    // console.log(A)
    // console.log(rowNumberOne)

    for(let i=0; i<colsLen; i++){
        if(rowNumberOne[i] < rowsLen/2){
            rowNumberOne[i] = rowsLen - rowNumberOne[i];
        }
        // console.log(rowNumberOne[i], Math.pow(2, colsLen-i-1))
        result += rowNumberOne[i]*Math.pow(2, colsLen-i-1);
    }
    return result;
};
// v2.0 优化代码，增加思路注释
var matrixScore = function(A) {
    let rowsLen = A.length;
    let colsLen = A[0].length;
    let rowNumberOne = [];
    let result = 0;
    // 翻转首列是否为0，是则翻转该行使其最大值为1
    for(let i=0; i<rowsLen; i++){
        if(!A[i][0]){
            for(let j=0; j<colsLen; j++){
                A[i][j] = (A[i][j]+1)%2;
            }
        }
    }
    // 把首列1个数放到结果集
    rowNumberOne.push(rowsLen)
    // 统计每列1的个数，并把个数暂存到结果集
    for(let i=1; i<colsLen; i++){
        let numberOne = 0;
        for(let j=0; j<rowsLen; j++){
            if(A[j][i]){
                numberOne++;
            }
        }
        rowNumberOne.push(numberOne)
    }
    // 根据每列1的个数，如果小于0的个数（即1的个数小于列数的一办），进行列翻转，进行结果计数
    for(let i=0; i<colsLen; i++){
        if(rowNumberOne[i] < rowsLen/2){
            rowNumberOne[i] = rowsLen - rowNumberOne[i];
        }
        result += rowNumberOne[i]*Math.pow(2, colsLen-i-1);
    }
    return result;
};
