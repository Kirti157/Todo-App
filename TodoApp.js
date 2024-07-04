
 

let h1 = document.querySelector("h1");
let input = document.querySelector("input");
let btn = document.querySelector("button");
let ol = document.querySelector("ol");
let li = document.querySelector("li");


btn.addEventListener("click",function(){

  let task = document.createElement("li");
  task.innerText = input.value+"  ";


let delbtn = document.createElement("button");
delbtn.innerText = "Done";
delbtn.classList.add("Delete");
task.appendChild(delbtn);
ol.appendChild(task);
input.value = "";
});
ol.addEventListener("click",function(event){
  if(event.target.nodeName=="BUTTON"){
    let par = event.target.parentElement;
    par.remove();
    console.log("deleted");
  }
})

/* let delbtns = document.querySelectorAll(".Delete");
for(delbtn of delbtns){
    delbtn.addEventListener("click",function(){
       let par = this.parentElement;
       console.log(par);
       par.remove();
    });  
} */
