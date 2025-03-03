console.log("A5.3_HW1")
console.log("---- ---- ----")

console.log("1.1")
console.log("---- ---- ----")

function printNumberPattern(n,m){
    let output = ""
    for(let i = 1; i<=n; i++){
        output+=i
        if(i%m == 0 && i!=n) output += "-"
    }
    console.log(output)
}
printNumberPattern(9,4)
console.log("---- ---- ----")

console.log("1.2")
console.log("---- ---- ----")
function printDivisibleAndNot(n,m){
    let divisibleNo = ""
    let nonDivisibleNo = ""
    for(let i = 1; i<= n; i++){
        if(i%m==0) divisibleNo+=i+" "
        else nonDivisibleNo+=i+ " " 
    }

    console.log("Divisible by "+m+":",divisibleNo)
    console.log("Not divisible by "+m+":",nonDivisibleNo)
}
printDivisibleAndNot(20,6)

console.log("---- ---- ----")
console.log("1.3")
console.log("---- ---- ----")

function printDivisibleNumbersBetween(p,n,m){
    if(p<n && n<m){
        for(let i = n; i<=m; i++){
            if(i%p == 0) console.log(i)
        }
    }
}
printDivisibleNumbersBetween(3,5,15)