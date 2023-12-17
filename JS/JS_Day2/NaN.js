let result = Number.NaN;
console.log("Nan == NaN ", (result == result));
console.log("Nan != NaN ", (result != result));
console.log("Nan > NaN ", (result > result));
console.log("isNaN ", isNaN(result));

let max = Number.MAX_VALUE;
console.log(max);
let str = "1" + "0".repeat(1000);
console.log(str);
let lage_num = BigInt(str);
console.log("Large Num ", lage_num);
console.log("Large Num", typeof (lage_num));