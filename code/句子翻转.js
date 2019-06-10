let hello = "Hello world I'm HanChao";
let done = hello.split(" ").map((i)=>{
    return i.split("").reverse().join("");
}).join(" ");
console.log(done);

function reverse(str) {
    let done = str.split(" ").map((i)=>{
        return i.split("").reverse().join("");
    }).join(" ");
    return done;
}

module.exports = reverse;