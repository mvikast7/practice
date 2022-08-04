let arr = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]
let difference = 0
for(let ind in arr){
    difference += arr[ind][ind]
    difference -= arr[arr.length - ind - 1][ind]

}
console.log(Math.abs(difference)) 