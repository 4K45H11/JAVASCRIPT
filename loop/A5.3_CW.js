console.log("A5.3_CW")
console.log("---- ---- ----")

console.log("1.1")
console.log("---- ---- ----")

function printNumberPattern(n,m){
    let output = ""
    for(let i = 1; i<=m; i++){
        output+=i
        if(i%n == 0 && i!=m) output += "#"
    }
    console.log(output)
}
printNumberPattern(3,9)
console.log("---- ---- ----")

console.log("1.2")
console.log("---- ---- ----")

function printDivisibleAndNot(n,m){
    let divisibleNo = ""
    let nonDivisibleNo = ""
    for(let i = 1; i<= m; i++){
        if(i%n==0) divisibleNo+=i+" "
        else nonDivisibleNo+=i+ " " 
    }

    console.log("Divisible by "+n+":",divisibleNo)
    console.log("Not divisible by "+n+":",nonDivisibleNo)
}
printDivisibleAndNot(3,10)

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
printDivisibleNumbersBetween(2,3,9)