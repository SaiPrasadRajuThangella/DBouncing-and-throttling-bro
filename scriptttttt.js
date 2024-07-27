const grandparent = document.getElementById("grandparent")
const parent = document.getElementById("parent")
const child = document.getElementById("child")

// grandparent.addEventListener("click",()=>{
//     console.log("grandparent")
// },false)
// parent.addEventListener("click",()=>{
//     console.log("parent")
// },false)
// child.addEventListener("click",()=>{
//     console.log("child")
// },false)

grandparent.addEventListener("click",(event)=>{
   
    console.log("grandparent")
},false)
parent.addEventListener("click",()=>{
    event.stopPropagation()
    console.log("parent")
},false)
child.addEventListener("click",(event)=>{
    console.log("child")
    // event.f()
    // event.stopPropagation()
},false)


