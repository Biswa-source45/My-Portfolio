let menu=document.querySelector("#menu-icon")
let navbar_section=document.querySelector(".navbar")
let count=0

menu.addEventListener("click",()=>{
    if(count==0){
         navbar_section.style.visibility="visible"
         count=1
    }
    else{
        navbar_section.style.visibility="hidden"
        count=0
    }
})