let arr = []
let difference = 0
for(let ind in arr){
    difference += arr[ind][ind]
    difference -= arr[arr.length - ind - 1][ind]

}
return Math.abs(difference) 