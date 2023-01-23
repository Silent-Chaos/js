let lap=document.getElementById("count")
console.log(lap)
let saveel=document.getElementById("save-el")
console.log(saveel)


let Count=0
function countlap(){
    Count+=1
    lap.textContent=Count
}
function save(){
    let saveCount=Count + " - "
    saveel.textContent+= saveCount
    Count=0
    lap.textContent=Count
}
