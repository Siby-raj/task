let str = "ABCDDAEFG"
let pattern = "CDD"
let q=101
let pathash = Math.floor(gethash(pattern)/q);
let length = pattern.length;
for(let i=0;i<str.length;i++)
{
    let window = str.substring(i,i+length);
    let winhash = Math.floor(gethash(window)/q);
    if(winhash === pathash && window === pattern)
    {
        console.log("Pattern found at index:", i);
    }
}
function gethash(str)
{
    let hash = 0;
    for (let char of str) {
        // console.log(char.charCodeAt(0)-67+1);
        hash += char.charCodeAt(0) ;
    }
    return hash;
}