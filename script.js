const button=document.querySelector("button");//entire body selection
const body=document.querySelector("body");
const color=["orang","red","brown","yellow","white","green","pink","brown"];
document.addEventListener('click',function(){
    body.style.backgroundColor=color[Math.floor(Math.random()*color.length)];
})
