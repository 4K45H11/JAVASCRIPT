console.log("A5.3_HW2")
console.log("---- ---- ----")

console.log("1.1")
console.log("---- ---- ----")

function uptoNdivByM(n,m){

    let pattern  = ""
    for(let i = 1; i<=n; i++){
        pattern+=i
        if(i%m == 0 && i!=n) pattern+="%"
    }
    console.log(pattern)
}
uptoNdivByM(20,5)
console.log("---- ---- ----")

console.log("1.2")
console.log("---- ---- ----")

function diviSibleByFive(n,m){
    let div_m = ""
    let notDiv_m = ""
    for(let i = 1; i<=n; i++){
        if(i%m == 0) div_m+=i+" "
        else notDiv_m+=i+" "
    }
    console.log("Divisible by "+m+":",div_m+"\n")
    console.log("Not divisible by "+m+":",notDiv_m)
}
diviSibleByFive(30,5)
console.log("---- ---- ----")

console.log("1.3")
function evenNoBetween(p,n,m){
    if(p>n && n<m){
        for(let i = p; i<=m; i++){
            if(i%2 == 0) console.log(i)
        }
    }
}
evenNoBetween(8,5,15)